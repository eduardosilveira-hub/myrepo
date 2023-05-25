import ReactDOM from "react-dom";

import './BlockPage.scss';
import "regenerator-runtime/runtime";

import { DefaultTemplate } from "../../components";
import { TemplatesService as Template } from "../../services";

const apiPlaceholderId = 'api-placeholder';

export const BlockPage = () => {
    return <DefaultTemplate title='We encountered a problem!'>
        <div className="cssp-block">
            <div id={apiPlaceholderId}>
            </div>
        </div>
    </DefaultTemplate>;
}

function run() {
    Template.insertApiDiv(apiPlaceholderId);
    Template.removeCommon();
}

const container = document.querySelector('body')!;
container.insertAdjacentHTML('beforeend', `<div id="app" style="width:100%"></div>`);
ReactDOM.render(<BlockPage />, container.querySelector('#app'));
Template.initialLoad(run);