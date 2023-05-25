var OrderProduct;
if (OrderProduct === undefined || OrderProduct === null) {
	OrderProduct = {};
	OrderProduct = (function () {
		var EntityNames = {
			Product: "product",
			Manufacturer: "sxp_manufacturer",
			Order: "salesorder"
		};
		var FieldNames = {
			ProductLookup: "productid",
			Primary: "sxp_primary",
			ManufacturerLookup: "sxp_manufacturer",
			ShortModel: "sxp_shortmodel",
			ProductTier: "sxp_producttiers",
			Tonnage: "sxp_tonnage",
			Generic: "sxp_generic",
			FullModel: "sxp_fullmodel",
			SerialNumber: "sxp_serialnumber",
			AdvantageId: "sxp_advantageid",
			ProcurementID: "sxp_procurementid",
			Description: "description",
			Generic: "sxp_generic",
			PricePerUnit: "priceperunit",
			OrderLookup: "salesorderid",
			Quantity: "quantity",
			EquipmentType: "sxp_equipmenttype",
			ChargeOnAdvantage: "sxp_chargeonadvantage",
			AdvantageEligible: "sxp_advantageeligible",
			ProductType: "sxp_service",
			ProductHierarchyLookup: "sxp_producthierarchy",
			Unit: "uomid"
		};

		/*****************************************/
		//Owner: Disha Sharma
		//Functions called on load on Order Product form
		var onLoad = function (executionContext) {
			retrieveProduct(executionContext);

			var formContext = executionContext.getFormContext();
			formContext.getControl(FieldNames.ProductHierarchyLookup).addPreSearch(hierarchyOnChange);
			formContext.getControl(FieldNames.ProductLookup).addPreSearch(filterProductLookup);
		};

		/*****************************************/
		//Owner: Disha Sharma
		//Functions called on onchange of fields on BContact form
		var onChange = function (executionContext) {
			var fieldName = executionContext.getEventSource().getName();
			switch (fieldName) {
				case FieldNames.ProductLookup:
					resetFields(executionContext);
					retrieveProduct(executionContext);
					break;
				case FieldNames.ProductHierarchyLookup:
					resetAllFields(executionContext);
					break;
			}
		};

		/*****************************************/
		// Owner: King Chan
		// Filter the Existing Product Lookup field based on the Price List and Selected Product Category
		var filterProductLookup = function (executionContext) {
			var formContext = executionContext.getFormContext();
			var selectedCategory = formContext.getAttribute(FieldNames.ProductHierarchyLookup).getValue() != null ? formContext.getAttribute(FieldNames.ProductHierarchyLookup).getValue()[0].id : null;
			var selectedPriceList = formContext.getAttribute("sxp_pricelist").getValue()[0].id;

			var viewId = "{00000000-0000-0000-0000-000000000001}";
			var entityName = "product";
			var viewDisplayName = "Products from Price list";
			var fetchXml = "";
			if (selectedCategory != null) {
				fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>" +
					"<entity name='product'>" +
					"<attribute name='name' />" +
					"<attribute name='sxp_shortmodel' />" +
					"<attribute name='productid' />" +
					"<order attribute='name' descending='false' />" +
					"<filter type='and'>" +
					"<condition attribute='productstructure' operator='in'>" +
					"<value>1</value>" +
					"<value>3</value>" +
					"</condition>" +
					"<condition attribute='parentproductid' operator='eq' uitype='product' value='" + selectedCategory + "' />" +
					"<condition attribute='statecode' operator='eq' value='0' />" +
					"</filter>" +
					"<link-entity name='productpricelevel' from='productid' to='productid' link-type='inner' alias='aj'>" +
					"<filter type='and'>" +
					"<condition attribute='pricelevelid' operator='eq' uitype='pricelevel' value='" + selectedPriceList + "' />" +
					"</filter>" +
					"</link-entity>" +
					"</entity>" +
					"</fetch>";
			}
			else {
				fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>" +
					"<entity name='product'>" +
					"<attribute name='name' />" +
					"<attribute name='sxp_shortmodel' />" +
					"<attribute name='productid' />" +
					"<order attribute='name' descending='false' />" +
					"<filter type='and'>" +
					"<condition attribute='productstructure' operator='in'>" +
					"<value>1</value>" +
					"<value>3</value>" +
					"</condition>" +
					"<condition attribute='statecode' operator='eq' value='0' />" +
					"</filter>" +
					"<link-entity name='productpricelevel' from='productid' to='productid' link-type='inner' alias='aj'>" +
					"<filter type='and'>" +
					"<condition attribute='pricelevelid' operator='eq' uitype='pricelevel' value='" + selectedPriceList + "' />" +
					"</filter>" +
					"</link-entity>" +
					"</entity>" +
					"</fetch>";
			}
			var layoutXml = "<grid name=' resultset' object='1' jump ='sxp_shortmodel' select ='1' icon ='1' preview ='1'>" +
				"<row name='result' id='productid'>" +
				"<cell name='sxp_shortmodel' width='150' />" +
				"<cell name='name' width='150' />" +
				"</row>" +
				"</grid>";

			formContext.getControl(FieldNames.ProductLookup).addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
		};

		/*****************************************/
		//Owner: King Chan
		//Retrieve Product and set rules for Order Product fields
		var retrieveProduct = function (executionContext) {
			var formContext = executionContext.getFormContext();
			var orderId = "";
			var order = formContext.getAttribute(FieldNames.OrderLookup);
			var productId = "";
			var product = formContext.getAttribute(FieldNames.ProductLookup);
			if (product != null && product.getValue() !== null && product.getValue() !== undefined) {
				productId = product.getValue()[0].id;
				Xrm.WebApi.online.retrieveRecord(EntityNames.Product, productId, "?$select=sxp_service,sxp_equipmenttype,sxp_advantageelligible,sxp_chargeonadvantage,sxp_primary,_sxp_manufacturer_value,sxp_shortmodel,sxp_producttiers,sxp_tonnage,sxp_generic,sxp_advantageid,sxp_procurementid,description,_defaultuomid_value,_defaultuomscheduleid_value,productstructure").then(
					function success(result) {

						// If Product is Primary OR Product is Advantage Elligible
						if (result["sxp_primary"] || result["sxp_advantageelligible"]) {
							if (result["productstructure"] !== null && result["productstructure"] !== undefined) {

								// If the Product is System (Product Family or Product Bundle)
								if (result["productstructure"] == 2 || result["productstructure"] == 3) {
									formContext.getControl(FieldNames.ManufacturerLookup).setDisabled(true);
									autoFillLookup(formContext, result, "_sxp_manufacturer_value", FieldNames.ManufacturerLookup);

									formContext.getControl(FieldNames.PricePerUnit).setDisabled(true);
									setPrice(formContext, result);

									formContext.getControl(FieldNames.ShortModel).setVisible(false);
									formContext.getAttribute(FieldNames.ShortModel).setRequiredLevel('none');

									formContext.getControl(FieldNames.Description).setVisible(false);
									formContext.getAttribute(FieldNames.Description).setRequiredLevel('none');
								}
								// If the Product is Product and Product is not Generic 
								else if (result["productstructure"] == 1 && !result["sxp_generic"]) {
									formContext.getControl(FieldNames.ManufacturerLookup).setDisabled(true);
									autoFillLookup(formContext, result, "_sxp_manufacturer_value", FieldNames.ManufacturerLookup);

									formContext.getControl(FieldNames.PricePerUnit).setDisabled(true);
									setPrice(formContext, result);

									formContext.getControl(FieldNames.ShortModel).setVisible(true);
									formContext.getControl(FieldNames.ShortModel).setDisabled(true);
									formContext.getAttribute(FieldNames.ShortModel).setRequiredLevel('none');
									autoFillString(formContext, result, "sxp_shortmodel", FieldNames.ShortModel);


									formContext.getControl(FieldNames.Description).setVisible(true);
									formContext.getControl(FieldNames.Description).setDisabled(true);
									formContext.getAttribute(FieldNames.Description).setRequiredLevel('none');
									autoFillString(formContext, result, "description", FieldNames.Description);
								}
								// If the Product is Product and Product is Generic 
								else if (result["productstructure"] == 1 && result["sxp_generic"]) {
									formContext.getControl(FieldNames.ManufacturerLookup).setDisabled(false);
									formContext.getAttribute(FieldNames.ManufacturerLookup).setRequiredLevel('required');

									formContext.getControl(FieldNames.PricePerUnit).setDisabled(false);
									formContext.getAttribute(FieldNames.PricePerUnit).setRequiredLevel('required');

									formContext.getControl(FieldNames.ShortModel).setVisible(true);
									formContext.getControl(FieldNames.ShortModel).setDisabled(false);
									formContext.getAttribute(FieldNames.ShortModel).setRequiredLevel('required');
									autoFillString(formContext, result, "sxp_shortmodel", FieldNames.ShortModel);

									formContext.getControl(FieldNames.Description).setVisible(true);
									formContext.getControl(FieldNames.Description).setDisabled(false);
									formContext.getAttribute(FieldNames.Description).setRequiredLevel('none');
								}
							}
						}
						// If Product is NOT Primary AND Product is NOT Advantage Elligible
						else {
							formContext.getControl(FieldNames.ManufacturerLookup).setDisabled(false);
							formContext.getAttribute(FieldNames.ManufacturerLookup).setRequiredLevel('none');

							formContext.getControl(FieldNames.PricePerUnit).setDisabled(false);
							formContext.getAttribute(FieldNames.PricePerUnit).setRequiredLevel('required');

							formContext.getControl(FieldNames.PricePerUnit).setVisible(true);
							formContext.getControl(FieldNames.PricePerUnit).setDisabled(false);
							formContext.getAttribute(FieldNames.PricePerUnit).setRequiredLevel('required');

							formContext.getControl(FieldNames.Description).setVisible(true);
							formContext.getControl(FieldNames.Description).setDisabled(false);
							formContext.getAttribute(FieldNames.Description).setRequiredLevel('none');
						}

						// Set Unit
						autoFillLookup(formContext, result, "_defaultuomid_value", FieldNames.Unit);
						// Set Quantity = 1
						if (formContext.getAttribute(FieldNames.Quantity).getValue() == null || formContext.getAttribute(FieldNames.Quantity).getValue() == undefined) {
							formContext.getAttribute(FieldNames.Quantity).setValue(1);
						}
						// End New Rule
						if (order != null && order.getValue() !== null && order.getValue() !== undefined) {
							orderId = order.getValue()[0].id;
							Xrm.WebApi.retrieveRecord(EntityNames.Order, orderId, "?$select=sxp_typeofagreement,statuscode").then(
								function success(result) {

									if (result["statuscode"] == 275450001 || result["statuscode"] == 275450002) {
										formContext.getAttribute(FieldNames.FullModel).setRequiredLevel('required');
										formContext.getAttribute(FieldNames.SerialNumber).setRequiredLevel('required');
										formContext.getAttribute(FieldNames.ManufacturerLookup).setRequiredLevel('required');
									}
								},
								function (error) {
									console.log(error.message);
									// handle error conditions
								}
							);
						}
					},
					function (error) {
                        setTimeout(function() {
                            if(navigator.onLine){
                                Xrm.Navigation.openAlertDialog(`There was an error processing the request: ${error.message}.` + 'Please try closing this pop-up and searching again.');
                            }
                            else{
                                console.error("BROWSER IS OFFLINE");
                            }
                            //Xrm.Utility.alertDialog(error.message);
                        }, 2000);
					}
				);
			}
		};

		/*****************************************/
		//Owner: King Chan
		//Set value of below fields to null
		var resetAllFields = function (executionContext) {
			var formContext = executionContext.getFormContext();
			formContext.getAttribute(FieldNames.ProductLookup).setValue(null);
			formContext.getAttribute(FieldNames.ShortModel).setValue(null);
			formContext.getAttribute(FieldNames.Unit).setValue(null);
			formContext.getAttribute(FieldNames.PricePerUnit).setValue(null);
			formContext.getAttribute(FieldNames.Quantity).setValue(null);
			formContext.getAttribute(FieldNames.Description).setValue(null);
			formContext.getAttribute(FieldNames.ManufacturerLookup).setValue(null);
		};

		/*****************************************/
		//Owner: King Chan
		//Set value of below fields to null
		var resetFields = function (executionContext) {
			var formContext = executionContext.getFormContext();
			formContext.getAttribute(FieldNames.ShortModel).setValue(null);
			formContext.getAttribute(FieldNames.Unit).setValue(null);
			formContext.getAttribute(FieldNames.PricePerUnit).setValue(null);
			formContext.getAttribute(FieldNames.Quantity).setValue(null);
			formContext.getAttribute(FieldNames.Description).setValue(null);
			formContext.getAttribute(FieldNames.ManufacturerLookup).setValue(null);
		};

		/*****************************************/
		//Owner: King Chan
		//Populating value from one string field to another
		var autoFillString = function (formContext, result, fieldName, updateField) {
			if (result[fieldName] != null && result[fieldName] !== undefined) {
				formContext.getAttribute(updateField).setValue(result[fieldName]);
			}
		};

		/*****************************************/
		//Owner: King Chan
		//Populating value from one lookup field to another
		var autoFillLookup = function (formContext, result, fieldName, updateField) {

			if (result[fieldName] != null && result[fieldName] !== undefined) {
				var lookup = []; // new Array
				lookup[0] = {}; // new Object
				lookup[0].id = result[fieldName]; // GUID of the lookup id
				lookup[0].entityType = result[fieldName + "@Microsoft.Dynamics.CRM.lookuplogicalname"]; // Entity Type of the lookup entity
				lookup[0].name = result[fieldName + "@OData.Community.Display.V1.FormattedValue"]; // Name of the lookup

				// Settiug New Lookup
				formContext.getAttribute(updateField).setValue(lookup);
			}
		};

		/*****************************************/
		//Owner: King Chan
		//set price on the basis of price list of the product
		var setPrice = function (formContext, result) {
			if ((result["_defaultuomid_value"] != null && result["_defaultuomid_value"] !== undefined) &&
				(result["productid"] != null && result["productid"] !== undefined)) {

				var selectedProductId = result["productid"];
				var selectedUnitId = result["_defaultuomid_value"];
				var selectedPriceList = formContext.getAttribute("sxp_pricelist").getValue()[0].id.replace("{", "").replace("}", "");

				Xrm.WebApi.online.retrieveMultipleRecords("productpricelevel",
					"?$select=amount&$filter=_pricelevelid_value eq " + selectedPriceList
					+ " and _productid_value eq " + selectedProductId
					+ " and _uomid_value eq " + selectedUnitId).then(
						function success(presult) {
							if (presult != null) {
								if (presult.entities[0].amount != null && presult.entities[0].amount !== undefined) {
									formContext.getAttribute(FieldNames.PricePerUnit).setValue(presult.entities[0].amount);
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
		//Owner: Disha Sharma
		//Show hide Calculate Tax button on Ribbon
		var showHideCalculateTaxButtonForAgreement = function (formContext) {
			var statuscode = formContext.getAttribute("statuscode").getValue();
			if (statuscode == "Pending Installation") {
				return true;
			}
			else {
				return false;
			}
		};

		/*****************************************/
		//Owner: King Chan
		//Open a html contect for Product Hierarchy field on Quick Create form
		var hierarchyOnChange = function (executionContext) {

			Xrm.Navigation.navigateTo(
				{ pageType: "webresource", webresourceName: "sxp_producthierarchy.html" },
				{ target: 2, position: 1, width: { value: 50, unit: "%" }, title: "Select Product Category" }
			).then(
				function (returnValue) {
					console.log(returnValue);
					var formContext = executionContext.getFormContext();
					var lookup = []; // new Array
					lookup[0] = {}; // new Object
					lookup[0].id = returnValue.returnValue.id; // GUID of the lookup id
					lookup[0].entityType = "product"; // Entity Type of the lookup entity
					lookup[0].name = returnValue.returnValue.name; // Name of the lookup

					// Settiug New Lookup
					formContext.getAttribute(FieldNames.ProductHierarchyLookup).setValue(lookup);
					resetAllFields(executionContext);
				},
				function (e) {
				}
			);
		};

		return {
			OnLoad: onLoad,
			OnChange: onChange,
			ShowHideCalculateTaxButtonForAgreement: showHideCalculateTaxButtonForAgreement
		};
	}());
}
