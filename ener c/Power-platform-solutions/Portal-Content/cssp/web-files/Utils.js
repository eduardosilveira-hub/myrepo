export const Utils = {
    getQueryParam: (name) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    showToastr: (infoSaved = null) => {
        debugger;
        if (infoSaved){
            const urlParameters = new URLSearchParams(window.location.search);
            if (urlParameters.get(infoSaved)){
                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": true,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": true,
                    "onclick": null,
                    "showDuration": "3000",
                    "hideDuration": "3000",
                    "timeOut": "4000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                var toastrMsg = '';
                if (infoSaved.includes('profile')) toastrMsg = 'Profile Updated';
                if (infoSaved.includes("billing")) toastrMsg = 'Billing information Updated';
                if (infoSaved.includes("payment")) toastrMsg = 'Payment information Updated';
                
                toastr.success('', toastrMsg);
                var uri = window.location.toString();
                debugger;
                if (uri.indexOf("?") > 0) {
                    var clean_uri = uri.substring(0, uri.indexOf("&"));
                    window.history.replaceState({}, document.title, clean_uri);
                }
            }
        }
    }
}