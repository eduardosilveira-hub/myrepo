var Order;
if (Order === undefined || Order === null) {
    Order = {};
    Order = (function () {
        var EntityNames = {
            CreditCheck: "sxp_creditcheck",
            Account: "account",
            ServiceCenter: "sxp_servicecenter",
            AdvantageRate: "sxp_advantagerates",
            ProfitCenter: "sxp_profitcenter",
            Discount: "sxp_discount",
            Order: "salesorder",
            PriceList: "pricelevel",
            Agreement: "adobe_agreement",
            Team: "team",
            TeamMembership: "teammembership",
            OrderProduct: "salesorderdetail",
            AgreemetFundingLine: "sxp_agreementfundingline"
        };
        var TabNames = {
            PaymentDetails: "paymentdetailsTab",
            Installation: "installationTab",
            AgreementSummary: "agreementsummaryTab",
            FinalizeAgrement: "finalizeagreementTab",
            ProductandPricing: "product&pricingTab",
            SignatureTab: "signatureTab",
            Customer: "customerverificationTab",
            Welcome: "welcome"
        };
        var SectionNames = {
            AgreementSummaryPay: "agreementsummarySection(PaymentDetails)",
            AgreementSummaryInstall: "agreementsummarySection(Installation)",
            MonthlyLeaseDeffYes: "monthlyleasepaymentsSection",
            MonthlyLeaseDeffNo: "monthlypaymentSection",
            PaymentSection: "paymentDetailsSection",
            CalculateAdvantage: "calculateadvantageTax",
            TaxInformation: "taxinformationSection",
            Agreement: "adobesign",
            WetSignatureAgreement: "wetsignatureagreement",
            AgreementParagraph: "agreementParaSection",
            IHaveRead: "ihavereadSection",
			OrderDepartmentInstall: "orderdepartmentsection(installation)"

        };
        var FieldNames = {
            CoHomeOwnerSigning: "sxp_cohome",
            DiscountPercent: "discountpercentage",
            DiscountAmount: "discountamount",
            InstalledCost: "totallineitemamount",
            CoHomeOwner: "sxp_cohomeowner",
            CustomerSigningDigitally: "sxp_customercomfortablesigningdigitally",
            SignatureType: "sxp_signaturetype",
            TypeOfAgreement: "sxp_typeofagreement",
            EasyPayOptOut: "sxp_easypayoptout",
            EasyPayMethod: "sxp_easypaymethod",
            BankAccount: "sxp_bankaccount",
            CreditCard: "sxp_creditcard",
            DeferredRate: "sxp_deferredrate",
            MonthlyPayment: "sxp_monthlypayment",
            CreditCheckLookup: "sxp_creditcheck",
            CreditRemaining: "sxp_creditremaining",
            TotalInstalledCost: "sxp_totalinstalledcost",
            AccountLookup: "customerid",
            ShipToLine1: "shipto_line1",
            ShipToLine2: "shipto_line2",
            ShipToCity: "shipto_city",
            ShipToState: "shipto_stateorprovince",
            ShipToPostalCode: "shipto_postalcode",
            ShipToCountry: "shipto_country",
            ShipToName: "shipto_name",
            ShipToCounty: "sxp_shiptocounty",
            BillToCounty: "sxp_billtocounty",
            BillToName: "billto_name",
            BillToLine1: "billto_line1",
            BillToLine2: "billto_line2",
            BillToCity: "billto_city",
            BillToState: "billto_stateorprovince",
            BillToPostalCode: "billto_postalcode",
            BillToCountry: "billto_country",
            ServiceCenterLookup: "sxp_center",
            AdvantageTerm: "sxp_advantageterm",
            MonthlyRate: "sxp_monthlyrate",
            AgreementAmount: "sxp_agreementamount",
            BundleRate: "sxp_bundlerate",
            DimensionTranche: "sxp_dimensiontranche",
            DimensionCenter: "sxp_dimensionservicecenter",
            DimensionFunctionalArea: "sxp_dimensionfunctionalarea",
            Service: "sxp_service",
            COIReceived: "sxp_coidocument",
            ActualInstallDate: "sxp_actualinstalldate",
            StarCustomerNumber: "sxp_starscustomernumber",
            PaymentReceivedDate: "sxp_paymentreceiveddate",
            EstimatedInstalledDate: "sxp_estimatedinstalldate",
            Ebilling: "sxp_ebilling",
            StatusReason: "statuscode",
            CustomerCode: "sxp_customercode",
            DiscountLookup: "sxp_discountlookup",
            IsBuyerAtleast65YearOld: "sxp_isbuyeratleast65yearsold",
            OwnerInitials: "sxp_ownersinitials",
            IsMailingAddressSameAsInstallationAddress: "sxp_ismailingaddresssameasinstallationaddress",
            WetSignature: "sxp_wetsignatureagreement",
            ReasonCode: "sxp_rreasoncode",
            ExplanationCode: "sxp_explanationcode",
            LinkedOrder: "sxp_linkedorder",
            PriceListLookp: "pricelevelid",
            Status: "statecode",
            Retrigger: "sxp_retrigger",
            BundleDiscountType: "sxp_bundlediscounttype",
            RelatedBundleSalesOrder: "sxp_relatedbundlesalesorder",
            OrderProducts: "sxp_orderproducts",
            AdvantageDiscountWater: "sxp_advantagemonthlydiscountwater",
            AdvantageDiscountHVAC: "sxp_advantagemonthlydiscounthvac",
            MonthlyTax: "sxp_monthlytaxamount",
            MonthlyTaxPercent: "sxp_monthlytax",
            TotalOfficialFees: "sxp_totalofficialfees",
            TotalAdvantagePayments: "sxp_totaladvantagepayments",
            CohomeOwnerFirstName: "sxp_cohomeownerfirstname",
            CohomeOwnerMiddleName: "sxp_cohomeownermiddlename",
            CohomeOwnerLastName: "sxp_cohomeownerlastname",
            ShippingOrigin: "ava_originaccount",
            AgreementStatus: "sxp_agreementstatus",
            EquipmentReplace: "sxp_equipmentreplace",
            SaltUsage: "sxp_saltusage",
            TotalTax: "sxp_totaltax",
            Notes: "sxp_notes",
            TotalOrderCost: "sxp_totalordercost",
            SignedAgreementDeliveredToCustomer: "sxp_signedagreementdeliveredtocustomer",
            InstalltinStageComplete: "sxp_installationstagecomplete",
            OverrideAddressValidation: "sxp_overrideaddressvalidation",
            AddressValidated: "sxp_addressvalidated",
            AutoInstallationAddress: "shipto_name",
            AutoMailingAddress: "billto_name"

        };
        var businessProcessStages = {
            customerVerification: "Customer Verification",
            productsAndPricing: "Products And Pricing",
            productAndPricing: "Product And Pricing",
            agreementReview: "Agreement Review",
            agreementSummary: "Agreement Summary",
            paymentDetail: "Payment Detail",
            finalizeAgreement: "Finalize Agreement",
            paymentDetails: "Payment Details",
            signature: "Signature",
            installation: "Installation",
            welcome: "Welcome"
        };

        const actionName = {
            retrieveCustomerCreditCards: "rm_RetrieveCustomerCreditCards"
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of CustomerVerification tab
        var customerVerificationFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_typeofagreement", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_orderproducts", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_service", disabled: false, requiredLevel: "required" },
            //Customer Verification
            { fieldName: "customerid", disabled: false, requiredLevel: "required" },
            { fieldName: "shipto_line1", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_shiptocounty", disabled: false, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: false, requiredLevel: "required" },
            { fieldName: "shipto_stateorprovince", disabled: false, requiredLevel: "required" },
            { fieldName: "shipto_postalcode", disabled: false, requiredLevel: "required" },
            { fieldName: "shipto_country", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: false, requiredLevel: "required" },
            { fieldName: "billto_line1", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_billtocounty", disabled: false, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: false, requiredLevel: "required" },
            { fieldName: "billto_stateorprovince", disabled: false, requiredLevel: "required" },
            { fieldName: "billto_postalcode", disabled: false, requiredLevel: "required" },
            { fieldName: "billto_country", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_creditcheck", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: false, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_estimatedinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of Products and pricing tab
        var productsAndPricingFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: false, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_estimatedinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of Agreement Review tab
        var agreementReviewFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: true, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_cohome", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_estimatedinstalldate", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of Agreement Summary tab
        var agreemntSummaryFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: true, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_estimatedinstalldate", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: false, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of Product and pricing tab
        var productAndPricingFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: false, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_estimatedinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of payment details tab
        var paymentDetailsFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: true, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: true, requiredLevel: "required" },
            { fieldName: "sxp_estimatedinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_easypaymethod", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: false, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of payment detail tab
        var paymentDetailFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: true, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: true, requiredLevel: "required" },
            { fieldName: "sxp_estimatedinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_agreementamount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of signature tab
        var signatureFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: true, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_estimatedinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: false, requiredLevel: "required" },
            { fieldName: "sxp_signaturetype", disabled: false, requiredLevel: "required" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_actualinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_paymentreceiveddate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_starscustomernumber", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: true, requiredLevel: "none" }
        ];

        /*****************************************/
        //Owner: Mervyn Martin
        //Set  fields on load of installation tab
        var installationFields = [
            //Welcome
            { fieldName: "sxp_center", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_typeofagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_orderproducts", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_service", disabled: true, requiredLevel: "none" },
            //Customer Verification
            { fieldName: "customerid", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_shiptocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "shipto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_ismailingaddresssameasinstallationaddress", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_name", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_line1", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_billtocounty", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_city", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_stateorprovince", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_postalcode", disabled: true, requiredLevel: "none" },
            { fieldName: "billto_country", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcheck", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_overrideaddressvalidation", disabled: true, requiredLevel: "none" },
            //Products and Pricing
            { fieldName: "sxp_discountlookup", disabled: true, requiredLevel: "none" },
            { fieldName: "discountamount", disabled: true, requiredLevel: "none" },
            { fieldName: "discountpercentage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_totalordercost", disabled: true, requiredLevel: "none" },
            //Agreement Summary
            { fieldName: "sxp_ihavereadandreviewedtheagreement", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohome", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_estimatedinstalldate", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerfirstname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownermiddlename", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_cohomeownerlastname", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_equipmentreplace", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_isbuyeratleast65yearsold", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_saltusage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_notes", disabled: true, requiredLevel: "none" },
            //Payment
            { fieldName: "sxp_ebilling", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypayoptout", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_easypaymethod", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_creditcard", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_bankaccount", disabled: true, requiredLevel: "none" },
            //Signature
            { fieldName: "sxp_customercomfortablesigningdigitally", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_signaturetype", disabled: true, requiredLevel: "none" },
            //Installation
            { fieldName: "sxp_coidocument", disabled: false, requiredLevel: "recommended" },
            { fieldName: "sxp_actualinstalldate", disabled: false, requiredLevel: "recommended" },
            { fieldName: "sxp_paymentreceiveddate", disabled: false, requiredLevel: "recommended" },
            { fieldName: "sxp_starscustomernumber", disabled: false, requiredLevel: "recommended" },
            { fieldName: "sxp_billingrentalorder", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_dimensiontranche", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_dimensionservicecenter", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_dimensionfunctionalarea", disabled: false, requiredLevel: "none" },
            { fieldName: "sxp_integrationstatus", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_integrationmessage", disabled: true, requiredLevel: "none" },
            { fieldName: "sxp_retrigger", disabled: false, requiredLevel: "none" }
        ];


        var cancelOrder = false;
        var flag = 0;
        var globalFormContext;
        var recordcount = null;

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on load on Order form
        var onLoad = function (executionContext) {
            setSalesOrderGuid(executionContext);
            setDefaultServiceCenter(executionContext);
            showCustomerLookup(executionContext);
            //mandateCoHomeOwner(executionContext);
            hideOptionsetValues(executionContext);
            showHideAgreementSection(executionContext);
            showHideFields(executionContext);
            showHideSaltUsage(executionContext);
            showHideStateAddendumFields(executionContext);
            onLoadDiscountLookup(executionContext);
            showHideMonthlyLeasePaymentsSection(executionContext);
            //onChangeInstalledCost(executionContext);
            retrieveServiceCenterFields(executionContext);
            //onChangeService(executionContext);
            onChangeAgreementAmount(executionContext);
            onChangeAgreement(executionContext);
            onLoadIsMailingAddress(executionContext);
            onLoadCheckCancellation(executionContext);
            getAllrelatedServiceCenters(executionContext);
            onChangeCreditRemaining(executionContext);
            onStageChange(executionContext);
            calculateTotalOrderCost(executionContext);
            changeStatusReason(executionContext);
            retrieveAccount(executionContext);
            LockBPFFields(executionContext);
            checkRetriggerField(executionContext);
            populateQuickCreate(executionContext);
            subgridEventHandler(executionContext);
            clearAutoSuggestionValue(executionContext);
            showHideTypeOfAgreementField(executionContext);
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on onchange of fields on Order form
        var onChange = function (executionContext) {
            var fieldName = executionContext.getEventSource().getName();
            switch (fieldName) {
                /* case FieldNames.CoHomeOwnerSigning:
                     mandateCoHomeOwner(executionContext);
                     break;*/
                case FieldNames.CustomerSigningDigitally:
                    hideOptionsetValues(executionContext);
                    break;
                case FieldNames.TypeOfAgreement:
                    showHideAgreementSection(executionContext);
                    onChangeWhatAreYouSelling(executionContext);
                    onChangeAgreement(executionContext);
                    break;
                case FieldNames.EasyPayOptOut:
                    showHideFields(executionContext);
                    break;
                case FieldNames.EasyPayMethod:
                    showHideFields(executionContext);
                    break;
                case FieldNames.DeferredRate:
                    showHideMonthlyLeasePaymentsSection(executionContext);
                    break;
                case FieldNames.DiscountPercent:
                    changeDiscountAmount(executionContext);
                    break;
                case FieldNames.DiscountAmount:
                    changeDiscountPercent(executionContext);
                    break;
                case FieldNames.CreditCheckLookup:
                    break;
                case FieldNames.TotalInstalledCost:
                    onChangeAgreementAmount(executionContext);
                    onChangeTotalInstalledCost(executionContext);
                    calculateTotalOrderCost(executionContext);
                    break;
                case FieldNames.TotalOrderCost:
                    calculateTotalOrderCost(executionContext);
                    break;
                case FieldNames.AccountLookup:
                    retrieveAccount(executionContext);
                    retrieveAccountAddress(executionContext);
                    saveOrderForm(executionContext);
                    break;
                case FieldNames.InstalledCost:
                    onChangeInstalledCost(executionContext);
                    break;
                case FieldNames.ServiceCenterLookup:
                    // Changed - Eduardo Feb 04
                    // Setting the window.top.ServiceName and ID when the user isn't associated with any team
                    // or the team doesn't have a default service center. window.top.serviceCenterName is the variable used
                    // afterwards on the account.js - setDefaultServiceCenter method.
                    const formContext = executionContext.getFormContext();
                    if (formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue() === null) {
                        window.top.serviceCenterName = null;
                        window.top.serviceCenterId = null;
                    }
                    else {
                        if ((window.top.serviceCenterName === undefined) || (window.top.serviceCenterName === null)) {
                            window.top.serviceCenterName = formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue()[0].name;
                            window.top.serviceCenterId = formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue()[0].id;
                        }                            
                    }
                    
                    // Changed - Eduardo
                    setDefaultPriceList(executionContext);
                    break;
                case FieldNames.BundleRate:
                    retrieveServiceCenterFields(executionContext);
                    break;
                case FieldNames.AgreementAmount:
                    onChangeAgreementAmount(executionContext);
                    break;
                case FieldNames.DiscountLookup:
                    onChangeDiscountLookup(executionContext);
                    break;
                case FieldNames.IsMailingAddressSameAsInstallationAddress:
                    onChangeIsMailingAdress(executionContext);
                    break;
                case FieldNames.ReasonCode:
                    onChangeReasonCode(executionContext);
                    break;
                case FieldNames.ExplanationCode:
                    onChangeExplanationCode(executionContext);
                    break;
                case FieldNames.WetSignature:
                    onChangeWetSignature(executionContext);
                    break;
                case FieldNames.CreditRemaining:
                    onChangeCreditRemaining(executionContext);
                    break;
                case FieldNames.OrderProducts:
                    onChangeWhatAreYouSelling(executionContext);
                    break;
                case FieldNames.SignatureType:
                    saveOrderForm(executionContext);
                    break;
                case FieldNames.OverrideAddressValidation:
                    setAddressValidatedOnOrder(executionContext);
                    break;
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Functions called on save of Order form
        var onSave = function (executionContext) {
            if (flag == 1) {
                executionContext.getEventArgs().preventDefault();
            }
            setSalesOrderGuid(executionContext);
            changeStatusReason(executionContext);
            cancelOrderOnSave(executionContext);
            checkRetriggerField(executionContext);
            //onChangeService(executionContext);
            onLoadIsMailingAddress(executionContext);
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Fetch the current record order id
        var setSalesOrderGuid = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (Xrm.Utility.getGlobalContext().getQueryStringParameters().pageType !== "quickcreate") {
                //Get SO reference
                var entityName = formContext.data.entity.getEntityName();
                var entityId = formContext.data.entity.getId();

                var salesOrderId = "";
                if (entityId !== null && entityId !== undefined) {
                    salesOrderId = entityId.replace("{", "").replace("}", "");
                }
                window.top.salesorderid = salesOrderId;
            }

        };

        /*****************************************/
        //Owner: Disha Sharma
        //Retrieve id and name of selected account
        var retrieveAccount = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var account = formContext.getAttribute(FieldNames.AccountLookup);
            if (account != null && account.getValue() !== null && account.getValue() !== undefined) {
                window.top.accountId = account.getValue()[0].id;
                window.top.accountName = account.getValue()[0].name;
                var accountId = window.top.accountId;
                retrieveAccountEmailInfo(executionContext, accountId);
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Retrieve account email information and making necessary changes if the account does not contain email
        var retrieveAccountEmailInfo = function (executionContext, accountId) {
            var formContext = executionContext.getFormContext();
            var stage = formContext.data.process.getActiveStage().getName();
            if (window.top.accountId !== null && window.top.accountId !== undefined) {
                Xrm.WebApi.online.retrieveRecord(EntityNames.Account, accountId, "?$select=sxp_customerdoesnothaveanemailaddress").then(
                    function success(result) {
                        if (result["sxp_customerdoesnothaveanemailaddress"]) {
                            formContext.getControl(FieldNames.SignedAgreementDeliveredToCustomer).setVisible(true);
                            formContext.getControl(FieldNames.SignedAgreementDeliveredToCustomer).setDisabled(true);
                            if (stage === businessProcessStages.signature) {
                                formContext.ui.setFormNotification("Customer does not have email", "WARNING", "CustomerEmailNotification");
                                formContext.getAttribute(FieldNames.CustomerSigningDigitally).setValue(275450000);
                                formContext.getAttribute(FieldNames.SignatureType).setValue(275450002);
                                formContext.getControl(FieldNames.SignatureType).setVisible(true);
                                formContext.getControl(FieldNames.WetSignature).setVisible(true);
                                formContext.getControl(FieldNames.CustomerSigningDigitally).setDisabled(true);
                                formContext.getControl(FieldNames.SignatureType).setDisabled(true);
                                saveOrderForm(executionContext);
                            }
                            else {
                                formContext.ui.clearFormNotification("CustomerEmailNotification");
                            }
                            if (stage === businessProcessStages.installation) {
                                formContext.getControl(FieldNames.SignedAgreementDeliveredToCustomer).setVisible(true);
                                formContext.getControl(FieldNames.SignedAgreementDeliveredToCustomer).setDisabled(false);
                                formContext.getAttribute(FieldNames.SignedAgreementDeliveredToCustomer).setRequiredLevel('required');
                            }
                            else {
                                formContext.getControl(FieldNames.SignedAgreementDeliveredToCustomer).setDisabled(true);
                            }
                            if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450000) {
                                formContext.getAttribute(FieldNames.Ebilling).setValue(275450000);
                                formContext.getControl(FieldNames.Ebilling).setVisible(false);
                            }

                        }
                    },
                    function (error) {
                        console.log(error.message);
                        // handle error conditions
                    }
                );
            }
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Fetch all field values of current order
        var populateQuickCreate = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var refOrder = window.top.salesorderid;
            //Lookup Order
            if (refOrder == null || refOrder == undefined) {
                setDefaultServiceCenter(executionContext);
                return;
            }
            var fetch = '<fetch>' +
                '<entity name="salesorder">' +
                '<attribute name="name" />' +
                '<attribute name="sxp_typeofagreement" />' +
                '<filter type="and">' +
                '<condition attribute="salesorderid" operator="eq" value="' + refOrder + '" />' +
                '<condition attribute="sxp_typeofagreement" operator="not-null" />' +
                '</filter> ' +
                '</entity>' +
                '</fetch>'
            fetch = "?fetchXml=" + encodeURIComponent(fetch);
            if (Xrm.Utility.getGlobalContext().getQueryStringParameters().pageType === "quickcreate") {
                Xrm.WebApi.retrieveMultipleRecords(EntityNames.Order, fetch).then(
                    function (result) {
                        if (result.entities[0]["sxp_typeofagreement"] === 275450000) {
                            var fetchXml = '<fetch>' +
                                '<entity name="salesorder" >' +
                                '<attribute name="sxp_typeofagreement" />' +
                                '<attribute name="billto_line1" />' +
                                '<attribute name="shipto_country" />' +
                                '<attribute name="sxp_orderproducts" />' +
                                '<attribute name="sxp_service" />' +
                                '<attribute name="billto_city" />' +
                                '<attribute name="billto_postalcode" />' +
                                '<attribute name="shipto_postalcode" />' +
                                '<attribute name="sxp_billtocounty" />' +
                                '<attribute name="shipto_city" />' +
                                '<attribute name="billto_country" />' +
                                '<attribute name="shipto_line1" />' +
                                '<attribute name="sxp_ismailingaddresssameasinstallationaddress" />' +
                                '<attribute name="shipto_stateorprovince" />' +
                                '<attribute name="sxp_shiptocounty" />' +
                                '<attribute name="billto_stateorprovince" />' +
                                '<attribute name="sxp_creditcheck"/>' +
                                '<attribute name="sxp_bundlerate" />' +
                                '<attribute name="sxp_deferredrate" />' +
                                '<attribute name="sxp_advantagemonthlydiscounthvac" />' +
                                '<attribute name="sxp_advantagemonthlydiscountwater" />' +
                                '<filter>' +
                                '<condition attribute="salesorderid" operator="eq" value="' + refOrder + '" />' +
                                '</filter>' +
                                '<link-entity name="account" from="accountid" to="accountid" >' +
                                '<attribute name="name" />' +
                                '<attribute name="accountid" />' +
                                '</link-entity>' +
                                '<link-entity name="sxp_servicecenter" from="sxp_servicecenterid" to="sxp_center" >' +
                                '<attribute name="sxp_centername" />' +
                                '<attribute name="sxp_servicecenterid" />' +
                                '</link-entity>' +
                                '<link-entity name="sxp_creditcheck" from="sxp_creditcheckid" to="sxp_creditcheck" link-type="inner" alias="aa">' +
                                '<attribute name="sxp_name" />' +
                                '<attribute name="sxp_creditcheckid" />' +
                                '</link-entity>' +
                                '</entity>' +
                                '</fetch>'

                            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
                            setQuickCreateFields(formContext, fetchXml);
                        }
                        else {
                            var fetchXml = '<fetch>' +
                                '<entity name="salesorder" >' +
                                '<attribute name="sxp_typeofagreement" />' +
                                '<attribute name="billto_line1" />' +
                                '<attribute name="shipto_country" />' +
                                '<attribute name="billto_city" />' +
                                '<attribute name="billto_postalcode" />' +
                                '<attribute name="shipto_postalcode" />' +
                                '<attribute name="sxp_billtocounty" />' +
                                '<attribute name="shipto_city" />' +
                                '<attribute name="billto_country" />' +
                                '<attribute name="shipto_line1" />' +
                                '<attribute name="sxp_ismailingaddresssameasinstallationaddress" />' +
                                '<attribute name="shipto_stateorprovince" />' +
                                '<attribute name="sxp_shiptocounty" />' +
                                '<attribute name="billto_stateorprovince" />' +
                                '<filter>' +
                                '<condition attribute="salesorderid" operator="eq" value="' + refOrder + '" />' +
                                '</filter>' +
                                '<link-entity name="account" from="accountid" to="accountid" >' +
                                '<attribute name="name" />' +
                                '<attribute name="accountid" />' +
                                '</link-entity>' +
                                '<link-entity name="sxp_servicecenter" from="sxp_servicecenterid" to="sxp_center" >' +
                                '<attribute name="sxp_centername" />' +
                                '<attribute name="sxp_servicecenterid" />' +
                                '</link-entity>' +
                                '</entity>' +
                                '</fetch>'

                            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
                            setQuickCreateFields(formContext, fetchXml);

                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    });
            }
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Populate Order Quick Create fields same as current order field values
        var setQuickCreateFields = function (formContext, fetchXml) {
            Xrm.WebApi.retrieveMultipleRecords(EntityNames.Order, fetchXml).then(
                function (result) {

                    //Set Type of Agreement
                    formContext.getAttribute(FieldNames.TypeOfAgreement).setValue(result.entities[0]["sxp_typeofagreement"]);
                    //Set Service Center
                    Utilities.setLookupField(formContext, FieldNames.ServiceCenterLookup, result.entities[0]["sxp_servicecenter2.sxp_servicecenterid"], result.entities[0]["sxp_servicecenter2.sxp_centername"], EntityNames.ServiceCenter);
                    //Set Account
                    Utilities.setLookupField(formContext, FieldNames.AccountLookup, result.entities[0]["account1.accountid"], result.entities[0]["account1.name"], EntityNames.Account);
                    //Set Installation Street
                    formContext.getAttribute(FieldNames.ShipToLine1).setValue(result.entities[0]["shipto_line1"]);
                    //Set Installation County
                    formContext.getAttribute(FieldNames.ShipToCounty).setValue(result.entities[0]["sxp_shiptocounty"])
                    //Set Installation City
                    formContext.getAttribute(FieldNames.ShipToCity).setValue(result.entities[0]["shipto_city"])
                    //Set Installation State/Province
                    formContext.getAttribute(FieldNames.ShipToState).setValue(result.entities[0]["shipto_stateorprovince"])
                    //Set Installation ZIP/Postal Code
                    formContext.getAttribute(FieldNames.ShipToPostalCode).setValue(result.entities[0]["shipto_postalcode"])
                    //Set Installation Country/Region
                    formContext.getAttribute(FieldNames.ShipToCountry).setValue(result.entities[0]["shipto_country"])
                    //Set Is Mailing Same as Installation Address
                    formContext.getAttribute(FieldNames.IsMailingAddressSameAsInstallationAddress).setValue(result.entities[0]["sxp_ismailingaddresssameasinstallationaddress"])
                    //Set Mailing Street
                    formContext.getAttribute(FieldNames.BillToLine1).setValue(result.entities[0]["billto_line1"])
                    //Set Mailing County
                    formContext.getAttribute(FieldNames.BillToCounty).setValue(result.entities[0]["sxp_billtocounty"])
                    //Set Mailing City
                    formContext.getAttribute(FieldNames.BillToCity).setValue(result.entities[0]["billto_city"])
                    //Set Mailing State/Province
                    formContext.getAttribute(FieldNames.BillToState).setValue(result.entities[0]["billto_stateorprovince"])
                    //Set Mailing ZIP/Postal Code
                    formContext.getAttribute(FieldNames.BillToPostalCode).setValue(result.entities[0]["billto_postalcode"])
                    //Set Mailing Country/Region
                    formContext.getAttribute(FieldNames.BillToCountry).setValue(result.entities[0]["billto_country"])
                    formContext.getAttribute(FieldNames.DeferredRate).setValue(result.entities[0]["sxp_deferredrate"])
                    formContext.getAttribute(FieldNames.BundleRate).setValue(result.entities[0]["sxp_bundlerate"])
                    formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(result.entities[0]["sxp_advantagemonthlydiscounthvac"])
                    formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(result.entities[0]["sxp_advantagemonthlydiscountwater"])
                    if (result.entities[0]["sxp_typeofagreement"] === 275450000) {
                        Utilities.setLookupField(formContext, FieldNames.CreditCheckLookup, result.entities[0]["aa.sxp_creditcheckid"], result.entities[0]["aa.sxp_name"], EntityNames.CreditCheck);
                        formContext.getAttribute(FieldNames.OrderProducts).setValue(result.entities[0]["sxp_orderproducts"]);
                        formContext.getAttribute(FieldNames.Service).setValue(result.entities[0]["sxp_service"]);
                    }
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                });
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Calculate purchase tax for current order
        var calculatePurchaseTax = function (formContext) {
            //Get SO reference
            var entityName = formContext.data.entity.getEntityName();
            var entityId = formContext.data.entity.getId();
            var salesOrderId = "";
            if (entityId !== null && entityId !== undefined) {
                salesOrderId = entityId.replace("{", "").replace("}", "");
            }
            var customer = formContext.getAttribute(FieldNames.AccountLookup).getValue()
            var customercode = "";
            if (customer !== null && customer !== undefined) {
                customercode = customer[0].id.replace("{", "").replace("}", "");
            }
            var fetchXml = '<fetch>' +
                '<entity name="sxp_servicecenter" >' +
                '  <attribute name="sxp_country" />' +
                '  <attribute name="sxp_street1" />' +
                '  <attribute name="sxp_city" />' +
                '  <attribute name="sxp_zipcode" />' +
                '  <attribute name="sxp_statevalue" />' +
                '  <link-entity name="salesorder" from="sxp_center" to="sxp_servicecenterid" >' +
                '    <attribute name="ava_shiptocity" />' +
                '    <attribute name="shipto_postalcode" />' +
                '    <attribute name="shipto_stateorprovince" />' +
                '    <attribute name="shipto_city" />' +
                '    <attribute name="shipto_line1" />' +
                '    <attribute name="discountpercentage" />' +
                '    <filter>' +
                '      <condition attribute="salesorderid" operator="eq" value="' + salesOrderId + '" />' +
                '    </filter>' +
                '    <link-entity name="salesorderdetail" from="salesorderid" to="salesorderid" >' +
                '      <attribute name="quantity" />' +
                '      <attribute name="extendedamount" />' +
                '      <link-entity name="product" from="productid" to="productid" >' +
                '        <attribute name="name" />' +
                '        <link-entity name="ava_avataxtypecode" from="ava_avataxtypecodeid" to="ava_taxcode" >' +
                '          <attribute name="ava_typecode" />' +
                '        </link-entity>' +
                '      </link-entity>' +
                '     </link-entity>' +
                '   </link-entity>' +
                ' </entity>' +
                '</fetch>'

            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);

            //Get Lines
            Xrm.WebApi.retrieveMultipleRecords(EntityNames.ServiceCenter, fetchXml).then(
                function (result) {

                    var lines = [];
                    for (var i = 0; i < result.entities.length; i++) {
                        if (result.entities[i]["salesorder1.discountpercentage"] == null || result.entities[i]["salesorder1.discountpercentage"] == undefined) {
                            result.entities[i]["salesorder1.discountpercentage"] = 0;
                        }
                    }

                    for (var i = 0; i < result.entities.length; i++) {

                        lines.push({
                            "number": i + 1,
                            "quantity": result.entities[i]["salesorderdetail2.quantity"],
                            "amount": result.entities[i]["salesorderdetail2.extendedamount"] - ((result.entities[i]["salesorder1.discountpercentage"] * result.entities[i]["salesorderdetail2.extendedamount"]) / 100),
                            "taxCode": result.entities[i]["ava_avataxtypecode4.ava_typecode"],
                            "itemCode": result.entities[i]["ava_avataxtypecode4.ava_typecode"],
                            "description": ""
                        });

                    }

                    //Prepare message to Avalara

                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = today.getFullYear();

                    formattedDate = yyyy + "-" + mm + "-" + dd;

                    data = {
                        "lines": lines,
                        "type": "SalesInvoice",
                        "companyCode": "2230",
                        "date": formattedDate,
                        "customerCode": customercode,
                        "addresses": {
                            "shipfrom": {
                                "line1": result.entities[0].sxp_street1,
                                "city": result.entities[0].sxp_city,
                                "region": result.entities[0].sxp_statevalue,
                                "country": result.entities[0].sxp_country,
                                "postalCode": result.entities[0].sxp_zipcode,
                            },
                            "shipto": {
                                "line1": formContext.getAttribute("shipto_line1").getValue(),
                                "city": formContext.getAttribute("shipto_city").getValue(),
                                "region": formContext.getAttribute("shipto_stateorprovince").getValue(),
                                "country": formContext.getAttribute("shipto_country").getValue(),
                                "postalCode": formContext.getAttribute("shipto_postalcode").getValue(),
                            }
                        },
                        "commit": false,
                        "currencyCode": "USD",
                    }

                    //Send message
                    Xrm.WebApi.retrieveMultipleRecords("sxp_configuration", "?$select=sxp_value,sxp_name&$filter=sxp_name eq 'Order.CalculateTax.Url' or sxp_name eq 'Order.CalculateAdvantageTax.SubscriptionKey' ").then(
                        function success(result) {

                            if (result.entities.length > 0) {
                                var calculateUrl = "";
                                var itemCode = "";
                                var apimkey = "";
                                for (var i = 0; i < result.entities.length; i++) {

                                    if (result.entities[i].sxp_name == "Order.CalculateTax.Url") {
                                        calculateUrl = result.entities[i].sxp_value;
                                    }
                                    if (result.entities[i].sxp_name == "Order.CalculateAdvantageTax.SubscriptionKey") {
                                        apimkey = result.entities[i].sxp_value;
                                    }

                                }
                                Xrm.Utility.showProgressIndicator("Purchase Tax Calculation is in progress");
                                parent.$.ajax({
                                    type: "POST",
                                    url: calculateUrl,
                                    contentType: 'application/json',
                                    headers: { 'Ocp-Apim-Subscription-Key': apimkey },
                                    data: JSON.stringify(data),
                                    success: function (response) {

                                        Xrm.Utility.closeProgressIndicator();
                                        if (response !== null && response !== undefined) {
                                            if (response.Message !== null && response.Message !== undefined && response.Message !== "") {
                                                Xrm.Utility.alertDialog(response.Message);
                                            }
                                            else {
                                                var responseJSON = JSON.parse(response);
                                                var taxAmount = responseJSON.TotalTax;
                                                //Update tax field
                                                formContext.getAttribute("sxp_totaltax").setValue(taxAmount);
                                            }
                                        }

                                        RefreshEntityForm(entityName, salesOrderId);
                                    },
                                    error: function (error) {
                                        Xrm.Utility.closeProgressIndicator();
                                        var errorResponseText = JSON.parse(error.responseText);
                                        Xrm.Utility.alertDialog(errorResponseText.ErrorMessage);
                                        setAdvantageTaxFields(formContext, 0, 0);
                                        RefreshEntityForm(entityName, salesOrderId);
                                    }

                                });
                            }
                        },
                        function (error) {
                            Xrm.Utility.alertDialog(error.message);
                        }
                    );

                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            )
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Set field status based on stage - reusable method
        var setFieldsForStage = function (formContext, fields) {

            for (var i = 0; i < fields.length; i++) {
                var obj = fields[i];
                formContext.getControl(obj.fieldName).setDisabled(obj.disabled);
                formContext.getAttribute(obj.fieldName).setRequiredLevel(obj.requiredLevel);
            }


        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Change tab on stage moving forward
        var onStageChange = function (executionContext) {

            var formContext = executionContext.getFormContext();
            formContext.data.process.addOnStageChange(selectTabFromStage)
            selectTabFromStage(executionContext);

        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Set current tab focus and fields according to BPF.
        var selectTabFromStage = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.data.process.getActiveStage() !== null && formContext.data.process.getActiveStage() !== undefined) {
                var stage = formContext.data.process.getActiveStage().getName();
                
                switch (stage) {
                    case businessProcessStages.agreementReview:
                        formContext.ui.tabs.get(TabNames.AgreementSummary).setFocus();
                        setFieldsForStage(formContext, agreementReviewFields);
                        showHideSaltUsage(executionContext);
						refreshGridRibbon(formContext,"OrderP");
                        break;
                    case businessProcessStages.agreementSummary:
                        formContext.ui.tabs.get(TabNames.AgreementSummary).setFocus();
                        setFieldsForStage(formContext, agreemntSummaryFields);
                        showHideStateAddendumFields(executionContext);
						refreshGridRibbon(formContext,"OrderP");
                        break;
                    case businessProcessStages.productAndPricing:
                        formContext.ui.tabs.get(TabNames.ProductandPricing).setFocus();
                        setFieldsForStage(formContext, productAndPricingFields);
						refreshGridRibbon(formContext,"OrderP");
                        break;
                    case businessProcessStages.customerVerification:
                        formContext.ui.tabs.get(TabNames.Customer).setFocus();
                        setFieldsForStage(formContext, customerVerificationFields);
                        break;
                    case businessProcessStages.installation:
                        var advantageEnable = getConfiguration("Order.EnableAdvantage");
                        if (advantageEnable == true) {
                            formContext.ui.tabs.get(TabNames.Installation).setFocus();
                            setFieldsForStage(formContext, installationFields);
                            var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                            Xrm.WebApi.retrieveMultipleRecords(EntityNames.OrderProduct, "?$select=sxp_serialnumber&$filter=_salesorderid_value eq '" + recordId + "' and sxp_serialnumber eq null and sxp_primary eq true").then(
                                function success(result) {
                                    if (result.entities.length > 0) {
                                        formContext.ui.setFormNotification("Enter serial number for Order Product", "WARNING", "Warning");
                                    }
                                    else {
                                        formContext.ui.clearFormNotification("Warning");

                                    }
                                },
                                function (error) {
                                    Xrm.Utility.alertDialog(error.message);
                                }
                            );
                        }
                        else {
                            formContext.ui.tabs.get(TabNames.SignatureTab).setFocus();
                        }
                        retrieveAccount(executionContext);
                        if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                            // setPurchaseDimensions(executionContext); //update purchase dimensions when purchase agreement
                        }
                        break;
                    case businessProcessStages.paymentDetails:
                        formContext.ui.tabs.get(TabNames.PaymentDetails).setFocus();
                        setFieldsForStage(formContext, paymentDetailsFields);
                        retrieveAccount(executionContext);
                        break;
                    case businessProcessStages.paymentDetail:
                        formContext.ui.tabs.get(TabNames.PaymentDetails).setFocus();
                        setFieldsForStage(formContext, paymentDetailFields);
                        break;
                    case businessProcessStages.productsAndPricing:
                        formContext.ui.tabs.get(TabNames.ProductandPricing).setFocus();
                        setFieldsForStage(formContext, productsAndPricingFields);
						refreshGridRibbon(formContext,"OrderP");
                        break;
                    case businessProcessStages.signature:
                        formContext.ui.tabs.get(TabNames.SignatureTab).setFocus();
                        setFieldsForStage(formContext, signatureFields);
                        retrieveAccount(executionContext);
                        break;
                    default:
                        formContext.ui.tabs.get(TabNames.Customer).setFocus();
                        setFieldsForStage(formContext, customerVerificationFields);
                        break;
                }

            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Show hide salt usage on the basis of Agreement type
        var showHideSaltUsage = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var stage = formContext.data.process.getActiveStage().getName();
            whatareyouselling = formContext.getAttribute(FieldNames.OrderProducts).getValue();
            if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450000) {
                if (whatareyouselling == 275450005) {
                    if (stage === "Agreement Review") {
                        formContext.getControl(FieldNames.SaltUsage).setVisible(true);
                        formContext.getAttribute(FieldNames.SaltUsage).setRequiredLevel('required');
                        formContext.getControl(FieldNames.SaltUsage).setDisabled(false);
                    }
                    else {
                        formContext.getControl(FieldNames.SaltUsage).setDisabled(true);
                        formContext.getControl(FieldNames.SaltUsage).setVisible(true);
                    }
                }
                else {
                    formContext.getControl(FieldNames.SaltUsage).setVisible(false);
                    formContext.getAttribute(FieldNames.SaltUsage).setRequiredLevel('none');
                }
                if (stage === "Agreement Review") {
                    formContext.getControl(FieldNames.EquipmentReplace).setVisible(true);
                    formContext.getAttribute(FieldNames.EquipmentReplace).setRequiredLevel('required');
                    formContext.getControl(FieldNames.EquipmentReplace).setDisabled(false);
                }
                else {
                    formContext.getControl(FieldNames.EquipmentReplace).setDisabled(true);
                    formContext.getControl(FieldNames.EquipmentReplace).setVisible(true);
                    formContext.getAttribute(FieldNames.EquipmentReplace).setRequiredLevel('none');
                }
            }
            else {
                formContext.getControl(FieldNames.SaltUsage).setVisible(false);
                formContext.getAttribute(FieldNames.SaltUsage).setRequiredLevel('none');
                formContext.getControl(FieldNames.EquipmentReplace).setVisible(false);
                formContext.getAttribute(FieldNames.EquipmentReplace).setRequiredLevel('none');

            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Force Customer Lookup to be of type account
        var showCustomerLookup = function (executionContext) {
            var formContext = executionContext.getFormContext();
            
            // Eduardo Feb 07/22
            // Removed the addPreSearch method call - only adds fielter when the lookup action is called
            // instead calling the setEntityType directly from the control
            var tabObj = formContext.ui.tabs.get("customerverificationTab");
            var sectionObj = tabObj.sections.get("agreementdetailsSection");
            sectionObj.controls.get().forEach((control) => {
                if (control["_controlName"].includes("customerid")) control.setEntityTypes(["account"]);
            });
            //formContext.getControl("customerid").addPreSearch(addFilter);
            // Eduardo Feb 07/22 - END
        };

        /*****************************************/

        // Eduardo Feb 07/22
        // Commented - no need to had the addfilter function.

        //Owner: Disha Sharma
        //Add filter to customer lookup
        //var addFilter = function (executionContext) {
        //    var formContext = executionContext.getFormContext();
        //    formContext.getControl("customerid").setEntityTypes(["account"]);
        //};
        
        // Eduardo Feb 07/22 - END

        /*****************************************/
        //Owner: Disha Sharma
        //Set advantage tax fields 
        var setAdvantageTaxFields = function (formContext, monthlyTax, monthlyTaxPercent) {

            //var formContext = executionContext.getFormContext();

            var monthlyAmount = formContext.getAttribute(FieldNames.MonthlyRate).getValue();
            var periods = formContext.getAttribute(FieldNames.AdvantageTerm).getValue();

            var monthlyPayment = monthlyAmount + monthlyTax;
            var totalOfficialFees = monthlyTax * periods;
            var totalAdvantagePayments = monthlyAmount * periods;

            formContext.getAttribute(FieldNames.MonthlyTax).setValue(monthlyTax);               // tax amount
            formContext.getAttribute(FieldNames.MonthlyTaxPercent).setValue(monthlyTaxPercent); // monthly tax percentage
            formContext.getAttribute(FieldNames.TotalOfficialFees).setValue(totalOfficialFees);

        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Set the line values for the associated advantage rates
        var setAdvantageLineValues = function (formContext, advantageTotalPayment) {

            var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
            //
            console.log(recordId);
            Xrm.WebApi.retrieveMultipleRecords("salesorderdetail", "?$filter=sxp_primary eq true and _salesorderid_value eq " + recordId).then(
                function (result) {

                    var numLines = result.entities.length;
                    var amountPerLine = Math.round(((advantageTotalPayment / numLines) + Number.EPSILON) * 100) / 100; //Round to .00 - javascript is weird...
                    var firstLineBonus = 0;
                    var lineAmount = 0;

                    if (!(numLines * amountPerLine == advantageTotalPayment)) {
                        firstLineBonus = advantageTotalPayment - (numLines * amountPerLine);
                    }
                    else {
                        firstLineBonus = 0;
                    }
                    for (var i = 0; i < numLines; i++) {
                        var salesorderlines = result.entities[i];

                        if (i == 0) {
                            lineAmount = firstLineBonus + amountPerLine;
                        }
                        else {
                            lineAmount = amountPerLine;
                        }

                        Xrm.WebApi.updateRecord("salesorderdetail", salesorderlines.salesorderdetailid, { "sxp_advantagerate": lineAmount }).then(
                            function (result) {
                                console.log("updated lines with advantage rate");
                            },
                            function (error) {
                                Xrm.Utility.alertDialog(error.message);
                            }
                        );

                    }

                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Perform Advantage Calculation
        var calculateAdvantage = function (formContext, calculateTax, monthlyrate) {

            var entityName = formContext.data.entity.getEntityName();
            var entityId = formContext.data.entity.getId();

            var salesOrderId = "";
            if (entityId !== null && entityId !== undefined) {
                salesOrderId = entityId.replace("{", "").replace("}", "");
            }
            var amount = monthlyrate;
            var region = formContext.getAttribute("shipto_stateorprovince").getValue();
            var country = formContext.getAttribute("shipto_country").getValue();
            var postalcode = formContext.getAttribute("shipto_postalcode").getValue();
            var street = formContext.getAttribute(FieldNames.ShipToLine1).getValue();
            var city = formContext.getAttribute(FieldNames.ShipToCity).getValue();
            var customer = formContext.getAttribute(FieldNames.AccountLookup).getValue()
            var customercode = "";
            if (customer !== null && customer !== undefined) {
                customercode = customer[0].id.replace("{", "").replace("}", "");
            }

            if (calculateTax && salesOrderId !== "") {
                Xrm.WebApi.retrieveMultipleRecords("sxp_configuration", "?$select=sxp_value,sxp_name&$filter=sxp_name eq 'Order.CalculateTax.Url' or sxp_name eq 'Order.ItemCode' or sxp_name eq 'Order.CalculateAdvantageTax.SubscriptionKey' ").then(
                    function success(result) {

                        if (result.entities.length > 0) {
                            var calculateUrl = "";
                            var itemCode = "";
                            var apimkey = "";
                            for (var i = 0; i < result.entities.length; i++) {


                                if (result.entities[i].sxp_name == "Order.CalculateTax.Url") {
                                    calculateUrl = result.entities[i].sxp_value;
                                }
                                if (result.entities[i].sxp_name == "Order.ItemCode") {
                                    itemCode = result.entities[i].sxp_value;
                                }
                                if (result.entities[i].sxp_name == "Order.CalculateAdvantageTax.SubscriptionKey") {
                                    apimkey = result.entities[i].sxp_value;
                                }

                            }

                            var servicecenter = formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue()[0].id.replace("{", "").replace("}", "");

                            Xrm.WebApi.retrieveMultipleRecords("sxp_servicecenter", "?$select=sxp_street1,sxp_city,sxp_statevalue,sxp_country,sxp_zipcode&$filter=sxp_servicecenterid eq '" + servicecenter + "'").then(
                                function (result) {

                                    var today = new Date();
                                    var dd = String(today.getDate()).padStart(2, '0');
                                    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                                    var yyyy = today.getFullYear();

                                    formattedDate = yyyy + "-" + mm + "-" + dd;

                                    var pathObj = {
                                        "lines": [
                                            {
                                                "number": 1,
                                                "quantity": 1,
                                                "amount": amount,
                                                "taxCode": itemCode,
                                                "itemCode": "Advantage Monthly Calculation",
                                                "description": ""
                                            }
                                        ],
                                        "type": "SalesInvoice",
                                        "companyCode": "2230",
                                        "date": formattedDate,
                                        "customerCode": customercode,
                                        "addresses": {
                                            "shipfrom": {
                                                "line1": result.entities[0].sxp_street1,
                                                "city": result.entities[0].sxp_city,
                                                "region": result.entities[0].sxp_statevalue,
                                                "country": result.entities[0].sxp_country,
                                                "postalCode": result.entities[0].sxp_zipcode,
                                            },
                                            "shipto": {
                                                "line1": street,
                                                "city": city,
                                                "region": region,
                                                "country": country,
                                                "postalCode": postalcode
                                            }
                                        },
                                        "commit": false,
                                        "currencyCode": "USD"
                                    }


                                    if (calculateUrl !== null && calculateUrl !== undefined && calculateUrl !== "") {
                                        if (amount == null || amount == undefined) {
                                            Xrm.Utility.alertDialog("Enter Valid Monthly Rate to proceed with calculation of Advantage Tax calculation");
                                            return;
                                        }
                                        Xrm.Utility.showProgressIndicator("Advantage Calculation is in progress");
                                        parent.$.ajax({
                                            type: "POST",
                                            url: calculateUrl,
                                            contentType: 'application/json',
                                            headers: { 'Ocp-Apim-Subscription-Key': apimkey },
                                            data: JSON.stringify(pathObj),
                                            success: function (response) {

                                                Xrm.Utility.closeProgressIndicator();
                                                if (response !== null && response !== undefined) {
                                                    if (response.Message !== null && response.Message !== undefined && response.Message !== "") {
                                                        Xrm.Utility.alertDialog(response.Message);
                                                    }
                                                    else {
                                                        var responseJSON = JSON.parse(response);
                                                        var totalTax = responseJSON.TotalTax;
                                                        var taxPercentage = responseJSON.Percentage;
                                                        var advantagePayment = amount; //+ tax
                                                        setAdvantageTaxFields(formContext, totalTax, taxPercentage);
                                                        setAdvantageLineValues(formContext, advantagePayment)
                                                    }
                                                }

                                                RefreshEntityForm(entityName, salesOrderId);
                                            },
                                            error: function (error) {
                                                Xrm.Utility.closeProgressIndicator();
                                                var errorResponseText = JSON.parse(error.responseText);
                                                Xrm.Utility.alertDialog("Calculate Advantage has encountered an error with the Avalara Tax Service." + "\n" + errorResponseText.ErrorMessage);
                                                setAdvantageTaxFields(formContext, 0, 0);
                                                RefreshEntityForm(entityName, salesOrderId);
                                            }

                                        });
                                    }

                                },
                                function (error) {
                                    Xrm.Utility.alertDialog("Calculate Advantage has encountered an error on retrieving the Order Service Center." + "\n" + error.message);
                                }
                            );


                        }
                        else {
                            Xrm.Utility.alertDialog("Calculate Advantage is not configured.");
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog("Calculate Advantage is not configured" + "\n" + error.message);
                    });

            }
            else {

                var monthlyTax = formContext.getAttribute(FieldNames.MonthlyTax).getValue();            // tax amount
                var monthlyTaxPercent = formContext.getAttribute(FieldNames.MonthlyTax).getValue();     // monthly tax percentage

                setAdvantageTaxFields(formContext, monthlyTax, monthlyTaxPercent);
            }

        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Modified By : Prachi Goyal
        //Assign Default Service Center based on Team Assignment
        var setDefaultServiceCenter = function (executionContext) {

            var context = Xrm.Utility.getGlobalContext();
            var formContext = executionContext.getFormContext();
            var loggedInUserId = context.userSettings.userId.replace("{", "").replace("}", "");
            var servicecenter = formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue();

            if (servicecenter == null && servicecenter == undefined) {
                var fetchXml = "<fetch>" +
                    "<entity name='sxp_servicecenter' >" +
                    "<attribute name='sxp_pricelist' />" +
                    "<attribute name='sxp_name' />" +
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
                            setDefaultPriceList(executionContext);
                        }
                        else if (result.entities.length == 0) {
                            Xrm.Utility.alertDialog("You are not assigned to any Service Centers. Please contact an administrator for further assistance.");
                        }
                        else if (result.entities.length > 1) {
                            var defaultCenterFetchXml = "<fetch>" +
                                "<entity name='sxp_servicecenter' >" +
                                "<attribute name='sxp_name' />" +
                                "<attribute name='sxp_pricelist' />" +
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
                                        setDefaultPriceList(executionContext);

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
                        return false;
                        Xrm.Utility.alertDialog(error.message);

                    }
                );
            }
        };

        /*****************************************/
        //Owner: Mervyn Martin
        //Gets deferral and advantage discount fields from Service Center based on "what are you selling" question
        var onChangeWhatAreYouSelling = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var servicecenter = formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue();
            var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (agreementType === 275450000) {
                if (servicecenter !== null && servicecenter !== undefined) {
                    Xrm.WebApi.retrieveRecord(EntityNames.ServiceCenter, servicecenter[0].id, "?$select=sxp_name,sxp_deferralpromotionhvac,sxp_deferralpromotionwater,sxp_deferralpromotionhvacwater,sxp_deferralpromotionwaterwater,sxp_advantagediscounthvac,sxp_advantagediscountwater,sxp_advantagediscounthvacwater,sxp_advantagediscountwaterwater,sxp_deferralpromotionhvacfrom,sxp_deferralpromotionhvacto,sxp_deferralpromotionwaterfrom,sxp_deferralpromotionwaterto,sxp_deferralpromotionhvacwaterfrom,sxp_deferralpromotionhvacwaterto,sxp_deferralpromotionwaterwaterfrom,sxp_deferralpromotionwaterwaterto,sxp_firecrackerdiscountfrom,sxp_firecrackerdiscountto,sxp_advantagediscounthvacfrom,sxp_advantagediscounthvacto,sxp_advantagediscountwaterfrom,sxp_advantagediscountwaterto,sxp_advantagediscounthvacwaterfrom,sxp_advantagediscounthvacwaterto,sxp_advantagediscountwaterwaterfrom,sxp_advantagediscountwaterwaterto").then(
                        function success(result) {

                            var centerName = result.sxp_name;
                            var currentDate = new Date();
                            var deferralpromotionhvacfrom = toDate(result.sxp_deferralpromotionhvacfrom);
                            var deferralpromotionhvacto = toDate(result.sxp_deferralpromotionhvacto);
                            var deferralpromotionwaterfrom = toDate(result.sxp_deferralpromotionwaterfrom);
                            var deferralpromotionwaterto = toDate(result.sxp_deferralpromotionwaterto);
                            var deferralpromotionhvacwaterfrom = toDate(result.sxp_deferralpromotionhvacwaterfrom);
                            var deferralpromotionhvacwaterto = toDate(result.sxp_deferralpromotionhvacwaterto);
                            var deferralpromotionwaterwaterfrom = toDate(result.sxp_deferralpromotionwaterwaterfrom);
                            var deferralpromotionwaterwaterto = toDate(result.sxp_deferralpromotionwaterwaterto);
                            var advantagediscounthvacfrom = toDate(result.sxp_advantagediscounthvacfrom);
                            var advantagediscounthvacto = toDate(result.sxp_advantagediscounthvacto);
                            var advantagediscountwaterfrom = toDate(result.sxp_advantagediscountwaterfrom);
                            var advantagediscountwaterto = toDate(result.sxp_advantagediscountwaterto);
                            var advantagediscounthvacwaterfrom = toDate(result.sxp_advantagediscounthvacwaterfrom);
                            var advantagediscounthvacwaterto = toDate(result.sxp_advantagediscounthvacwaterto);
                            var advantagediscountwaterwaterfrom = toDate(result.sxp_advantagediscountwaterwaterfrom);
                            var advantagediscountwaterwaterto = toDate(result.sxp_advantagediscountwaterwaterto);


                            var deferralpromotionhvac = (deferralpromotionhvacfrom <= currentDate && deferralpromotionhvacto >= currentDate) == false ? 275450000 : 275450001;
                            var deferralpromotionwater = (deferralpromotionwaterfrom <= currentDate && deferralpromotionwaterto >= currentDate) == false ? 275450000 : 275450001;
                            var deferralpromotionhvacwater = (deferralpromotionhvacwaterfrom <= currentDate && deferralpromotionhvacwaterto >= currentDate) == false ? 275450000 : 275450001;
                            var deferrralpromotionwaterwater = (deferralpromotionwaterwaterfrom <= currentDate && deferralpromotionwaterwaterto >= currentDate) == false ? 275450000 : 275450001;

                            var advantagediscounthvac = (advantagediscounthvacfrom <= currentDate && advantagediscounthvacto >= currentDate) == false ? 0 : result.sxp_advantagediscounthvac;
                            var advantagediscountwater = (advantagediscountwaterfrom <= currentDate && advantagediscountwaterto >= currentDate) == false ? 0 : result.sxp_advantagediscountwater;
                            var advantagediscounthvacwater = (advantagediscounthvacwaterfrom <= currentDate && advantagediscounthvacwaterto >= currentDate) == false ? 0 : result.sxp_advantagediscounthvacwater;
                            var advantagediscountwaterwater = (advantagediscountwaterwaterfrom <= currentDate && advantagediscountwaterwaterto >= currentDate) == false ? 0 : result.sxp_advantagediscountwaterwater;

                            whatareyouselling = formContext.getAttribute(FieldNames.OrderProducts).getValue();

                            if (whatareyouselling == 275450000) //HVAC Component
                            {
                                var showoptionvalues = "HVAC|275450000,Water Heater|275450001,Water Treatment|275450002";
                                showOptionValues(formContext, FieldNames.Service, showoptionvalues);
                                formContext.getAttribute(FieldNames.Service).setValue(275450000);
                                formContext.getControl(FieldNames.Service).setDisabled(true);
                                formContext.getAttribute(FieldNames.DeferredRate).setValue(deferralpromotionhvac);
                                formContext.getAttribute(FieldNames.BundleRate).setValue(275450000);
                                formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(advantagediscounthvac);
                                formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(0);
                            }

                            else if (whatareyouselling == 275450001) //HVAC System
                            {
                                var showoptionvalues = "HVAC|275450000,Water Heater|275450001,Water Treatment|275450002";
                                showOptionValues(formContext, FieldNames.Service, showoptionvalues);
                                formContext.getAttribute(FieldNames.Service).setValue(275450000);
                                formContext.getControl(FieldNames.Service).setDisabled(true);
                                formContext.getAttribute(FieldNames.DeferredRate).setValue(deferralpromotionhvac);
                                formContext.getAttribute(FieldNames.BundleRate).setValue(275450000);
                                formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(advantagediscounthvac);
                                formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(0);
                            }
                            else if (whatareyouselling == 275450002) //Water Heater
                            {
                                var showoptionvalues = "HVAC|275450000,Water Heater|275450001,Water Treatment|275450002";
                                showOptionValues(formContext, FieldNames.Service, showoptionvalues);
                                formContext.getAttribute(FieldNames.Service).setValue(275450001);
                                formContext.getControl(FieldNames.Service).setDisabled(true);
                                formContext.getAttribute(FieldNames.DeferredRate).setValue(deferralpromotionwater);
                                formContext.getAttribute(FieldNames.BundleRate).setValue(275450000);
                                formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(0);
                                formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(advantagediscountwater);
                            }
                            else if (whatareyouselling == 275450003) //Water Product Bundle
                            {
                                var hideoptionvalues = "HVAC|275450000";
                                hideOptionValues(formContext, FieldNames.Service, hideoptionvalues);
                                formContext.getAttribute(FieldNames.Service).setValue(null);
                                formContext.getControl(FieldNames.Service).setDisabled(false);
                                formContext.getAttribute(FieldNames.DeferredRate).setValue(deferrralpromotionwaterwater);
                                formContext.getAttribute(FieldNames.BundleRate).setValue(275450000);
                                formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(0);
                                formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(advantagediscountwaterwater);
                            }
                            else if (whatareyouselling == 275450004) //HVAC Component and Water Bundle
                            {
                                var showoptionvalues = "HVAC|275450000,Water Heater|275450001,Water Treatment|275450002";
                                showOptionValues(formContext, FieldNames.Service, showoptionvalues);
                                formContext.getAttribute(FieldNames.Service).setValue(275450000);
                                formContext.getControl(FieldNames.Service).setDisabled(false);
                                formContext.getAttribute(FieldNames.DeferredRate).setValue(deferralpromotionhvacwater);
                                formContext.getAttribute(FieldNames.BundleRate).setValue(275450000);
                                formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(0);
                                formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(advantagediscounthvacwater);
                            }
                            else if (whatareyouselling == 275450005) //Water Treatment
                            {
                                var showoptionvalues = "HVAC|275450000,Water Heater|275450001,Water Treatment|275450002";
                                showOptionValues(formContext, FieldNames.Service, showoptionvalues);
                                formContext.getAttribute(FieldNames.Service).setValue(275450002);
                                formContext.getControl(FieldNames.Service).setDisabled(true);
                                formContext.getAttribute(FieldNames.DeferredRate).setValue(deferralpromotionwater);
                                formContext.getAttribute(FieldNames.BundleRate).setValue(275450000);
                                formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(0);
                                formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(advantagediscountwater);
                            }
                            else if (whatareyouselling == 275450006) //HVAC System and Water Bundle
                            {
                                var showoptionvalues = "HVAC|275450000,Water Heater|275450001,Water Treatment|275450002";
                                showOptionValues(formContext, FieldNames.Service, showoptionvalues);
                                formContext.getAttribute(FieldNames.Service).setValue(275450000);
                                formContext.getControl(FieldNames.Service).setDisabled(false);
                                formContext.getAttribute(FieldNames.DeferredRate).setValue(deferralpromotionhvacwater);
                                formContext.getAttribute(FieldNames.BundleRate).setValue(275450000);
                                formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).setValue(0);
                                formContext.getAttribute(FieldNames.AdvantageDiscountWater).setValue(advantagediscounthvacwater);
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
        //Owner: Disha Sharma
        //Assign null values to fields when Total Installed Cost is changed
        var onChangeTotalInstalledCost = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var isTotalInstallCostChanged = formContext.getAttribute(FieldNames.TotalInstalledCost).getIsDirty();
            var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (isTotalInstallCostChanged && agreementType === 275450000) {
                formContext.getAttribute(FieldNames.MonthlyRate).setValue(null);
                formContext.getAttribute(FieldNames.MonthlyPayment).setValue(null);
                formContext.getAttribute(FieldNames.MonthlyTax).setValue(null);
                formContext.getAttribute(FieldNames.MonthlyTaxPercent).setValue(null);
                formContext.getAttribute(FieldNames.AdvantageTerm).setValue(null);
            }
            else if (isTotalInstallCostChanged && agreementType === 275450001) {
                formContext.getAttribute(FieldNames.TotalTax).setValue(null);
            }
        };

        /*****************************************/
        //Owner: Disha Sharma
        //Calculate Total Order Cost for the order
        var calculateTotalOrderCost = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var stage = formContext.data.process.getActiveStage().getName();
            var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (agreementType === 275450001 && (stage == businessProcessStages.productsAndPricing || stage == businessProcessStages.productAndPricing)) {
                var totalTax = formContext.getAttribute(FieldNames.TotalTax).getValue();
                var totalInstalledCost = formContext.getAttribute(FieldNames.TotalInstalledCost).getValue();
                if (totalTax !== null && totalTax !== undefined) {
                    var totalOrderCost = totalInstalledCost + totalTax;
                }
                else {
                    var totalOrderCost = totalInstalledCost;
                }
                formContext.getAttribute(FieldNames.TotalOrderCost).setValue(totalOrderCost);
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Gives error if Credit Remaining is negative
        var onChangeCreditRemaining = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var creditRemaining = formContext.getAttribute(FieldNames.CreditRemaining).getValue();

            if (creditRemaining !== null && creditRemaining < 0) {
                formContext.getControl(FieldNames.CreditRemaining).setNotification("Credit Remaining value cannot be negative", "Restrict");
            }
            else {
                formContext.getControl(FieldNames.CreditRemaining).clearNotification("Restrict");
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Mandate Cohome Owner if Signing is Yes
        var mandateCoHomeOwner = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.getAttribute(FieldNames.CoHomeOwnerSigning).getValue() == true) {
                formContext.getAttribute(FieldNames.CohomeOwnerFirstName).setRequiredLevel('required');
                formContext.getAttribute(FieldNames.CohomeOwnerMiddleName).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.CohomeOwnerLastName).setRequiredLevel('required');
                formContext.getControl(FieldNames.CohomeOwnerFirstName).setDisabled(false);
                formContext.getControl(FieldNames.CohomeOwnerMiddleName).setDisabled(false);
                formContext.getControl(FieldNames.CohomeOwnerLastName).setDisabled(false);

            }
            else if (formContext.getAttribute(FieldNames.CoHomeOwnerSigning).getValue() == false) {
                formContext.getAttribute(FieldNames.CohomeOwnerFirstName).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.CohomeOwnerMiddleName).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.CohomeOwnerLastName).setRequiredLevel('none');
                formContext.getControl(FieldNames.CohomeOwnerFirstName).setDisabled(true);
                formContext.getControl(FieldNames.CohomeOwnerMiddleName).setDisabled(true);
                formContext.getControl(FieldNames.CohomeOwnerLastName).setDisabled(true);
                formContext.getAttribute(FieldNames.CohomeOwnerFirstName).setValue(null);
                formContext.getAttribute(FieldNames.CohomeOwnerMiddleName).setValue(null);
                formContext.getAttribute(FieldNames.CohomeOwnerLastName).setValue(null);
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show/Hide Optionset Values based on field CustomerSigningDigitally field
        var hideOptionsetValues = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var customerSignDigital = formContext.getAttribute(FieldNames.CustomerSigningDigitally).getValue();
            if (customerSignDigital !== null && customerSignDigital !== undefined && customerSignDigital !== "" && customerSignDigital == 275450001) {
                formContext.getControl(FieldNames.SignatureType).clearOptions();
                formContext.getControl(FieldNames.SignatureType).setVisible(true);
                formContext.getControl(FieldNames.SignatureType).addOption({ text: "Digital in person", value: 275450000 });
                formContext.getControl(FieldNames.SignatureType).addOption({ text: "Digital Remote", value: 275450001 });
                formContext.ui.tabs.get(TabNames.SignatureTab).sections.get(SectionNames.Agreement).setVisible(true);
                formContext.ui.tabs.get(TabNames.SignatureTab).sections.get(SectionNames.WetSignatureAgreement).setVisible(false);
                formContext.getAttribute(FieldNames.WetSignature).setValue(null);
                formContext.getAttribute(FieldNames.WetSignature).setRequiredLevel('none');
                saveOrderForm(executionContext);
            }
            else if (customerSignDigital !== null && customerSignDigital !== undefined && customerSignDigital !== "" && customerSignDigital == 275450000) {
                formContext.getControl(FieldNames.SignatureType).clearOptions();
                formContext.getControl(FieldNames.SignatureType).setVisible(true);
                formContext.getControl(FieldNames.SignatureType).addOption({ text: "Paper", value: 275450002 });
                formContext.getAttribute(FieldNames.SignatureType).setValue(275450002);
                formContext.ui.tabs.get(TabNames.SignatureTab).sections.get(SectionNames.Agreement).setVisible(false);
                formContext.ui.tabs.get(TabNames.SignatureTab).sections.get(SectionNames.WetSignatureAgreement).setVisible(true);
                formContext.getAttribute(FieldNames.WetSignature).setRequiredLevel('none');
                saveOrderForm(executionContext);
            }

            else {
                formContext.ui.tabs.get(TabNames.SignatureTab).sections.get(SectionNames.Agreement).setVisible(false);
                formContext.ui.tabs.get(TabNames.SignatureTab).sections.get(SectionNames.WetSignatureAgreement).setVisible(false);
                formContext.getControl(FieldNames.SignatureType).setVisible(false);
                formContext.getAttribute(FieldNames.WetSignature).setRequiredLevel('none');
                formContext.getAttribute(FieldNames.WetSignature).setValue(null);
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show/Hide Agreement Funding Line (Subgrid) Section based on Type of Agreement
        var showHideAgreementSection = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                formContext.ui.tabs.get(TabNames.PaymentDetails).sections.get(SectionNames.AgreementSummaryPay).setVisible(true);
                formContext.ui.tabs.get(TabNames.Installation).sections.get(SectionNames.AgreementSummaryInstall).setVisible(true);
                formContext.ui.tabs.get(TabNames.PaymentDetails).sections.get(SectionNames.PaymentSection).setVisible(false);
                formContext.ui.tabs.get(TabNames.ProductandPricing).sections.get(SectionNames.CalculateAdvantage).setVisible(false);
                formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.MonthlyLeaseDeffNo).setVisible(false);
                formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.MonthlyLeaseDeffYes).setVisible(false);
                formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.AgreementParagraph).setVisible(false);
                formContext.getControl(FieldNames.PaymentReceivedDate).setVisible(true);
                formContext.getControl(FieldNames.Notes).setVisible(true);
                formContext.getControl(FieldNames.TotalTax).setVisible(true);
                formContext.getControl(FieldNames.TotalOrderCost).setVisible(true);
                formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.IHaveRead).setVisible(false);
				formContext.ui.tabs.get(TabNames.Installation).sections.get(SectionNames.OrderDepartmentInstall).setVisible(true);
            }
            else if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450000) {
                formContext.ui.tabs.get(TabNames.PaymentDetails).sections.get(SectionNames.AgreementSummaryPay).setVisible(false);
                formContext.ui.tabs.get(TabNames.Installation).sections.get(SectionNames.AgreementSummaryInstall).setVisible(false);
                formContext.ui.tabs.get(TabNames.PaymentDetails).sections.get(SectionNames.PaymentSection).setVisible(true);
                formContext.ui.tabs.get(TabNames.ProductandPricing).sections.get(SectionNames.CalculateAdvantage).setVisible(true);
                formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.AgreementParagraph).setVisible(true);
                formContext.getControl(FieldNames.PaymentReceivedDate).setVisible(false);
                formContext.getControl(FieldNames.Notes).setVisible(false);
                formContext.getControl(FieldNames.TotalOrderCost).setVisible(false)
                formContext.getControl(FieldNames.TotalTax).setVisible(false);
                formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.IHaveRead).setVisible(true);
				formContext.ui.tabs.get(TabNames.Installation).sections.get(SectionNames.OrderDepartmentInstall).setVisible(false);
                showHideMonthlyLeasePaymentsSection(executionContext);
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show/Hide easy pay method fields based on Easy Pay Opt Out and selected easy pay method
        var showHideFields = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var typeOfAgreement = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (typeOfAgreement == 275450000) {
                if (formContext.getAttribute(FieldNames.EasyPayOptOut).getValue() === 275450001) {
                    formContext.getControl(FieldNames.EasyPayMethod).setVisible(true);
                    formContext.getAttribute(FieldNames.EasyPayMethod).setRequiredLevel('required');
                    if (formContext.getAttribute(FieldNames.EasyPayMethod).getValue() === 275450000) {
                        formContext.getControl(FieldNames.CreditCard).setVisible(true);
                        formContext.getAttribute(FieldNames.CreditCard).setRequiredLevel('required');
                        formContext.getAttribute(FieldNames.BankAccount).setValue(null);
                        formContext.getControl(FieldNames.BankAccount).setVisible(false);
                        formContext.getAttribute(FieldNames.BankAccount).setRequiredLevel('none');
                    }
                    else if (formContext.getAttribute(FieldNames.EasyPayMethod).getValue() === 275450001) {
                        formContext.getControl(FieldNames.BankAccount).setVisible(true);
                        formContext.getAttribute(FieldNames.CreditCard).setValue(null);
                        formContext.getControl(FieldNames.CreditCard).setVisible(false);
                        formContext.getAttribute(FieldNames.BankAccount).setRequiredLevel('required');
                        formContext.getAttribute(FieldNames.CreditCard).setRequiredLevel('none');
                    }
                    else {
                        formContext.getAttribute(FieldNames.CreditCard).setValue(null);
                        formContext.getAttribute(FieldNames.BankAccount).setValue(null);
                        formContext.getControl(FieldNames.CreditCard).setVisible(false);
                        formContext.getControl(FieldNames.BankAccount).setVisible(false);
                        formContext.getAttribute(FieldNames.BankAccount).setRequiredLevel('none');
                        formContext.getAttribute(FieldNames.CreditCard).setRequiredLevel('none');
                    }
                }
                else {
                    formContext.getAttribute(FieldNames.EasyPayMethod).setValue(null);
                    formContext.getAttribute(FieldNames.CreditCard).setValue(null);
                    formContext.getAttribute(FieldNames.BankAccount).setValue(null);
                    formContext.getControl(FieldNames.CreditCard).setVisible(false);
                    formContext.getControl(FieldNames.BankAccount).setVisible(false);
                    formContext.getControl(FieldNames.EasyPayMethod).setVisible(false);
                    formContext.getAttribute(FieldNames.EasyPayMethod).setRequiredLevel('none');
                    formContext.getAttribute(FieldNames.BankAccount).setRequiredLevel('none');
                    formContext.getAttribute(FieldNames.CreditCard).setRequiredLevel('none');
                }
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show/Hide MonthlyLeasePayment Section based on Deferred Rate
        var showHideMonthlyLeasePaymentsSection = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var deferredRate = formContext.getAttribute(FieldNames.DeferredRate).getValue();
            var typeOfAgreement = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (typeOfAgreement == 275450000) {
                if (deferredRate === 275450000) {
                    formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.MonthlyLeaseDeffNo).setVisible(true);
                    formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.MonthlyLeaseDeffYes).setVisible(false);
                }
                else {
                    formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.MonthlyLeaseDeffNo).setVisible(false);
                    formContext.ui.tabs.get(TabNames.AgreementSummary).sections.get(SectionNames.MonthlyLeaseDeffYes).setVisible(true);
                }
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Change discount amount on change of Discount Percentage 
        var changeDiscountAmount = function (executionContext) {

            var formContext = executionContext.getFormContext();
            var discountPercent = formContext.getAttribute(FieldNames.DiscountPercent).getValue();
            if (discountPercent != null && discountPercent !== undefined && discountPercent !== "") {
                var installedCost = formContext.getAttribute(FieldNames.InstalledCost).getValue();
                var discountAmount = (installedCost * discountPercent) / 100;
                formContext.getAttribute(FieldNames.DiscountAmount).setValue(discountAmount);
                var totalInstalledCost = installedCost - discountAmount;
                formContext.getAttribute(FieldNames.TotalInstalledCost).setValue(totalInstalledCost);
                calculateCreditRemaining(executionContext, totalInstalledCost);
                onChangeTotalInstalledCost(executionContext);
                if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                    calculateTotalOrderCost(executionContext);
                }
            }
            else if (discountPercent == 0 || discountPercent == null || discountPercent == "") {
                var installedCost = formContext.getAttribute(FieldNames.InstalledCost).getValue();
                formContext.getAttribute(FieldNames.TotalInstalledCost).setValue(installedCost);
                if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                    formContext.getAttribute(FieldNames.TotalOrderCost).setValue(installedCost);
                }
            }

        };

        /*****************************************/
        //Owner : Disha Sharma
        //Change discount Percentage on change of Discount amount 
        var changeDiscountPercent = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var discountAmount = formContext.getAttribute(FieldNames.DiscountAmount).getValue();
            if (discountAmount != null && discountAmount !== undefined && discountAmount !== "") {
                var installedCost = formContext.getAttribute(FieldNames.InstalledCost).getValue();
                var discountPercent = (100 * discountAmount) / installedCost;
                formContext.getAttribute(FieldNames.DiscountPercent).setValue(discountPercent);
                var totalInstalledCost = installedCost - discountAmount;
                formContext.getAttribute(FieldNames.TotalInstalledCost).setValue(totalInstalledCost);
                calculateCreditRemaining(executionContext, totalInstalledCost);
                onChangeTotalInstalledCost(executionContext);
                if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                    calculateTotalOrderCost(executionContext);
                }
            }
            else if (discountAmount == 0 || discountAmount == null || discountAmount == "") {
                var installedCost = formContext.getAttribute(FieldNames.InstalledCost).getValue();
                formContext.getAttribute(FieldNames.TotalInstalledCost).setValue(installedCost);
                if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                    formContext.getAttribute(FieldNames.TotalOrderCost).setValue(installedCost);
                }
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Calculate credit remaining from credit check and total installed cost
        var calculateCreditRemaining = function (executionContext, totalinstalledcost) {
            var formContext = executionContext.getFormContext();
            var creditCheckId = "";
            var creditCheck = formContext.getAttribute(FieldNames.CreditCheckLookup);
            var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
            if (creditCheck != null && creditCheck.getValue() !== null && creditCheck.getValue() !== undefined) {
                creditCheckId = creditCheck.getValue()[0].id;
                var fetchXml = '<fetch aggregate="true" >' +
                    '<entity name="salesorder" >' +
                    '<attribute name="sxp_totalinstalledcost" alias="order_sum" aggregate="sum" />' +
                    '<filter type="and">' +
                    '<condition attribute="salesorderid" operator="ne" value="' + recordId + '" />' +
                    '</filter>' +
                    '<link-entity name="sxp_orderprocessing" from="bpf_salesorderid" to="salesorderid" link-type="inner" alias="ac">' +
                    '<link-entity name="processstage" from="processstageid" to="activestageid" link-type="inner" alias="ad">' +
                    '<filter type="and">' +
                    '<condition attribute="stagename" operator="eq" value="Products And Pricing" />' +
                    '</filter>' +
                    '</link-entity>' +
                    '</link-entity>' +
                    '<link-entity name="sxp_creditcheck" from="sxp_creditcheckid" to="sxp_creditcheck" >' +
                    '<attribute name="sxp_name" alias="TotalInstalledCost" groupby="true" />' +
                    '<filter type="and">' +
                    '<condition attribute="sxp_creditcheckid" operator="eq" value="' + creditCheckId + '" />' +
                    '</filter>' +
                    '</link-entity>' +
                    '</entity>' +
                    '</fetch>'
                fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
                Xrm.WebApi.retrieveMultipleRecords(EntityNames.Order, fetchXml).then(
                    function success(result) {

                        if (result.entities.length > 0) {
                            var totalInstalledCost = result.entities[0].order_sum + totalinstalledcost;
                            calculateRemainingCredit(executionContext, totalInstalledCost, creditCheckId);
                        }
                        else {
                            var totalInstalledCost = totalinstalledcost;
                            calculateRemainingCredit(executionContext, totalInstalledCost, creditCheckId);
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Calculate credit remaining from credit check and total installed cost
        var calculateRemainingCredit = function (executionContext, totalInstalledCost, creditCheckId) {
            var formContext = executionContext.getFormContext();
            Xrm.WebApi.online.retrieveRecord(EntityNames.CreditCheck, creditCheckId, "?$select=sxp_remainingamount").then(
                function success(result) {

                    if (result["sxp_remainingamount"] !== null && result["sxp_remainingamount"] !== undefined) {
                        creditRemaining = result["sxp_remainingamount"] - totalInstalledCost;
                        formContext.getAttribute(FieldNames.CreditRemaining).setValue(creditRemaining);
                        onChangeCreditRemaining(executionContext);
                    }
                },
                function (error) {
                    console.log(error.message);
                    // handle error conditions
                }
            );
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Retrieve shipping and billing adress from account loookup
        var retrieveAccountAddress = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() == 1) {
                var accountId = "";
                var account = formContext.getAttribute(FieldNames.AccountLookup);
                if (account != null && account.getValue() !== null && account.getValue() !== undefined) {
                    accountId = account.getValue()[0].id;
                    var queryConfiguration = "?$select=sxp_ismailingaddresssameasinstallationaddress,sxp_address1county,accountnumber,address1_name,address2_name,sxp_address2county,address1_line1, address1_line2,address1_city,address1_stateorprovince,address1_postalcode,address1_country,address2_line1,address2_line2,address2_city,address2_stateorprovince,address2_postalcode,address2_country&$filter=accountid eq '" + accountId + "'";
                    var req = new XMLHttpRequest();
                    req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/accounts" + queryConfiguration, false);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            req.onreadystatechange = null;
                            if (this.status === 200) {
                                var result = JSON.parse(this.response);
                                if (result.value.length > 0) {
                                    var addressResult = result.value[0];
                                    if (addressResult["address1_line1"] !== null && addressResult["address1_line1"] !== undefined) {
                                        formContext.getAttribute(FieldNames.ShipToLine1).setValue(addressResult["address1_line1"]);
                                    }
                                    if (addressResult["sxp_address1county"] !== null && addressResult["sxp_address1county"] !== undefined) {
                                        formContext.getAttribute(FieldNames.ShipToCounty).setValue(addressResult["sxp_address1county"]);
                                    }
                                    if (addressResult["address1_name"] !== null && addressResult["address1_name"] !== undefined) {
                                        formContext.getAttribute(FieldNames.ShipToName).setValue(addressResult["address1_name"]);
                                    }
                                    if (addressResult["address1_city"] !== null && addressResult["address1_city"] !== undefined) {
                                        formContext.getAttribute(FieldNames.ShipToCity).setValue(addressResult["address1_city"]);
                                    }
                                    if (addressResult["address1_stateorprovince"] !== null && addressResult["address1_stateorprovince"] !== undefined) {
                                        formContext.getAttribute(FieldNames.ShipToState).setValue(addressResult["address1_stateorprovince"]);
                                    }
                                    if (addressResult["address1_postalcode"] !== null && addressResult["address1_postalcode"] !== undefined) {
                                        formContext.getAttribute(FieldNames.ShipToPostalCode).setValue(addressResult["address1_postalcode"]);
                                    }
                                    if (addressResult["address1_country"] !== null && addressResult["address1_country"] !== undefined) {
                                        formContext.getAttribute(FieldNames.ShipToCountry).setValue(addressResult["address1_country"]);
                                    }
                                    if (addressResult["address2_line1"] !== null && addressResult["address2_line1"] !== undefined) {
                                        formContext.getAttribute(FieldNames.BillToLine1).setValue(addressResult["address2_line1"]);
                                    }
                                    if (addressResult["address2_name"] !== null && addressResult["address2_name"] !== undefined) {
                                        formContext.getAttribute(FieldNames.BillToName).setValue(addressResult["address2_name"]);
                                    }
                                    if (addressResult["sxp_address2county"] !== null && addressResult["sxp_address2county"] !== undefined) {
                                        formContext.getAttribute(FieldNames.BillToCounty).setValue(addressResult["sxp_address2county"]);
                                    }
                                    if (addressResult["address2_city"] !== null && addressResult["address2_city"] !== undefined) {
                                        formContext.getAttribute(FieldNames.BillToCity).setValue(addressResult["address2_city"]);
                                    }
                                    if (addressResult["address2_stateorprovince"] !== null && addressResult["address2_stateorprovince"] !== undefined) {
                                        formContext.getAttribute(FieldNames.BillToState).setValue(addressResult["address2_stateorprovince"]);
                                    }
                                    if (addressResult["address2_postalcode"] !== null && addressResult["address2_postalcode"] !== undefined) {
                                        formContext.getAttribute(FieldNames.BillToPostalCode).setValue(addressResult["address2_postalcode"]);
                                    }
                                    if (addressResult["address2_country"] !== null && addressResult["address2_country"] !== undefined) {
                                        formContext.getAttribute(FieldNames.BillToCountry).setValue(addressResult["address2_country"]);
                                    }
                                    if (addressResult["accountnumber"] !== null && addressResult["accountnumber"] !== undefined) {
                                        formContext.getAttribute(FieldNames.CustomerCode).setValue(addressResult["accountnumber"]);
                                    }
                                    if (addressResult["sxp_ismailingaddresssameasinstallationaddress"] !== null && addressResult["sxp_ismailingaddresssameasinstallationaddress"] !== undefined) {
                                        formContext.getAttribute(FieldNames.IsMailingAddressSameAsInstallationAddress).setValue(addressResult["sxp_ismailingaddresssameasinstallationaddress"]);
                                    }
                                }
                            } else {
                                Xrm.Utility.alertDialog(this.statusText);
                            }
                        }
                    };
                    req.send();
                }
                else {
                    formContext.getAttribute(FieldNames.ShipToLine1).setValue(null);
                    formContext.getAttribute(FieldNames.ShipToCounty).setValue(null);
                    formContext.getAttribute(FieldNames.ShipToName).setValue(null);
                    formContext.getAttribute(FieldNames.ShipToCity).setValue(null);
                    formContext.getAttribute(FieldNames.ShipToState).setValue(null);
                    formContext.getAttribute(FieldNames.ShipToPostalCode).setValue(null);
                    formContext.getAttribute(FieldNames.ShipToCountry).setValue(null);
                    formContext.getAttribute(FieldNames.BillToLine1).setValue(null);
                    formContext.getAttribute(FieldNames.BillToName).setValue(null);
                    formContext.getAttribute(FieldNames.BillToCounty).setValue(null);
                    formContext.getAttribute(FieldNames.BillToCity).setValue(null);
                    formContext.getAttribute(FieldNames.BillToState).setValue(null);
                    formContext.getAttribute(FieldNames.BillToPostalCode).setValue(null);
                    formContext.getAttribute(FieldNames.BillToCountry).setValue(null);
                    formContext.getAttribute(FieldNames.CustomerCode).setValue(null);
                    formContext.getAttribute(FieldNames.IsMailingAddressSameAsInstallationAddress).setValue(null);
                }
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Retrieve Advantage Fields from Advantage Entity
        var retrieveAdvantageFields = function (formContext) {
            if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450000) {
                var totalInstalledCost = formContext.getAttribute(FieldNames.TotalInstalledCost).getValue();
                var bundleRate = formContext.getAttribute(FieldNames.BundleRate).getValue();
                var isTotalInstallCostChanged = formContext.getAttribute(FieldNames.TotalInstalledCost).getIsDirty();
                if (totalInstalledCost !== null && totalInstalledCost != undefined && bundleRate != null && bundleRate != undefined) {
                    var a = false;
                    var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                    var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
                        "<entity name='salesorderdetail'>" +
                        "<attribute name='productid' />" +
                        "<attribute name='productdescription' />" +
                        "<attribute name='priceperunit' />" +
                        "<attribute name='quantity' />" +
                        "<attribute name='extendedamount' />" +
                        "<attribute name='msdyn_salesproductcategory' />" +
                        "<attribute name='salesorderid' />" +
                        "<attribute name='sequencenumber' />" +
                        "<attribute name='msdyn_company' />" +
                        "<attribute name='salesorderdetailid' />" +
                        "<order attribute='productid' descending='false' />" +
                        "<filter type='and'>" +
                        "<condition attribute='salesorderid' operator='eq' value='" + recordId + "' />" +
                        "</filter>" +
                        "<link-entity name='product' from='productid' to='productid' link-type='inner' alias='af'>" +
                        "<filter type='and'>" +
                        "<condition attribute='productstructure' operator='eq' value='3' />" +
                        "</filter>" +
                        "</link-entity>" +
                        "</entity>" +
                        "</fetch>";
                    fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
                    Xrm.WebApi.retrieveMultipleRecords(EntityNames.OrderProduct, fetchXml).then(
                        function success(result) {

                            if (result.entities.length > 0) {

                                a = true;
                                retrieveAdvFields(formContext, a);
                            }
                            else {
                                a = false;
                                retrieveAdvFields(formContext, a);
                            }
                        },
                        function (error) {
                            return false;
                            Xrm.Utility.alertDialog(error.message);

                        }
                    );

                }

            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Calculate discount amount on change of installed cost
        var onChangeInstalledCost = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var installedCost = formContext.getAttribute(FieldNames.InstalledCost).getValue();
            var stage = formContext.data.process.getActiveStage().getName();
            if (stage == businessProcessStages.productsAndPricing || stage == businessProcessStages.productAndPricing) {
                if (installedCost != null && installedCost !== undefined && installedCost !== 0) {
                    var discountRate = formContext.getAttribute(FieldNames.DiscountPercent).getValue();
                    var discountAmount = (installedCost * discountRate) / 100;
                    formContext.getAttribute(FieldNames.DiscountAmount).setValue(discountAmount);
                    var totalInstalledCost = installedCost - discountAmount;
                    formContext.getAttribute(FieldNames.TotalInstalledCost).setValue(totalInstalledCost);
                    if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                        calculateTotalOrderCost(executionContext);
                    }
                    calculateCreditRemaining(executionContext, totalInstalledCost);
                    onChangeTotalInstalledCost(executionContext);

                }
                else if (installedCost === 0) {
                    formContext.getAttribute(FieldNames.TotalInstalledCost).setValue(installedCost);
                    calculateCreditRemaining(executionContext, installedCost);
                    onChangeTotalInstalledCost(executionContext);
                }
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //set monthly rate based on advantage rate record
        var retrieveAdvFields = function (formContext, a) {
            var totalInstalledCost = formContext.getAttribute(FieldNames.TotalInstalledCost).getValue();
            var discount = 0;
            var deferredRate = formContext.getAttribute(FieldNames.DeferredRate).getValue();
            var service = formContext.getAttribute(FieldNames.Service).getValue();
            var bundleRate = formContext.getAttribute(FieldNames.BundleRate).getValue();
            var serviceType = formContext.getAttribute(FieldNames.Service).getValue();
            Xrm.WebApi.retrieveMultipleRecords(EntityNames.AdvantageRate, "?$select=sxp_periods,sxp_rate,sxp_systemrate&$filter=sxp_fromamount le " + totalInstalledCost + " and sxp_toamount ge " + totalInstalledCost + " and sxp_bundle eq " + bundleRate + " and sxp_service eq " + service + " and sxp_deferralrate eq " + deferredRate).then(
                function success(result) {

                    if (result.entities.length > 0) {

                        if (result.entities[0].sxp_periods !== null && result.entities[0].sxp_periods !== undefined) {

                            formContext.getAttribute(FieldNames.AdvantageTerm).setValue(result.entities[0].sxp_periods);
                            if (a) {
                                var monthlyRate = result.entities[0].sxp_systemrate;
                            }
                            else {
                                var monthlyRate = result.entities[0].sxp_rate;
                            }
                            if (serviceType == 275450000) {
                                discount = formContext.getAttribute(FieldNames.AdvantageDiscountHVAC).getValue();
                            }
                            else if (serviceType == 275450001) {
                                discount = formContext.getAttribute(FieldNames.AdvantageDiscountWater).getValue();
                            }
                            else if (serviceType == 275450002) {
                                discount = formContext.getAttribute(FieldNames.AdvantageDiscountWater).getValue();
                            }
                            if (monthlyRate !== 0) {
                                var MonthlyRate = monthlyRate - discount;
                            }
                            else {
                                var MonthlyRate = monthlyRate;
                            }
                            formContext.getAttribute(FieldNames.MonthlyRate).setValue(MonthlyRate);
                            calculateAdvantage(formContext, true, MonthlyRate);
                        }
                    }
                    else {
                        formContext.getAttribute(FieldNames.MonthlyRate).setValue(null);
                        formContext.getAttribute(FieldNames.AdvantageTerm).setValue(null);
                        Xrm.Utility.alertDialog("No Advantage Rate Found");
                    }
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Modified By : Prachi Goyal
        //Retrieve Service Center fields from Service Center Lookup
        var retrieveServiceCenterFields = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var stage = formContext.data.process.getActiveStage().getName();
            var serviceCenterId = "";
            var serviceCenter = formContext.getAttribute(FieldNames.ServiceCenterLookup);
            if (serviceCenter != null && serviceCenter.getValue() !== null && serviceCenter.getValue() !== undefined) {
                serviceCenterId = serviceCenter.getValue()[0].id;
                window.top.serviceCenterId = serviceCenterId;

                Xrm.WebApi.online.retrieveRecord(EntityNames.ServiceCenter, serviceCenterId, "?$select=sxp_tranche,sxp_centernumber,sxp_deferredrate,sxp_name,_sxp_pricelist_value").then(
                    function success(result) {
                        if (stage == businessProcessStages.installation) {
                            if (result["sxp_tranche"] !== null && result["sxp_tranche"] !== undefined) {
                                formContext.getAttribute(FieldNames.DimensionTranche).setValue(result["sxp_tranche"]);
                            }
                            else {
                                formContext.getAttribute(FieldNames.DimensionTranche).setValue(null);
                            }
                            window.top.serviceCenterName = result["sxp_name"];
                            formContext.getAttribute(FieldNames.DimensionCenter).setValue(result["sxp_centernumber"]);
                            formContext.getAttribute(FieldNames.DimensionFunctionalArea).setValue("Z01");
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
                onChangeAgreement(executionContext);
            }
        };

        ///*****************************************/
        ////Owner : Disha Sharma
        ////Change dimensionProfitCenter based on Service Optionset
        //var onChangeService = function (executionContext) {
        //    var formContext = executionContext.getFormContext();
        //    var service = formContext.getAttribute(FieldNames.Service).getText();
        //    var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getText();
        //    if (service !== null && service !== undefined) {
        //        Xrm.WebApi.retrieveMultipleRecords(EntityNames.ProfitCenter, "?$select=sxp_name,sxp_departmentnumber&$filter=sxp_service eq '" + service + "' and sxp_agreementtype eq '" + agreementType + "'").then(
        //            function success(result) {
        //                if (result.entities.length > 0) {
        //                    if (result.entities[0].sxp_name !== null && result.entities[0].sxp_name !== undefined) {
        //                        formContext.getAttribute(FieldNames.DimensionProfitCenter).setValue(result.entities[0].sxp_name);
        //                    }
        //                    if (result.entities[0].sxp_departmentnumber !== null && result.entities[0].sxp_departmentnumber !== undefined) {
        //                        formContext.getAttribute(FieldNames.DepartmentNumber).setValue(result.entities[0].sxp_departmentnumber);
        //                    }
        //                }
        //            },
        //            function (error) {
        //                Xrm.Utility.alertDialog(error.message);
        //            }
        //        );
        //    }
        //};

        /*****************************************/
        //Owner : Shivanshu Sharma
        // Open Entity form , it is used to refresh the form
        var RefreshEntityForm = function (entityName, entityId) {

            var entityFormOptions = {};
            entityFormOptions["entityName"] = entityName;
            entityFormOptions["entityId"] = entityId;

            Xrm.Navigation.openForm(entityFormOptions, null);
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Change Status Reason based on different conditions
        var changeStatusReason = function (executionContext) {

            var formContext = executionContext.getFormContext();
            var formType = formContext.ui.getFormType();
            if (formType !== 1) {
                var statusReason = formContext.getAttribute(FieldNames.StatusReason).getValue();
                var requiredArr, disabledArr;
                if (statusReason === 1) {
                    var advantageEnable = getConfiguration("Order.EnableAdvantage");
                    if (advantageEnable == true) {
                        var agreementSigned = formContext.getAttribute(FieldNames.AgreementStatus).getValue();
                        if (agreementSigned == "SIGNED") {
                            formContext.getAttribute(FieldNames.StatusReason).setValue(2);
                            formContext.data.entity.save();
                        }
                    }
                }
                else if (statusReason === 2) {
                    var coiReceived = formContext.getAttribute(FieldNames.COIReceived).getValue();
                    var actualInstallDate = formContext.getAttribute(FieldNames.ActualInstallDate).getValue();
                    var starCustomerNumber = formContext.getAttribute(FieldNames.StarCustomerNumber).getValue();
                    var orderType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
                    if (coiReceived !== null && actualInstallDate !== null && starCustomerNumber !== null) {
                        var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                        Xrm.WebApi.retrieveMultipleRecords(EntityNames.OrderProduct, "?$select=sxp_serialnumber&$filter=_salesorderid_value eq '" + recordId + "' and sxp_serialnumber eq null and sxp_primary eq true").then(
                            function success(result) {
                                if (result.entities.length > 0) {
                                    formContext.ui.setFormNotification("Enter serial number for Order Product", "WARNING", "Warning");
                                    flag = 1;
                                }
                                else {
                                    formContext.ui.clearFormNotification("Warning");
                                    flag = 0;
                                    if (orderType == 275450000) {
                                        formContext.getAttribute(FieldNames.StatusReason).setValue(275450001);
                                        disabledArr = [FieldNames.DiscountLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.WetSignature, FieldNames.TypeOfAgreement, FieldNames.Service, FieldNames.AccountLookup, FieldNames.CreditCheckLookup, FieldNames.BillToLine1, FieldNames.BillToLine2, FieldNames.BillToCity, FieldNames.BillToState, FieldNames.BillToPostalCode, FieldNames.BillToCountry, FieldNames.ShipToLine1, FieldNames.ShipToLine2, FieldNames.ShipToCity, FieldNames.ShipToState, FieldNames.ShipToPostalCode, FieldNames.ShipToCountry, FieldNames.ServiceCenterLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.BundleRate, FieldNames.CoHomeOwner, FieldNames.EstimatedInstalledDate, FieldNames.CoHomeOwnerSigning, FieldNames.Ebilling, FieldNames.EasyPayOptOut, FieldNames.EasyPayMethod, FieldNames.BankAccount, FieldNames.CreditCard, FieldNames.CustomerSigningDigitally, FieldNames.SignatureType];
                                        lockOrderFields(executionContext, disabledArr);
                                        formContext.getAttribute(FieldNames.InstalltinStageComplete).setValue(true);
                                    }
                                    else if (orderType == 275450001) {
                                        if (formContext.getAttribute(FieldNames.PaymentReceivedDate).getValue() !== null) {
                                            formContext.getAttribute(FieldNames.StatusReason).setValue(275450006);
                                            disabledArr = [FieldNames.DiscountLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.WetSignature, FieldNames.TypeOfAgreement, FieldNames.Service, FieldNames.AccountLookup, FieldNames.CreditCheckLookup, FieldNames.BillToLine1, FieldNames.BillToLine2, FieldNames.BillToCity, FieldNames.BillToState, FieldNames.BillToPostalCode, FieldNames.BillToCountry, FieldNames.ShipToLine1, FieldNames.ShipToLine2, FieldNames.ShipToCity, FieldNames.ShipToState, FieldNames.ShipToPostalCode, FieldNames.ShipToCountry, FieldNames.ServiceCenterLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.BundleRate, FieldNames.CoHomeOwner, FieldNames.EstimatedInstalledDate, FieldNames.CoHomeOwnerSigning, FieldNames.Ebilling, FieldNames.EasyPayOptOut, FieldNames.EasyPayMethod, FieldNames.BankAccount, FieldNames.CreditCard, FieldNames.CustomerSigningDigitally, FieldNames.SignatureType];
                                            lockOrderFields(executionContext, disabledArr);
                                            formContext.getAttribute(FieldNames.InstalltinStageComplete).setValue(true);
                                        }
                                    }

                                }
                            },
                            function (error) {
                                Xrm.Utility.alertDialog(error.message);
                            }
                        );
                    }
                }

                else if (statusReason === 275450002) {
                    disabledArr = [FieldNames.DiscountLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.WetSignature, FieldNames.TypeOfAgreement, FieldNames.Service, FieldNames.AccountLookup, FieldNames.CreditCheckLookup, FieldNames.BillToLine1, FieldNames.BillToLine2, FieldNames.BillToCity, FieldNames.BillToState, FieldNames.BillToPostalCode, FieldNames.BillToCountry, FieldNames.ShipToLine1, FieldNames.ShipToLine2, FieldNames.ShipToCity, FieldNames.ShipToState, FieldNames.ShipToPostalCode, FieldNames.ShipToCountry, FieldNames.ServiceCenterLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.BundleRate, FieldNames.CoHomeOwner, FieldNames.EstimatedInstalledDate, FieldNames.CoHomeOwnerSigning, FieldNames.Ebilling, FieldNames.EasyPayOptOut, FieldNames.EasyPayMethod, FieldNames.BankAccount, FieldNames.CreditCard, FieldNames.CustomerSigningDigitally, FieldNames.SignatureType, FieldNames.COIReceived, FieldNames.ActualInstallDate, FieldNames.StarCustomerNumber, FieldNames.PaymentReceivedDate];
                    lockOrderFields(executionContext, disabledArr);
                    formContext.data.entity.save();
                }

            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Change status reason on check of retrigger field 
        var checkRetriggerField = function (executionContext) {

            var formContext = executionContext.getFormContext();
            var formType = formContext.ui.getFormType();
            if (formType !== 1) {
                if (formContext.getAttribute(FieldNames.Retrigger).getValue() === true) {
                    formContext.getAttribute(FieldNames.StatusReason).setValue(275450002);
                    disabledArr = [FieldNames.DiscountLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.WetSignature, FieldNames.TypeOfAgreement, FieldNames.Service, FieldNames.AccountLookup, FieldNames.CreditCheckLookup, FieldNames.BillToLine1, FieldNames.BillToLine2, FieldNames.BillToCity, FieldNames.BillToState, FieldNames.BillToPostalCode, FieldNames.BillToCountry, FieldNames.ShipToLine1, FieldNames.ShipToLine2, FieldNames.ShipToCity, FieldNames.ShipToState, FieldNames.ShipToPostalCode, FieldNames.ShipToCountry, FieldNames.ServiceCenterLookup, FieldNames.DiscountAmount, FieldNames.DiscountPercent, FieldNames.BundleRate, FieldNames.CoHomeOwner, FieldNames.EstimatedInstalledDate, FieldNames.CoHomeOwnerSigning, FieldNames.Ebilling, FieldNames.EasyPayOptOut, FieldNames.EasyPayMethod, FieldNames.BankAccount, FieldNames.CreditCard, FieldNames.CustomerSigningDigitally, FieldNames.SignatureType, FieldNames.COIReceived, FieldNames.ActualInstallDate, FieldNames.StarCustomerNumber, FieldNames.PaymentReceivedDate];
                    lockOrderFields(executionContext, disabledArr);
                    formContext.getControl(FieldNames.Retrigger).setDisabled(true);
                }
            }
        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        //Refresh form 
        var refreshProductGrid = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var recordId = Xrm.Page.data.entity.getId()
            Xrm.Utility.openEntityForm(EntityNames.Order, recordId);
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Lock all fields in Array
        var lockOrderFields = function (executionContext, tempArray) {
            var formContext = executionContext.getFormContext();
            for (var i = 0; i < tempArray.length; i++) {
                formContext.getControl(tempArray[i]).setDisabled(true);
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Set Required all fields in Array
        var setFieldsRequired = function (executionContext, tempArray) {
            var formContext = executionContext.getFormContext();
            for (var i = 0; i < tempArray.length; i++) {
                formContext.getControl(tempArray[i]).setDisabled(false);
                formContext.getAttribute(tempArray[i]).setRequiredLevel('required');
            }
        };

        /*****************************************/
        // Owner : Disha Sharma
        // Check Agreement amount and total installed cost,gives error if not equal
        var onChangeAgreementAmount = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var stage = formContext.data.process.getActiveStage().getName();
            var agreementAmount = formContext.getAttribute(FieldNames.AgreementAmount).getValue();
            if (agreementAmount !== null && agreementAmount !== undefined && stage === businessProcessStages.paymentDetail) {
                var totalOrderCost = formContext.getAttribute(FieldNames.TotalOrderCost).getValue();
                var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
                if (agreementType === 275450001 && agreementAmount !== totalOrderCost) {
                    formContext.getControl(FieldNames.AgreementAmount).setNotification("Funding Amount and Total Installed Cost doesn't match", "RestrictSave");
                    flag = 1;
                }
                else {
                    formContext.getControl(FieldNames.AgreementAmount).clearNotification("RestrictSave");
                    flag = 0;
                }
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Perform field validations based on Agreement change
        var onChangeAgreement = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var stage = formContext.data.process.getActiveStage().getName();
            var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (agreementType !== null) {
                onChangeAgreementAmount(executionContext);
                formContext.getControl(FieldNames.DiscountLookup).addPreSearch(filterLookup);
                if (agreementType == 275450000) {
                    formContext.getAttribute(FieldNames.CreditCheckLookup).setRequiredLevel('required');
                    formContext.getControl(FieldNames.CreditRemaining).setVisible(true);
                }
                else {
                    formContext.getControl(FieldNames.CreditRemaining).setVisible(false);
                    var serviceCenterId = "";
                    var serviceCenter = formContext.getAttribute(FieldNames.ServiceCenterLookup);
                    if (serviceCenter != null && serviceCenter.getValue() !== null && serviceCenter.getValue() !== undefined) {
                        serviceCenterId = serviceCenter.getValue()[0].id;
                        Xrm.WebApi.online.retrieveRecord(EntityNames.ServiceCenter, serviceCenterId, "?$select=_sxp_servicecenteraccount_value").then(
                            function success(result) {
                                if (result["_sxp_servicecenteraccount_value"] !== null && result["_sxp_servicecenteraccount_value"] !== undefined) {
                                    var accountId = result["_sxp_servicecenteraccount_value"];
                                    var accountName = result["_sxp_servicecenteraccount_value@OData.Community.Display.V1.FormattedValue"];
                                    //Utilities.setLookupField(formContext, FieldNames.ShippingOrigin, accountId, accountName, EntityNames.Account);
                                }
                                else {
                                    //formContext.getAttribute(FieldNames.ShippingOrigin).setValue(null);
                                }
                            },
                            function (error) {
                                Xrm.Utility.alertDialog(error.message);
                            }
                        );
                    }
                }
            }
            formContext.ui.refreshRibbon(true);

        };

        /*****************************************/
        //Owner : Disha Sharma
        //Filter Discount Lookup Records based on agreement type
        var filterLookup = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (agreementType === 275450001) {
                var filter = "<filter type='and'>"
                    + "<filter type='or'>"
                    + "<filter type='and'>"
                    + "<condition attribute='sxp_agreementtype' operator='eq' value='275450001' />"
                    + "<condition attribute='sxp_name' operator='like' value='%Fire%' />"
                    + "</filter>"
                    + "<filter type='and'>"
                    + "<condition attribute='sxp_agreementtype' operator='eq' value='275450001' />"
                    + "<condition attribute='sxp_name' operator='not-like' value='%Fire%' />"
                    + "</filter>"
                    + "</filter>"
                    + "</filter>"
                formContext.getControl(FieldNames.DiscountLookup).addCustomFilter(filter);
            }
            else {
                var filter = "<filter type='and'>"
                    + "<condition attribute='sxp_agreementtype' operator='eq' value='275450000' />"
                    + "</filter>"
                formContext.getControl(FieldNames.DiscountLookup).addCustomFilter(filter);
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Retrieve discount percentage from discount lookup 
        var onLoadDiscountLookup = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var DiscountId = "";
            var discount = formContext.getAttribute(FieldNames.DiscountLookup);
            if (discount != null && discount.getValue() !== null && discount.getValue() !== undefined) {
                DiscountId = discount.getValue()[0].id;
                Xrm.WebApi.online.retrieveRecord(EntityNames.Discount, DiscountId, "?$select=sxp_discount,sxp_editable,sxp_name").then(
                    function success(result) {

                        if (result["sxp_editable"] === 275450001) {
                            formContext.getControl(FieldNames.DiscountPercent).setDisabled(false);
                            formContext.getControl(FieldNames.DiscountAmount).setDisabled(false);
                        }
                        else if (result["sxp_editable"] === 275450000) {
                            formContext.getControl(FieldNames.DiscountPercent).setDisabled(true);
                            formContext.getControl(FieldNames.DiscountAmount).setDisabled(true);
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }

        };

        /*****************************************/
        //Owner : Disha Sharma
        //Make discount amount and percent editable based on condition
        var onChangeDiscountLookup = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var DiscountId = "";
            var discount = formContext.getAttribute(FieldNames.DiscountLookup);
            if (discount != null && discount.getValue() !== null && discount.getValue() !== undefined) {
                DiscountId = discount.getValue()[0].id;
                Xrm.WebApi.online.retrieveRecord(EntityNames.Discount, DiscountId, "?$select=sxp_discount,sxp_editable,sxp_name").then(
                    function success(result) {
                        if (result["sxp_name"] === "Fire Cracker Promotion") {
                            checkFireCrackerDiscount(executionContext);
                        }
                        else {
                            if (result["sxp_discount"] !== null && result["sxp_discount"] !== undefined) {
                                formContext.getAttribute(FieldNames.DiscountPercent).setValue(result["sxp_discount"]);
                                changeDiscountAmount(executionContext);
                            }
                            else {
                                formContext.getAttribute(FieldNames.DiscountPercent).setValue(null);
                            }
                        }
                        if (result["sxp_editable"] === 275450001) {
                            formContext.getControl(FieldNames.DiscountPercent).setDisabled(false);
                            formContext.getControl(FieldNames.DiscountAmount).setDisabled(false);
                        }
                        else if (result["sxp_editable"] === 275450000) {
                            formContext.getControl(FieldNames.DiscountPercent).setDisabled(true);
                            formContext.getControl(FieldNames.DiscountAmount).setDisabled(true);
                        }


                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );

            }


            else if (discount.getValue() == "" || discount.getValue() == null) {

                var installedCost = formContext.getAttribute(FieldNames.InstalledCost).getValue();
                formContext.getControl(FieldNames.DiscountPercent).setDisabled(true);
                formContext.getControl(FieldNames.DiscountAmount).setDisabled(true);
                formContext.getAttribute(FieldNames.DiscountPercent).setValue(0);
                formContext.getAttribute(FieldNames.DiscountAmount).setValue(null);
                formContext.getAttribute(FieldNames.TotalInstalledCost).setValue(installedCost);
                if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() === 275450001) {
                    formContext.getAttribute(FieldNames.TotalOrderCost).setValue(installedCost);
                }
            }

        };

        /*****************************************/
        //Owner : Disha Sharma
        //Check fire cracker discount and fetch  percent from service center
        var checkFireCrackerDiscount = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var serviceCenterId = "";
            var serviceCenter = formContext.getAttribute(FieldNames.ServiceCenterLookup);
            if (serviceCenter != null && serviceCenter.getValue() !== null && serviceCenter.getValue() !== undefined) {
                serviceCenterId = serviceCenter.getValue()[0].id;
                Xrm.WebApi.online.retrieveRecord(EntityNames.ServiceCenter, serviceCenterId, "?$select=sxp_firecrackerdiscountpercent,sxp_firecrackerdiscountfrom,sxp_firecrackerdiscountto").then(
                    function success(result) {

                        var currentDate = new Date()
                        var firecrackerFrom = toDate(result.sxp_firecrackerdiscountfrom);
                        var firecrackerTo = toDate(result.sxp_firecrackerdiscountto);
                        var firecrackerEffective = (firecrackerFrom <= currentDate && firecrackerTo >= currentDate);

                        if (result["sxp_firecrackerdiscountpercent"] !== null && result["sxp_firecrackerdiscountpercent"] !== undefined && firecrackerEffective) {
                            formContext.getAttribute(FieldNames.DiscountPercent).setValue(result["sxp_firecrackerdiscountpercent"]);
                            changeDiscountAmount(executionContext);
                        }
                        else {
                            formContext.getAttribute(FieldNames.DiscountPercent).setValue(0);
                            changeDiscountAmount(executionContext);
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show/Hide and set values to State Addendum fields
        var showHideStateAddendumFields = function (executionContext) {

            var formContext = executionContext.getFormContext();
            var stage = formContext.data.process.getActiveStage().getName();
            var agreementType = formContext.getAttribute(FieldNames.TypeOfAgreement).getValue();
            if (agreementType === 275450001 && stage == businessProcessStages.agreementSummary) {
                var state = formContext.getAttribute(FieldNames.ShipToState).getValue();
                var accountId = "";
                var account = formContext.getAttribute(FieldNames.AccountLookup);
                if (account != null && account.getValue() !== null && account.getValue() !== undefined) {
                    accountId = account.getValue()[0].id;
                    Xrm.WebApi.online.retrieveRecord(EntityNames.Account, accountId, "?$select=sxp_firstname,sxp_lastname").then(
                        function success(result) {
                            if (state == "NY") {

                                formContext.getControl(FieldNames.OwnerInitials).setVisible(true);
                                var firstName = result["sxp_firstname"];
                                var firstNameInitial = firstName.charAt(0);
                                var lastName = result["sxp_lastname"];
                                var lastNameInitial = lastName.charAt(0);
                                formContext.getAttribute(FieldNames.OwnerInitials).setValue(firstNameInitial + lastNameInitial);
                                formContext.getAttribute(FieldNames.IsBuyerAtleast65YearOld).setValue(null);
                                formContext.getControl(FieldNames.IsBuyerAtleast65YearOld).setVisible(false);
                                formContext.getAttribute(FieldNames.IsBuyerAtleast65YearOld).setRequiredLevel('none');
                            }
                            else {
                                formContext.getControl(FieldNames.OwnerInitials).setDisabled(true);
                            }


                            if (state == "MD") {
                                if (stage === "Agreement Summary") {
                                    formContext.getControl(FieldNames.IsBuyerAtleast65YearOld).setVisible(true);
                                    formContext.getAttribute(FieldNames.OwnerInitials).setValue(null);
                                    formContext.getControl(FieldNames.OwnerInitials).setVisible(false);
                                    formContext.getAttribute(FieldNames.IsBuyerAtleast65YearOld).setRequiredLevel('required');
                                    formContext.getControl(FieldNames.IsBuyerAtleast65YearOld).setDisabled(false);
                                }
                                else {
                                    formContext.getControl(FieldNames.IsBuyerAtleast65YearOld).setDisabled(true);
                                    formContext.getControl(FieldNames.IsBuyerAtleast65YearOld).setVisible(true);
                                }
                            }
                            else {
                                formContext.getControl(FieldNames.IsBuyerAtleast65YearOld).setVisible(false);
                                formContext.getAttribute(FieldNames.IsBuyerAtleast65YearOld).setRequiredLevel('none');
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
        //Owner : Disha Sharma
        //Hide Agreement Subgrid Button
        var hideAgreementSubgridButton = function (formContext) {
            var entityName = formContext.data.entity.getEntityName();
            if (entityName == EntityNames.Order) {
                return false;
            }
            else {
                return true;
            }

        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        // Function to be called when cancel order button is clicked
        var onClickCancelOrderButton = function (formContext) {

            var statusReason = formContext.getAttribute(FieldNames.StatusReason).getValue();
            if (statusReason !== 275450004) {
                var orderId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                var confirmStrings = { text: "Do you Want to Cancel the Order", title: "Confirm", confirmButtonLabel: "Yes", cancelButtonLabel: "No" };

                Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
                    function (success) {
                        if (success.confirmed) {

                            formContext.getControl(FieldNames.ReasonCode).setVisible(true);
                            formContext.getAttribute(FieldNames.ReasonCode).setRequiredLevel('required');
                            formContext.ui.setFormNotification("Please Fill the Reason Code to proceed with Cancellation Of Order", "WARNING", "ReasonCodeNotification");
                            formContext.getControl(FieldNames.ReasonCode).setFocus();
                        }
                        else {
                            formContext.getControl(FieldNames.ReasonCode).setVisible(false);
                            formContext.getAttribute(FieldNames.ReasonCode).setRequiredLevel('none');
                        }

                    });
            }
        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        // Onchange function that will copy the Shipping address to mailing address if the  IsMailingAddressSameAsInstallationAddress is checked
        var onChangeIsMailingAdress = function (executionContext) {
            var formContext = executionContext.getFormContext();
            onLoadIsMailingAddress(executionContext);
            var isMailingAddress = formContext.getAttribute(FieldNames.IsMailingAddressSameAsInstallationAddress).getValue();
            if (isMailingAddress) {
                var shiptoName = formContext.getAttribute(FieldNames.ShipToName).getValue();
                formContext.getAttribute(FieldNames.BillToName).setValue(shiptoName);
                var shiptoStreet = formContext.getAttribute(FieldNames.ShipToLine1).getValue();
                formContext.getAttribute(FieldNames.BillToLine1).setValue(shiptoStreet);
                var shiptoCounty = formContext.getAttribute(FieldNames.ShipToCounty).getValue();
                formContext.getAttribute(FieldNames.BillToCounty).setValue(shiptoCounty);
                var shiptoCity = formContext.getAttribute(FieldNames.ShipToCity).getValue();
                formContext.getAttribute(FieldNames.BillToCity).setValue(shiptoCity);
                var shiptoState = formContext.getAttribute(FieldNames.ShipToState).getValue();
                formContext.getAttribute(FieldNames.BillToState).setValue(shiptoState);
                var shiptoCountry = formContext.getAttribute(FieldNames.ShipToCountry).getValue();
                formContext.getAttribute(FieldNames.BillToCountry).setValue(shiptoCountry);
                var shiptoPostalCode = formContext.getAttribute(FieldNames.ShipToPostalCode).getValue();
                formContext.getAttribute(FieldNames.BillToPostalCode).setValue(shiptoPostalCode);
                var shipToState = formContext.getAttribute(FieldNames.ShipToState).getValue();
                formContext.getAttribute(FieldNames.BillToState).setValue(shipToState);

            }
            else {
                formContext.getAttribute(FieldNames.BillToName).setValue(null);
                formContext.getAttribute(FieldNames.BillToLine1).setValue(null);
                formContext.getAttribute(FieldNames.BillToCounty).setValue(null);
                formContext.getAttribute(FieldNames.BillToCity).setValue(null);
                formContext.getAttribute(FieldNames.BillToState).setValue(null);
                formContext.getAttribute(FieldNames.BillToCountry).setValue(null);
                formContext.getAttribute(FieldNames.BillToPostalCode).setValue(null);

            }

        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        // OnLoad Function To check the status of IsMailingAddressSameAsInstallationAddress
        var onLoadIsMailingAddress = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var isMailingAddress = formContext.getAttribute(FieldNames.IsMailingAddressSameAsInstallationAddress).getValue();
            if (isMailingAddress) {
                formContext.getControl(FieldNames.BillToLine1).setDisabled(true);
                formContext.getControl(FieldNames.BillToCounty).setDisabled(true);
                formContext.getControl(FieldNames.BillToCity).setDisabled(true);
                formContext.getControl(FieldNames.BillToState).setDisabled(true);
                formContext.getControl(FieldNames.BillToCountry).setDisabled(true);
                formContext.getControl(FieldNames.BillToPostalCode).setDisabled(true);
                var shipToPostalCode = formContext.getAttribute(FieldNames.ShipToPostalCode).getValue();
                formContext.getAttribute(FieldNames.BillToPostalCode).setValue(shipToPostalCode);
                var shiptoLine1 = formContext.getAttribute(FieldNames.ShipToLine1).getValue();
                formContext.getAttribute(FieldNames.BillToLine1).setValue(shiptoLine1);
                var shipToCounty = formContext.getAttribute(FieldNames.ShipToCounty).getValue();
                formContext.getAttribute(FieldNames.BillToCounty).setValue(shipToCounty);
                var shiptocity = formContext.getAttribute(FieldNames.ShipToCity).getValue();
                formContext.getAttribute(FieldNames.BillToCity).setValue(shiptocity);
                var shipToState = formContext.getAttribute(FieldNames.ShipToState).getValue();
                formContext.getAttribute(FieldNames.BillToState).setValue(shipToState);
                var shipToCountry = formContext.getAttribute(FieldNames.ShipToCountry).getValue();
                formContext.getAttribute(FieldNames.BillToCountry).setValue(shipToCountry);
            }
            else {
                formContext.getControl(FieldNames.BillToName).setVisible(true);
                formContext.getControl(FieldNames.BillToLine1).setDisabled(false);
                formContext.getControl(FieldNames.BillToCounty).setDisabled(false);
                formContext.getControl(FieldNames.BillToCity).setDisabled(false);
                formContext.getControl(FieldNames.BillToState).setDisabled(false);
                formContext.getControl(FieldNames.BillToCountry).setDisabled(false);
                formContext.getControl(FieldNames.BillToPostalCode).setDisabled(false);
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //set product grid readonly
        var setGridReadOnly = function (executionContext) {
            var stage = Xrm.Page._data.process.getActiveStage().getName()
            executionContext._eventSource.attributes.forEach(function (attribute, i) {
                if (stage != businessProcessStages.installation) {
                    var ctrl = attribute.controls.get(0);
                    ctrl.setDisabled(true);
                }
                else if (stage == businessProcessStages.installation && attribute._attributeName != "sxp_manufacturer" && attribute._attributeName != "sxp_fullmodel" && attribute._attributeName != "sxp_serialnumber" && attribute._attributeName != "sxp_starsticketnumber") {
                    var ctrl = attribute.controls.get(0);
                    ctrl.setDisabled(true);
                }
            }
            )
        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        // To show hide the manditory fields in the cancellation of order process
        var onChangeReasonCode = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var reasonCode = formContext.getAttribute(FieldNames.ReasonCode).getValue();
            if (reasonCode !== null && reasonCode !== undefined) {
                //formContext.ui.clearFormNotification("ReasonCodeNotification");
                if (reasonCode == 275450000) {
                    formContext.getControl(FieldNames.LinkedOrder).setVisible(true);
                    formContext.getAttribute(FieldNames.LinkedOrder).setRequiredLevel('required');
                    formContext.getControl(FieldNames.ExplanationCode).setVisible(false);
                    formContext.getAttribute(FieldNames.ExplanationCode).setRequiredLevel('none');
                    formContext.ui.setFormNotification("Please Fill the Related Order or Create New Order to proceed with Cancellation Of this Order", "WARNING", "LinkedOrderNotification");
                }
                else if (reasonCode == 275450001) {
                    formContext.getControl(FieldNames.LinkedOrder).setVisible(false);
                    formContext.getAttribute(FieldNames.LinkedOrder).setRequiredLevel('none');
                    formContext.getControl(FieldNames.ExplanationCode).setVisible(false);
                    formContext.getAttribute(FieldNames.ExplanationCode).setRequiredLevel('none');
                    cancelcancelOrder = true;
                }
                else if (reasonCode == 275450002 || reasonCode == 275450003) {
                    formContext.getControl(FieldNames.ExplanationCode).setVisible(true);
                    formContext.getAttribute(FieldNames.ExplanationCode).setRequiredLevel('required');
                    formContext.getControl(FieldNames.LinkedOrder).setVisible(false);
                    formContext.getAttribute(FieldNames.LinkedOrder).setRequiredLevel('none');
                    formContext.ui.clearFormNotification("ReasonCodeNotification");
                    formContext.ui.setFormNotification("Please Fill the Explanation Code to proceed with Cancellation Of Order", "WARNING", "ExplanationCodeNotification");
                }
            }

        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        // Show hide formnotification on change of ExplanationCode field in he process of cancellation of order
        var onChangeExplanationCode = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var explanationCode = formContext.getAttribute(FieldNames.ExplanationCode).getValue();
            if (explanationCode !== null && explanationCode !== undefined) {
                formContext.ui.clearFormNotification("ExplanationCodeNotification");
                cancelOrder = true;
            }
        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        // Call workflow to cancel the order if neccessary conditions are met
        var cancelOrderOnSave = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var entityName = formContext.data.entity.getEntityName();
            var reasonCode = formContext.getAttribute(FieldNames.ReasonCode).getValue();
            var explanationCode = formContext.getAttribute(FieldNames.ExplanationCode).getValue();
            var statusReason = formContext.getAttribute(FieldNames.StatusReason).getValue();
            var linkedOrder = formContext.getAttribute(FieldNames.LinkedOrder).getValue();
            if ((reasonCode == 275450001 || reasonCode == 275450000 || explanationCode !== null) &&
                statusReason !== 275450004) {
                var entityId = formContext.data.entity.getId();
                var salesOrderId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                formContext.ui.clearFormNotification("ReasonCodeNotification");
                formContext.ui.clearFormNotification("ExplanationCodeNotification");
                var pathObj = {
                    "orderId": salesOrderId
                };

                Xrm.WebApi.retrieveMultipleRecords("sxp_configuration", "?$select=sxp_value&$filter=sxp_name eq 'Order.CancelOrderUrl'").then(
                    function success(result) {
                        if (result.entities.length > 0) {
                            Xrm.Utility.showProgressIndicator("Sales order Cancellation is in progress.");
                            if (result.entities[0].sxp_value !== null && result.entities[0].sxp_value !== undefined) {
                                var cancelOrderUrl = result.entities[0].sxp_value;
                                parent.$.ajax({
                                    type: "POST",
                                    url: cancelOrderUrl,
                                    contentType: 'application/json',
                                    data: JSON.stringify(pathObj),
                                    success: function (response) {
                                        Xrm.Utility.closeProgressIndicator();
                                        RefreshEntityForm(entityName, salesOrderId);

                                    },
                                    error: function (error) {
                                        Xrm.Utility.closeProgressIndicator();
                                        alert(JSON.stringify(error.responseJSON));
                                        RefreshEntityForm(entityName, salesOrderId);
                                    }
                                });
                            }

                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                        formContext.getAttribute(FieldNames.SpiffUnitAmount).setValue(null);
                        formContext.getControl(FieldNames.SpiffUnitAmount).setDisabled(false);
                    }
                );

            }
        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        //Show hide fields if depending upon if order is cancelled or not.
        var onLoadCheckCancellation = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var reasonCode = formContext.getAttribute(FieldNames.ReasonCode).getValue();
            var explanationCode = formContext.getAttribute(FieldNames.ExplanationCode).getValue();
            var statusReason = formContext.getAttribute(FieldNames.StatusReason).getValue();
            var linkedOrder = formContext.getAttribute(FieldNames.LinkedOrder).getValue();
            if (linkedOrder !== null && linkedOrder !== undefined && reasonCode !== 275450000 && statusReason !== 275450004) {
                formContext.getAttribute(FieldNames.LinkedOrder).setValue(null);
            }
            if (reasonCode == 275450000) {
                formContext.getControl(FieldNames.ReasonCode).setVisible(true);
                formContext.getAttribute(FieldNames.ReasonCode).setRequiredLevel('required');
                formContext.getControl(FieldNames.LinkedOrder).setVisible(true);
                formContext.getAttribute(FieldNames.LinkedOrder).setRequiredLevel('required');
            }
            else if (reasonCode == 275450001) {
                // set notification to show this record is going to be deactivate on save
                formContext.getControl(FieldNames.ReasonCode).setVisible(true);
                formContext.getAttribute(FieldNames.ReasonCode).setRequiredLevel('required');
                formContext.getControl(FieldNames.ExplanationCode).setVisible(false);
                formContext.getAttribute(FieldNames.ExplanationCode).setRequiredLevel('none');
            }
            else if (reasonCode == 275450002 || reasonCode == 275450003 || explanationCode !== null) {
                formContext.getControl(FieldNames.ReasonCode).setVisible(true);
                formContext.getAttribute(FieldNames.ReasonCode).setRequiredLevel('required');
                formContext.getControl(FieldNames.ExplanationCode).setVisible(true);
                formContext.getAttribute(FieldNames.ExplanationCode).setRequiredLevel('required');

            }
            else if (reasonCode == null || reasonCode !== undefined) {
                formContext.getControl(FieldNames.ReasonCode).setVisible(false);
                formContext.getAttribute(FieldNames.ReasonCode).setRequiredLevel('none');
                formContext.getControl(FieldNames.ExplanationCode).setVisible(false);
                formContext.getAttribute(FieldNames.ExplanationCode).setRequiredLevel('none');
                formContext.getControl(FieldNames.LinkedOrder).setVisible(false);
                formContext.getAttribute(FieldNames.LinkedOrder).setRequiredLevel('none');
            }

        };

        /*****************************************/
        //Owner : Shivanshu Sharma
        //SHow hide cancel order button
        showHideCancelOrderButton = function (formContext) {

            var status = formContext.getAttribute(FieldNames.Status).getValue();
            var formType = formContext.ui.getFormType();
            if (formType == 1) {
                return false;
            }
            else if (formType !== 1 && status == 2) {
                return false;
            }
            else if (formType == 3) {
                return false;
            }
            else {
                return true;
            }

        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Get service center based on user
        var getAllrelatedServiceCenters = function (executionContext) {

            var context = Xrm.Utility.getGlobalContext();
            var serviceCenterArray = [];
            var loggedInUserId = context.userSettings.userId.replace("{", "").replace("}", "");
            var query = "?$filter=_sxp_servicecenter_value ne null&$select=name,_sxp_servicecenter_value,teammembership_association&$expand=teammembership_association($filter=systemuserid eq '" + loggedInUserId + "')";
            Xrm.WebApi.retrieveMultipleRecords(EntityNames.Team, query).then(
                function success(result) {
                    if (result.entities.length > 0) {
                        for (var i = 0; i < result.entities.length; i++) {
                            if (result.entities[i].teammembership_association.length > 0) {
                                serviceCenterArray.push(result.entities[i]._sxp_servicecenter_value)
                            }

                        }
                        filterServiceCenterLookup(executionContext, serviceCenterArray);

                    }

                },
                function (error) {
                    return false;
                    Xrm.Utility.alertDialog(error.message);

                }
            );
        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Filter service center lookup based on team 
        var filterServiceCenterLookup = function (executionContext, serviceCenterArray) {
            var formContext = executionContext.getFormContext();
            var serviceCenter = formContext.getControl(FieldNames.ServiceCenterLookup);
            var fetchXMLCondition = "";
            if (serviceCenterArray.length > 0) {
                for (var i = 0; i < serviceCenterArray.length; i++) {
                    fetchXMLCondition += "<condition attribute='sxp_servicecenterid' operator='eq' value='" + serviceCenterArray[i] + "'/>";
                }

                var fetchXML = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
                    "<entity name='sxp_servicecenter'>" +
                    "<attribute name='sxp_servicecenterid' />" +
                    "<attribute name='sxp_name' />" +
                    "<attribute name='createdon' />" +
                    "<order attribute='sxp_name' descending='false' />" +
                    "<filter type='or'>" + fetchXMLCondition +
                    "</filter>" +
                    "</entity>" +
                    "</fetch>";

                var layoutXml = "<grid name='resultset' object='10612' jump='sxp_name' select='1' preview='1' icon='1'>" +
                    "<row name='result' id='sxp_servicecenterid'>" +
                    "<cell name='sxp_name' width='150' />" +
                    "<cell name='createdon' width='100' />" +
                    "</row>" +
                    "</grid>"

                if (serviceCenter !== null && serviceCenter !== undefined) {
                    var viewId = formContext.getControl(FieldNames.ServiceCenterLookup).getDefaultView();
                    formContext.getControl(FieldNames.ServiceCenterLookup).addCustomView(viewId, EntityNames.ServiceCenter, "Filter View", fetchXML, layoutXml, true);
                }

            }

        };

        /*****************************************/
        //Owner : Prachi Goyal
        //Lock all BPF fields
        var LockBPFFields = function (executionContext) {
            var formContext = executionContext.getFormContext();

            formContext.getControl("header_process_sxp_totalinstalledcost").setDisabled(true);
            formContext.getControl("header_process_sxp_typeofagreement").setDisabled(true);
            formContext.getControl("header_process_sxp_estimatedinstalldate").setDisabled(true);
            formContext.getControl("header_process_sxp_easypayoptout").setDisabled(true);
            formContext.getControl("header_process_sxp_customercomfortablesigningdigitally").setDisabled(true);
            formContext.getControl("header_process_sxp_ihavereadandreviewedtheagreement").setDisabled(true);
            formContext.getControl("header_process_sxp_monthlypayment").setDisabled(true);
            formContext.getControl("header_process_sxp_addressvalidated").setDisabled(true);
            formContext.getControl("header_process_sxp_agreementamount").setDisabled(true);
            formContext.getControl("header_process_sxp_typeofagreement_1").setVisible(false);
            formContext.getControl("header_process_sxp_typeofagreement_1").setDisabled(true);
            formContext.getControl("header_process_sxp_totalinstalledcost_1").setDisabled(true);
            formContext.getControl("header_process_sxp_totaltax").setDisabled(true);
            formContext.getControl("header_process_sxp_agreementstatus").setDisabled(true);
            formContext.getControl("header_process_sxp_estimatedinstalldate_1").setDisabled(true);
            formContext.getControl("header_process_sxp_actualinstalldate").setDisabled(true);
            formContext.getControl("header_process_sxp_installationstagecomplete").setDisabled(true);
            formContext.getControl("header_process_sxp_installationstagecomplete").setVisible(false);
        };

        /*****************************************/
        //Owner : Mervyn Martin
        //get remote credit check control
        var onClickRemoteCreditCheck = function (formContext) {
            getServiceCenterNumber(formContext, "RemoteCreditCheck");
        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Get in person credit check control
        var onClickInPersonCreditCheck = function (formContext) {
            getServiceCenterNumber(formContext, "InPersonCreditCheckButton");
        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Get service center on order       
        var getServiceCenterNumber = function (formContext, buttonName) {
            var serviceCenter = formContext.getAttribute(FieldNames.ServiceCenterLookup).getValue();
            if (serviceCenter !== null && serviceCenter !== undefined) {
                var serviceCenterId = serviceCenter[0].id;
                Xrm.WebApi.online.retrieveRecord(EntityNames.ServiceCenter, serviceCenterId, "?$select=sxp_centernumber").then(
                    function success(result) {
                        if (result["sxp_centernumber"] !== null && result["sxp_centernumber"] !== undefined) {
                            var centerNumber = result["sxp_centernumber"];
                            getConfigurationUrl(formContext, centerNumber, buttonName);
                        }
                        else {
                            Xrm.Utility.alertDialog("Service Center Doesnot have any Center Number Associated with it.");
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }
            else {
                Xrm.Utility.alertDialog("No Service Center is assoicated With the Order");
            }

        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Perform  Credit Check  
        var getConfigurationUrl = function (formContext, centerNumber, buttonName) {
            Xrm.WebApi.retrieveMultipleRecords("sxp_configuration", "?$select=sxp_value,sxp_name&$filter=sxp_name eq 'Order.CreditCheckUrl' or sxp_name eq 'Order.OrderCreditCheckEmailUrl'").then(
                function success(result) {
                    if (result.entities.length > 0) {
                        var partialUrl = "";
                        var orderCreditCheckEmailUrl = "";
                        for (var i = 0; i < result.entities.length; i++) {
                            if (result.entities[i].sxp_name == "Order.CreditCheckUrl") {
                                partialUrl = result.entities[i].sxp_value;
                            }
                            if (result.entities[i].sxp_name == "Order.OrderCreditCheckEmailUrl") {
                                orderCreditCheckEmailUrl = result.entities[i].sxp_value;
                            }
                        }

                        var creditcheckUrl = partialUrl + centerNumber;
                        if (buttonName == "InPersonCreditCheckButton") {
                            window.open(creditcheckUrl);
                        }
                        else if (buttonName == "RemoteCreditCheck") {
                            var currentRecord = formContext.data.entity.getId();
                            var currentRecordId = currentRecord.replace("{", "").replace("}", "");
                            callFlowtoSendEmail(currentRecordId, creditcheckUrl, orderCreditCheckEmailUrl);
                            Xrm.Utility.alertDialog("Email has been sent successfully");
                        }

                    }
                    else {
                        Xrm.Utility.alertDialog("Order.CreditCheckUrl and Order.OrderCreditCheckEmailUrl record in the system");
                    }
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Call flow to send credit check email
        var callFlowtoSendEmail = function (currentRecordId, creditcheckUrl, orderCreditCheckEmailUrl) {
            var pathObj = {
                "orderId": currentRecordId,
                "creditcheckUrl": creditcheckUrl
            };
            parent.$.ajax({
                type: "POST",
                url: orderCreditCheckEmailUrl,
                contentType: 'application/json',
                data: JSON.stringify(pathObj),
                success: function (response) {

                    console.log("success");
                },
                error: function (error) {
                    Xrm.Utility.closeProgressIndicator();

                }

            });


        };

        /*****************************************/
        //Owner : Disha Sharma
        //Change Areement status when wet signature is uploaded
        var onChangeWetSignature = function (executionContext) {

            var formContext = executionContext.getFormContext();
            var formType = formContext.ui.getFormType();
            var stage = formContext.data.process.getActiveStage().getName();
            if (formType !== 1) {
                var statusReason = formContext.getAttribute(FieldNames.StatusReason).getValue();
                var requiredArr, disabledArr;
                var wetSign = formContext.getAttribute(FieldNames.WetSignature).getValue();
                if (wetSign !== null && wetSign !== undefined && wetSign !== "") {
                    if (stage === businessProcessStages.signature) {
                        formContext.getAttribute(FieldNames.AgreementStatus).setValue("SIGNED");
                        formContext.data.entity.save();
                    }
                }
                else if (wetSign === null || wetSign === "") {
                    formContext.getAttribute(FieldNames.AgreementStatus).setValue(null);
                    formContext.data.entity.save();
                }

            }
        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Show hide add credit card button on ribbon
        var enableDisableAddCreditCard = function (formContext) {
            var stage = formContext.data.process.getActiveStage().getName();

            if (stage == businessProcessStages.paymentDetails || stage == businessProcessStages.paymentDetail) {
                return true;
            }
            else {
                return false;
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show hide add transaction button on ribbon
        var enableDisableAddTransaction = function (formContext) {
            var stage = formContext.data.process.getActiveStage().getName();
            var createDocumentFlag = false;

            if (stage === businessProcessStages.paymentDetails || stage === businessProcessStages.paymentDetail || stage === businessProcessStages.signature || stage === businessProcessStages.installation) {

                createDocumentFlag = agreementFundingHasCC(formContext);
                return createDocumentFlag;
            }
            else {
                return false;
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Check if Agreement Grid has a CC record associated
        var agreementFundingHasCC = function (formContext) {
            var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
            var flag = false;
            var fetch = '<fetch>' +
                '<entity name="sxp_agreementfundingline">' +
                '<attribute name="sxp_agreementfundinglineid" />' +
                '<filter type="and">' +
                '<condition attribute="sxp_fundingtype" operator="eq" value="275450002" />' +
                '<condition attribute="sxp_orderid" operator="eq" value="' + recordId + '" />' +
                '<condition attribute="statecode" operator="eq" value="0" />' +
                '</filter>' +
                '<link-entity name="rm_creditcardsale" from="sxp_agreementfundingline" to="sxp_agreementfundinglineid" link-type="outer" alias="ab" />' +
                '<filter type="and">' +
                '<condition entityname="ab" attribute="sxp_agreementfundingline" operator="null" />' +
                '</filter>' +
                '</entity>' +
                '</fetch>'
            fetch = "?fetchXml=" + encodeURIComponent(fetch);
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/sxp_agreementfundinglines" + fetch, false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        if (result.value.length > 0) {
                            flag = true;
                        }
                        else {
                            var fetchXml = '<fetch>' +
                                '<entity name="sxp_agreementfundingline">' +
                                '<attribute name="sxp_agreementfundinglineid" />' +
                                '<filter type="and">' +
                                '<condition attribute="sxp_fundingtype" operator="eq" value="275450002" />' +
                                '<condition attribute="sxp_orderid" operator="eq" value="' + recordId + '" />' +
                                '<condition attribute="statecode" operator="eq" value="0" />' +
                                '</filter>' +
                                '<link-entity name="rm_creditcardsale" from="sxp_agreementfundingline" to="sxp_agreementfundinglineid" link-type="inner" alias="af" >' +
                                '<filter type="and">' +
                                '<condition attribute="rm_completed" operator="eq" value="0" />' +
                                '</filter>' +
                                '</link-entity>' +
                                '</entity>' +
                                '</fetch>'
                            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
                            var request = new XMLHttpRequest();
                            request.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/sxp_agreementfundinglines" + fetchXml, false);
                            request.setRequestHeader("OData-MaxVersion", "4.0");
                            request.setRequestHeader("OData-Version", "4.0");
                            request.setRequestHeader("Accept", "application/json");
                            request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                            request.onreadystatechange = function () {
                                if (this.readyState === 4) {
                                    request.onreadystatechange = null;
                                    if (this.status === 200) {
                                        var result = JSON.parse(this.response);
                                        if (result.value.length > 0) {
                                            flag = true;
                                        }
                                        else {
                                            flag = false;

                                        }

                                    } else {
                                        Xrm.Utility.alertDialog(this.statusText);
                                    }
                                }

                            };
                            request.send();
                        }

                    } else {
                        Xrm.Utility.alertDialog(this.statusText);
                    }
                }

            };
            req.send();
            return flag;

        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Show hide address verification button on ribbon
        var enableDisableAddressVerification = function (formContext) {
            var stage = formContext.data.process.getActiveStage().getName();

            if (stage == businessProcessStages.customerVerification) {
                return true;
            }
            else {
                return false;
            }
        };

        /*****************************************/
        //Owner : Prachi Goyal
        //Show hide Remote Credit Check button on ribbon
        var enableDisableRemoteCreditCheck = function (formContext) {
            var stage = formContext.data.process.getActiveStage().getName();
            var flag = false;
            var accountId = "";
            if (stage == businessProcessStages.customerVerification) {
                var account = formContext.getAttribute(FieldNames.AccountLookup);
                if (account != null && account.getValue() !== null && account.getValue() !== undefined) {
                    accountId = account.getValue()[0].id;
                    var queryConfiguration = "?$select=sxp_customerdoesnothaveanemailaddress&$filter=accountid eq '" + accountId + "'";
                    var req = new XMLHttpRequest();
                    req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/accounts" + queryConfiguration, false);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            req.onreadystatechange = null;
                            if (this.status === 200) {
                                var result = JSON.parse(this.response);
                                if (result.value.length > 0) {
                                    if (result.value[0].sxp_customerdoesnothaveanemailaddress) {
                                        flag = false;
                                    }

                                    else {
                                        flag = true;
                                    }
                                }
                                else {
                                    flag = false;
                                }
                            } else {
                                Xrm.Utility.alertDialog(this.statusText);
                            }
                        }
                    };
                    req.send();
                    return flag;
                }
            }
        };

        /*****************************************/
        //Owner : Prachi Goyal
        //Show hide Calculate Advantage button on ribbon
        var enableDisableCalculateAdvantage = function (formContext) {
            var stage = formContext.data.process.getActiveStage().getName();


            if (stage == businessProcessStages.productsAndPricing) {
                return true;
            }
            else {
                return false;
            }
        };

        /*****************************************/
        //Owner : Mervyn Martin
        //Show hide Calculate Tax button on ribbon
        var enableDisableCalculateTax = function (formContext) {
            var stage = formContext.data.process.getActiveStage().getName();


            if (stage == businessProcessStages.productAndPricing) {
                return true;
            }
            else {
                return false;
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show hide  Add Product button on subgrid
        var enableDisableProductsGrid = function (formContext) {
            var stage = formContext.data.process.getActiveStage().getName();
            if (stage == businessProcessStages.productsAndPricing || stage == businessProcessStages.productAndPricing) {
                return true;
            }
            else {
                return false;
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show hide Add Agreement funding button on subgrid
        var enableDisableAddAgreementFundingButton = function (formContext) {

            var stage = formContext.data.process.getActiveStage().getName();


            if (stage == businessProcessStages.paymentDetail) {
                return true;
            }
            else {
                return false;
            }
        };

        /*****************************************/
        //Owner : Prachi Goyal
        //Show hide Add Create document button on ribbon
        var enableDisableCreateDocument = function (formContext) {

            var formType = formContext.ui.getFormType();
            var createDocumentFlag = false;
            if (formType !== 1) {


                var stage = formContext.data.process.getActiveStage().getName();

                if (stage != businessProcessStages.signature) {
                    return false;
                }

                //Check if it is a bundle order
                var orderProduct = formContext.getAttribute(FieldNames.OrderProducts).getValue();
                if (orderProduct == 275450000 && orderProduct == 275450001 && orderProduct == 275450002 && orderProduct == 275450002) {
                    //Check if the Related Order is filled out or not
                    var relatedOrder = formContext.getAttribute(FieldNames.RelatedBundleSalesOrder);
                    if (relatedOrder != null) {
                        if (relatedOrder.getValue() == null || relatedOrder.getValue() == undefined) {
                            return false;
                        }
                        else {
                            createDocumentFlag = orderHasAttachedAgreement(formContext);
                            return createDocumentFlag;
                        }
                    }
                }
                else {
                    createDocumentFlag = orderHasAttachedAgreement(formContext);
                    return createDocumentFlag;
                }
            }
            else {
                return true;
            }
        };

        /*****************************************/
        //Owner : Prachi Goyal
        //Check if order has attachment created
        var orderHasAttachedAgreement = function (formContext) {

            var formType = formContext.ui.getFormType();
            var flag = false;
            var wetSign = formContext.getAttribute(FieldNames.WetSignature).getValue();
            if (wetSign !== null && wetSign !== undefined && wetSign !== "") {
                flag = false;
            }
            else if (wetSign === null) {
                var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                var queryConfiguration = "?$select=_adobe_parentorderid_value,adobe_esagreementstatus&$filter=_adobe_parentorderid_value eq '" + recordId + "'";
                var req = new XMLHttpRequest();
                req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/adobe_agreements" + queryConfiguration, false);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            var result = JSON.parse(this.response);
                            if (result.value.length > 0) {
                                flag = false;
                            }
                            else {
                                flag = true;
                            }

                        } else {
                            Xrm.Utility.alertDialog(this.statusText);
                        }
                    }
                };
                req.send();
            }
            else {
                flag = true;
            }
            return flag;
        };

        /*****************************************/
        //Owner : Prachi Goyal
        //Show Option Set Value
        var showOptionValues = function (formContext, fieldName, OptionSetValues) {
            formContext.getControl(fieldName).clearOptions();
            var keyValuePair = OptionSetValues.split(',');
            for (var i = 0; keyValuePair.length > i; i++) {
                var keyValue = keyValuePair[i].split('|');
                formContext.getControl(fieldName).addOption({ text: keyValue[0], value: parseInt(keyValue[1]) });
            }
        };

        /*****************************************/
        //Owner : Prachi Goyal
        //Hide Option Set Value
        var hideOptionValues = function (formContext, fieldName, OptionSetValues) {

            var keyValuePair = OptionSetValues.split(',');
            for (var i = 0; keyValuePair.length > i; i++) {
                var keyValue = keyValuePair[i].split('|');
                formContext.getControl(fieldName).removeOption(parseInt(keyValue[1]));
            }
        };

        /*****************************************/
        //Owner : Disha Sharma
        //Show hide agreement subgrid button
        var enableDisableAgreementSubgridButton = function (formContext) {

            var formType = formContext.ui.getFormType();
            if (formType !== 1) {
                var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                Xrm.WebApi.retrieveMultipleRecords(EntityNames.Agreement, "?$select=_adobe_parentorderid_value,adobe_esagreementstatus&$filter=_adobe_parentorderid_value eq '" + recordId + "'").then(
                    function success(result) {
                        if (result.entities.length > 0) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }

        };


        /*****************************************/
        //Owner : Mervyn Martin
        //Fetch all the credit cards
        var getCustomerCreditCards = function (formContext) {

            Xrm.Utility.showProgressIndicator("Retreiving Customer Credit Cards");


            var customer = formContext.getAttribute("customerid").getValue();

            var req;
            if (customer) {
                var customerId = customer[0].id.replace("{", "").replace("}", "");

                var customerType = customer[0].entityType;


                Xrm.WebApi.retrieveRecord(customerType, customerId, "?$select=rm_externalcustomerid").then(
                    function (result) {



                        if (result.rm_externalcustomerid == null) {
                            Xrm.Utility.closeProgressIndicator();
                            Xrm.Navigation.openAlertDialog("Account does not have a RedMaple profile associated");
                            return null;
                        }


                        var context = Xrm.Utility.getGlobalContext();

                        req = {};
                        req.CustomerId = customerId;
                        req.ExternalCustomerId = result.rm_externalcustomerid;
                        req.UserId = context.userSettings.userId.replace("{", "").replace("}", "");
                        req.CustomerType = customerType;
                        req.getMetadata = function () {
                            return ({
                                operationType: 0,
                                operationName: actionName.retrieveCustomerCreditCards,
                                parameterTypes: {
                                    "CustomerId": {
                                        "typeName": "Edm.String",
                                        "structuralProperty": 1
                                    },
                                    "ExternalCustomerId": {
                                        "typeName": "Edm.String",
                                        "structuralProperty": 1
                                    },
                                    "UserId": {
                                        "typeName": "Edm.String",
                                        "structuralProperty": 1
                                    },
                                    "CustomerType": {
                                        "typeName": "Edm.String",
                                        "structuralProperty": 1
                                    }
                                }
                            });
                        };



                        Xrm.WebApi.online.execute(req).then(
                            function (success) {
                                Xrm.Utility.closeProgressIndicator();
                            },
                            function (error) {
                                Xrm.Utility.alertDialog(error.message);
                                Xrm.Utility.closeProgressIndicator();
                            });


                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                        Xrm.Utility.closeProgressIndicator();
                    });

            }

        };

        /*****************************************/
        //Owner : King Chan
        //Subgrid Listener for Refreshing form
        var subgridEventHandler = function (executionContext) {
            globalFormContext = executionContext.getFormContext();
            var gridContext = globalFormContext.getControl("AgreementSummary");

            //ensure that the subgrid is ready…if not wait and call this function again
            if (gridContext == null) {
                setTimeout(function () { subgridEventHandler(executionContext); }, 500);
                return;
            }
            gridContext.addOnLoad(SubgridFunctionExe);
        };

        /*****************************************/
        //Owner : King Chan
        //It triggers onLoad of form, on load and on refresh of subgrid
        //as well on add new record and on delete of record it will trigger
        var SubgridFunctionExe = function () {
            // here use globalFormContext
            var refreshAll = false;
            var agreementAmount = globalFormContext.getAttribute(FieldNames.AgreementAmount).getValue();
            Xrm.WebApi.online.retrieveRecord(globalFormContext.data.entity.getEntityName(), globalFormContext.data.entity.getId(), "?$select=sxp_agreementamount").then(
                function success(result) {
                    var backend_amount = result.sxp_agreementamount;
                    if (agreementAmount != backend_amount) {
                        globalFormContext.data.refresh(false);
                        globalFormContext.ui.refreshRibbon(refreshAll);
                    }
                }
            );
        }

        /*****************************************/
        //Owner : King Chan
        //Hide or display the Delete button on the Product SubGrid based on the stage
        var enableDisableProductDelete = function (formContext) {

            var formType = formContext.ui.getFormType();
            if (formType !== 1) {
                var stage = formContext.data.process.getActiveStage().getName();
                if (stage == businessProcessStages.productsAndPricing || stage == businessProcessStages.productAndPricing) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };

        /*****************************************/
        //Owner : King Chan
        //Hide or display the Edit button on the Product SubGrid based on the stage AND Security Role
        var enableDisableProductEdit = function (formContext) {

            var formType = formContext.ui.getFormType();
            if (formType !== 1) {
                var stage = formContext.data.process.getActiveStage().getName();
                if (stage == businessProcessStages.productsAndPricing || stage == businessProcessStages.productAndPricing) {
                    return true;
                }
                else if (stage == businessProcessStages.installation) {
                    var roles = Xrm.Utility.getGlobalContext().userSettings.roles;
                    var backofficerole = false;
                    for (var i = 0; i < roles.getLength(); i++) {
                        if (roles.get(i).name == "SE_Office Admin") {
                            backofficerole = true;
                        }
                    }
                    return backofficerole;
                }
                else {
                    return false;
                }
            }
        };

        /*****************************************/
        //Owner : King Chan
        //Set the Agreement Sign On date when the Create Document button is clicked
        var setAgreementSignedOnDate = function (formContext) {

            //Field.AgreementSignedOn
            var entityId = formContext.data.entity.getId();
            var salesOrderId = entityId.replace("{", "").replace("}", "");
            var currentDate = new Date();
            Xrm.WebApi.updateRecord("salesorder", salesOrderId, { "sxp_agreementsignedon": currentDate }).then(
                function (result) {
                    console.log("updated Agreement Signed On");
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        };

        ///*****************************************/
        ////Owner : Mervyn Martin
        ////Set department number and profit center for purchase agreement
        //var setPurchaseDimensions = function (executionContext) {
        //    var formContext = executionContext.getFormContext();
        //    var entityId = formContext.data.entity.getId();
        //    var salesOrderId = "";

        //    if (entityId !== null && entityId !== undefined) {
        //        salesOrderId = entityId.replace("{", "").replace("}", "");
        //    }

        //    var fetchXml = '<fetch top="1">' +
        //        '<entity name="salesorderdetail">' +
        //        '<attribute name="sxp_service" />' +
        //        '<order attribute="createdon" descending="true" />' +
        //        '<link-entity name="salesorder" from="salesorderid" to="salesorderid" link-type="inner" alias="aa">' +
        //        '<attribute name="sxp_typeofagreement" />' +
        //        '<filter type="and">' +
        //        '<condition attribute="salesorderid" operator="eq" value="' + salesOrderId + '" />' +
        //        '<condition attribute="sxp_typeofagreement" operator="eq" value="275450001" />' +
        //        '</filter>' +
        //        '</link-entity>' +
        //        '</entity>' +
        //        '</fetch>'

        //    fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
        //    Xrm.WebApi.retrieveMultipleRecords(EntityNames.OrderProduct, fetchXml).then(
        //        function success(result) {
        //            var agreementType = result.entities[0]["aa.sxp_typeofagreement"];
        //            var service = result.entities[0]["sxp_service"];
        //            if (result.entities.length > 0) {

        //                Xrm.WebApi.retrieveMultipleRecords(EntityNames.ProfitCenter, "?$select=sxp_name,sxp_departmentnumber&$filter=sxp_agreementtypechoice eq " + agreementType + " and sxp_servicetype eq " + service).then(
        //                    function (result) {
        //                        var dimensionProfitCenter = formContext.getAttribute(FieldNames.DimensionProfitCenter).getValue();
        //                        var dimensionDepartmentNumber = formContext.getAttribute(FieldNames.DepartmentNumber).getValue();

        //                        if (result.entities.length > 0) {
        //                            //Department
        //                            if (result.entities[0].sxp_departmentnumber !== null && result.entities[0].sxp_departmentnumber !== undefined) {
        //                                formContext.getAttribute(FieldNames.DepartmentNumber).setValue(result.entities[0].sxp_departmentnumber);
        //                            }
        //                            //Profit Center
        //                            if (result.entities[0].sxp_name !== null && result.entities[0].sxp_name !== undefined) {
        //                                formContext.getAttribute(FieldNames.DimensionProfitCenter).setValue(result.entities[0].sxp_name);
        //                            }
        //                        }

        //                    },
        //                    function (error) {
        //                        Xrm.Utility.alertDialog(error.message);
        //                    }
        //                );

        //            }
        //        },
        //        function (error) {
        //            Xrm.Utility.alertDialog(error.message);
        //        }
        //    );

        //};

        /*****************************************/
        //Owner : Mervyn Martin
        //Set to date for service center
        var toDate = function (dateStr) {

            if (dateStr == null) {
                return new Date('1970-01-01Z00:00:00:000');
            }
            else {
                var parts = dateStr.split("-")
                return new Date(parts[0], parts[1] - 1, parts[2]);
            }
        };

        /*****************************************/
        //Owner : Shikha Sinha
        //To save the form 
        var saveOrderForm = function (executionContext) {
            var formContext = executionContext.getFormContext();
            formContext.data.entity.save();
        };

        /**************************************************/
        //Owner : Prachi Goyal
        //Set AddressValidated Field on Order on change of OverrideAddressValidation Field
        var setAddressValidatedOnOrder = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var overridAddressValidation = formContext.getAttribute(FieldNames.OverrideAddressValidation).getValue();
            if (overridAddressValidation == true) {
                formContext.getAttribute(FieldNames.AddressValidated).setValue(true);
            }
            else {
                formContext.getAttribute(FieldNames.AddressValidated).setValue(false);
            }
        };

        /*****************************************/
        //Owner: Prachi Goyal
        //Assign Default Price List based on Service Center
        var setDefaultPriceList = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var serviceCenterId = "";
            var serviceCenter = formContext.getAttribute(FieldNames.ServiceCenterLookup);
            if (serviceCenter != null && serviceCenter.getValue() !== null && serviceCenter.getValue() !== undefined) {
                serviceCenterId = serviceCenter.getValue()[0].id;
                window.top.serviceCenterId = serviceCenterId;

                Xrm.WebApi.online.retrieveRecord(EntityNames.ServiceCenter, serviceCenterId, "?$select=_sxp_pricelist_value").then(
                    function success(result) {
                        var pricelistId = result["_sxp_pricelist_value"];
                        Xrm.WebApi.retrieveMultipleRecords(EntityNames.PriceList, "?$select=name,pricelevelid&$filter=pricelevelid eq '" + pricelistId + "'").then(
                            function success(result) {
                                if (result.entities.length > 0) {
                                    Utilities.setLookupField(formContext, FieldNames.PriceListLookp, result.entities[0].pricelevelid, result.entities[0].name, EntityNames.PriceList);
                                }
                            },
                            function (error) {
                                Xrm.Utility.alertDialog(error.message);
                            }
                        );
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }
        };

        /*****************************************/
        //Owner: King Chan
        //Clear Auto Suggestion Address fields
        var clearAutoSuggestionValue = function (executionContext) {
            var formContext = executionContext.getFormContext();
            formContext.getAttribute(FieldNames.AutoInstallationAddress).setValue(null);
            formContext.getAttribute(FieldNames.AutoMailingAddress).setValue(null);
        };

        //Owner : Prachi Goyal
        // Get Configuration Record Value
        var getConfiguration = function (ParameterName) {
            var flag = false;
            var fetch = '<fetch>' +
                '<entity name="sxp_configuration">' +
                '<attribute name="sxp_configurationid" />' +
                '<attribute name="sxp_value" />' +
                '<filter type="and">' +
                '<condition attribute="sxp_name" operator="eq" value="' + ParameterName + '" />' +
                '</filter>' +
                '</entity>' +
                '</fetch>'
            fetch = "?fetchXml=" + encodeURIComponent(fetch);
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/sxp_configurations" + fetch, false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        if (result.value.length == 1) {
                            if (result.value[0].sxp_value == 'Yes') {
                                flag = true;
                            }
                            else {
                                flag = false;
                            }
                        }
                        else {
                            flag = false;
                        }
                    } else {
                        Xrm.Utility.alertDialog(this.statusText);
                    }
                }
            };
            req.send();
            return flag;
        };

        /*****************************************/
        //Owner : Prachi Goyal
        // Show/Hide Type of Agreement field On Order
        var showHideTypeOfAgreementField = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var advantageEnable = getConfiguration("Order.EnableAdvantage");
            if (advantageEnable == true) {
                formContext.getControl(FieldNames.TypeOfAgreement).setVisible(true);
                formContext.ui.tabs.get(TabNames.Installation).setVisible(true);
            }
            else {
                formContext.getControl(FieldNames.TypeOfAgreement).setVisible(false);
                if (formContext.getAttribute(FieldNames.TypeOfAgreement).getValue() == null) {
                    formContext.getAttribute(FieldNames.TypeOfAgreement).setValue(275450001);
                    formContext.ui.tabs.get(TabNames.Installation).setVisible(false);
                }
            }
        };
		
		//Owner: Prachi Goyal
        //Refresh Grid Ribbon
        var refreshGridRibbon = function (formContext, gridName) {
            var gridContext = formContext.getControl(gridName);
            gridContext.refreshRibbon();
        };


        return {
            OnLoad: onLoad,
            OnChange: onChange,
            OnSave: onSave,
            RetrieveAdvantageFields: retrieveAdvantageFields,
            HideAgreementSubgridButton: hideAgreementSubgridButton,
            OnClickCancelOrderButton: onClickCancelOrderButton,
            EnableDisableAddAgreementFundingButton: enableDisableAddAgreementFundingButton,
            SetGridReadOnly: setGridReadOnly,
            ShowHideCancelOrderButton: showHideCancelOrderButton,
            EnableDisableAgreementSubgridButton: enableDisableAgreementSubgridButton,
            RetrieveAccountAddress: retrieveAccountAddress,
            OnClickRemoteCreditCheck: onClickRemoteCreditCheck,
            OnClickInPersonCreditCheck: onClickInPersonCreditCheck,
            EnableDisableCreateDocument: enableDisableCreateDocument,
            GetAllrelatedServiceCenters: getAllrelatedServiceCenters,
            SetDefaultServiceCenter: setDefaultServiceCenter,
            OnChangeWhatAreYouSelling: onChangeWhatAreYouSelling,
            PopulateQuickCreate: populateQuickCreate,
            EnableDisableAddCreditCard: enableDisableAddCreditCard,
            EnableDisableAddTransaction: enableDisableAddTransaction,
            EnableDisableAddressVerification: enableDisableAddressVerification,
            EnableDisableCalculateAdvantage: enableDisableCalculateAdvantage,
            EnableDisableCalculateTax: enableDisableCalculateTax,
            GetCustomerCreditCards: getCustomerCreditCards,
            EnableDisableProductsGrid: enableDisableProductsGrid,
            CalculatePurchaseTax: calculatePurchaseTax,
            EnableDisableProductDelete: enableDisableProductDelete,
            EnableDisableProductEdit: enableDisableProductEdit,
            EnableDisableRemoteCreditCheck: enableDisableRemoteCreditCheck,
            RefreshProductGrid: refreshProductGrid,
            SetAgreementSignedOnDate: setAgreementSignedOnDate
        };
    }());
}