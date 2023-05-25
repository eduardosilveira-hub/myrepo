import { Grid } from "@mui/material";
import ReactDOM from "react-dom";
import { Common } from ".";
import { HttpService as Http, LoadingService as Loading, UserService } from "../services";

const firstWrapper = 'first-wrapper';
const secondWrapper = 'second-wrapper';

const AccountGrid = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4}>
            <div id={firstWrapper} className="cssp-panel"></div>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
            <div id={secondWrapper} className="cssp-panel"></div>
        </Grid>
    </Grid>);

const profileDictionary = {
    'name': 'cssp-profile-name',
    'address2_composite_line1': 'cssp-contact-line1-input',
    // 'address1_composite_line2': 'cssp-contact-line2-input',
    'address2_composite_city': 'cssp-contact-city-input',
    'address2_composite_stateorprovince': 'cssp-contact-state-input',
    'address2_composite_postalcode': 'cssp-contact-zip-input',
    'address2_composite_country': 'cssp-contact-country-input',
    'telephone1': 'cssp-profile-phone',
    'emailaddress1': 'cssp-profile-email',
} as any;

const billingOptionsDictionary = {
    'cssp_billdeliverymethod': 'cssp_billdeliverymethod',
    radio: {
        'cssp_billnotificationbyemail_1': 'cssp-notification-email',
        'cssp_billnotificationbytext_1': 'cssp-notification-text',
        'cssp_billnotificationbymail_1': 'cssp-notification-mail',
        'cssp_isprimary_1': 'cssp-isprimary',
    }
} as any;

