import { Account, Common } from ".";
import { HttpService as Http, LoadingService as Loading, UserService } from "../services";

export const Payments = {
    paymentOptionsBankDictionary: {
        'sxp_account' : 'cssp-payment-account',
        'sxp_account_name' : 'cssp-payment-accountname',
        'sxp_account_entityname' : 'cssp-payment_entityname',
        'sxp_bankaccountiden' : 'cssp-payment-bankiden',
        'sxp_bankaccountnumber' : 'cssp-payment-accountnumber',
        'sxp_routingnumber' : 'cssp-payment-routingnumber',
        select: {
            'sxp_defaultbankaccount' : 'cssp-payment-defaultaccount',
            'sxp_routingnumbertype' : 'cssp-payment-routingnumbertype',
        }
    } as any,
    
    paymentOptionsCardDictionary: {
        'cssp_paymentmethod': '',
        'cssp_paymentmethodtoken': '',
    } as any,
    
    paymentOptionsBankServiceLocation: {
        'cssp_bankaccountnumber': 'cssp-payment-accountnumber',
        'cssp_institutionnumber': 'cssp-payment-bankiden',
        'cssp_transitnumber': 'cssp-payment-routingnumber',
    } as any,

    init: () => {
        Payments.renderTabs();
        Common.checkCurrentBillHeaderIsPaid();
        Payments.initModals();
    },
    renderTabs: async () => {
        const tabs = document.querySelectorAll('.cssp-tab');
        const headers = document.querySelectorAll('.cssp-tab-header');

        if (tabs) {
            Array.from(tabs).slice(1).forEach(x => x.classList.add('d-none'));
        }
        if (headers && headers.length > 0) {
            Array.from(headers).forEach(x => x.addEventListener('click', (ev: Event) => Payments.setTab(ev)));
            headers[0].classList.add('cssp-active-tab');
        }
    },
    initModals: () => {
        Common.loadBankIframe("payments");
    },
    setTab: (ev: Event) => {
        const tabHeader = ev.target as HTMLElement;
        if (!tabHeader || !tabHeader.dataset || !tabHeader.dataset.tabHeaderId) return;

        Array.from(document.querySelectorAll('.cssp-tab-header')).forEach(x => x.classList.remove('cssp-active-tab'));
        tabHeader.classList.add('cssp-active-tab');

        const tabId = tabHeader.dataset.tabHeaderId;

        Array.from(document.querySelectorAll('.cssp-tab')).forEach(x => x.classList.add('d-none'));
        
        const tab = document.querySelector('div[data-tab-id="' + tabId + '"]')!;
        tab.classList.remove('d-none');
    },
    savePaymentOptionsCard: (event:Event) => {
        Loading.show();

        const target = event.target as HTMLElement;
        let parentRow = target as HTMLElement;

        while (true) {
            parentRow = parentRow.parentElement as HTMLElement;
            if (parentRow.tagName.toLowerCase() === 'tr') break;
        }

        //@ts-ignore
        const cardName = parentRow.querySelector('.cssp-card-name').value;
        //@ts-ignore
        const cardToken = parentRow.querySelector('.cssp-card-token').value;

        const paymentOptionsIframe = document.querySelector('#cssp-card-selection-iframe') as HTMLIFrameElement;

        // Clears out bank information
        Object.keys(Payments.paymentOptionsBankDictionary).forEach(iFrameField => {
            //@ts-ignore
            paymentOptionsIframe.contentDocument?.querySelector('#' + iFrameField)?.value = '';
        });

        //@ts-ignore
        paymentOptionsIframe.contentDocument?.querySelector('#cssp_paymentmethod')?.value = cardName;
        //@ts-ignore
        paymentOptionsIframe.contentDocument?.querySelector('#cssp_paymentmethodtoken')?.value = cardToken;
        //@ts-ignore
        paymentOptionsIframe.contentDocument?.querySelector('#UpdateButton')?.click();
        
        Common.waitForModal(paymentOptionsIframe);
    },
    savePaymentOptionsBank: (event: Event) => {
        event.preventDefault();
        Loading.show();

        const paymentOptionsIframe = document.querySelector('#cssp-card-selection-iframe') as HTMLIFrameElement;

        // Clear Card selection
        Object.keys(Payments.paymentOptionsCardDictionary).forEach(iFrameField => {
            //@ts-ignore
            paymentOptionsIframe.contentDocument?.querySelector('#' + iFrameField)?.value = '';
        });

        // Mark Bank Selected in Service Location - display in form
        //@ts-ignore
        paymentOptionsIframe.contentDocument?.querySelector('#cssp_paymentoptions').value = 685790002;
        Object.keys(Payments.paymentOptionsBankServiceLocation).forEach(iFrameField => {
            const parentField = Payments.paymentOptionsBankServiceLocation[iFrameField];
            //@ts-ignore
            paymentOptionsIframe.contentDocument?.querySelector('#' + iFrameField)?.value = document.querySelector('#' + parentField).value;
        });
        //@ts-ignore
        paymentOptionsIframe.contentDocument?.querySelector('#UpdateButton')?.click();


        // Now Create the new record in the bank account entity that will sync to F&O
        const paymentIframe = document.querySelector('#cssp-bank-selection-iframe') as HTMLIFrameElement;
        // set record name first
        //@ts-ignore
        paymentIframe.contentDocument?.querySelector('#sxp_name')?.value = document.querySelector('#cssp-payment-bankiden').value;

        Object.keys(Payments.paymentOptionsBankDictionary).forEach(iFrameField => {
            const parentField = Payments.paymentOptionsBankDictionary[iFrameField];

            if (iFrameField === 'select') {
                Object.keys(parentField).forEach(select => {                      
                    //const selectField = parentField[select];
                    //@ts-ignore
                    paymentIframe.contentDocument?.querySelector('#' + select)?.value = document.querySelector('#' + select).value;
                });
            }
            else {
                //@ts-ignore
                paymentIframe.contentDocument?.querySelector('#' + iFrameField)?.value = document.querySelector('#' + parentField).value;
            }
        });

        //@ts-ignore
        paymentIframe.contentDocument?.querySelector('#InsertButton')?.click();

        Common.waitForModal(paymentIframe);
    },
    // Not used at this point
    manualSelected: () => {
        Loading.show();
        const paymentOptionsIframe = document.querySelector('#cssp-card-selection-iframe') as HTMLIFrameElement;
        //@ts-ignore
        paymentOptionsIframe.contentWindow.document.querySelector('#cssp_paymentoptions').value = 685790001;
        //@ts-ignore
        paymentOptionsIframe.contentDocument?.querySelector('#UpdateButton')?.click();
        Common.waitForModal(paymentOptionsIframe);
    },
    bankSelected: () => {
        $('.cssp-easypay-picker').hide();
        $('.cssp-payment-picker').hide();
        $('.cssp-card-payment').hide();
        $('.cssp-bank-payment').show();
        $('.modal-footer.cssp-bank-footer').show();
        $('.modal-footer.cssp-card-footer').hide();
    },
    cardSelected: async () => {
        const paymentOptionsIframe = document.querySelector('#cssp-card-selection-iframe') as HTMLIFrameElement;
        //@ts-ignore
        paymentOptionsIframe.contentWindow.document.querySelector('#cssp_paymentoptions').value = 685790000;
        const userDetails = UserService.getUserDetails();
        const apiKey = userDetails['api-key'];
        const serviceUrl = userDetails['service-url'];

        if (!apiKey || !serviceUrl) {
            alert('Essential config records not created');
            return;
        }
        Loading.show();
        let responseText = await Http.get(serviceUrl + '/token/customer/' + userDetails.id, "application/json; charset=utf-8", null, { 'X-API-KEY': apiKey });
        let response = responseText ? JSON.parse(responseText) : {};
        const chosenCard = document.querySelector("#pmt-method-field") as HTMLDivElement;
        if (response.tokens && response.tokens.length > 0) {
            //@ts-ignore
            document.querySelector('#cssp-cards-wrapper')?.innerHTML = `
            <div class="row mt-3" id="card-title">
                <div class="col-12">
                    Choose your preferred payment method
                </div>
            </div>
            <table class="table table-responsive" id="cardTable">
                <tbody>
                ${response.tokens.map((x: any) => `
                    <tr>
                        <td>
                            ${x.cardType}
                            <input type="hidden" value="${x.cardType} - ${x.cardNumberSecured}" class="cssp-card-name"></input>
                            <input type="hidden" id="cardNumber" value="${x.id}" class="cssp-card-token"></input>
                        </td>
                        <td id="securedNumber">${x.cardNumberSecured}</td>
                        <td class="text-right">
                            ${chosenCard ? 
                                x.cardNumberSecured.substring(0,6) === chosenCard.innerText.substring(chosenCard.innerText.indexOf("- ")+2,chosenCard.innerText.indexOf("*")) 
                                    ? '<span class="cssp-check-icon"><check-icon></check-icon></span>' 
                                    : '<button type="button" class="btn btn-outlined" onclick="CSSP.Account.savePaymentOptionsCard(event)">Set as main</button>' 
                                : '<button type="button" class="btn btn-outlined" onclick="CSSP.Account.savePaymentOptionsCard(event)">Set as main</button>' 
                            }
                            <span class="ml-3 cssp-delete-icon" onclick="CSSP.Account.removeCard(event)">
                                <delete-icon></delete-icon>
                            </span>
                        </td>
                    </tr>
                `).join('')}
                </tbody>
            </table>
            `;
        }
        else {
            //@ts-ignore
            document.querySelector('#cssp-cards-wrapper')?.innerHTML = `
            <div class="row">
                <div class="col-12">
                    You have no cards on file for payment.
                </div>
            </div>
            `;
        }
        //@ts-ignore
        document.querySelector('#cssp-addcard-wrapper')?.innerHTML = `
            <div class="row">
                <div class="col-12">
                    <button type="button" class="btn btn-outlined" onclick="CSSP.Common.addCard()">
                        Add card to file
                    </button>
                </div>
            </div>
        `;

        document.querySelector('#cssp-payment-methods-loading')?.classList.add('d-none');
        document.querySelector('#cssp-cards-wrapper')?.classList.remove('d-none');
        //@ts-ignore
        document.querySelector('#card-selection').style.display = 'flex';
        //@ts-ignore
        document.querySelector('#confirmation-message').style.display = 'none';
        // $('#card-title').show();

        Loading.hide();

        $('.cssp-easypay-picker').hide();
        $('.cssp-payment-picker').hide();
        $('.cssp-bank-payment').hide();
        $('.cssp-card-payment').show();
        $('.modal-footer.cssp-card-footer').show();
        $('.modal-footer.cssp-bank-footer').hide();
        $('.modal-footer.cssp-confirm-message-footer').hide();
    },
    removeCard: async (event: Event) => {
        event.preventDefault();
        
        const userDetails = UserService.getUserDetails();
        const apiKey = userDetails['api-key'];
        const serviceUrl = userDetails['service-url'];
        const uiUrl = userDetails['ui-url'];

        if (!apiKey || !serviceUrl || !uiUrl) {
            alert('Essential config records not created');
            return;
        }

        Loading.show();

        const target = event.target as HTMLElement;
        let parentRow = target as HTMLElement;

        while (true) {
            parentRow = parentRow.parentElement as HTMLElement;
            if (parentRow.tagName.toLowerCase() === 'tr') break;
        }
        
        //@ts-ignore
        const cardToken = parentRow.querySelector('.cssp-card-token').value;

        await Http.delete(serviceUrl + `/token/delete?customerId=${userDetails['id']}&tokenId=${cardToken}`, { 'X-API-KEY': apiKey });

        window.location.reload();
    },
}