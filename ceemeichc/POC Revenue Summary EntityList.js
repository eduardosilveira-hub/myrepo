var cmhcsummaryNumber;
var isSummaryGenerated;
var retrieveAppId;
var summaryCount = 0;
$(document).ready(async function () {
    let summaryTable = document.querySelector('#summary');
    var summaryGrid = summaryTable.querySelector('div.entity-grid.entitylist');
    
    var currentRecordApplicationid = getParameterByName("id");
    if (currentRecordApplicationid == null) return;

    $("a[href='#summary']").on("click", function () {
        summaryGrid.querySelector('button[aria-label="Search Results"]').click();
        summaryGrid.querySelector('.table[aria-relevant="additions"] thead th>a[aria-label="Type"]').click();
         //$('.table[aria-relevant="additions"] thead th>a[aria-label="Category"]').click();
    });

    cmhcsummaryNumber = await getapplicationNumberSum(currentRecordApplicationid);

    $(summaryGrid).on("loaded", async function () {
        if (summaryGrid.querySelector(".query.form-control").value == null ||
            summaryGrid.querySelector(".query.form-control").value == "") {

            summaryGrid.querySelector(".query.form-control").value = cmhcsummaryNumber;
            summaryGrid.querySelector('button[aria-label="Search Results"]').click();
            summaryGrid.querySelector('.table[aria-relevant="additions"] thead th>a[aria-label="Type"]').click();
            summaryGrid.querySelector('.table[aria-relevant="additions"] thead th>a[aria-label="Total Annual Rent"]').click();

            summaryGrid.style = 'display: none';
            document.querySelector('#summaryMessage').style = 'display: block;';

            const interval = setInterval(async function () {
                await retrieveProjectAnalysis();
                if (isSummaryGenerated) {
                    console.log(`isSummaryGenerated: ${isSummaryGenerated} ::: table length: ${summaryGrid.querySelectorAll("table tbody>tr").length} `)
                    if(summaryGrid.querySelectorAll("table tbody>tr").length > 0){
                        summaryGrid.style = 'display: block';
                        document.querySelector('#summaryMessage').style = 'display: none';
                        summaryGrid.querySelector('.table[aria-relevant="additions"] thead th>a[aria-label="Total Annual Rent"]').click();
                        summaryGrid.querySelector('.table[aria-relevant="additions"] thead th>a[aria-label="Type"]').click();
                        clearInterval(interval);
                    }
                    summaryGrid.querySelector('.table[aria-relevant="additions"] thead th>a[aria-label="Total Annual Rent"]').click();
                    summaryGrid.querySelector('.table[aria-relevant="additions"] thead th>a[aria-label="Type"]').click();
                }

            }, 5000);

            summaryGrid.querySelector('button[aria-label="Search Results"]').click();
            summaryGrid.querySelector(".query.form-control").style = "display: none";
            summaryGrid.querySelector('button[aria-label="Search Results"]').style = "display: none";
            // }
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
function getapplicationNumberSum(Id) {
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

function retrieveProjectAnalysis() {
    return new Promise(
        resolve => appAjax({
            type: "GET",
            url: "/_api/cmhc_muprojectanalysises?$select=cmhc_isportalfieldupdated,_cmhc_muapplicationid_value&$filter=(cmhc_name eq '" + cmhcsummaryNumber + "' and cmhc_name ne '" + new Date().getUTCHours() + new Date().getUTCMinutes() + new Date().getUTCSeconds() + "')",
            contentType: "application/json",
            success: function (data, textStatus, xhr) {
                isSummaryGenerated = data.value[0]["cmhc_isportalfieldupdated"]; // Boolean   
                retrieveAppId = data.value[0]["_cmhc_muapplicationid_value"];
                resolve('success');
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        })
    );
}