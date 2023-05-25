var CreditCheckOverride;
if (CreditCheckOverride === undefined || CreditCheckOverride === null) {
	CreditCheckOverride = {};
	CreditCheckOverride = (function () {

		var FieldNames = {
			ApprovalStatus: "sxp_approvalstatus"
		};

		/*****************************************************/
		//Owner: Shivanshu Sharma	  
		//Function called onload of CreditcheckOverride form
		var onLoad = function (executionContext) {
			LockBPFFields(executionContext);
		};

		/*****************************************************/
		//Owner: Shivanshu Sharma	  
		// function to lock BPF fields
		var LockBPFFields = function (executionContext) {
			var formContext = executionContext.getFormContext();
			formContext.getControl("header_process_sxp_approvalstatus").setDisabled(true);
		};

		return {
			OnLoad: onLoad,
		};

	}());
}