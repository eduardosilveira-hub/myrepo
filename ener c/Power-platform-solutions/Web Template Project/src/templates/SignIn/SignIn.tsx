import ReactDOM, { findDOMNode } from "react-dom";
import React from "react";

import './SignIn.scss';
import "regenerator-runtime/runtime";

import { DefaultTemplate } from "../../components";
import { HttpService as Http, LoadingService as Loading, TemplatesService as Template } from "../../services";

const apiPlaceholderId = 'api-placeholder';

let createHref = '';
let pwdHref = '';

const urlsConfig = {
    'secusprtdev.b2clogin.com': {
        url: 'https://csspdev.powerappsportals.com'
    },
    'secusprtsbx.b2clogin.com': {
        url: 'https://csspsbx.powerappsportals.com'
    },
    'secusprtuat.b2clogin.com': {
        url: 'https://csspuat.powerappsportals.com'
    },
} as any;

export const SignIn = () => {
    return <DefaultTemplate title='Welcome!'>
        <div className="cssp-sign-in">
            <p className="cssp-title-paragraph">Please login to your account.</p>

            <div id={apiPlaceholderId}>

            </div>
            <div className="custom-divider"></div>
            <div className="forgot-password-placeholder">
                <a href="" onClick={(ev) => forgotPwd(ev)}>Forgot Password?</a>
            </div>
            <div className="new-to-portal">
                <span>New to the portal? <a href="" onClick={(ev) => register(ev)}>Register now</a></span>
            </div>
        </div>
    </DefaultTemplate>;
}

function register(event: React.MouseEvent) {
    event.preventDefault();
    if (createHref) window.location.href = createHref;
}

function forgotPwd(event: React.MouseEvent) {
    event.preventDefault();
    if (pwdHref) window.location.href = pwdHref;
}

function run() {
    const buttonWrappers = Array.from(document.querySelectorAll('.buttons'));
    const buttonWrapper = buttonWrappers[buttonWrappers.length - 1];
    buttonWrapper.insertAdjacentHTML('afterbegin', `
    <a href="#" data-toggle="modal" id="errorbutton" data-target="#errorModal" style="display: none;">&nbsp;</a>
    <div id="errorModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Attention!</h5>
                </div>
                <div class="modal-body">
                    <div id="error-message" class="error-message"></div>
                </div>
                <div class="modal-footer">
                    <button id="cancel-btn" type="button" data-dismiss="modal" class="btn btn-default">Ok</button>
                </div>
            </div>
        </div>
    </div>`);

    Loading.start();
    // Stores links
    const createLink = document.querySelector('.create a');
    if (createLink) createHref = (createLink as any).href;

    const forgotPassword = document.querySelector('#forgotPassword');
    if (forgotPassword) {
        pwdHref = (forgotPassword as any).href;
        forgotPassword.remove();
    }
    
    Template.insertApiDiv(apiPlaceholderId);
    Template.removeCommon();
    const labels = Template.addClassToLabels();

    labels[1].classList.add('second-field');

    // const nextButton = document.querySelector('#next') as HTMLButtonElement;

    // nextButton.addEventListener('click', async (ev) => {
    //     ev.preventDefault();
    //     Loading.show();
    //     try {
    //         nextButton.click();
    //     }
    //     catch(err){
    //         return;
    //     }
    //     finally
    //     {
    //         Loading.hide();
    //     }
    // });


    
    // USE THIS IN CASE WE NEED TO VALIDATE IF USER IS DEACTIVATED IN CE
    
    // //@ts-ignore
    // const errorMessage = document.querySelector('#error-message') as HTMLDivElement;
    // //@ts-ignore
    // const errorButton = document.querySelector('#errorbutton') as HTMLDivElement;

    // nextButton.addEventListener('keypress', (e) => {
    //     e.preventDefault();
    //     if (e.key === 'Enter'){
    //         console.log('enter key pressed.');
    //         nextClone.click();
    //     }        
    // });
    
    // const nextClone = nextButton.cloneNode(true) as HTMLButtonElement;

    // nextButton.style.display = 'none';

    // nextClone.id = 'next-button';
    // nextClone.type = '';
    // nextClone.classList.add('cssp-template', 'cssp-template', 'cssp-template', 'button.sendCode', 'button.verifyCode', 'button.changeClaims', 'btn-primary');

    // nextClone.addEventListener('click', async (ev) => {
    //     //@ts-ignore
    //     const email = document.querySelector('#email')?.value;
    //     //@ts-ignore
    //     const pass = document.querySelector('#password')?.value;

    //     if (!email || !pass){
    //         errorMessage.innerText = 'Please enter username and password to login.';
    //         // errorMessage.style.display = '';
    //         errorButton.click();
    //     }
    //     else {
    //         try {
    //             Loading.show();
    //             const location = window.location.host;
    //             const config = urlsConfig[location];

    //              CHANGE THIS WEB TEMPLATE IN CE TO GET THE CORRECT FIELD THAT WILL FLAG IF THE USER IS DEACTIVATED OR NOT
    //             const response = await Http.get(`${config.url}/LoginValidation/?emailaddress=` + email,"application/json",null,null) as any;
                
    //             const jsonResponse = JSON.parse(response);
                
    //             if (jsonResponse["isActive"] === "Active"){
    //                 nextButton.click();
    //             }
    //             else if (jsonResponse["isActive"] === "notfound"){
    //                 errorMessage.innerText = 'Please verify that this is the correct username. We couldn\'t find your email address.';
    //                 errorButton.click();
    //             }
    //             else {
    //                 errorMessage.innerText = 'Your account has been deactivated. Please contact support for more information.';
    //                 errorButton.click();
    //             }
    //         }
    //         catch (error) {
    //             ev.preventDefault();
    //             errorMessage.innerText = `An error occured. Please contact the support team: ${error}`;
    //             // errorMessage.style.display = '';
    //             errorButton.click();
    //         }
    //         finally{
    //             Loading.hide();
    //         }
    //     }
    //     Loading.hide();
    // });

    // nextButton.insertAdjacentElement('afterend', nextClone);
}

const container = document.querySelector('body')!;
container.insertAdjacentHTML('beforeend', `<div id="app" style="width:100%"></div>`);
ReactDOM.render(<SignIn />, container.querySelector('#app'));
Template.initialLoad(run);