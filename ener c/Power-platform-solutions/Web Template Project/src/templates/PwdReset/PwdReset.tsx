import ReactDOM from "react-dom";
import React from "react";

import './PwdReset.scss';

import { DefaultTemplate } from "../../components";
import { TemplatesService as Template } from "../../services";

const apiPlaceholderId = 'api-placeholder';
let stepState: [number,React.Dispatch<React.SetStateAction<number>>];

export const PwdReset = () => {
    return (
        <DefaultTemplate title="Forgot your password?">
            <div className="cssp-pwd-reset">
                <div style={{marginTop:'30px'}}>Enter your email below and we will send you a verification code to reset your password.</div>
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
}

const container = document.querySelector('body')!;
container.insertAdjacentHTML('beforeend', `<div id="app" style="width:100%"></div>`);
ReactDOM.render(<PwdReset />, container.querySelector('#app'));
Template.initialLoad(run);