export const Account = {
    init: () => {
        Account.renderGrid();
        Account.initModals();

    },
    renderGrid: async () => {
        ReactDOM.render(<AccountGrid />, document.getElementById('account-grid-wrapper'));

        const firstPanel = document.getElementById('first-panel')!;
        const secondPanel = document.getElementById('second-panel')!;

        document.getElementById(firstWrapper)?.insertAdjacentElement('afterbegin', firstPanel);
        document.getElementById(secondWrapper)?.insertAdjacentElement('afterbegin', secondPanel);
    },
    initModals: () => {
        debugger;
        Common.loadBankIframe("account");

        const profileIframe = document.querySelector('#cssp-profile-iframe') as HTMLIFrameElement;
        profileIframe.contentWindow?.addEventListener('load', (ev) => {
            Object.keys(profileDictionary).forEach(iFrameField => {
                const parentField = profileDictionary[iFrameField];
                //@ts-ignore
                document.querySelector('#' + parentField).value = profileIframe.contentDocument?.querySelector('#' + iFrameField)?.value;
            });
        });
        
        const billingOptionsIframe = document.querySelector('#cssp-billing-options-iframe') as HTMLIFrameElement;

        billingOptionsIframe.contentWindow?.addEventListener('load', (ev) => {
            const workingDoc = ev.target as Document;
            let methodSelect = workingDoc.querySelector('#cssp_billdeliverymethod') as HTMLSelectElement;
            let selectWrapper = document.querySelector('.cssp-delivery-method-wrapper') as HTMLDivElement;

            selectWrapper.innerHTML = methodSelect.outerHTML;

            Object.keys(billingOptionsDictionary).forEach(iFrameField => {
                const parentField = billingOptionsDictionary[iFrameField];
                if (iFrameField === 'radio') {
                    Object.keys(parentField).forEach(radio => {
                        const radioField = parentField[radio];
                        //@ts-ignore
                        document.querySelector('#' + radioField).checked = billingOptionsIframe.contentDocument?.querySelector('#' + radio)?.checked;
                    });
                    return;
                }
            });
        });
    },
    billingCycleChange: () => {
        $('#billingCycleChange-message').hide();
    },
    updateProfile: (event: Event) => {
        event.preventDefault();

        const profileIframe = document.querySelector('#cssp-profile-iframe') as HTMLIFrameElement;
        Object.keys(profileDictionary).forEach(iFrameField => {
            const parentField = profileDictionary[iFrameField];
            //@ts-ignore
            document.querySelector('#' + parentField).value = profileIframe.contentDocument?.querySelector('#' + iFrameField)?.value;
        });

        //@ts-ignore
        $('#profile-modal').modal('show');
    },
    changePassword: () => {
        Loading.show();

        const host = window.location.host;
        const getChgPwdConfigURL = `https://${host}/_api/sxp_configurations?$select=sxp_value&$filter=contains(sxp_name,'chgpwd')`
        Http.get(getChgPwdConfigURL, "application/json", null, null)
        .then(res => {
            const response = JSON.parse(res);
            window.location.href = response.value[0].sxp_value;
        })
        .catch(err => {
            alert("Error loading change password page. Please contact the support team.");
        });
    },
    saveProfile: (event: Event) => {
        event.preventDefault();
        Loading.show();
        const profileIframe = document.querySelector('#cssp-profile-iframe') as HTMLIFrameElement;
        Object.keys(profileDictionary).forEach(iFrameField => {
            const parentField = profileDictionary[iFrameField];
            //@ts-ignore
            profileIframe.contentDocument?.querySelector('#' + iFrameField)?.value = document.querySelector('#' + parentField).value;
        });
        //@ts-ignore
        profileIframe.contentDocument?.querySelector('#UpdateButton')?.click();
        Common.waitForModal(profileIframe);
    },
    updateLocationOptions: (event: Event) => {
        event.preventDefault();

        let methodSelect = document.querySelector('#cssp_billdeliverymethod') as HTMLSelectElement;
        let selectWrapper = document.querySelector('.cssp-delivery-method-wrapper') as HTMLDivElement;

        selectWrapper.innerHTML = methodSelect.outerHTML;

        const billingOptionsIframe = document.querySelector('#cssp-billing-options-iframe') as HTMLIFrameElement;
        Object.keys(billingOptionsDictionary).forEach(iFrameField => {
            const parentField = billingOptionsDictionary[iFrameField];

            if (iFrameField === 'radio') {
                Object.keys(parentField).forEach(radio => {
                    const radioField = parentField[radio];
                    //@ts-ignore
                    if (billingOptionsIframe.contentDocument?.querySelector('#' + radio)?.checked & radio.includes('primary_1')){
                        //@ts-ignore
                        document.querySelector('#' + radioField).checked = billingOptionsIframe.contentDocument?.querySelector('#' + radio)?.checked;
                        //@ts-ignore
                        document.querySelector('#' + radioField).disabled = true;
                    }
                    else{
                        //@ts-ignore
                        document.querySelector('#' + radioField).checked = billingOptionsIframe.contentDocument?.querySelector('#' + radio)?.checked;
                    }
                });
                return;
            }
        });

        //@ts-ignore
        $('#billing-modal').modal('show');
    },
    saveBillingOptions: (event: Event) => {
        event.preventDefault();
        Loading.show();
        const billingOptionsIframe = document.querySelector('#cssp-billing-options-iframe') as HTMLIFrameElement;
        
        Object.keys(billingOptionsDictionary).forEach(iFrameField => {
            const parentField = billingOptionsDictionary[iFrameField];

            if (iFrameField === 'radio') {
                Object.keys(parentField).forEach(radio => {
                    const radioField = parentField[radio];

                    //@ts-ignore
                    billingOptionsIframe.contentDocument?.querySelector('#' + radio)?.checked = document.querySelector('#' + radioField).checked;
                });
                return;
            }

            //@ts-ignore
            billingOptionsIframe.contentDocument?.querySelector('#' + iFrameField)?.value = document.querySelector('#' + parentField).value;
        });
        //@ts-ignore
        billingOptionsIframe.contentDocument?.querySelector('#UpdateButton')?.click();
        Common.waitForModal(billingOptionsIframe);
    },
    showConfirmation: (event: Event) => {
        event.preventDefault();
        //@ts-ignore
        document.querySelector('#confirmation-message').style.display = 'flex';
        //@ts-ignore
        document.querySelector('#confirmation-message').style.paddingBottom = '10px';
        $('.modal-footer.cssp-confirm-message-footer').show();
        $('.modal-footer.cssp-bank-footer').hide();
        $('.modal-footer.cssp-card-footer').hide();
        // $('#card-title').hide();
        $('#card-selection').hide();        
    },
    validateNotificationSelected: (event: Event) => {
        const billingModal = document.querySelector('#billing-modal') as HTMLIFrameElement;

        //@ts-ignore
        const email = billingModal.querySelector('#cssp-notification-email')?.checked;
        //@ts-ignore
        const text = billingModal.querySelector('#cssp-notification-text')?.checked;
        //@ts-ignore
        const mail = billingModal.querySelector('#cssp-notification-mail')?.checked;
        //@ts-ignore
        const errorMessage = billingModal.querySelector('#error-message');
        
        if (!email && !text && !mail){
            //@ts-ignore
            billingModal.querySelector('#SaveBillingOptions').disabled = true;
            //@ts-ignore
            errorMessage.classList.remove('d-none');
        }
        else{
            //@ts-ignore
            billingModal.querySelector('#SaveBillingOptions').disabled = false;
            //@ts-ignore
            errorMessage.classList.add('d-none');
        }
    },
}