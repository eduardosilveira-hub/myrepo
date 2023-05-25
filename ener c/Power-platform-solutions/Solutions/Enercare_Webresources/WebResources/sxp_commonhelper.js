var Utilities;
if (Utilities === undefined || Utilities === null) {
    Utilities = {};
    Utilities = (function () {
        return {
            /*****************************************************/
            //Owner: Shikha Sinha	  
            // Common Method to set the Lookup field
            setLookupField: function (formContext, fieldName, itemGuid, itemName, entityName) {
                try {
                    var lookupValue = new Array();
                    lookupValue[0] = new Object();
                    lookupValue[0].id = itemGuid // GUID of the lookup id
                    lookupValue[0].name = itemName; // Name of the lookup
                    lookupValue[0].entityType = entityName; //Entity Type of the lookup entity
                    formContext.getAttribute(fieldName).setValue(lookupValue);
                }
                catch (ex) {
                    Xrm.Utility.alertDialog(ex.message, null);
                }
            }
        };
    }());
}
