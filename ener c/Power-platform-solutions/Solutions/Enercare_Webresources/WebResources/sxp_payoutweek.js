var PayoutWeek;
if (PayoutWeek === undefined || PayoutWeek === null) {
    PayoutWeek = {};
    PayoutWeek = (function () {
        var FieldNames = {
            Processed: "sxp_processed"
        };

        /********************************************/
        //Owner-Disha Sharma
        // Function execute on Load of Payout week Form.
        var onLoad = function (executionContext) {
            lockUnlockProcessedField(executionContext);
        };

        /********************************************/
        //Owner-Disha Sharma
        // Function execute on Save of Payout week record.
        var onSave = function (executionContext) {
            lockUnlockProcessedField(executionContext);
        };

        /*************************************************/
        //Owner-Disha Sharma
        // Lock UnLock processed Field
        var lockUnlockProcessedField = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var processed = formContext.getAttribute(FieldNames.Processed).getValue();
            if (processed) {
                formContext.getControl(FieldNames.Processed).setDisabled(true);
            }
            else {
                formContext.getControl(FieldNames.Processed).setDisabled(false);
            }
        };

        return {
            OnLoad: onLoad,
            OnSave: onSave
        };
    }());
}