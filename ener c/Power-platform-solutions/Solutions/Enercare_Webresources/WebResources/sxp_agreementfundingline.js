var AgreementFundingLine;
if (AgreementFundingLine === undefined || AgreementFundingLine === null) {
    AgreementFundingLine = {};
    AgreementFundingLine = (function () {
        var EntityNames = {
            CreditCardSale: "rm_creditcardsale",
            CreditCardTable: "rm_creditcardtable"
        };
        var FieldNames = {
            DownPayment: "sxp_downpayment",
            FundingType: "sxp_fundingtype",
            CreditCardLookup: "sxp_creditcard",
            AgreementFundingLineLookup: "sxp_agreementfundingline",
            Amount: "rm_amount",
            CreditCardTableLookup: "rm_creditcardid"
        };

        /************************************************************************/
        //Function called onload of AgreementFundingLine form	
        var onLoad = function (executionContext) {
            debugger;
            showHideFundingTypeOptionValue(executionContext);
            filterCreditCardLookup(executionContext);
        };

        /************************************************************************/
        //Function called onchange of fields on AgreementFundingLine form
        var onChange = function (executionContext) {

            var fieldName = executionContext.getEventSource().getName();
            switch (fieldName) {
                case FieldNames.DownPayment:
                    showHideFundingTypeOptionValue(executionContext);
                    break;
                case FieldNames.FundingType:
                    filterCreditCardLookup(executionContext);
                    break;
            }
        };

        /************************************************************************/
        //Owner-Prachi Goyal
        //Created On- 20/10/2021
        //Show Hide Funding Type option value	
        var showHideFundingTypeOptionValue = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var control = formContext.getControl(FieldNames.FundingType);
            if (formContext.getAttribute(FieldNames.DownPayment).getValue() != null &&
                formContext.getAttribute(FieldNames.DownPayment).getValue() == 275450001) {
                control.removeOption(275450000);
                control.getAttribute().getValue() === 275450000 ? control.getAttribute().setValue(null) : null;
            }
            else if (formContext.getAttribute(FieldNames.DownPayment).getValue() != null &&
                formContext.getAttribute(FieldNames.DownPayment).getValue() == 275450000 && formContext.getAttribute(FieldNames.FundingType).getValue() != 275450001) {
                control.clearOptions();
                control.addOption({ text: "Financing", value: 275450000 });
                control.addOption({ text: "Credit Card", value: 275450002 });
                control.addOption({ text: "Cash", value: 275450003 });
                control.addOption({ text: "Check", value: 275450004 });
            }
        };

        /************************************************************************/
        //Owner-Disha Sharma
        //Filter CreditCardLookup
        var filterCreditCardLookup = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.getAttribute(FieldNames.FundingType).getValue() === 275450002) {
                formContext.getControl(FieldNames.CreditCardLookup).addPreSearch(filterLookup);
            }
            else {
                formContext.getControl(FieldNames.CreditCardLookup).removePreSearch(filterLookup);
            }
        }

        /************************************************************************/
        //Owner-Disha Sharma
        //Filter Lookup Criteria
        var filterLookup = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var filter = '<filter type="and">' +
                '<condition attribute="rm_customer" operator="eq" value="' + window.top.accountId + '" />' +
                '</filter>'
            formContext.getControl(FieldNames.CreditCardLookup).addCustomFilter(filter);

        };

        /************************************************************************/
        //Owner- Disha Sharma
	    //Modified by - Prachi Goyal
		//Modified Date - 31/12/2021
        //Logic onload of CreditCard QuickCreate form
        var onLoadCreditCardQuickCreate = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var agreementfundinglineControl = formContext.getAttribute(FieldNames.AgreementFundingLineLookup);
            if (agreementfundinglineControl === null || agreementfundinglineControl.getValue() === null || agreementfundinglineControl.getValue() === undefined) {
                formContext.getAttribute(FieldNames.Amount).setValue(0);
            }
            var agreementfundinglineControl = formContext.getControl(FieldNames.AgreementFundingLineLookup);
            if (agreementfundinglineControl) {
                var fetchXml = '<filter type="and">' +
                    '<condition attribute="sxp_fundingtype" operator="eq" value="275450002" />' +
					'<condition attribute="sxp_completed" operator="eq" value="0" />' +
                    '<condition attribute="sxp_orderid" operator="eq" value="' + window.top.salesorderid + '" />' +
                    '</filter>';
                agreementfundinglineControl.addPreSearch(function () {
                    agreementfundinglineControl.addCustomFilter(fetchXml);
                });
            }
        };

        /************************************************************************/
        //Owner- Disha Sharma
        //Set CreditcardLookup onchange of Agreementfundingline lookup value   
        function onChangeAgreementFunding(executionContext) {
          debugger;
            var formContext = executionContext.getFormContext();
            var agreementfundinglineControl = formContext.getAttribute(FieldNames.AgreementFundingLineLookup);
            if (agreementfundinglineControl != null && agreementfundinglineControl.getValue() !== null && agreementfundinglineControl.getValue() !== undefined) {
                var agreementFundingId = agreementfundinglineControl.getValue()[0].id;
                var fetch = '<fetch>' +
                    '<entity name="sxp_agreementfundingline">' +
                    '<attribute name="sxp_agreementfundinglineid" />' +
                    '<attribute name="sxp_amount" />' +
                    '<order attribute="sxp_name" descending="false" />' +
                    '<filter type="and">' +
                    '<condition attribute="sxp_agreementfundinglineid" operator="eq" value="' + agreementFundingId + '" />' +
                    '</filter>' +
                    '<link-entity name="rm_creditcardtable" from="rm_creditcardtableid" to="sxp_creditcard" link-type="inner" alias="creditcard">' +
                    '<attribute name="rm_creditcardtableid" />' +
                    '<attribute name="rm_name" />' +
                    '</link-entity>' +
                    '</entity>' +
                    '</fetch>'
                fetch = "?fetchXml=" + encodeURIComponent(fetch);

                Xrm.WebApi.retrieveMultipleRecords("sxp_agreementfundingline", fetch).then(
                    function success(result) {
                        if (result.entities.length > 0) {
                            Xrm.Utility.closeProgressIndicator();
                            formContext.getAttribute(FieldNames.Amount).setValue(result.entities[0].sxp_amount);
                            Utilities.setLookupField(formContext, FieldNames.CreditCardTableLookup, result.entities[0]["creditcard.rm_creditcardtableid"], result.entities[0]["creditcard.rm_name"], EntityNames.CreditCardTable);
                        } else {
                            Xrm.Utility.closeProgressIndicator();
                            Xrm.Navigation.openAlertDialog(alertStrings);

                        }
                    },
                    function (error) {
                        Xrm.Utility.closeProgressIndicator();
                        Xrm.Navigation.openAlertDialog(alertStrings);
                    }
                );
            }
            else {
                formContext.getAttribute(FieldNames.Amount).setValue(0);
                formContext.getAttribute(FieldNames.CreditCardTableLookup).setValue(null);
            }
        }

        return {
            OnLoad: onLoad,
            OnChange: onChange,
            OnLoadCreditCardQuickCreate: onLoadCreditCardQuickCreate,
            OnChangeAgreementFunding: onChangeAgreementFunding
        };
    }());
}
