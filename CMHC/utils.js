export const utils = { 

    showToastr: (message = null, confirmation = false) => {
        debugger;
        if (message){
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
            if (confirmation)
                toastr["info"](`${message}<br /><button type="button" class="btn clear">Yes</button>`);
            else
                toastr["info"](`${message}`);
            // var uri = window.location.toString();
            // debugger;
            // if (uri.indexOf("?") > 0) {
            //     var clean_uri = uri.substring(0, uri.indexOf("&"));
            //     window.history.replaceState({}, document.title, clean_uri);
            // }
        }
    }
}