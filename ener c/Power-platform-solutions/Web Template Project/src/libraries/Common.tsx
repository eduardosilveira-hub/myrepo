import { Components, Payments } from ".";
import { UserService, HttpService as Http, LoadingService as Loading } from "../services";
import { Home } from ".";

const routes = [
    { route: '/home', link: 'Home' },
    { route: '/payments', link: 'Payments' },
    { route: '/account', link: 'Account' }
]

export const Common = {
    initialLoad: () => {
        Components.init();
        // Navigation security
        const path = location.pathname.replace(/\/$/g, '');
        if (!UserService.isSignedIn()) {
            UserService.signIn();
            return;
        }
        // No landing page - redirect to Home
        if (UserService.isSignedIn() && !path) {
            const parameters = window.location.search;
            if(parameters) location.href = '/home/' + parameters;
            else location.href = '/home';
            return;
        }
        const current = routes.find(x => x.route === path);
        if (current) {
            if (current.route === '/home') {
                // Sets Home Page title
                const title = document.querySelector('.cssp-page-title') as HTMLHeadElement;
                const details = UserService.getUserDetails();
                title.innerText = details.fullname ? `Welcome, ${details.account.name}!` : 'Welcome!';
            }


            // MD Header Navigation link
            let navigationLink =
                Array.from(document.querySelectorAll('.cssp-navbar .cssp-navigation-link'))
                    .find((x: any) => x.innerText === current.link);

            if (navigationLink) navigationLink.classList.add('cssp-active-tab');

            // SM Header Navigation link
            navigationLink =
                Array.from(document.querySelectorAll('.navbar .nav-item'))
                    .find((x: any) => x.innerText === current.link);

            if (navigationLink) navigationLink.classList.add('active');

            //@ts-ignore
            const lib = CSSP[current.link];

            if (lib) lib.init();
            const logo = UserService.getLogo();
            if (logo) {
                const logoImgs = document.querySelectorAll('.cssp-logo img');
                //@ts-ignore
                // logoImgs.forEach(x => x.src = 'data:image/png;base64,' + logo);
                logoImgs.forEach(x => x.src = logo);
            }

            // Shows the body
            const body = document.querySelector('body') as HTMLBodyElement;
            body.style.display = 'block';
        }
    },
    signIn: (event: Event) => {
        event.preventDefault();
        UserService.signIn();
    },
    getTransactionId: async(apiKey: string, serviceUrl: string, uiUrl: string, userDetails: any) => {
        if (!apiKey || !serviceUrl || !uiUrl) {
            alert('Essential config records not created');
            return;
        }

        const billHeaderId = userDetails['bill-header'] ? userDetails['bill-header'].id : "" + Date.now();
        let transactionId = '';

        let responseText = await Http.get(serviceUrl + '/transaction/invoice/' + billHeaderId, "application/json; charset=utf-8", null, { 'X-API-KEY': apiKey });
        let response = responseText ? JSON.parse(responseText) : {};

        if (response.id) {
            transactionId = response.id;
        }
        else {
            responseText = await Http.post(serviceUrl + '/transaction/create',
                {
                    "orderId": billHeaderId,
                    "invoiceId": billHeaderId,
                    "amount": userDetails['bill-header'] ? parseFloat(userDetails['bill-header'].amount) : 0,
                    "title": "My-Test-" + Date.now(),
                    "customerId": userDetails['id'],
                    "customerFirstName": userDetails['firstname'],
                    "customerLastName": userDetails['lastname'],
                    "customerEmail": userDetails['email'],
                    "customerPhone": userDetails['phone']
                }, { 'X-API-KEY': apiKey }) as any;
            response = JSON.parse(responseText);

            if (response.isSuccess) {
                transactionId = response.transaction.id;
            }
            else {
                alert('An error occurred:\n' + response.message);
                Loading.hide();
                return;
            }
        }
        return transactionId;
    },
    payNow: async () => {
        Loading.show();
        const userDetails = UserService.getUserDetails();
        const apiKey = userDetails['api-key'];
        const serviceUrl = userDetails['service-url'];
        const uiUrl = userDetails['ui-url'];

        const transactionId = await Common.getTransactionId(apiKey, serviceUrl, uiUrl, userDetails);

        Loading.hide();

        const windowHandler = window.open(uiUrl + '/transaction/' + transactionId)!;

        const interval = setInterval(() => {
            if (windowHandler.closed) {
                Loading.show();
                clearInterval(interval);
                window.location.reload();
            }
        }, 100);

    },
    addCard: async () => {
        Loading.show();
        const userDetails = UserService.getUserDetails();
        const apiKey = userDetails['api-key'];
        const serviceUrl = userDetails['service-url'];
        const uiUrl = userDetails['ui-url'];

        if (!uiUrl) {
            alert('Essential config records not created');
            return;
        }
        
        const transactionId = await Common.getTransactionId(apiKey, serviceUrl, uiUrl, userDetails);

        const addURL = uiUrl + '/createtoken/customer/' + userDetails.id;

        //const windowHandler = window.open(addURL)!;
        const rmiFrame = document.querySelector("#iframeModalWindow") as HTMLIFrameElement;
        rmiFrame.src = addURL;

        Loading.hide();
        //@ts-ignore
        $('#rm-Modal').modal({ backdrop: 'static', keyboard: false, }).show();

    },
    checkCurrentBillHeaderIsPaid: async () => {
        const userDetails = UserService.getUserDetails();
        const apiKey = userDetails['api-key'];
        const serviceUrl = userDetails['service-url'];

        if (!apiKey || !serviceUrl) {
            alert('Essential config records not created');
            return;
        }

        const billHeaderId = userDetails['bill-header'] ? userDetails['bill-header'].id : "" + Date.now();

        let responseText = await Http.get(serviceUrl + '/transaction/invoice/' + billHeaderId, "application/json; charset=utf-8", null, { 'X-API-KEY': apiKey });
        let response = responseText ? JSON.parse(responseText) : {};

        if (response.status && response.status === 'Paid') {
            document.querySelector('#cssp-paid-label')?.classList.remove('d-none');
        }
        else {
            document.querySelector('#cssp-paid-paynow-btn')?.classList.remove('d-none');
        }
    },
    openBillHeaderDetail: async (event: Event, id?: string) => {
        event.preventDefault();
        if (!id) {
            const userDetails = UserService.getUserDetails();
            if (!userDetails || !userDetails['bill-header']) return;
            id = userDetails['bill-header']['id'];
        }

        Loading.show();

        const modal = await Http.get('/api?template=BillHeaderDetailModal&billheaderid=' + id, "application/json; charset=utf-8")
        const body = document.querySelector('.cssp-page') as HTMLElement;
        
        body.insertAdjacentHTML('afterbegin', modal);

        //@ts-ignore
        $('#cssp-bill-header-modal').modal('show');

        // const attachments = document.querySelector('#cssp-billheader-file') as HTMLIFrameElement;
        // modal.append(attachments);

        // CUSTOM AZUREBLOB FILE DOWNLOAD
        const location = window.location.host;
        const getConfigURL = `https://${location}/_api/sxp_configurations?$select=sxp_entity,sxp_programtype,sxp_value&$filter=contains(sxp_name,'blob')`
        try {
            Http.get(getConfigURL, "application/json", null, null)
            .then(res => {
                const response = JSON.parse(res);
                const configs = response.value[0];
    
                const modalBill = document.querySelector('#cssp-bill-header-modal') as HTMLIFrameElement;
                const downloadIcon = modalBill.querySelector('#downloadFile') as HTMLDivElement;
                Loading.hide();
                downloadIcon.addEventListener('click', (ev) => {
                    Home.getBillStatement(
                        ev,
                        configs.sxp_entity,
                        configs.sxp_programtype,
                        configs.sxp_value,
                        //@ts-ignore
                        downloadIcon.attributes.note.value)
                });
            });
        }
        catch(err) {
            Loading.hide();
            alert("Error loading file reference. Please contact support.");
        }

        // END CUSTOM AZUREBLOB FILE DOWNLOAD
    },
    closeBillHeaderDetail: () => {
        const id = 'cssp-bill-header-modal';

        const modal = document.querySelector('#' + id) as HTMLDivElement;
        if (!modal) return;

        //@ts-ignore
        $('#' + id).modal('hide');
        modal.remove();
    },
    updatePaymentOptions: (event: Event) => {
        event.preventDefault();
        $('.cssp-easypay-picker').show();
        $('.cssp-payment-picker').hide();

        //@ts-ignore
        $('#payment-modal').modal({ backdrop: 'static', keyboard: false, }).show();
    },
    resetPaymentMethod: (close = false) => {
        $('.cssp-easypay-picker').show();
        $('.cssp-payment-picker').show();
        $('.cssp-card-payment').hide();
        $('.cssp-bank-payment').hide();
        $('.modal-footer.cssp-confirm-message-footer').hide();
        $('.modal-footer.cssp-bank-footer').hide();
        $('.modal-footer.cssp-card-footer').hide();
        // $('#card-title').show();

        if (close) {
            //@ts-ignore
            $('#payment-modal').modal('hide');
        }
    },
    loadBankIframe: (page: string) => {
        const bankIframe = document.querySelector('#cssp-bank-selection-iframe') as HTMLIFrameElement;
        //@ts-ignore
        if (page === "account" || page === "home"){
            bankIframe.contentWindow?.addEventListener('load', (ev) => {
                Common.addBankEvent();
            });   
        }
        else Common.addBankEvent();
        // End New
    },
    addBankEvent: () => {
        const bankIframe = document.querySelector('#cssp-bank-selection-iframe') as HTMLIFrameElement;
        Object.keys(Payments.paymentOptionsBankDictionary).forEach(iFrameField => {
            let parentField = Payments.paymentOptionsBankDictionary[iFrameField];

            if (iFrameField === 'select') {
                Object.keys(parentField).forEach(select => {    
                    let methodSelect = bankIframe.contentDocument?.querySelector('#' + select) as HTMLSelectElement;
                    let selectWrapper = document.querySelector('.cssp-'+ select) as HTMLDivElement;
                    selectWrapper.innerHTML = methodSelect.outerHTML;
                });
            }
        });
    },
    async waitForModal(iframe: HTMLIFrameElement) {

        return new Promise((res, rej) => {
            const interval = setInterval(() => {
                const success = iframe.contentDocument?.querySelector('.alert.alert-success');
                const danger = iframe.contentDocument?.querySelector('.alert.alert-danger');
                if (!success && !danger) return;
                clearInterval(interval);
                window.location.reload();
            }, 100);
        });
    }
}