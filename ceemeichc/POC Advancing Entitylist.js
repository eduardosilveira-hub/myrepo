var advancingNumber;
$(document).ready(function () {
    let advancingTable = document.querySelector('#advancing');
    var advancingGrid = advancingTable.querySelector('div.entity-grid.entitylist');

    var currentRecordApplicationid = getParameterByName("id");
    if(currentRecordApplicationid == null) return;
    getCMHCAccountNumber(currentRecordApplicationid);   

    $(advancingGrid).on("loaded", async function () {
        if (advancingGrid.querySelector(".query.form-control").value == null || advancingGrid.querySelector(".query.form-control").value == "") {
            advancingGrid.querySelector(".query.form-control").value = advancingNumber; 
            advancingGrid.querySelector('button[aria-label="Search Results"]').click();
            advancingGrid.querySelector(".query.form-control").style = 'display: none';
            advancingGrid.querySelector('button[aria-label="Search Results"]').style = 'display: none';
            if (advancingGrid.querySelector('a[title = "Create"]').parentElement != null)
                advancingGrid.querySelector('a[title = "Create"]').parentNode.className = '';
        }
    });
});
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function getCMHCAccountNumber(Id) {
    webapi.safeAjax({
        type: "GET",
        url: "/_api/cmhc_pocapplications("+ Id +")?$select=cmhc_cmhcaccountnumber",
        contentType: "application/json",
        success: function (data, textStatus, xhr) {
            var result = data;
            console.log(result);
            // Columns
            //var cmhc_muapplicationid = result["cmhc_muapplicationid"]; // Guid
            advancingNumber = result["cmhc_cmhcaccountnumber"]; // Text
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
}