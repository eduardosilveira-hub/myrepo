var Account;
if (Account === undefined || Account === null) {
    Account = {};
    Account = (function () {
        var EntityNames = {
            Account: "account",
            Contact: "contact",
            ServiceCenter: "sxp_servicecenter",
            AvalaraTax: "ava_avalaratax",
            CustomerGroups: "msdyn_customergroup",
            PaymentTerm: "msdyn_paymentterm",
            PartyContact: "sxp_partycontact",
            Order: "salesorder",
            TaxGroup: "msdyn_taxgroup",
            RentalInvoiceProfile: "sxp_rentalinvoiceprofil",
            TaxGroup: "msdyn_taxgroup",
            CustomerPaymentMethod: "msdyn_customerpaymentmethod"
        };
        var FieldNames = {
            PrimaryContact: "primarycontactid",
            AccountName: "name",
            AccountEmail: "emailaddress1",
            AccountConfirmEmail: "sxp_confirmemail",
            AccountMobilePhone: "telephone1",
            AccountBusinessPhone: "telephone2",
            IsCustomerDeedOfProperty: "sxp_customerisondeedtoproperty",
            AvalaraTaxLookup: "ava_avalaratax",
            ServiceCenterLookup: "sxp_servicecenter",
            DefaultDimensionDisplayValue: "sxp_defaultdimensiondisplayvalue",
            CustomerGroupLookup: "msdyn_customergroupid",
            PaymentTermLookup: "msdyn_paymentterm",
            PartyNumber: "msdyn_partynumber",
            PhoneDescription: "msdyn_telephone1description",
            FirstName: "sxp_firstname",
            MiddleName: "sxp_middlename",
            LastName: "sxp_lastname",
            IsMailingAddressSameAsInstallationAddress: "sxp_ismailingaddresssameasinstallationaddress",
            Address1Name: "address1_name",
            Address2Name: "address2_name",
            Adddress1Line1: "address1_line1",
            Adddress2Line1: "address2_line1",
            Address1County: "sxp_address1county",
            Address2County: "sxp_address2county",
            Address1City: "address1_city",
            Address2City: "address2_city",
            Address1State: "address1_stateorprovince",
            Address2State: "address2_stateorprovince",
            Address1PostalCode: "address1_postalcode",
            Address2PostalCode: "address2_postalcode",
            Address1Country: "address1_country",
            Address2Country: "address2_country",
            InvoiceProfileLookup: "sxp_invoiceprofileid",
            SalesTaxGroupLookup: "msdyn_salestaxgroup",
            PaymentMethod: "msdyn_customerpaymentmethod",
            AutoInstallationAddress: "address1_name",
            AutoMailingAddress: "address2_name"
        };
        var TabNames = {
            CreditCheckTab: "creditCheck_tab"
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on load on Account form
        var onLoad = function (executionContext) {
            setAdministratorFields(executionContext);
            filterSubgridRecords(executionContext);
            onLoadIsMailingAddress(executionContext);
            setFormAttributes(executionContext);
            setServiceCenterForQuickCreate(executionContext);
            setDefaultServiceCenter(executionContext);
            setAccountGuid(executionContext);
            clearAutoSuggestionValue(executionContext);
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on onchange of fields on Account form
        var onChange = function (executionContext) {

            var fieldName = executionContext.getEventSource().getName();
            switch (fieldName) {
                case FieldNames.AccountEmail:
                    mandateConfirmEmail(executionContext);
                    break;
                case FieldNames.ServiceCenterLookup:
                    onChangeServiceCenter(executionContext);
                    break;
                case FieldNames.IsMailingAddressSameAsInstallationAddress:
                    onChangeIsMailingAdress(executionContext);

            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called when account form is saved
        var onSave = function (executionContext) {
            updateContactFields(executionContext);
            setAccountName(executionContext);
            setFormAttributes(executionContext);
            onLoadIsMailingAddress(executionContext);
        };

        /*****************************************/
        //Owner: King Chan
        //Clear Auto Suggestion Address fields
        var clearAutoSuggestionValue = function (executionContext) {
            var formContext = executionContext.getFormContext();
            formContext.getAttribute(FieldNames.AutoInstallationAddress).setValue(null);
            formContext.getAttribute(FieldNames.AutoMailingAddress).setValue(null);
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Set party number 
        var setFormAttributes = function (executionContext) {
            window.top.partyNumber = Xrm.Page.getAttribute(FieldNames.PartyNumber).getValue();
        };

         /*****************************************/
        //Owner: Mervyn Martin
        //Assign Default Service Center based on Team Assignment
        var setDefaultServiceCenter = function (executionContext) {
            var context = Xrm.Utility.getGlobalContext();
            var formContext = executionContext.getFormContext();
            var loggedInUserId = context.userSettings.userId.replace("{", "").replace("}", "");
            var servicecenter = formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue();

            if (servicecenter == null && servicecenter == undefined) {
                var fetchXml = "<fetch>" +
                    "<entity name='sxp_servicecenter' >" +
                    "<link-entity name='teammembership' from='teamid' to='sxp_servicecenterteam' >" +
                    "<filter>" +
                    "<condition attribute='systemuserid' operator='eq' value=' " + loggedInUserId + "' />" +
                    "</filter>" +
                    "</link-entity>" +
                    "</entity>" +
                    "</fetch>";

                fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
                Xrm.WebApi.retrieveMultipleRecords(EntityNames.ServiceCenter, fetchXml).then(
                    function success(result) {

                        if (result.entities.length == 1) {
                            Utilities.setLookupField(formContext, FieldNames.ServiceCenterLookup, result.entities[0].sxp_servicecenterid, result.entities[0].sxp_name, EntityNames.ServiceCenter);

                            window.top.serviceCenterId = result.entities[0].sxp_servicecenterid;
                            window.top.serviceCenterName = result.entities[0].sxp_name;
                            onChangeServiceCenter(executionContext);
                        }
                        // Eduardo FEB 09 - added the pageType !== quickcreate validation
                        // Do not show this message when on quick create
                        // message is displayed on setServiceCenterForQuickCreate function
                        else if (result.entities.length == 0 && Xrm.Utility.getGlobalContext().getQueryStringParameters().pageType !== "quickcreate") {
                            Xrm.Utility.alertDialog("You are not assigned to any Service Centers. Please contact an administrator for further assistance.");
                        }
                        else if (result.entities.length > 1) {
                            var defaultCenterFetchXml = "<fetch>" +
                                "<entity name='sxp_servicecenter' >" +
                                "<link-entity name='systemuser' from='sxp_primaryservicecenter' to='sxp_servicecenterid' >" +
                                "<filter>" +
                                "<condition attribute='systemuserid' operator='eq' value='" + loggedInUserId + "' />" +
                                "</filter>" +
                                "</link-entity>" +
                                "</entity>" +
                                "</fetch>"
                            defaultCenterFetchXml = "?fetchXml=" + encodeURIComponent(defaultCenterFetchXml);
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.ServiceCenter, defaultCenterFetchXml).then(
                                function success(result) {
                                    if (result.entities.length > 0) {
                                        Utilities.setLookupField(formContext, FieldNames.ServiceCenterLookup, result.entities[0].sxp_servicecenterid, result.entities[0].sxp_name, EntityNames.ServiceCenter);
                                        window.top.serviceCenterId = result.entities[0].sxp_servicecenterid;
                                        window.top.serviceCenterName = result.entities[0].sxp_name;
                                        onChangeServiceCenter(executionContext);
                                        Xrm.Utility.alertDialog("You are assigned to multiple service centers. Your Primary Service Center has been selected. Please ensure that it is correct.");
                                    }
                                },
                                function (error) {
                                    Xrm.Utility.alertDialog(error.message);
                                    return false;
                                }
                            );
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                        return false;
                    }
                );
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Set service center from Order on Account Quick create
        var setServiceCenterForQuickCreate = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (Xrm.Utility.getGlobalContext().getQueryStringParameters().pageType === "quickcreate") {
                // Eduardo - Feb 07/22
                // Validation - if no service center assigned or no service center selected, can't create account.
                if (!window.top.serviceCenterId || window.top.serviceCenterId === null) {
                    formContext.getControl().forEach((control) => { control.setDisabled(true); });
                    Xrm.Navigation.openAlertDialog("You can't create an account if you are not assigned to a Service Center, or if you haven't selected on your Order.", null).then(
                        function(success){
                            formContext.ui.close();
                        }
                    );
                }
                // Eduardo Fev 07/22 END
                else {
                    Utilities.setLookupField(formContext, FieldNames.ServiceCenterLookup, window.top.serviceCenterId, window.top.serviceCenterName, EntityNames.ServiceCenter);
                    onChangeServiceCenter(executionContext);
                }
            }

        };

        /*****************************************/
        //Owner: Disha Sharma
        //Set variables for account Id,Name 
        var setAccountGuid = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var formType = formContext.ui.getFormType();
            if (Xrm.Utility.getGlobalContext().getQueryStringParameters().pageType !== "quickcreate" && formType !== 1) {
                var entityName = formContext.data.entity.getEntityName();
                var entityId = formContext.data.entity.getId();
                var accountId = "";
                if (entityId !== null && entityId !== undefined) {
                    accountId = entityId.replace("{", "").replace("}", "");
                    var accountName = formContext.getAttribute(FieldNames.AccountName).getValue();
                }
                window.top.accountId = accountId;
                window.top.accountName = accountName;
                window.top.entityName = entityName;
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Set account name as firstname lastname  
        var setAccountName = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var firstname = formContext.getAttribute(FieldNames.FirstName).getValue();
            var lastname = formContext.getAttribute(FieldNames.LastName).getValue();
            var middlename = formContext.getAttribute(FieldNames.MiddleName).getValue();
            if (middlename === null || middlename === "") {
                formContext.getAttribute(FieldNames.AccountName).setValue(firstname + " " + lastname);
            }
            else {
                formContext.getAttribute(FieldNames.AccountName).setValue(firstname + " " + middlename + " " + lastname);
            }
        };
        
        /*****************************************/
        //Owner: Disha Sharma
        //Validate Email Address
        var mandateConfirmEmail = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.getAttribute(FieldNames.AccountEmail).getValue() != null) {
                formContext.getAttribute(FieldNames.AccountConfirmEmail).setRequiredLevel('required');
            }
            else {
                formContext.getAttribute(FieldNames.AccountConfirmEmail).setRequiredLevel('none');
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Update Contact fields
        var updateContactFields = function (executionContext) {
            var primaryContactId = "";
            var formContext = executionContext.getFormContext();
            var primaryContact = formContext.getAttribute(FieldNames.PrimaryContact);
            if (primaryContact != null && primaryContact.getValue() !== null && primaryContact.getValue() !== undefined) {
                var tempName = formContext.getAttribute(FieldNames.AccountName).getValue();
                primaryContactId = primaryContact.getValue()[0].id;
                var data = {
                    "firstname": formContext.getAttribute(FieldNames.FirstName).getValue(),
                    "lastname": formContext.getAttribute(FieldNames.LastName).getValue(),
                    "middlename": formContext.getAttribute(FieldNames.MiddleName).getValue(),
                    "emailaddress1": formContext.getAttribute(FieldNames.AccountEmail).getValue(),
                    "sxp_confirmemailaddress1": formContext.getAttribute(FieldNames.AccountConfirmEmail).getValue(),
                    "mobilephone": formContext.getAttribute(FieldNames.AccountMobilePhone).getValue(),
                    "msdyn_telephone1description": formContext.getAttribute(FieldNames.PhoneDescription).getValue()
                }
                Xrm.WebApi.updateRecord(EntityNames.Contact, primaryContactId, data).then(
                    function success(result) {
                        Xrm.Utility.alertDialog(success.message);
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }
        };

        /*****************************************/
        //Owner-Disha Sharma
		//Modified By - Prachi Goyal
        //Set Administrator section fields
        var setAdministratorFields = function (executionContext) {
			debugger;
            var formContext = executionContext.getFormContext();
            var formType = formContext.ui.getFormType();
            //if (formType === 1) {
				if(formContext.getAttribute(FieldNames.AvalaraTaxLookup).getValue() == null) {
                Xrm.WebApi.retrieveRecord(EntityNames.AvalaraTax, "bbb09777-5ff4-eb11-94ef-000d3a09c1c3", "?$select=ava_name").then(
                    function success(result) {
                        Utilities.setLookupField(formContext, FieldNames.AvalaraTaxLookup, "bbb09777-5ff4-eb11-94ef-000d3a09c1c3", result["ava_name"], EntityNames.AvalaraTax);
                    },
                    function (error) {
                        console.log(error.message);
                    }
                );
			}
			if(formContext.getAttribute(FieldNames.InvoiceProfileLookup).getValue() == null) {
                Xrm.WebApi.retrieveMultipleRecords(EntityNames.RentalInvoiceProfile, "?$select=sxp_name,sxp_rentalinvoiceprofilid&$filter=sxp_name eq 'UNASSIGNED'").then(
                    function success(result) {
                        Utilities.setLookupField(formContext, FieldNames.InvoiceProfileLookup, result.entities[0]["sxp_rentalinvoiceprofilid"], result.entities[0]["sxp_name"], EntityNames.RentalInvoiceProfile);
                    },
                    function (error) {
                        console.log(error.message);
                    }
                 );
			}

                var globalContext = Xrm.Utility.getGlobalContext();
                var userId = globalContext.userSettings.userId;
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
							if(formContext.getAttribute("msdyn_company").getValue() == null) {
                            Xrm.Page.getAttribute("msdyn_company").setValue(companyLookup);
							}
                            if(formContext.getAttribute(FieldNames.PaymentMethod).getValue() == null) {
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.CustomerPaymentMethod, "?$select=msdyn_name,msdyn_customerpaymentmethodid&$filter=msdyn_name eq 'Manual' and _msdyn_company_value eq '" + companyLookup[0].id + "'").then(
                               function success(result) {
                                   Utilities.setLookupField(formContext, FieldNames.PaymentMethod, result.entities[0]["msdyn_customerpaymentmethodid"], result.entities[0]["msdyn_name"], EntityNames.CustomerPaymentMethod);
                               },
                               function (error) {
                                   console.log(error.message);
                               }
                            );
							}
                            
                            if(formContext.getAttribute(FieldNames.CustomerGroupLookup).getValue() == null || 
							formContext.getAttribute(FieldNames.PaymentTermLookup).getValue() == null) {
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.CustomerGroups, "?$select=msdyn_groupid,_msdyn_paymenttermid_value,msdyn_customergroupid&$filter=msdyn_groupid eq 'RES' and _msdyn_company_value eq '" + companyLookup[0].id + "'").then(
                                function success(result) {

                                    if (result.entities.length > 0) {
                                    
                                        // Eduardo - Feb 17
                                        // Added validation for when customergroupid comes back empty - possibly connectivity issues
                                        // the quick form will be closed and the user will click the create button again
                                        if(result.entities[0].msdyn_customergroupid == null || result.entities[0].msdyn_customergroupid == undefined) {
                                            Xrm.Navigation.openAlertDialog('We could not retrieve the Customer Group value. Please try creating the account again.').then(
                                                function(success){
                                                    formContext.ui.close();
                                                    return;
                                                }
                                            );
                                        }
                                        // END - Eduardo Feb 17

                                        if (result.entities[0].msdyn_groupid !== null && result.entities[0].msdyn_groupid !== undefined) {
                                            Utilities.setLookupField(formContext, FieldNames.CustomerGroupLookup, result.entities[0].msdyn_customergroupid, result.entities[0].msdyn_groupid, EntityNames.CustomerGroups);
                                        }
                                        if (result.entities[0]._msdyn_paymenttermid_value !== null && result.entities[0]._msdyn_paymenttermid_value !== undefined) {
                                            var paymentTermId = result.entities[0]._msdyn_paymenttermid_value;
                                            Xrm.WebApi.retrieveRecord(EntityNames.PaymentTerm, paymentTermId, "?$select=msdyn_name").then(
                                                function success(result) {
                                                    Utilities.setLookupField(formContext, FieldNames.PaymentTermLookup, paymentTermId, result["msdyn_name"], EntityNames.PaymentTerm);
                                                },
                                                function (error) {
                                                    console.log(error.message);
                                                }
                                            );
                                        }
                                    }
                                },
                                function (error) {
                                    console.log(error.message);
                                }
                            );
							}
							
							if(formContext.getAttribute(FieldNames.SalesTaxGroupLookup).getValue() == null){
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.TaxGroup, "?$select=msdyn_name,msdyn_taxgroupid&$filter=msdyn_name eq 'AVATAX' and _msdyn_company_value eq '" + companyLookup[0].id + "'").then(
                                function success(result) {

                                    if (result.entities.length > 0) {
                                        if (result.entities[0].msdyn_name !== null && result.entities[0].msdyn_name !== undefined) {
                                            Utilities.setLookupField(formContext, FieldNames.SalesTaxGroupLookup, result.entities[0].msdyn_taxgroupid, result.entities[0].msdyn_name, EntityNames.TaxGroup);
                                        }
                                    }
                                },
                                function (error) {
                                    console.log(error.message);
                                }
                            );
							}
                        }
                    },
                    function (error) {
                        console.log(error.message);
                    }
                );
            //}
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Set DefaultDimension based on Service Center
        var onChangeServiceCenter = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var serviceCenterId = "";
            var serviceCenter = formContext.getAttribute(FieldNames.ServiceCenterLookup);
            if (serviceCenter != null && serviceCenter.getValue() !== null && serviceCenter.getValue() !== undefined) {
                serviceCenterId = serviceCenter.getValue()[0].id;
                Xrm.WebApi.retrieveRecord(EntityNames.ServiceCenter, serviceCenterId, "?$select=sxp_centernumber").then(
                    function success(result) {
                        formContext.getAttribute(FieldNames.DefaultDimensionDisplayValue).setValue("--" + result["sxp_centernumber"] + "-Z01-");
                    },
                    function (error) {
                        console.log(error.message);
                    }
                );
            }
            else {
                formContext.getAttribute(FieldNames.DefaultDimensionDisplayValue).setValue(null);
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Filter party contact subgrid records 
        var filterSubgridRecords = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var partyContactGrid = formContext.getControl("Contact_Information");

            if (partyContactGrid == null) {
                return;
            }
            else {
                var partyNumber = formContext.getAttribute(FieldNames.PartyNumber).getValue();
                if (partyNumber !== null && partyNumber !== "" && partyNumber !== undefined) {
                    partyNumber = formContext.getAttribute(FieldNames.PartyNumber).getValue();
                    var fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">'
                        + '<entity name="sxp_partycontact">'
                        + '<attribute name="sxp_name" />'
                        + '<attribute name="createdon" />'
                        + '<order attribute="sxp_name" descending="false" />'
                        + '<filter type="and">'
                        + '<filter type="and">'
                        + '<condition attribute="statecode" operator="eq" value="0" />'
                        + '<condition attribute="sxp_partynumber" operator="eq" value="' + partyNumber + '" />'
                        + '</filter>'
                        + '</filter>'
                        + '</entity>'
                        + '</fetch>';
                    if (partyContactGrid != null) {
                        partyContactGrid.setFilterXml(fetchXml);
                        //Refresh grid to show filtered records only.
                        partyContactGrid.refresh();
                    }
                    else {
                        setTimeout(filterSubgridRecords, 2000);
                    }
                }
                else {
                    var fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">'
                        + '<entity name="sxp_partycontact">'
                        + '<attribute name="sxp_name" />'
                        + '<attribute name="createdon" />'
                        + '<order attribute="sxp_name" descending="false" />'
                        + '<filter type="and">'
                        + '<filter type="and">'
                        + '<condition attribute="statecode" operator="eq" value="0" />'
                        + '<condition attribute="sxp_partynumber" operator="null"/>'
                        + '</filter>'
                        + '</filter>'
                        + '</entity>'
                        + '</fetch>';
                    partyContactGrid.setFilterXml(fetchXml);
                    partyContactGrid.refresh();
                }
            }
        };

        /*****************************************/
        
        //Owner: Shivanshu Sharma
        //Copy Installation Address to mailing address if both are same
        var onChangeIsMailingAdress = function (executionContext) {
            var formContext = executionContext.getFormContext();
            onLoadIsMailingAddress(executionContext);
            var isMailingAddress = formContext.getAttribute(FieldNames.IsMailingAddressSameAsInstallationAddress).getValue();
            if (isMailingAddress) {
                var address1Name = formContext.getAttribute(FieldNames.Address1Name).getValue();
                formContext.getAttribute(FieldNames.Address2Name).setValue(address1Name);
                var address1Street = formContext.getAttribute(FieldNames.Adddress1Line1).getValue();
                formContext.getAttribute(FieldNames.Adddress2Line1).setValue(address1Street);
                var address1County = formContext.getAttribute(FieldNames.Address1County).getValue();
                formContext.getAttribute(FieldNames.Address2County).setValue(address1County);
                var address1City = formContext.getAttribute(FieldNames.Address1City).getValue();
                formContext.getAttribute(FieldNames.Address2City).setValue(address1City);
                var adddress1State = formContext.getAttribute(FieldNames.Address1State).getValue();
                formContext.getAttribute(FieldNames.Address2State).setValue(adddress1State);
                var address1Country = formContext.getAttribute(FieldNames.Address1Country).getValue();
                formContext.getAttribute(FieldNames.Address2Country).setValue(address1Country);
                var address1PostalCode = formContext.getAttribute(FieldNames.Address1PostalCode).getValue();
                formContext.getAttribute(FieldNames.Address2PostalCode).setValue(address1PostalCode);
            }
            else {
                formContext.getAttribute(FieldNames.Address2Name).setValue(null);
                formContext.getAttribute(FieldNames.Adddress2Line1).setValue(null);
                formContext.getAttribute(FieldNames.Address2County).setValue(null);
                formContext.getAttribute(FieldNames.Address2City).setValue(null);
                formContext.getAttribute(FieldNames.Address2State).setValue(null);
                formContext.getAttribute(FieldNames.Address2Country).setValue(null);
                formContext.getAttribute(FieldNames.Address2PostalCode).setValue(null);
            }
        };

        /*****************************************/
        //Owner: Shivanshu Sharma
        //Enable Mailing Address fields and filling the values
        var onLoadIsMailingAddress = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var isMailingAddress = formContext.getAttribute(FieldNames.IsMailingAddressSameAsInstallationAddress).getValue();
            if (isMailingAddress) {
                formContext.getControl(FieldNames.Adddress2Line1).setDisabled(true);
                formContext.getControl(FieldNames.Address2County).setDisabled(true);
                formContext.getControl(FieldNames.Address2City).setDisabled(true);
                formContext.getControl(FieldNames.Address2State).setDisabled(true);
                formContext.getControl(FieldNames.Address2Country).setDisabled(true);
                formContext.getControl(FieldNames.Address2PostalCode).setDisabled(true);
                var address1PostalCode = formContext.getAttribute(FieldNames.Address1PostalCode).getValue();
                //formContext.getAttribute(FieldNames.Address2PostalCode).setValue(address1PostalCode);
                var address1State = formContext.getAttribute(FieldNames.Address1State).getValue();
                //formContext.getAttribute(FieldNames.Address2State).setValue(address1State);
                var address1Street1 = formContext.getAttribute(FieldNames.Adddress1Line1).getValue();
                //formContext.getAttribute(FieldNames.Adddress2Line1).setValue(address1Street1);
                var address1County = formContext.getAttribute(FieldNames.Address1County).getValue();
                //formContext.getAttribute(FieldNames.Address2County).setValue(address1County);
                var address1City = formContext.getAttribute(FieldNames.Address1City).getValue();
                //formContext.getAttribute(FieldNames.Address2City).setValue(address1City);
                var address1Country = formContext.getAttribute(FieldNames.Address1Country).getValue();
                //formContext.getAttribute(FieldNames.Address2Country).setValue(address1Country);
            }
            else {
                formContext.getControl(FieldNames.Adddress2Line1).setDisabled(false);
                formContext.getControl(FieldNames.Address2County).setDisabled(false);
                formContext.getControl(FieldNames.Address2City).setDisabled(false);
                formContext.getControl(FieldNames.Address2State).setDisabled(false);
                formContext.getControl(FieldNames.Address2Country).setDisabled(false);
                formContext.getControl(FieldNames.Address2PostalCode).setDisabled(false);
            }
        };
        
        return {
            OnLoad: onLoad,
            OnChange: onChange,
            OnSave: onSave,
            SetAccountName: setAccountName
        };
    }());
}
