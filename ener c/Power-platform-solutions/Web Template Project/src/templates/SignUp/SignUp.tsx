import ReactDOM from "react-dom";
import React from "react";

import './SignUp.scss';
import "regenerator-runtime/runtime";

import { DefaultTemplate } from "../../components";
import { HttpService as Http, TemplatesService as Template, LoadingService as Loading } from "../../services";

const apiPlaceholderId = 'api-placeholder';
const cloneContinueBtnId = 'continue-clone';

const urlsConfig = {
    'secusprtdev.b2clogin.com': {
        url: 'https://apim-eu2-eapi-infra-dev.azure-api.net/manual/paths/invoke',
        key: 'c7968cc21ce6465893cdc33c84c11f69'
    },
    'secusprtsbx.b2clogin.com': {
        url: 'https://apim-eu2-eapi-infra-sbx.azure-api.net/manual/paths/invoke',
        key: '4993a20b3f2f40c091ec6bcfad5bd178'
    },
    'secusprtuat.b2clogin.com': {
        url: 'https://apim-eu2-eapi-infra-uat.azure-api.net/manual/paths/invoke',
        key: '4d3c7d97f53747bf8eb3ad95dcacfd06'
    },
} as any;

export const SignUp = () => {
    return <DefaultTemplate>
        <div className="cssp-sign-up">

            <div id={apiPlaceholderId}></div>

            <div id="error-message" className="error-message"></div>
            <div className="custom-divider"></div>
            <div className="new-to-portal">
                <span>Already have an account? <a href="" onClick={(ev) => signIn(ev)}>Sign in</a></span>
            </div>
        </div>
    </DefaultTemplate>;
}

function signIn(event: React.MouseEvent) {
    event.preventDefault();
    window.history.back();
}

const container = document.querySelector('body')!;
container.insertAdjacentHTML('beforeend', `<div id="app" style="width:100%"></div>`);
ReactDOM.render(<SignUp />, container.querySelector('#app'));

Template.initialLoad(() => {
    Template.insertApiDiv(apiPlaceholderId);
    Template.removeCommon();

    const buttonWrappers = Array.from(document.querySelectorAll('.buttons'));
    const buttonWrapper = buttonWrappers[buttonWrappers.length - 1];

    buttonWrapper.insertAdjacentHTML('afterbegin', `
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="terms-checkbox" onchange="CSSP.checkedAcceptTerms(event)">
            <label class="form-check-label" for="terms-checkbox">I have read and agree to Service Expert’s <a href="#" onclick="CSSP.checkedAcceptTerms(event)">Terms and Conditions</a>.</label>
        </div>`);
        

    buttonWrapper.insertAdjacentHTML('afterbegin', `
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-lg" style="height: 700px;width: auto;">
            <div class="modal-content" style="height: 100%;">
                <div class="modal-header">
                    <h5 class="modal-title">Terms and Conditions</h5>
                </div>
                <div class="modal-body" style="overflow-y: scroll;" onscroll="CSSP.scrolled(event)">
                    ${terms}
                </div>
                <div class="modal-footer">
                    <button id="cancel-btn" type="button" class="btn btn-default" onclick="CSSP.cancel(event)">Cancel</button>
                    <button id="agree-btn" type="button" class="btn btn-primary" onclick="CSSP.agree(event)" disabled>Agree</button>
                </div>
            </div>
        </div>
    </div>`);

    const firstnameLabel = document.querySelector('#givenName_label') as HTMLLabelElement;
    const firstnameInput = document.querySelector('#givenName') as HTMLInputElement;
    firstnameLabel.innerText = firstnameInput.placeholder = 'First Name';

    const lastnameLabel = document.querySelector('#surname_label') as HTMLLabelElement;
    const lasttnameInput = document.querySelector('#surname') as HTMLInputElement;
    lastnameLabel.innerText = lasttnameInput.placeholder = 'Last Name';


    const continueBtn = document.querySelector('#continue') as HTMLButtonElement;
    continueBtn.disabled = true;

    // IF A CUSTOM CALL TO THE LOGIC APP IS EVER NEEDED

    // const clone = continueBtn.cloneNode(true) as HTMLButtonElement;
    
    // continueBtn.style.display = 'none';

    // clone.disabled = true;
    // clone.id = cloneContinueBtnId;
    // clone.type = '';
    // const errorMessage = document.querySelector('#error-message') as HTMLDivElement;
    // clone.addEventListener('click', async (ev) => {
    //     Loading.show();
    //     const location = window.location.host;
    //     const config = urlsConfig[location];

    //     try {
    //         const response = await Http.post(config.url, 
    //         {
    //             //@ts-ignore
    //             "emailAddress": document.querySelector('#email')?.value,
    //             //@ts-ignore
    //             "accountNumber": document.querySelector('#extension_AccountNumber')?.value
    //         },
    //         {
    //             'Ocp-Apim-Subscription-Key': config.key,
    //             'Ocp-Apim-Trace': 'true'
    //         },
    //         false, // withCredentials
    //         true) as any; // Force resolve

    //         if (response.status === 404) {
    //             //alert('Your email was not found');
    //             errorMessage.innerText = 'The email provided was not found in our records.';
    //             errorMessage.style.display = '';
    //             return;
    //         }

    //         if (response.status === 401) {
    //             // alert('Email or Account Nubmer do not match. Please enter valid data');
    //             errorMessage.innerText = 'Email or Account Nubmer do not match with our records.';
    //             errorMessage.style.display = '';
    //             return;
    //         }
    //         errorMessage.style.display = 'none';
    //         continueBtn.click();
    //     }
    //     catch (error) {
    //         ev.preventDefault();
    //         // alert('An error occurred, pls contact your admin');
    //         errorMessage.innerText = `An error occurred: ${error}`;
    //         errorMessage.style.display = '';
    //     }
    //     finally{
    //         Loading.hide();
    //     }
    // });

    // continueBtn.insertAdjacentElement('afterend', clone);
});

