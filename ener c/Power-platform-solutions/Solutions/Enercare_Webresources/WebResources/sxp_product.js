var Product;
if (Product === undefined || Product === null) {
    Product = {};
    Product = (function () {
        var EntityNames = {
            UnitGroup: "uomschedule",
            DefaultUnit: "uom",
            Company: "cdm_company"
        };
        var FieldNames = {
            UnitGroupLookup: "defaultuomscheduleid",
            DefaultUnitLookup: "defaultuomid",
            CompanyLookup: "msdyn_companyid",
            AdvantageEligible: "sxp_advantageelligible",
            Primary: "sxp_primary",
            NonStandardProduct: "sxp_generic",
            FnOItemId: "sxp_advantageid",
            Manufacturer: "sxp_manufacturer",
            ProductFamily: "sxp_shortmodel",
            PriceBookPage: "sxp_tonnage",
            ChargeOnAdvantage: "sxp_chargeonadvantage"
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on load on Product form
        var onLoad = function (executionContext) {
            updateDefaultUnitAndGroup(executionContext);
            onChangeProductFields(executionContext);
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Function called on field change of Product form
        var onChange = function (executionContext) {
            var fieldName = executionContext.getEventSource().getName();
            switch (fieldName) {
                case FieldNames.AdvantageEligible:
                    onChangeProductFields(executionContext);
                    break;
                case FieldNames.NonStandardProduct:
                    onChangeProductFields(executionContext);
                    break;
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Update unit Amount based on Program type
        var updateDefaultUnitAndGroup = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var globalContext = Xrm.Utility.getGlobalContext();
            var userId = globalContext.userSettings.userId;
            Xrm.WebApi.retrieveRecord(EntityNames.DefaultUnit, "d44507a9-ca0c-ec11-b6e6-000d3af4f269", "?$select=name").then(
                function success(result) {
                    Utilities.setLookupField(formContext, FieldNames.DefaultUnitLookup, "d44507a9-ca0c-ec11-b6e6-000d3af4f269", result["name"], EntityNames.DefaultUnit);
                },
                function (error) {
                    console.log(error.message);
                }
            );
            Xrm.WebApi.retrieveRecord(EntityNames.UnitGroup, "5bfbcd0a-8488-4fab-9546-61917a70bf6a", "?$select=name").then(
                function success(result) {
                    Utilities.setLookupField(formContext, FieldNames.UnitGroupLookup, "5bfbcd0a-8488-4fab-9546-61917a70bf6a", result["name"], EntityNames.UnitGroup);
                },
                function (error) {
                    console.log(error.message);
                }
            );
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
                        Xrm.Page.getAttribute("msdyn_companyid").setValue(companyLookup);
                    }
                },
                function (error) {
                    console.log(error.message);
                }
            );

        };

        /*****************************************/
        //Owner: King Chan
        //Set requirement level of below product fields based on Advantage Eligible,Standard Product
        var onChangeProductFields = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var isAdvantageEligible = formContext.getAttribute(FieldNames.AdvantageEligible).getValue();
            var isStandardProduct = formContext.getAttribute(FieldNames.NonStandardProduct).getValue();
            if (isAdvantageEligible !== null && isAdvantageEligible !== undefined && isAdvantageEligible == true) {
                formContext.getAttribute(FieldNames.Primary).setRequiredLevel('required');
                //formContext.getAttribute(FieldNames.FnOItemId).setRequiredLevel('required');
                formContext.getAttribute(FieldNames.ChargeOnAdvantage).setRequiredLevel('required');
                if (isStandardProduct !== null && isStandardProduct !== undefined && isStandardProduct == false) {
                    formContext.getAttribute(FieldNames.PriceBookPage).setRequiredLevel('required');
                    formContext.getControl(FieldNames.PriceBookPage).setDisabled(false);
                }
            }
            else {
                formContext.getAttribute(FieldNames.PriceBookPage).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.Primary).setRequiredLevel('none');
                //formContext.getAttribute(FieldNames.FnOItemId).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.ChargeOnAdvantage).setRequiredLevel('none');
            }
            if (isStandardProduct !== null && isStandardProduct !== undefined && isStandardProduct == true) {
                formContext.getAttribute(FieldNames.PriceBookPage).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.PriceBookPage).setValue(null);
                formContext.getControl(FieldNames.PriceBookPage).setDisabled(true);
                formContext.getAttribute(FieldNames.ProductFamily).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.ProductFamily).setValue(null);
                formContext.getControl(FieldNames.ProductFamily).setDisabled(true);
                formContext.getAttribute(FieldNames.Manufacturer).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.Manufacturer).setValue(null);
                formContext.getControl(FieldNames.Manufacturer).setDisabled(true);
            }
            else {
                formContext.getControl(FieldNames.PriceBookPage).setDisabled(false);
                formContext.getControl(FieldNames.ProductFamily).setDisabled(false);
                formContext.getAttribute(FieldNames.ProductFamily).setRequiredLevel('required');
                formContext.getAttribute(FieldNames.Manufacturer).setRequiredLevel('required');
                formContext.getControl(FieldNames.Manufacturer).setDisabled(false);
            }
        };

        return {
            OnLoad: onLoad,
            OnChange: onChange,
        };
    }());
}
