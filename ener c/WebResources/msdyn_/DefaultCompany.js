// JavaScript source code
function defaultCompany(FieldName) {
debugger;
    var globalContext = Xrm.Utility.getGlobalContext();
    var userId = globalContext.userSettings.userId;
    var formType = Xrm.Page.ui.getFormType();

    if (formType === 1) {//create
        Xrm.WebApi.online.retrieveRecord("systemuser", userId, "?$expand=cdm_Company($select=cdm_companyid,cdm_name)").then(
            function success(result) {
                if (result.hasOwnProperty("cdm_Company")) {
                    var cdm_Company_cdm_companyid = result["cdm_Company"]["cdm_companyid"];
                    var cdm_Company_cdm_name = result["cdm_Company"]["cdm_name"];
                    var companyLookup = new Array();
                    companyLookup[0] = new Object();
                    companyLookup[0].id = cdm_Company_cdm_companyid;
                    companyLookup[0].name = cdm_Company_cdm_name;
                    companyLookup[0].entityType = "cdm_company";
                    Xrm.Page.getAttribute(FieldName).setValue(companyLookup);
                }
            },
            function (error) {
                console.log(error.message);
            }
        );
    }

    if (formType === 2) {//update
        var companyId = Xrm.Page.getAttribute(FieldName).getValue();
        if (companyId && companyId.length > 0) {
            var company = companyId[0].id.substring(1, companyId[0].id.length - 1);
            Xrm.WebApi.online.retrieveRecord("systemuser", userId, "?$select=_cdm_company_value").then(
                function success(result) {
                    var cdm_Company_cdm_companyid = result["_cdm_company_value"];
                    if (cdm_Company_cdm_companyid && company.toLowerCase() === cdm_Company_cdm_companyid.toLowerCase()) return;
                    setUserDefaultCompany(company, userId);
                },
                function (error) {
                    console.log(error.message);
                }
            );
        }
    }
}


function updateDefaultCompany(FieldName) {

    if (Xrm.Page.getAttribute(FieldName).getIsDirty()) {
        var globalContext = Xrm.Utility.getGlobalContext();
        var userId = globalContext.userSettings.userId;
        var companyId = Xrm.Page.getAttribute(FieldName).getValue();

        if (companyId && companyId.length > 0) {
            var company = companyId[0].id.substring(1, companyId[0].id.length - 1);
            Xrm.WebApi.online.retrieveRecord("systemuser", userId, "?$select=_cdm_company_value").then(
                function success(result) {
                    var cdm_Company_cdm_companyid = result["_cdm_company_value"];
                    if (cdm_Company_cdm_companyid && company.toLowerCase() === cdm_Company_cdm_companyid.toLowerCase()) return;
                    setUserDefaultCompany(company, userId);
                },
                function (error) {
                    console.log(error.message);
                }
            );
        }
    }
}

function setUserDefaultCompany(company, userId) {

    var user = userId.substring(1, userId.length - 1);
    var entity = {};
    entity["cdm_Company@odata.bind"] = "/cdm_companies(" + company + ")";

    Xrm.WebApi.online.updateRecord("systemuser", user, entity).then(
        function success(result) {
            var updatedEntityId = result.id;
        },
        function (error) {
            console.log(error.message);
        }
    );
}