(window as any).CSSP = {
    modal: {} as any,
    checkedAcceptTerms: (ev: Event) => {
        ev.preventDefault();
        //@ts-ignore
        // document.querySelector('#' + cloneContinueBtnId).disabled = !ev.target.checked;
        document.querySelector('#continue').disabled = !ev.target.checked;

        //@ts-ignore
        if (!ev.target.checked) return;

        //@ts-ignore
        CSSP.modal = $('.modal').modal();
    },
    scrolled: (ev: Event) => {
        const myDiv = ev.target as HTMLDivElement;
        const agreeBtn = document.querySelector('#agree-btn') as HTMLButtonElement;

        if (Math.round(myDiv.offsetHeight + myDiv.scrollTop) >= Math.round(myDiv.scrollHeight)) {
            agreeBtn.disabled = false;
        }
        else {
            agreeBtn.disabled = true;
        }
    },
    cancel: (ev: Event) => {
        //@ts-ignore
        if (CSSP.modal) CSSP.modal.close();
        //@ts-ignore
        // document.querySelector('#' + cloneContinueBtnId).disabled = true;
        document.querySelector('#continue').disabled = true;
        const checkbox = document.querySelector('#terms-checkbox') as HTMLInputElement;
        if (checkbox) checkbox.checked = false;
    },
    agree: (ev: Event) => {
        //@ts-ignore
        if (CSSP.modal) CSSP.modal.close();
        const checkbox = document.querySelector('#terms-checkbox') as HTMLInputElement;
        if (checkbox) checkbox.checked = true;
    }
}



