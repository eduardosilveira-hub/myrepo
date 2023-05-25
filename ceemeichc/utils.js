export const utils = { 
    showToastr: (message = null, confirmation = false, type = 'info') => {
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
                toastr[type](`${message}<br /><button type="button" class="btn clear">Yes</button>`);
            else
                toastr[type](`${message}`);
        }
    },
    showHideSpinner:(current_fs = null,disabled) => {
        current_fs.disabled = disabled;
        if (disabled){
            // current_fs.style.display = 'none';
            document.querySelector('#loader').style.display = "block";
        }
            
        else{
            // current_fs.style.display = 'block';
            document.querySelector('#loader').style.display = "none";
        }
            
    },
    formatNumber: (n) => {
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    formatCurrency: (input, blur) => {
        var input_val = input.value;
      
        if (input_val === "") { return; }
        
        var original_len = input_val.length;
        var caret_pos = input.selectionStart;
        //var caret_pos = input.setAttribute("selectionStart",'true');
      
        if (input_val.indexOf(".") >= 0) {
          var decimal_pos = input_val.indexOf(".");
          var left_side = input_val.substring(0, decimal_pos);
          var right_side = input_val.substring(decimal_pos);
      
          left_side = utils.formatNumber(left_side);
          right_side = utils.formatNumber(right_side);
          
          if (blur === "blur") {
            right_side += "00";
          }
          
          right_side = right_side.substring(0, 2);
          input_val = "$" + left_side + "." + right_side;
      
        } else {
          input_val = utils.formatNumber(input_val);
          input_val = "$" + input_val;
          
          if (blur === "blur") {
            input_val += ".00";
          }
        }
      
        input.value = input_val;
        var updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input.setSelectionRange(caret_pos, caret_pos);
      }
}
