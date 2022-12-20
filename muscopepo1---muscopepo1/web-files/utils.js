export const utils = { 
    showToastr: (message = null, confirmation = false) => {
        debugger;
        if (message){
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-bottom-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
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
    },
}
