import { Grid } from "@mui/material";
import ReactDOM from "react-dom";
import { Account, Common } from ".";
import { HttpService as Http, LoadingService as Loading, UserService } from "../services";

const firstWrapper = 'first-wrapper';
const secondWrapper = 'second-wrapper';
const bannerWrapper = 'banner-wrapper';

const HomeGrid = () => ( 
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <div id={firstWrapper} className="cssp-panel"></div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <div id={bannerWrapper} className="cssp-panel d-none d-md-block"></div>
        </Grid>
    </Grid>);

export const Home = {
    init: () => {
        Home.renderGrid();
        Common.checkCurrentBillHeaderIsPaid();
        Home.initModals();
    },
    renderGrid: async () => {
        ReactDOM.render(<HomeGrid />, document.getElementById('grid-wrapper'));

        const firstPanel = document.getElementById('first-panel')!;
        const bannerPanel = document.getElementById('banner-panel')!;

        document.getElementById(firstWrapper)?.insertAdjacentElement('afterbegin', firstPanel);
        document.getElementById(bannerWrapper)?.insertAdjacentElement('afterbegin', bannerPanel);
    },
    initModals: () => {
        Common.loadBankIframe("home");
    },
    getBillStatement: async (event: Event, apiURL: string, blobServer: string, key: string , blobPath?: string) => {
        Loading.show();
        const fileLocation = `${blobPath}`;
        const response = await Http.postForPDF(apiURL,
        {
            "blobServer" : blobServer,
            "blobURL": fileLocation
        },
        {
            'Ocp-Apim-Subscription-Key': key,
            'Ocp-Apim-Trace': 'true'
        },
        false,
        true) as any;

        if ((response as any).status === 404){
            Loading.hide();
            $('#statement-modal-footer').show();
        } else {
            $('#statement-modal-footer').hide();
            var newBlob = new Blob([response.body], {type: "application/octetstream"})

            const fileName = blobPath?.substring(12);

            const data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            link.download = fileName || (new Date()).toString();
            link.target = '_blank';
            link.click();
            setTimeout(function(){
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
            }, 100);
            Loading.hide();
        }
    },
}