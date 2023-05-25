var PartyContact;
if (PartyContact === undefined || PartyContact === null) {
    PartyContact = {};
    PartyContact = (function () {
        var EntityNames = {
            Account: "account",
        };
        var FieldNames = {
            ConfirmEmail: "sxp_confirmemails",
            PartyType: "sxp_type",
            PartyNumber: "sxp_partynumber",
            AccountLookup: "sxp_partycontact",
            Locator: "sxp_locator"
        };

        /**********************************************/
        //Owner: Prachi Goyal
        //Function execute on Load of Form.
        var onLoad = function (executionContext) {
            updatePartyNumberField(executionContext);
        };
        var onChange = function (executionContext) {
            var fieldName = executionContext.getEventSource().getName();
            switch (fieldName) {
                case FieldNames.PartyType:
                    showHideConfirmEmail(executionContext);
            }

        };

        /*********************************************************/
        //Owner: Prachi Goyal
        // Update PartyNumber field of Party Contact from associated Account.
        var updatePartyNumberField = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() == 1) {
                var accountId = window.parent.location.href.split('id=')[2];
                Xrm.WebApi.online.retrieveRecord(EntityNames.Account, accountId, "?$select=name,msdyn_partynumber").then(
                    function success(result) {
                        if (result["msdyn_partynumber"] !== null && result["msdyn_partynumber"] !== undefined) {
                            formContext.getAttribute(FieldNames.PartyNumber).setValue(result["msdyn_partynumber"]);
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }
        };

        /********************************************************/
        //Owner: Shivanshu Sharma
        // Show Hide Confirm Email field based on Party Type selected.
        var showHideConfirmEmail = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var partyType = formContext.getAttribute(FieldNames.PartyType).getValue();
            if (partyType == 275450001) {
                formContext.getControl(FieldNames.ConfirmEmail).setVisible(true);
                formContext.getAttribute(FieldNames.ConfirmEmail).setRequiredLevel('required');
            }
            else {
                formContext.getControl(FieldNames.ConfirmEmail).setVisible(false);
                formContext.getAttribute(FieldNames.ConfirmEmail).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.ConfirmEmail).setValue(null);
                formContext.getAttribute(FieldNames.Locator).setValue(null);
            }
        };
        return {
            OnLoad: onLoad,
            OnChange: onChange,
            OnSave: onSave
        };
    }());
}
