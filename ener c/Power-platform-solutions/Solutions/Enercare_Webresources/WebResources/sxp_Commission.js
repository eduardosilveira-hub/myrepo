var Commission;
if (Commission === undefined || Commission === null) {
    Commission = {};
    Commission = (function () {
        var EntityNames = {
            User: "systemuser",
            Commission: "sxp_commissions",
            Team: "team",
            ServiceCenter: "sxp_servicecenter",
            Order: "salesorder"
        };
        var FieldNames = {
            SalesOrder: "sxp_salesorder",
            AdjustmentReason: "sxp_adjustmentreason",
            DiscountPercent: "sxp_discountpercentage",
            Penalty: "sxp_penaltypercent",
            CommissionAmount: "sxp_commissionamount",
            SalesAgent: "sxp_salesagent",
            WageType: "sxp_wagetypes",
            PrimaryApprovalUser: "sxp_primaryapproveruser",
            PrimaryApprovalTeam: "sxp_primaryapprovernew",
            TierTwoOrThreeApproverUser: "sxp_tierapproveruser",
            TierTwoOrThreeApproverTeam: "sxp_tier23approval",
            CpiApproverUser: "sxp_cpiapproveruser",
            CpiApproverTeam: "sxp_cpiapproval",
            SalesAgent: "sxp_salesagent",
            InstallDate: "sxp_installdate",
            PaymentDate: "sxp_paymentrecieveddate",
            PrimaryApprovedStatus: "sxp_primaryapproved",
            TierTwoOrThreeApprovedStatus: "sxp_tier23approved",
            CpiApprovedStatus: "sxp_cpiapproved",
            PrimaryApprovalDate: "sxp_primaryapprovaldate",
            TierTwoOrThreeApprovalDate: "sxp_tier23approveddate",
            CpiApprovalDate: "sxp_cpiapproveddate",
            PrimaryApprovalAssignDate: "sxp_primaryapprovalassigndate",
            PrimaryApprovalButton: "PrimaryApprovalButton",
            TierTwoOrThreeApprovalButton: "TierTwoOrThreeApprovalButton",
            TierTwoOrThreeRejectionButton: "TierTwoOrThreeRejectionButton",
            SendBackPrimaryApprovalButton: "SendBackPrimaryApprovalButton",
            StatusReason: "statuscode",
            OverrideApproverNotes: "sxp_overrideapprovernotes",
            PrimaryApproverNotes: "sxp_primaryapprovernotes",
            CpiApporverNotes: "sxp_cpiapprovernotes",
            TotalCommissionAmount: "sxp_totalcommissionamountnew",
            OverDueAdjustment: "sxp_overdueadjustment",
            TotalInstalledCost: "sxp_totalinstalledcost"

        };
		       			   
	    var SectionNames = {
            CommissionLines: "commissionlines"
        };
		
		var TabNames = {
            CommissionSummary: "commissionsummary"
        };

        /*****************************************************/
        //Owner : Shikha Sinha
        // Function to be called onload of Commission form
        var onLoad = function (executionContext) {
            onloadAdjustmentReason();
            getDisocuntPercent(executionContext);
			showHideCommissionLinesSection(executionContext);
        };

        /*****************************************************/
        //Owner : Shikha Sinha
        // Function to be called on change of fields on Commission form
        var onChange = function (executionContext) {
            getDisocuntPercent(executionContext);
        };

        /*****************************************************/
        //Owner : Shikha Sinha
        // Function to be called onsave  of Spiff form
        var onSave = function (executionContext) {
            onSaveCommission(executionContext);
			showHideCommissionLinesSection(executionContext);
        };

        var isPrimaryApproverRejected = false;
        var isOverRideApproverRejected = false;
        var isCpiApproverRejected = false;

        /********************************************************************************/
        //Owner-Shikha Sinha
        //Created On- 16/09/2021
        //Hide Optionset values of attribute 'Adjustment Reason'
        var onloadAdjustmentReason = function () {
            var formType = Xrm.Page.ui.getFormType();
            if (formType == 1) {
                //Remove options - 5.00 - 9.99% Discount,10.00 - 14.99% Discount and 15.00% or greater Discount options.
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450000);
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450001);
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450002);
            }
        };

        /********************************************************************************/
        //Owner-Shikha Sinha
        //Created On- 16/09/2021
        //Get DiscountPercent to set penalty
        var getDisocuntPercent = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var discountValue = formContext.getAttribute(FieldNames.DiscountPercent);
            if (discountValue != null && discountValue.getValue() !== null && discountValue.getValue() !== undefined) {
                discountValue = discountValue.getValue();
                setPenaltyPercent(formContext, discountValue);
            }
            else {
                formContext.getAttribute(FieldNames.Penalty).setValue(0);
                onloadAdjustmentReason();
            }
        };

        /********************************************************************************/
        //Owner-Shikha Sinha
        //Created On- 16/09/2021
        //Set AdjustmentReason field
        var setAdjustmentReason = function (context, discount) {
            if ((discount >= 0) && (discount <= 4.99)) {
                context.getAttribute(FieldNames.AdjustmentReason).setValue(null);
            }
            else if ((discount >= 5) && (discount <= 9.99)) {
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450001);
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450002);
                context.getAttribute(FieldNames.AdjustmentReason).setValue(275450000);
            }
            else if ((discount >= 10) && (discount <= 14.99)) {
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450000);
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450002);
                //Xrm.Page.getControl(FieldNames.AdjustmentReason).addOption(275450001);
                context.getAttribute(FieldNames.AdjustmentReason).setValue(275450001);
            }
            else if (discount == 15) {
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450000);
                Xrm.Page.getControl(FieldNames.AdjustmentReason).removeOption(275450001);
                //Xrm.Page.getControl(FieldNames.AdjustmentReason).addOption(275450002);
                context.getAttribute(FieldNames.AdjustmentReason).setValue(275450002);
            }
            else {
                context.getAttribute(FieldNames.AdjustmentReason).setValue(null);
            }
        };

        /********************************************************************************/
        //Owner-Shikha Sinha
        //Created On- 16/09/2021
        //Set Penalty field
        var setPenaltyPercent = function (context, discount) {
            var commissionCalculation = 0;
            var commission = context.getAttribute(FieldNames.TotalInstalledCost); //fix
            if (commission != null && commission.getValue() !== null && commission.getValue() !== undefined) {
                commission = commission.getValue();
                if ((discount >= 0) && (discount <= 4.99)) {
                    commissionCalculation = 0;
                    context.getAttribute(FieldNames.Penalty).setValue(commissionCalculation);

                }
                else if ((discount >= 5) && (discount <= 9.99)) {
                    commissionCalculation = commission * 0.01;
                    context.getAttribute(FieldNames.Penalty).setValue(commissionCalculation);
                }
                else if ((discount >= 10) && (discount <= 14.99)) {
                    commissionCalculation = commission * 0.02;
                    context.getAttribute(FieldNames.Penalty).setValue(commissionCalculation);
                }
                else if (discount >= 15) {
                    commissionCalculation = commission * 0.03;
                    //commissionCalculation = 0;
                    context.getAttribute(FieldNames.Penalty).setValue(commissionCalculation);

                }

                else {
                    context.getAttribute(FieldNames.Penalty).setValue(0);

                }
            }


        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Functionality onclick of Primary approval button
        var onClickPrimaryApproval = function (formContext) {
            var confirmStrings = { text: "Click on Approve to Approve the request. Click on Reject to Reject the request and send commission back to RSC for their review.", title: "Confirm", confirmButtonLabel: "Approve", cancelButtonLabel: "Reject" };
            Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
                function (success) {
                    if (success.confirmed) {
                        var numberOfDays = CalculateDiffInDays(formContext);
                        if (numberOfDays == -1) {
                            Xrm.Utility.alertDialog("Install Date Or Payment Date is not having any data.");
                        }
                        else {
                            getPrimaryServiceCenter(formContext, numberOfDays, FieldNames.PrimaryApprovalButton);
                        }
                    }
                    else if (success.confirmed == false) {
                        formContext.getAttribute(FieldNames.PrimaryApproverNotes).setRequiredLevel('required');
                        formContext.getControl(FieldNames.PrimaryApproverNotes).setDisabled(false);
                        formContext.getControl(FieldNames.PrimaryApproverNotes).setFocus();
                        isPrimaryApproverRejected = true;
                        formContext.ui.setFormNotification("Please Fill the Primary Approval Notes and Save the record to proceed with Rejection Of Commission", "WARNING", "PrimaryApproverRejection");
                        //Modified by - Shikha
                        formContext.getAttribute(FieldNames.PrimaryApprovedStatus).setValue(275450001);
                        SetUserLookup(formContext, FieldNames.PrimaryApprovalUser);
                        formContext.getAttribute(FieldNames.PrimaryApprovalDate).setValue(new Date());
                        formContext.getAttribute(FieldNames.StatusReason).setValue(1);
                    }
                    else {
                        formContext.getControl(FieldNames.PrimaryApproverNotes).setDisabled(true);
                        formContext.getAttribute(FieldNames.PrimaryApproverNotes).setRequiredLevel('none');
                    }

                });
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Functionality onclick of TierTwoOrThree approval button
        var onClickTierTwoOrThreeApproval = function (formContext) {
            var confirmStrings = { text: "Click on Approve to Approve the request and send it to CPI . Click on Reject to Reject the commission", title: "Confirm", confirmButtonLabel: "Approve", cancelButtonLabel: "Reject" };
            Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
                function (success) {
                    var numberOfDays = 0;
                    if (success.confirmed) {
                        getPrimaryServiceCenter(formContext, numberOfDays, FieldNames.TierTwoOrThreeApprovalButton);
                    }
                    else if (success.confirmed == false) {
                        formContext.getAttribute(FieldNames.OverrideApproverNotes).setRequiredLevel('required');
                        formContext.getControl(FieldNames.OverrideApproverNotes).setDisabled(false);
                        formContext.getControl(FieldNames.OverrideApproverNotes).setFocus();
                        isOverRideApproverRejected = true;
                        formContext.ui.setFormNotification("Please Fill the Rejection Reason and save the Record to proceed with Rejection Of Commission", "WARNING", "TierTwoOrThreeApproverRejection");
                    }
                    else {
                        formContext.getAttribute(FieldNames.OverrideApproverNotes).setRequiredLevel('none');
                        formContext.getControl(FieldNames.OverrideApproverNotes).setDisabled(true);
                    }
                });
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Functionality onclick of CPI approval button
        var onClickCpiApproval = function (formContext) {
            var confirmStrings = { text: "Click on Approve to Approve the request or Click on Reject to Reject the commission", title: "Confirm", confirmButtonLabel: "Approve", cancelButtonLabel: "Reject" };
            Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
                function (success) {
                    if (success.confirmed) {
                        SetUserLookup(formContext, FieldNames.CpiApproverUser);
                        formContext.getAttribute(FieldNames.CpiApprovedStatus).setValue(275450000);
                        formContext.getAttribute(FieldNames.CpiApprovalDate).setValue(new Date());
                        formContext.getAttribute(FieldNames.StatusReason).setValue(275450003);
                        formContext.data.entity.refresh(true).then(function () {
                            var entityId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                            openEntityForm(EntityNames.Commission, entityId);
                        });
                    }
                    else if (success.confirmed == false) {
                        formContext.getAttribute(FieldNames.CpiApporverNotes).setRequiredLevel('required');
                        formContext.getControl(FieldNames.CpiApporverNotes).setDisabled(false);
                        formContext.getControl(FieldNames.CpiApporverNotes).setFocus();
                        isCpiApproverRejected = true;
                        formContext.ui.setFormNotification("Please Fill the Rejection Reason and save the record to proceed with Rejection Of Commission", "ERROR", "CpiApproverRejection");
                    }
                    else {
                        formContext.getControl(FieldNames.CpiApporverNotes).setDisabled(true);
                        formContext.getAttribute(FieldNames.CpiApporverNotes).setRequiredLevel('none');
                    }
                });
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Logic on visiblity of Primary approval button
        var showHidePrimaryApprovalButton = function (formContext) {
            return (new Promise(function (resolve, reject) {
                try {
                    var primaryApprovalStatus = formContext.getAttribute(FieldNames.PrimaryApprovedStatus).getValue();
                    var tierTowOrThreeApprovedStatus = formContext.getAttribute(FieldNames.TierTwoOrThreeApprovedStatus).getValue();
                    var cpiApprovalStatus = formContext.getAttribute(FieldNames.CpiApprovedStatus).getValue();
                    var primaryApprovalTeam = formContext.getAttribute(FieldNames.PrimaryApprovalTeam).getValue();
                    var tierTwoOrThreeApprovalTeam = formContext.getAttribute(FieldNames.TierTwoOrThreeApproverTeam).getValue();
                    var cpiApprovalTeam = formContext.getAttribute(FieldNames.CpiApproverTeam).getValue();
                    if (formContext.ui.getFormType() !== 1 && tierTwoOrThreeApprovalTeam == null &&
                        cpiApprovalTeam == null && (primaryApprovalStatus == null || primaryApprovalStatus == 275450001 || cpiApprovalStatus == 275450001)) {
                        var teamId = primaryApprovalTeam !== null && primaryApprovalTeam !== undefined ? primaryApprovalTeam[0].id : "";
                        if (teamId !== "") {
                            var context = Xrm.Utility.getGlobalContext();
                            var loggedInUserId = context.userSettings.userId.replace("{", "").replace("}", "");
                            var query = "?$filter=teamid eq '" + teamId + "'&$expand=teammembership_association($filter=systemuserid eq '" + loggedInUserId + "')";
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.Team, query).then(
                                function success(result) {
                                    if (result.entities.length > 0) {
                                        if (result.entities[0].teammembership_association.length) {
                                            resolve(true)
                                        }
                                        else {
                                            resolve(false);
                                        }
                                    }
                                    else {
                                        resolve(false);
                                    }
                                },
                                function (error) {
                                    resolve(false);
                                }
                            );
                        } else {
                            resolve(false);
                        }
                    }
                    else if (formContext.ui.getFormType() == 1 ||
                        (primaryApprovalStatus !== null && primaryApprovalStatus !== undefined) || tierTowOrThreeApprovedStatus !== null ||
                        cpiApprovalStatus !== null || primaryApprovalTeam == null
                    ) {
                        resolve(false);
                    }
                }
                catch (error) {
                    resolve(false);
                    console.log(error);
                }
            }));
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Logic on visiblity of TwoThreeApproval button
        var showHideTierTwoThreeApprovalButton = function (formContext) {
            return (new Promise(function (resolve, reject) {
                try {
                    var primaryApprovalStatus = formContext.getAttribute(FieldNames.PrimaryApprovedStatus).getValue();
                    var cpiApprovalStatus = formContext.getAttribute(FieldNames.CpiApprovedStatus).getValue();
                    var tierTwoOrThreeApproverTeam = formContext.getAttribute(FieldNames.TierTwoOrThreeApproverTeam).getValue();
                    var tierTwoOrThreeApproverUser = formContext.getAttribute(FieldNames.TierTwoOrThreeApproverUser).getValue();
                    var statusReason = formContext.getAttribute(FieldNames.StatusReason).getValue();
                    if (formContext.ui.getFormType() !== 1 && tierTwoOrThreeApproverTeam !== null &&
                        (tierTwoOrThreeApproverUser == null || tierTwoOrThreeApproverUser == undefined)) {
                        var teamId = tierTwoOrThreeApproverTeam !== null && tierTwoOrThreeApproverTeam !== undefined ? tierTwoOrThreeApproverTeam[0].id : "";
                        if (teamId !== "") {
                            var context = Xrm.Utility.getGlobalContext();
                            var loggedInUserId = context.userSettings.userId.replace("{", "").replace("}", "");
                            var query = "?$filter=teamid eq '" + teamId + "'&$expand=teammembership_association($filter=systemuserid eq '" + loggedInUserId + "')";
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.Team, query).then(
                                function success(result) {
                                    if (result.entities.length > 0) {
                                        if (result.entities[0].teammembership_association.length) {
                                            resolve(true)
                                        }
                                        else {
                                            resolve(false);
                                        }
                                    }
                                    else {
                                        resolve(false);
                                    }
                                },
                                function (error) {
                                    resolve(false);
                                }
                            );
                        } else {
                            resolve(false);
                        }
                    }
                    else if (formContext.ui.getFormType() == 1 ||
                        (tierTwoOrThreeApproverTeam == null && tierTwoOrThreeApproverTeam == undefined) ||
                        cpiApprovalStatus !== null ||
                        primaryApprovalStatus == null || statusReason !== 275450001
                    ) {
                        resolve(false);
                    }
                }
                catch (error) {
                    console.log(error);
                    resolve(false);
                }
            }));
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Logic on visiblity of CPI Approval button
        var showHideCpiApprovalButton = function (formContext) {
            return (new Promise(function (resolve, reject) {
                try {
                    var primaryApprovalStatus = formContext.getAttribute(FieldNames.PrimaryApprovedStatus).getValue();
                    var cpiApprovalStatus = formContext.getAttribute(FieldNames.CpiApprovedStatus).getValue();
                    var cpiApproverTeam = formContext.getAttribute(FieldNames.CpiApproverTeam).getValue();
                    var cpiApproverUser = formContext.getAttribute(FieldNames.CpiApproverUser).getValue();
                    if (cpiApproverTeam !== null && (cpiApproverUser == null || cpiApproverUser == undefined)) {
                        var teamId = cpiApproverTeam !== null && cpiApproverTeam !== undefined ? cpiApproverTeam[0].id : "";
                        if (teamId !== "") {
                            var context = Xrm.Utility.getGlobalContext();
                            var loggedInUserId = context.userSettings.userId.replace("{", "").replace("}", "");
                            var query = "?$filter=teamid eq '" + teamId + "'&$expand=teammembership_association($filter=systemuserid eq '" + loggedInUserId + "')";
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.Team, query).then(
                                function success(result) {
                                    if (result.entities.length > 0) {
                                        if (result.entities[0].teammembership_association.length) {
                                            resolve(true)
                                        }
                                        else {
                                            resolve(false);
                                        }
                                    }
                                    else {
                                        resolve(false);
                                    }
                                },
                                function (error) {
                                    resolve(false);

                                });
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else if (formContext.ui.getFormType() == 1 || (cpiApprovalStatus !== null && cpiApprovalStatus !== undefined) ||
                        primaryApprovalStatus == null || primaryApprovalStatus == undefined ||
                        (cpiApprovalStatus !== null && cpiApprovalStatus !== undefined) ||
                        cpiApproverTeam == null || cpiApproverTeam == undefined
                    ) {
                        resolve(false);
                    }



                }
                catch (error) {
                    resolve(false);
                    console.log(error);
                }
            }));
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Logic on set user lookup
        var SetUserLookup = function (formContext, fieldName) {
            var context = Xrm.Utility.getGlobalContext();
            var userId = context.userSettings.userId.replace("{", "").replace("}", "");
            var userName = context.userSettings.userName;
            Utilities.setLookupField(formContext, fieldName, userId, userName, EntityNames.User);
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Function to get Primary service center
        var getPrimaryServiceCenter = function (formContext, numberOfDays, buttonName) {
            var salesOrder = formContext.getAttribute(FieldNames.SalesOrder).getValue();
            if (salesOrder !== null && salesOrder !== undefined) {
                var salesOrderId = salesOrder[0].id.replace("{", "").replace("}", "");


                Xrm.WebApi.online.retrieveRecord(EntityNames.Order, salesOrderId, "?$select=_sxp_center_value").then(
                    function success(result) {
                        debugger;
                        if (result["_sxp_center_value"] !== null && result["_sxp_center_value"] !== undefined) {
                            var serviceCenterId = result["_sxp_center_value"];

                            var teamQuery = "";
                            if (buttonName == FieldNames.PrimaryApprovalButton) {
                                if (numberOfDays < 30) {
                                    teamQuery = "?$select=sxp_name,_sxp_primaryservicecenterteam_value,_sxp_overridethreeservicecenterteam_value,_sxp_overridetwoservicecenterteam_value,_sxp_cpiteam_value&$filter=sxp_servicecenterid eq '" + serviceCenterId + "'" + "&$expand=sxp_cpiteam($select=name)";
                                    getApprovalTeam(formContext, FieldNames.CpiApproverTeam, teamQuery, buttonName);
                                }
                                else if (numberOfDays >= 30 && numberOfDays <= 60) {
                                    teamQuery = "?$select=sxp_name,_sxp_primaryservicecenterteam_value,_sxp_overridethreeservicecenterteam_value,_sxp_overridetwoservicecenterteam_value,_sxp_cpiteam_value&$filter=sxp_servicecenterid eq '" + serviceCenterId + "'" + "&$expand=sxp_overridetwoservicecenterteam($select=name)";
                                    getApprovalTeam(formContext, FieldNames.TierTwoOrThreeApproverTeam, teamQuery, buttonName);
                                }
                                else if (numberOfDays > 61) {
                                    teamQuery = "?$select=sxp_name,_sxp_primaryservicecenterteam_value,_sxp_overridethreeservicecenterteam_value,_sxp_overridetwoservicecenterteam_value,_sxp_cpiteam_value&$filter=sxp_servicecenterid eq '" + serviceCenterId + "'" + "&$expand=sxp_overridethreeservicecenterteam($select=name)";
                                    getApprovalTeam(formContext, FieldNames.TierTwoOrThreeApproverTeam, teamQuery, buttonName);
                                }
                            }
                            else if (buttonName == FieldNames.TierTwoOrThreeApprovalButton || buttonName == FieldNames.TierTwoOrThreeRejectionButton) {
                                teamQuery = "?$select=sxp_name,_sxp_primaryservicecenterteam_value,_sxp_overridethreeservicecenterteam_value,_sxp_overridetwoservicecenterteam_value,_sxp_cpiteam_value&$filter=sxp_servicecenterid eq '" + serviceCenterId + "'" + "&$expand=sxp_cpiteam($select=name)";
                                getApprovalTeam(formContext, FieldNames.CpiApproverTeam, teamQuery, buttonName);
                            }
                            else if (buttonName == FieldNames.SendBackPrimaryApprovalButton) {
                                teamQuery = "?$select=sxp_name,_sxp_primaryservicecenterteam_value,_sxp_overridethreeservicecenterteam_value,_sxp_overridetwoservicecenterteam_value,_sxp_cpiteam_value&$filter=sxp_servicecenterid eq '" + serviceCenterId + "'" + "&$expand=sxp_primaryservicecenterteam($select=name)";
                                getApprovalTeam(formContext, FieldNames.PrimaryApprovalTeam, teamQuery, buttonName);
                            }
                        }
                        else {
                            Xrm.Utility.alertDialog("Sales Agent is not associated with any Primary Service Center.")
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Function to get Approval team
        var getApprovalTeam = function (formContext, fieldName, query, buttonName) {
            var totalCommissionAmount = formContext.getAttribute(FieldNames.TotalCommissionAmount).getValue();
            Xrm.WebApi.retrieveMultipleRecords(EntityNames.ServiceCenter, query).then(
                function success(result) {
                    if (result.entities.length > 0) {
                        if (buttonName == FieldNames.PrimaryApprovalButton && fieldName == FieldNames.CpiApproverTeam) {
                            SetUserLookup(formContext, FieldNames.PrimaryApprovalUser);
                            formContext.getAttribute(FieldNames.PrimaryApprovedStatus).setValue(275450000);
                            formContext.getAttribute(FieldNames.PrimaryApprovalDate).setValue(new Date());
                            formContext.getAttribute(FieldNames.StatusReason).setValue(275450002);
                            formContext.getAttribute(FieldNames.CpiApproverUser).setValue(null);
                            formContext.getAttribute(FieldNames.CpiApprovalDate).setValue(null);
                            if (result.entities[0].sxp_cpiteam !== null && result.entities[0].sxp_cpiteam !== undefined) {
                                var teamName = result.entities[0].sxp_cpiteam.name;
                                var teamId = result.entities[0].sxp_cpiteam.teamid
                                Utilities.setLookupField(formContext, fieldName, teamId, teamName, EntityNames.Team);
                            }
                        }
                        else if (buttonName == FieldNames.PrimaryApprovalButton && fieldName == FieldNames.TierTwoOrThreeApproverTeam) {
                            SetUserLookup(formContext, FieldNames.PrimaryApprovalUser);
                            formContext.getAttribute(FieldNames.PrimaryApprovedStatus).setValue(275450000);
                            formContext.getAttribute(FieldNames.PrimaryApprovalDate).setValue(new Date());
                            formContext.getAttribute(FieldNames.StatusReason).setValue(275450001);
                            formContext.getAttribute(FieldNames.OverDueAdjustment).setValue(totalCommissionAmount);
                            formContext.getAttribute(FieldNames.TierTwoOrThreeApproverUser).setValue(null);
                            formContext.getAttribute(FieldNames.TierTwoOrThreeApprovalDate).setValue(null);
                            if (result.entities[0].sxp_overridetwoservicecenterteam !== null && result.entities[0].sxp_overridetwoservicecenterteam !== undefined) {
                                var teamName = result.entities[0].sxp_overridetwoservicecenterteam.name;
                                var teamId = result.entities[0].sxp_overridetwoservicecenterteam.teamid
                                Utilities.setLookupField(formContext, fieldName, teamId, teamName, EntityNames.Team);
                            }
                            else if (result.entities[0].sxp_overridethreeservicecenterteam !== null && result.entities[0].sxp_overridethreeservicecenterteam !== undefined) {
                                var teamName = result.entities[0].sxp_overridethreeservicecenterteam.name;
                                var teamId = result.entities[0].sxp_overridethreeservicecenterteam.teamid;
                                Utilities.setLookupField(formContext, fieldName, teamId, teamName, EntityNames.Team);
                            }

                        }
                        else if (buttonName == FieldNames.TierTwoOrThreeApprovalButton && fieldName == FieldNames.CpiApproverTeam) {
                            SetUserLookup(formContext, FieldNames.TierTwoOrThreeApproverUser);
                            formContext.getAttribute(FieldNames.OverDueAdjustment).setValue(0.00);
                            formContext.getAttribute(FieldNames.TierTwoOrThreeApprovedStatus).setValue(275450000);
                            formContext.getAttribute(FieldNames.TierTwoOrThreeApprovalDate).setValue(new Date());
                            formContext.getAttribute(FieldNames.StatusReason).setValue(275450002);
                            formContext.getAttribute(FieldNames.CpiApproverUser).setValue(null);
                            formContext.getAttribute(FieldNames.CpiApprovalDate).setValue(null);
                            if (result.entities[0].sxp_cpiteam !== null && result.entities[0].sxp_cpiteam !== undefined) {
                                var teamName = result.entities[0].sxp_cpiteam.name;
                                var teamId = result.entities[0].sxp_cpiteam.teamid
                                Utilities.setLookupField(formContext, fieldName, teamId, teamName, EntityNames.Team);
                            }
                        }
                        else if (buttonName == FieldNames.TierTwoOrThreeRejectionButton && fieldName == FieldNames.CpiApproverTeam) {
                            SetUserLookup(formContext, FieldNames.TierTwoOrThreeApproverUser);
                            formContext.getAttribute(FieldNames.OverDueAdjustment).setValue(totalCommissionAmount);
                            formContext.getAttribute(FieldNames.TierTwoOrThreeApprovedStatus).setValue(275450001);
                            formContext.getAttribute(FieldNames.TierTwoOrThreeApprovalDate).setValue(new Date());
                            formContext.getAttribute(FieldNames.StatusReason).setValue(275450002);
                            formContext.getAttribute(FieldNames.CpiApproverUser).setValue(null);
                            formContext.getAttribute(FieldNames.CpiApprovalDate).setValue(null);
                            if (result.entities[0].sxp_cpiteam !== null && result.entities[0].sxp_cpiteam !== undefined) {
                                var teamName = result.entities[0].sxp_cpiteam.name;
                                var teamId = result.entities[0].sxp_cpiteam.teamid
                                Utilities.setLookupField(formContext, fieldName, teamId, teamName, EntityNames.Team);
                            }
                        }
                        else if (buttonName == FieldNames.SendBackPrimaryApprovalButton && fieldName == FieldNames.PrimaryApprovalTeam) {
                            formContext.getAttribute(FieldNames.PrimaryApprovedStatus).setValue(null);
                            formContext.getAttribute(FieldNames.PrimaryApprovalDate).setValue(null);
                            formContext.getAttribute(FieldNames.StatusReason).setValue(275450000);
                            formContext.getAttribute(FieldNames.PrimaryApprovalUser).setValue(null);
                            formContext.getAttribute(FieldNames.PrimaryApprovalAssignDate).setValue(new Date());
                            if (result.entities[0].sxp_primaryservicecenterteam !== null && result.entities[0].sxp_primaryservicecenterteam !== undefined) {
                                var teamName = result.entities[0].sxp_primaryservicecenterteam.name;
                                var teamId = result.entities[0].sxp_primaryservicecenterteam.teamid
                                Utilities.setLookupField(formContext, fieldName, teamId, teamName, EntityNames.Team);
                            }
                        }
                        if (formContext.data.entity.getIsDirty()) {
                            formContext.data.entity.refresh(true).then(function () {
                                if (buttonName !== FieldNames.TierTwoOrThreeRejectionButton || buttonName == FieldNames.SendBackPrimaryApprovalButton) {
                                    var entityId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                                    openEntityForm(EntityNames.Commission, entityId);
                                }
                            });
                        }
                    }
                    else {
                        Xrm.Utility.alertDialog("Relevant Approval Team in the Primary Service Center of Sales Agent is not found. Please contact System Admin");
                    }
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Function to Open an entity form
        var openEntityForm = function (entityName, entityId) {
            var entityFormOptions = {};
            entityFormOptions["entityName"] = entityName;
            entityFormOptions["entityId"] = entityId;
            Xrm.Navigation.openForm(entityFormOptions, null);
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Function to calculate difference in Days
        var CalculateDiffInDays = function (formContext) {
            var installDate = formContext.getAttribute(FieldNames.InstallDate).getValue();
            var paymentDate = formContext.getAttribute(FieldNames.PaymentDate).getValue();
            if (installDate !== undefined && installDate !== null && paymentDate !== undefined && paymentDate !== null) {
                var diffTime = Math.abs(paymentDate - installDate);
                var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays
            }
            else {
                return -1;
            }
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Function to send request back to primary approval
        var sendBackPrimaryApproval = function (formContext) {
            var confirmStrings = { text: "Please make sure the commission data is correct before sending it back to Primary Approval.", title: "Confirm", confirmButtonLabel: "Send Back", cancelButtonLabel: "Reject" };
            Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
                function (success) {
                    if (success.confirmed) {
                        getPrimaryServiceCenter(formContext, 0, FieldNames.SendBackPrimaryApprovalButton);
                    }
                });
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Function for visibliy of Show/hide Primary Approval button
        var showHideSendBackPrimaryApproval = function (formContext) {
            var primaryApprovalStatus = formContext.getAttribute(FieldNames.PrimaryApprovedStatus).getValue();
            var primaryApproverTeam = formContext.getAttribute(FieldNames.PrimaryApprovalTeam).getValue();
            if (formContext.ui.getFormType() !== 1 && (primaryApproverTeam == null || primaryApproverTeam == undefined) && primaryApprovalStatus == 275450001) {
                return true;
            }
            else {
                return false;
            }
        };

        /********************************************************************************/
        //Owner-Shivanshu Sharma
        //Function to be called on save of commission
        var onSaveCommission = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() !== 1) {
                var primaryApprovernotes = formContext.getAttribute(FieldNames.PrimaryApproverNotes).getValue();
                var overrideApproverNotes = formContext.getAttribute(FieldNames.OverrideApproverNotes).getValue();
                var cpiApproverNotes = formContext.getAttribute(FieldNames.CpiApporverNotes).getValue();
                var primaryApprovalTeam = formContext.getAttribute(FieldNames.PrimaryApprovalTeam).getValue();
                var tierTwoOrThreeApproverTeam = formContext.getAttribute(FieldNames.TierTwoOrThreeApproverTeam).getValue();
                var cpiApprovalTeam = formContext.getAttribute(FieldNames.CpiApproverTeam).getValue();
                var statusReason = formContext.getAttribute(FieldNames.StatusReason).getValue();
                if (primaryApprovernotes !== "" &&
                    (tierTwoOrThreeApproverTeam == null || tierTwoOrThreeApproverTeam == undefined) &&
                    (cpiApprovalTeam == null || cpiApprovalTeam == undefined) && statusReason == 275450000 && isPrimaryApproverRejected
                ) {
                    // call for rejection by primary approver
                    formContext.ui.clearFormNotification("PrimaryApproverRejection");
                    formContext.getAttribute(FieldNames.PrimaryApprovalAssignDate).setValue(null);
                    formContext.getAttribute(FieldNames.PrimaryApprovedStatus).setValue(275450001);
                    formContext.getAttribute(FieldNames.PrimaryApprovalDate).setValue(new Date());
                    formContext.getAttribute(FieldNames.PrimaryApprovalTeam).setValue(null);
                    formContext.getAttribute(FieldNames.StatusReason).setValue(1);
                    SetUserLookup(formContext, FieldNames.PrimaryApprovalUser);
                    formContext.ui.refreshRibbon(true);

                }
                else if (overrideApproverNotes !== "" && (cpiApprovalTeam == null || cpiApprovalTeam == undefined) &&
                    tierTwoOrThreeApproverTeam !== null && tierTwoOrThreeApproverTeam !== undefined &&
                    primaryApprovalTeam !== null && primaryApprovalTeam !== undefined && isOverRideApproverRejected) {
                    // call for recection by Tier 2or tier 3 approver
                    formContext.ui.clearFormNotification("TierTwoOrThreeApproverRejection");
                    getPrimaryServiceCenter(formContext, 0, FieldNames.TierTwoOrThreeRejectionButton);
                }
                    // Modified by Shikha Sinha
                else if (cpiApproverNotes !== "" && cpiApprovalTeam !== null && cpiApprovalTeam !== undefined &&
                    primaryApprovalTeam !== null && primaryApprovalTeam !== undefined && isCpiApproverRejected) {
                    // call for recection by Tier 2or tier 3 approver
                    formContext.ui.clearFormNotification("CpiApproverRejection");
                    SetUserLookup(formContext, FieldNames.CpiApproverUser);
                    formContext.getAttribute(FieldNames.TierTwoOrThreeApproverTeam).setValue(null);
                    formContext.getAttribute(FieldNames.CpiApproverTeam).setValue(null);
                    formContext.getAttribute(FieldNames.CpiApprovedStatus).setValue(275450001);
                    formContext.getAttribute(FieldNames.CpiApprovalDate).setValue(new Date());
                    formContext.getAttribute(FieldNames.TierTwoOrThreeApproverUser).setValue(null);
                    formContext.getAttribute(FieldNames.TierTwoOrThreeApprovalDate).setValue(null);
                    SetUserLookup(formContext, FieldNames.PrimaryApprovalUser);
                    formContext.getAttribute(FieldNames.StatusReason).setValue(275450006);
                    formContext.ui.refreshRibbon(true);
                }
            }
        };


        /*****************************************/
        //Owner : Prachi Goyal
        //Show/Hide Commission Line (Subgrid) Section based on Order Type of Agreement
        var showHideCommissionLinesSection = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var salesOrder = formContext.getAttribute(FieldNames.SalesOrder).getValue();
            if (salesOrder !== null && salesOrder !== undefined) {
                var salesOrderId = salesOrder[0].id.replace("{", "").replace("}", "");
                Xrm.WebApi.online.retrieveRecord(EntityNames.Order, salesOrderId, "?$select=sxp_typeofagreement").then(
                    function success(result) {
                        if (result["sxp_typeofagreement"] !== null && result["sxp_typeofagreement"] !== undefined) {
                            var typeOfAgreement = result["sxp_typeofagreement"];
							if (typeOfAgreement === 275450001) {
								formContext.ui.tabs.get(TabNames.CommissionSummary).sections.get(SectionNames.CommissionLines).setVisible(true);
                            }
							else if(typeOfAgreement === 275450000){
								formContext.ui.tabs.get(TabNames.CommissionSummary).sections.get(SectionNames.CommissionLines).setVisible(false);
							}
                    }
					},
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
			}
        };
		
        return {
            OnLoad: onLoad,
            OnChange: onChange,
            OnSave: onSave,
            OnClickPrimaryApproval: onClickPrimaryApproval,
            OnClickTierTwoOrThreeApproval: onClickTierTwoOrThreeApproval,
            OnClickCpiApproval: onClickCpiApproval,
            ShowHidePrimaryApprovalButton: showHidePrimaryApprovalButton,
            ShowHideTierTwoThreeApprovalButton: showHideTierTwoThreeApprovalButton,
            ShowHideCpiApprovalButton: showHideCpiApprovalButton,
            SendBackPrimaryApproval: sendBackPrimaryApproval,
            ShowHideSendBackPrimaryApproval: showHideSendBackPrimaryApproval

        };
    }());
}
