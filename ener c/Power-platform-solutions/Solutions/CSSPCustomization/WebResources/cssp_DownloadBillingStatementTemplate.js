
function FetchConfigrationFiledsValue(environment) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.2/sxp_configurations?$select=sxp_entity,sxp_name,sxp_programtype,sxp_value&$filter=contains(sxp_name,'" + environment + "')", false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    var config = null;
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var result = JSON.parse(this.response);
                config = result;
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
    return config;
}

//Fetch Annotaions from Bill Statement Entity
function FetchAnnotaionsFromBillingStatement(primaryControl) {
    var executionContext = primaryControl;
    var billStatementRecordID = executionContext.data.entity.getId();
    billStatementRecordID = billStatementRecordID.replace("{", "").replace("}", "");
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.2/cssp_billheaders?$expand=cssp_billheader_Annotations($select=createdon,filename,isdocument,notetext,subject)&$filter=cssp_billheaderid eq '" + billStatementRecordID + "'&$orderby=createdon desc", false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\",odata.maxpagesize=1");
    var annotations = null;
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var results = JSON.parse(this.response);
                annotations = results;
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
    return annotations;
}

//Create a POST request to the sxp_entity (API URL) with headers
function DownloadBillingStatment(primaryControl) {
    debugger;
    Xrm.Utility.showProgressIndicator('Preparing PDF File...')
    // Get Annotation for Bill Statement
    var executionContext = primaryControl;
    var fetchAnnotations = FetchAnnotaionsFromBillingStatement(executionContext);
    var subject = "";
    if (fetchAnnotations.value.length > 0) {
        subject = fetchAnnotations.value[0]["cssp_billheader_Annotations"][0].subject;
    }
    else {
        alert("File was not found in AzureBlob");
        return;
    }

    var configartionEntity = FetchConfigrationFiledsValue('blob');
    if (configartionEntity.value.length > 0) {
        var apiURL = configartionEntity.value[0].sxp_entity;
        var body = {
            "blobServer": configartionEntity.value[0].sxp_programtype,
            "blobURL": subject
        }
        var req = new XMLHttpRequest();
        req.open("POST", apiURL, true);
        req.responseType = "blob";
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Ocp-Apim-Subscription-Key", configartionEntity.value[0].sxp_value);
        req.setRequestHeader("Ocp-Apim-Trace", "true");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        var pdfFile = null;
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var newBlob = new Blob([this.response], { type: "application/octetstream" });

                    const fileName = subject?.substring(12);

                    const data = window.URL.createObjectURL(newBlob);
                    var link = document.createElement('a');
                    link.href = data;
                    link.download = fileName || (new Date()).toString();
                    link.target = '_blank';
                    link.click();
                } else {
                    Xrm.Utility.alertDialog(this.statusText);
                }
            }
        };
        req.send(JSON.stringify(body));
    }
    Xrm.Utility.closeProgressIndicator();
}