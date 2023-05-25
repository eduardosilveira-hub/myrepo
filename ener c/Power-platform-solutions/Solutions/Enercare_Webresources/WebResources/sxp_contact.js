var Contact;
if (Contact === undefined || Contact === null) {
    Contact = {};
    Contact = (function () {
        var FieldNames = {
            EmailAddress: "emailaddress1",
            ConfirmEmailAddress: "sxp_confirmemailaddress1",
        };

         /*****************************************/
        //Owner: Disha Sharma
        //Functions called on load on Contact form
        var onLoad = function (executionContext) {
            mandateConfirmEmail(executionContext);
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on onchange of fields on BContact form
        var onChange = function (executionContext) {
            var fieldName = executionContext.getEventSource().getName();
            switch (fieldName) {
                case FieldNames.EmailAddress:
                    mandateConfirmEmail(executionContext);

            }
        };
        
        /*****************************************/
        //Owner: Prachi Goyal
        //Make Confirm Email mandatory when data is enetered in email.
        var mandateConfirmEmail = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.getAttribute(FieldNames.EmailAddress).getValue() != null) {
                formContext.getAttribute(FieldNames.ConfirmEmailAddress).setRequiredLevel('required');
            }
            else{
                formContext.getAttribute(FieldNames.ConfirmEmailAddress).setRequiredLevel('none');
            }
        };
        return {
            OnLoad: onLoad,
            OnChange: onChange
        };
    }());
}