const terms = `<p>Please read these terms and conditions of use carefully as they contain the legal terms that govern your use of the Service Experts Online Account (the "Website") for customers of Service Experts Inc. and its affiliates ("Service Experts"). Access to and use of the Website are subject to Service Experts' privacy policy available at www.ServiceExperts.ca/privacy-policy.aspx and the terms and conditions set out below (collectively, the "Terms and Conditions"). If you do not agree with these Terms and Conditions, please do not use or access the Website.</p>

<p>You acknowledge that Gilmore Doculink International ("Gilmore"), a subsidiary of R.E. Gilmore Investments Corp., operates the Website as a services provider to Service Experts and has access to all data stored on or entered into the Website.</p>

<p>Service Experts reserves the right to change these Terms and Conditions from time to time. Please review the Terms and Conditions regularly for any changes that may have been made. Your continued use of the Website following the posting of any changes to the Terms and Conditions constitutes your acceptance of these changes. You acknowledge that these Terms and Conditions apply solely to the Website and not to any other websites of Service Experts, including <a href="www.ServiceExperts.ca">www.ServiceExperts.ca</a>.</p>

<p><u>Terms and Conditions</u></p>

<ol>

<li>The information contained in this Website has been prepared solely for the purpose of providing billing information related to your Service Experts customer account.</li>
<li>You have permission to download, display, print and copy the information and content of the Website solely for the purposes of viewing and maintaining records regarding your billing information. This is a grant of license, not a transfer of title. Under this license, you may not: use any Service Experts or Gilmore trademarks or the look and feel of the Website for any commercial purpose;</li>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. attempt to decompile or reverse engineer any of the software underlying the Website; or</div>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. remove any copyright, trademark or other proprietary notation from the information in the event the information is being shared with any third party.</div>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. This license shall automatically terminate if you violate any of these restrictions.</div>


<li>You agree to use the Website and any content viewed on or downloaded from this Website only for lawful purposes.</li>
<li>In order to access your information through the Website, you will have to register for a password protected personalized account (your "Account") that will display your Service Experts billing information. You are responsible for keeping your Account safe. Using a strong password and not sharing your personal information is highly encouraged. The following is a list of commitments you agree to as per your use of the Website:</li>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. You will not provide any false information when registering on the Website.</div>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. You will not open an Account for another individual without their consent.</div>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. If you lose access to your Account (for violation of these Terms and Conditions), or should we disable your Account for any other reason, you agree not to open a replacement account without our prior permission.</div>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. You will not share your password, share access to your Account, share personal information or anything else that may implicate the security of your Account.</div>

<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e. You will keep your contact information and other information provided during Account registration up-to-date.</div>

<li>The Website may be accessed through a mobile browser but may be subjected to your carrier's regular rates and data usage fees, where applicable.</li>
<li>Unless otherwise specified, this Website is directed solely at those who access this Website from Canada. Service Experts makes no representation that any product or service referred to in the materials on this Website are appropriate for use, or available, in other locations. Those who choose to access this Website from other locations are responsible for compliance with local laws, if and to the extent local laws are applicable. These Terms and Conditions shall be governed by and construed in accordance with the laws of Ontario, Canada, without giving effect to any principles of conflicts of law. You agree that any action at law or in equity arising out of or in connection with these Terms and Conditions or the Website shall be filed only in the provincial or federal courts located in Ontario, Canada and you hereby submit to the nonexclusive jurisdiction of such courts.</li>
<li>YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITES AND ANY OF THE SERVICES AND CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS AND THAT EACH OF SERVICE EXPERTS AND GILMORE, THEIR RESPECTIVE AGENTS, REPRESENTATIVES AND LICENSORS AND EACH OF THEIR RESPECTIVE AFFILIATES DOES NOT MAKE ANY, AND HEREBY DISCLAIMS ALL, REPRESENTATIONS, WARRANTIES, TERMS, CONDITIONS AND ENDORSEMENTS (COLLECTIVELY THE "WARRANTIES") OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AS TO ANY MATTER HEREUNDER, INCLUDING WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, ACCURACY, SUITABILITY, RELIABILITY, FREEDOM FROM INFECTIONS OR VIRUSES OR COMPLETENESS AS WELL AS ANY WARRANTIES ARISING BY STATUTE OR OTHERWISE IN LAW OR FROM A COURSE OF DEALING OR USAGE OF TRADE.
TO THE FULLEST EXTENT PERMITTED BY LAW, UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL SERVICE EXPERTS OR GILMORE BE LIABLE FOR ANY LOSS OF USE, LOSS OF DATA, LOSS OF INCOME OR PROFIT, LOSS OF OR DAMAGE TO PROPERTY, OR FOR ANY DAMAGES OF ANY KIND OR CHARACTER (INCLUDING WITHOUT LIMITATION ANY COMPENSATORY, INCIDENTAL, DIRECT, INDIRECT, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES), EVEN IF SERVICE EXPERTS OR GILMORE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES, ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE WEBSITE, ITS CONTENTS, OR ANY WEBSITE OR CONTENTS WITH WHICH IT IS LINKED. IN NO EVENT SHALL SERVICE EXPERTS'S TOTAL LIABILITY FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE), OR OTHERWISE, EXCEED THE AMOUNT PAID BY YOU FOR ACCESSING THIS WEBSITE.</li>

<li>Service Experts does not represent that the information contained in this Website is accurate, comprehensive, verified or complete, and shall accept no liability for the accuracy or completeness of the information contained in the Website or for any reliance placed by any person on the information.</li>
<li>Certain (hypertext) links in this Website will lead you to websites which are not under the control of Service Experts. These links are being provided to you as a convenience, and Service Experts assumes no liability for any material found through such links. Service Experts has no control over and will accept no responsibility or liability in respect of the material or privacy practices on any sites accessed through such links.</li>
<li>If any provisions of these disclaimers and exclusions shall be unlawful, void or for any reason unenforceable then that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.</li>
<li>The copyright in the material and content contained in this Website belongs to Service Experts or Gilmore and their respective licensors.</li>
</ol>`;