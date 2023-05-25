import ReactDOM from "react-dom";
import React from "react";

import './ChangePwd.scss';

import { DefaultTemplate } from "../../components";
import { TemplatesService as Template } from "../../services";

const apiPlaceholderId = 'api-placeholder';

export const ChangePwd = () => {
    return (
        <DefaultTemplate title="Forgot your password?">
            <div className="cssp-change-pwd">
                <div style={{marginTop:'30px'}}>Your email address is verified. Please enter a new password for your account.</div>
                <div id={apiPlaceholderId}>

                </div>
            </div>
        </DefaultTemplate>
    );
}

function run() {
    Template.insertApiDiv(apiPlaceholderId);
    Template.removeCommon();
    Template.addClassToLabels();

    let pageTitle = document.querySelector(".cssp-page-title") as HTMLDivElement;
    pageTitle.innerText = "Change Password";

    // Template.addToClick('#continue', storeCredentials);
    Template.setTextToElement('#continue', 'Reset and login');
}

const container = document.querySelector('body')!;
container.insertAdjacentHTML('beforeend', `<div id="app" style="width:100%"></div>`);
ReactDOM.render(<ChangePwd />, container.querySelector('#app'));
Template.initialLoad(run);