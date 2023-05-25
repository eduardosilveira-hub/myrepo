var advancingAppNumber;
var muapplicationId;
let count = 0;
$(document).ready(async function () {
    var getcmhcNumber = setInterval(() => {
        console.log(`Tryin to get cmhc number - attempt: ${count}`);
        if (window.parent != null) {
            advancingAppNumber = window.parent.cmhcNumber;
            if (advancingAppNumber != null && advancingAppNumber != undefined) {
                muapplicationId = window.parent != null ? window.parent.retrieveAppId : null;
                if (muapplicationId != null && muapplicationId != undefined) {
                    document.getElementById("cmhc_muapplicationid_entityname").value = "cmhc_muapplication";
                    document.getElementById("cmhc_muapplicationid_name").value = advancingAppNumber;
                    document.getElementById("cmhc_muapplicationid").value = muapplicationId;
                    document.querySelector('.text-muted').remove();
                    clearInterval(getcmhcNumber);
                    console.log("cache cleared");
                }
            }
        }
        count++;
    }, 500);
});