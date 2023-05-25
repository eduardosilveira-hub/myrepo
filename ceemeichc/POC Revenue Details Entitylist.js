var cmhcNumber;
$(document).ready(async function () {
    let detailsTable = document.querySelector('#revnuedetails');
    var detailsGrid = detailsTable.querySelector('div.entity-grid.entitylist');

    var currentRecordApplicationid = getParameterByName("id");
    if(currentRecordApplicationid == null) return;
    cmhcNumber = await getapplicationNumberDet(currentRecordApplicationid);
 
    $("a[href='#revnuedetails']").on("click", function () {
        detailsGrid.querySelector('button[aria-label="Search Results"]').click();
    });

    $(detailsGrid).on("loaded", function () {
        if (detailsGrid.querySelector(".query.form-control").value == null ||
            detailsGrid.querySelector(".query.form-control").value == "") {
            detailsGrid.querySelector(".query.form-control").value = cmhcNumber;            
            
            detailsGrid.querySelector('button[aria-label="Search Results"]').click();
            detailsGrid.querySelector(".query.form-control").style = 'display: none';
            detailsGrid.querySelector('button[aria-label="Search Results"]').style = 'display: none';     
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
function getapplicationNumberDet(Id) {
    return new Promise (
        resolve => appAjax({
            type: "GET",
            url: "/_api/cmhc_pocapplications("+ Id +")?$select=cmhc_cmhcaccountnumber",
            contentType: "application/json",
            success: function (data, textStatus, xhr) {
                resolve(data["cmhc_cmhcaccountnumber"]);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        })
    )
}