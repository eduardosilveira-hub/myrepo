var CreditCheck;
if (CreditCheck === undefined || CreditCheck === null) {
    CreditCheck = {};
    CreditCheck = (function () {
        var EntityNames = {
            CreditCheck: "sxp_creditcheck",
            Account: "account",
            Order :"salesorder",
            User :"systemuser"
        };
        var FieldNames = {
            Account: "sxp_account",
            City:"sxp_city",
            FirstName :"sxp_firstname",
            LastName : "sxp_lastname",
            MiddleName : "sxp_middlename",
            Phone : "sxp_phone",
            CustomerEmail : "sxp_customeremail",
            CurrentAddress : "sxp_currentaddress",
            City:"sxp_city",
            State : "sxp_state",
            Country :"sxp_country",
            Zip :"sxp_zip",
            ReferenceId :"sxp_referenceidcontrol",
            SubscriptionKey :"sxp_subscriptionkey",
            CreditCheckUrl :"sxp_creditcheckurl",
            Name :"name",
            Telephone1:"telephone1",
            EmailAddress1 :"emailaddress1",
            Address1Country: "address1_country",
            Address1City : "address1_city",
            Address1Line1 : "address1_line1",
            Address1PostalCode : "address1_postalcode",
            Address1StateOrProvince : "address1_stateorprovince",
            UserPrimaryEmail :"internalemailaddress",
            ServiceRepEmail :"sxp_serviceexpertssalesrepemailaddress",
            AccountGuid : "sxp_accountguid",
            Amount : "sxp_amount",
            RemainingAmount : "sxp_remainingamount",
            IsOverride : "sxp_override",
            OverrideUser : "sxp_overrideuser",
            OverrideAmount : "sxp_overrideamount"
        };

        var isSecondRecord = false;

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Functions called on load on Credit Check form
        var onLoad = function (executionContext) {
            getUserEmailAddress(executionContext);
            updateOverrideUser(executionContext);
            
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Functions called on onchange of fields on Credit Check form
        var onChange = function (executionContext) {
            var fieldName = executionContext.getEventSource().getName();
            switch (fieldName) {
                case FieldNames.IsOverride:
                    updateOverrideUser(executionContext);
                    break;
                case FieldNames.OverrideAmount:
                    updateOverrideAmount(executionContext);
                    break;
            }
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Functions called when Credit Check form is saved
        var onSave = function (executionContext) {
            restrictSaveForSecondRecord(executionContext);
            addRemainingAmount(executionContext);
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Retrieve configuration records for credit check url and subscription key
        var getCreditCheckUrlAndSubscriptionKey = function(executionContext){
            var formContext = executionContext.getFormContext();

            if (formContext.ui.getFormType() == 1){
              var configurationFetchXml = "?fetchXml=<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'><entity name='sxp_configuration'><attribute name='sxp_configurationid' /><attribute name='sxp_name' /><attribute name='sxp_value' /><order attribute='sxp_name' descending='false' /><filter type='and'><filter type='or'><condition attribute='sxp_name' operator='eq' value='CreditCheck.CreditCheckUrl' /><condition attribute='sxp_name' operator='eq' value='CreditCheck.SubscriptionKey' /></filter></filter></entity></fetch>";
                Xrm.WebApi.retrieveMultipleRecords("sxp_configuration",configurationFetchXml ).then(
                    function success(result) {
                        if(result.entities.length > 0){
                   for (let i = 0; i < result.entities.length; i++) {
                    if(result.entities[i].sxp_name == "CreditCheck.CreditCheckUrl"){
                        formContext.getAttribute(FieldNames.CreditCheckUrl).setValue(result.entities[i].sxp_value);

                    }
                    else if(result.entities[i].sxp_name == "CreditCheck.SubscriptionKey"){
                        formContext.getAttribute(FieldNames.SubscriptionKey).setValue(result.entities[i].sxp_value);
                    }
    
                    }
                    }
                    mapAccountToCreditCheckRecord(executionContext);
                    
                },
                    function(error) {
                        Xrm.Utility.alertDialog(error.message);
                        
                    }
                );
        }
            
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Give confirmation dialogue on create of credit check to deactivate the exitisting Credit check record
        // associated with the related account
        var addCreditCheckValidationOnCreate = function (executionContext, createdFromEntityName,createdFromEntityId) {
            
            var accountId = "";
            var accountName = "";
            var entityName = createdFromEntityName;
            var entityId = createdFromEntityId.replace("{","").replace("}","");
            var formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() == 1) {
                var account = formContext.getAttribute(FieldNames.Account);
                if (account != null && account.getValue() !== null && account.getValue() !== undefined) {
                    accountId = account.getValue()[0].id;
                    accountName = account.getValue()[0].name;

                    Xrm.WebApi.retrieveMultipleRecords(EntityNames.CreditCheck, "?$filter=statecode eq 0 and _sxp_account_value eq '" + accountId + "'").then(
                        function success(result) {
                            if (result.entities.length > 0) {
                                
                                var confirmStrings = { text: "There is already Active Credit Check associated with " + accountName + " Account. Click on Yes to deactivate the exisiting credit check.", title: "Confirm", confirmButtonLabel: "Yes", cancelButtonLabel: "No" };
                                Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
                                    function (success) {

                                        if (success.confirmed) {
                                            var data = {
                                                "statecode": 1,
                                                "statuscode": 2
                                            };

                                        for (var i = 0; i < result.entities.length; i++) {
                                                var currentCreditCheckId = result.entities[i].sxp_creditcheckid;
                                                var queryConfiguration = "?$select=salesorderid"+ "&$filter=statecode eq 0 and _sxp_creditcheck_value eq '" + currentCreditCheckId + "'";
                                             var lResponse = RetrieveMultipleRecord("salesorders", queryConfiguration);
                                                if(lResponse?.value?.length > 0){
                                                formContext.ui.setFormNotification("Record cannot be saved if you choose to stay on this page", "ERROR", "RestrcitSave");
                                                isSecondRecord = true;
                                                Xrm.Navigation.openAlertDialog("This credit check has been used in one of the active order. Please remove the credit check from the active order.").then(
                                                    function (success) {
                                                        
                                                    },
                                                    function (error) {
                                                        console.log(error.message);
                                                    }
                                                );
                                                }
                                                else{

                                                Xrm.WebApi.online.updateRecord(EntityNames.CreditCheck, currentCreditCheckId, data).then(
                                                    function success(result) {
                                                    },
                                                    function (error) {
                                                        Xrm.Utility.alertDialog(error.message);
                                                    }
                                                );
                                                 }
                                            }
                                        }
                                        else {

                                            formContext.ui.setFormNotification("Record cannot be saved if you choose to stay on this page", "ERROR", "RestrcitSave");
                                            
                                            isSecondRecord = true;
                                            openEntityForm(entityName,entityId);
                                        }
                                    });
                            }
                        },
                        function (error) {
                            Xrm.Utility.alertDialog(error.message);
                        }
                    );
                }
            }
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Refresh form 
        var openEntityForm = function(entityName,entityId){
            var entityFormOptions = {};
            entityFormOptions["entityName"] = entityName;
            entityFormOptions["entityId"] = entityId;
            Xrm.Navigation.openForm(entityFormOptions, null);
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Map all account field values to credit check
        var mapAccountFieldsToCreditCheck = function(executionContext){
            var accountId = "";
            var accountName = "";
            var formContext =  executionContext.getFormContext();
            var account = formContext.getAttribute(FieldNames.Account);
            if (account != null && account.getValue() !== null && account.getValue() !== undefined) {
                accountId = account.getValue()[0].id;
                accountName = account.getValue()[0].name;

                Xrm.WebApi.online.retrieveRecord(EntityNames.Account, accountId, "?$select=sxp_firstname,sxp_middlename,sxp_lastname,address1_city,address1_stateorprovince,address1_country,address1_line1,address1_line2,address1_line3,address1_postalcode,telephone1,emailaddress1").then(
                    function success(result) {
                        if ((result[FieldNames.FirstName] !== null && result[FieldNames.FirstName] !== undefined)) {
                            formContext.getAttribute(FieldNames.FirstName).setValue(result[FieldNames.FirstName]);
                        }
                        if ((result[FieldNames.MiddleName] !== null && result[FieldNames.MiddleName] !== undefined)) {
                            formContext.getAttribute(FieldNames.MiddleName).setValue(result[FieldNames.MiddleName]);
                        }
                        if ((result[FieldNames.LastName] !== null && result[FieldNames.LastName] !== undefined)) {
                            formContext.getAttribute(FieldNames.LastName).setValue(result[FieldNames.LastName]);
                        }

                        if (result[FieldNames.Telephone1] !== null && result[FieldNames.Telephone1] !== undefined) {
                            formContext.getAttribute(FieldNames.Phone).setValue(result[FieldNames.Telephone1]);
                        }
                        
                        if (result[FieldNames.EmailAddress1] !== null && result[FieldNames.EmailAddress1] !== undefined) {
                            formContext.getAttribute(FieldNames.CustomerEmail).setValue(result[FieldNames.EmailAddress1]);
                        }
                        if (result[FieldNames.Address1Country] !== null && result[FieldNames.Address1Country] !== undefined) {
                            formContext.getAttribute(FieldNames.Country).setValue(result[FieldNames.Address1Country]);
                        }
                        
                        if (result[FieldNames.Address1City] !== null && result[FieldNames.Address1City] !== undefined) {
                            formContext.getAttribute(FieldNames.City).setValue(result[FieldNames.Address1City]);
                        }
                        if (result[FieldNames.Address1StateOrProvince] !== null && result[FieldNames.Address1StateOrProvince] !== undefined) {
                            formContext.getAttribute(FieldNames.State).setValue(result[FieldNames.Address1StateOrProvince]);
                        }
                        if (result[FieldNames.Address1PostalCode] !== null && result[FieldNames.Address1PostalCode] !== undefined) {
                            formContext.getAttribute(FieldNames.Zip).setValue(result[FieldNames.Address1PostalCode]);
                        }
                        if (result[FieldNames.Address1Line1] !== null && result[FieldNames.Address1Line1] !== undefined) {
                            formContext.getAttribute(FieldNames.CurrentAddress).setValue(result[FieldNames.Address1Line1]);
                        }
                        formContext.getControl(FieldNames.ReferenceId).setVisible(true);
                       
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );

            }
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Map account lookup on credit check quick create
        var mapAccountToCreditCheckRecord = function(executionContext){
            var formContext = executionContext.getFormContext();
            var pageContext = Xrm.Utility.getPageContext();
            var account = formContext.getAttribute(FieldNames.Account);
            
            if(pageContext !== null && pageContext !== undefined){
                var input = pageContext.input;
                if(input !== null && input!== undefined){
                    var createFromEntity = input.createFromEntity;
                    if(createFromEntity !== null && createFromEntity !== undefined && createFromEntity.entityType == EntityNames.Order){
                        var orderId = createFromEntity.id;

                        Xrm.WebApi.online.retrieveRecord(EntityNames.Order, orderId).then(
                            function success(result) {
                                
                                var accountLookUp = new Array();
                                accountLookUp[0] = new Object();
                                accountLookUp[0].id = result["_customerid_value"] ; 
                                accountLookUp[0].name = result["_customerid_value@OData.Community.Display.V1.FormattedValue"]; 
                                accountLookUp[0].entityType =result["_customerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                                formContext.getAttribute(FieldNames.Account).setValue(accountLookUp);
                                formContext.getAttribute(FieldNames.AccountGuid).setValue(accountLookUp[0].id);
                                addCreditCheckValidationOnCreate(executionContext,EntityNames.Order,orderId);
                                mapAccountFieldsToCreditCheck(executionContext);
                               
                            },
                            function (error) {
                                Xrm.Utility.alertDialog(error.message);
                            }
                        );


                    }
                    else if(createFromEntity.entityType == EntityNames.Account){
                        if(account.getValue() !==null && account.getValue() !==undefined ){
                        var accountId = account.getValue()[0].id;
                        var accountGuid = accountId.replace("{","").replace("}","");
                        formContext.getAttribute(FieldNames.AccountGuid).setValue(accountGuid);
                        addCreditCheckValidationOnCreate(executionContext,EntityNames.Account,accountId);
                        mapAccountFieldsToCreditCheck(executionContext);
                        }
                    }
                }
            }

        
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Restrict save if second record is created for credit check
        var restrictSaveForSecondRecord = function(executionContext){
        if(isSecondRecord){
        var formContext = executionContext.getFormContext();
        executionContext.getEventArgs().preventDefault();
        Xrm.Navigation.openAlertDialog("This record cannot be saved as the account is already associated with an active credit check").then(
            function (success) {
                
            },
            function (error) {
                console.log(error.message);
                
            }
        );

        }

        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Get primary email of user
        var getUserEmailAddress = function(executionContext){
            
            var formContext = executionContext.getFormContext();
            var context = Xrm.Utility.getGlobalContext();
            var userId = context.userSettings.userId;
            Xrm.WebApi.online.retrieveRecord(EntityNames.User, userId, "?$select=internalemailaddress").then(
                function success(result) {
                   
                    if(result !==null && result!== undefined){
                    if (result[FieldNames.UserPrimaryEmail] !== null && result[FieldNames.UserPrimaryEmail] !== undefined) {
                        formContext.getAttribute(FieldNames.ServiceRepEmail).setValue(result[FieldNames.UserPrimaryEmail]);
                    }
                    getCreditCheckUrlAndSubscriptionKey(executionContext);
                }
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );

        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Common method to retrive records in sync mode based on custom query.
        var RetrieveMultipleRecord =  function (lEntityName, lQuery) {
            var lResponse = null;
            var lXMLHttpRequest = new XMLHttpRequest();

            lXMLHttpRequest.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/" + lEntityName + lQuery, false);
            lXMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            lXMLHttpRequest.setRequestHeader("OData-Version", "4.0");
            lXMLHttpRequest.setRequestHeader("Accept", "application/json");
            lXMLHttpRequest.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            lXMLHttpRequest.onreadystatechange = function () {
                if (this.readyState === 4) {
                    lXMLHttpRequest.onreadystatechange = null;
                    if (this.status === 200) {
                        lResponse = JSON.parse(this.response);
                    } else {
                        Xrm.Navigation.openAlertDialog(this.statusText);
                    }
                }
            };
            lXMLHttpRequest.send();
            return lResponse;
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Set remaining amount same as Original Amount
        var addRemainingAmount = function(executionContext){
           
            var formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() == 1) {
                var amount = formContext.getAttribute(FieldNames.Amount).getValue();
                if(amount !== null && amount !== undefined){
                    formContext.getAttribute(FieldNames.RemainingAmount).setValue(Number(amount));
                 }
    
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Update override user for credit check
        var updateOverrideUser = function (executionContext) {
            
            var formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() !== 1) {
            var globalContext = Xrm.Utility.getGlobalContext();
            var isOverride = formContext.getAttribute(FieldNames.IsOverride).getValue();
            if(isOverride == true){
            formContext.getControl(FieldNames.OverrideAmount).setVisible(true);
            var currentUser = new Array();
            currentUser[0] = new Object();
            currentUser[0].entityType = "systemuser";
            currentUser[0].id = globalContext.userSettings.userId;
            currentUser[0].name = globalContext.userSettings.userName;
            formContext.getAttribute(FieldNames.OverrideUser).setValue(currentUser);
            }
            else{
                formContext.getControl(FieldNames.OverrideAmount).setVisible(false);
            }
        }
        
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Update remaining amount based on value entered in override amount for credit check
        var updateOverrideAmount = function (executionContext) {
            
            var formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() !== 1) {
            var isOverride = formContext.getAttribute(FieldNames.IsOverride).getValue();
            var overrideAmount = formContext.getAttribute(FieldNames.OverrideAmount).getValue();
            if(isOverride == true && overrideAmount !== null){
                var remainingAmount = formContext.getAttribute(FieldNames.RemainingAmount).getValue();
                formContext.getAttribute(FieldNames.RemainingAmount).setValue(remainingAmount + overrideAmount);
            }
           
        }
        
        };

        return {
            OnLoad: onLoad,
            OnChange: onChange,
            OnSave: onSave
        };
    }());
}
