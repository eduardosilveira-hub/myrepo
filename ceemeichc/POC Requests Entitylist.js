var cmhcaccountNumber;
var loaded = false;

if (window.location.href.includes('my-requests')) null;
else {
    $(document).ready(async function () {
        let requestsTable = document.querySelector('#requests');
        var requestsGrid = requestsTable.querySelector('div.entity-grid.entitylist');
    
        var currentRecordApplicationid = getParameterByName("id");
        if(currentRecordApplicationid == null) return;
        console.log('getting accounr number')
        cmhcaccountNumber = await getCMHCAccountNumberReq(currentRecordApplicationid);
        console.log('got it: ' + cmhcaccountNumber);
        
        console.log('is grid loaded');

        if (requestsTable.querySelectorAll('div.entity-grid.entitylist>div.view-grid>table tbody tr').length > 0){
            doGridMagic(requestsGrid)
        }
        else {
            $(requestsGrid).on("loaded", function () {
                console.log('requests loaded');
                doGridMagic(requestsGrid)
            });
        }
    });
}

function doGridMagic(requestsGrid) {
    requestsGrid.querySelector('a[title="Create"]').parentElement.classList.replace('pull-left','pull-right')
    if (requestsGrid.querySelector(".query.form-control").value == null ||
        requestsGrid.querySelector(".query.form-control").value == "") {
        console.log('entered firs if statement')
        console.log('#: ' + cmhcaccountNumber);
        requestsGrid.querySelector(".query.form-control").value = cmhcaccountNumber;            
        requestsGrid.querySelector('button[aria-label="Search Results"]').click();
        requestsGrid.querySelector(".query.form-control").style = 'display: none';
        requestsGrid.querySelector('button[aria-label="Search Results"]').style = 'display: none';
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function getCMHCAccountNumberReq(Id) {
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