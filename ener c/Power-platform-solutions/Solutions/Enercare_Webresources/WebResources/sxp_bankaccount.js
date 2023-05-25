var BankAccount;
if (BankAccount === undefined || BankAccount === null) {
    BankAccount = {};
    BankAccount = (function () {
        var EntityNames = {
            Account: "account"
        };
        var FieldNames = {
            AccountLookup: "sxp_account"
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on load on Bank Account form
        var onLoad = function (executionContext) {
            setAccountOnQuickCreate(executionContext);
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Set Default account on Bank Account Quick Create form
        var setAccountOnQuickCreate = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (Xrm.Utility.getGlobalContext().getQueryStringParameters().pageType === "quickcreate") {
                if (window.top.entityName !== EntityNames.Account) {
                    Utilities.setLookupField(formContext, FieldNames.AccountLookup, window.top.accountId, window.top.accountName, EntityNames.Account);
                }
            }
        };

        return {
            OnLoad: onLoad
        };
    }());
}
