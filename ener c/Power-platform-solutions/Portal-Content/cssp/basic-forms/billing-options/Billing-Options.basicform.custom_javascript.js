$( document ).ready(function() {
    if ($('#cssp_isprimary').is(":checked")) {
        document.querySelector('#cssp_isprimary').parentElement.parentNode.style.display = 'none';
        document.querySelector('#cssp_isprimary_label').parentElement.style.paddingLeft = '0';
        document.querySelector('#cssp_isprimary_label').innerText = 'This address has been set as Primary';
    }
    else {
        const primaryAddress = document.querySelector('#cssp_isprimary_label');
        primaryAddress ? primaryAddress.innerText = "Set as Primary Address" : null;
    }

    $(".actions").css('display','none');
    $("table[data-name|='General']").find(".control").css("clear", "both");
    $("table[data-name='Notifications']").find("tr").css('display','-webkit-inline-box');
    
    $('.field-label').each(function(label) {
        $(this).css('font-size','12px');
        $(this).css('font-weight','normal');
    });

    $('.section-title').each(function(label) {
        $(this).css('font-size','14px');
        $(this).css('font-weight','bold');
        $(this).css('font-color','#626365');
    });

    const deliveryMethod = document.querySelector('#cssp_billdeliverymethod_label');
    deliveryMethod ? deliveryMethod.style.display = 'none': null;;

    $('#cssp_billnotificationbyemail').click(function(){
        ValidateBillNotifiationmethod();
    });

    $('#cssp_billnotificationbytext').click(function(){
         ValidateBillNotifiationmethod();
    });
    $('#cssp_billnotificationbymail').click(function(){
         ValidateBillNotifiationmethod();       
    });

    ValidateBillNotifiationmethod = function(){
        const email = $('#cssp_billnotificationbyemail').is(":checked");
        const text =$('#cssp_billnotificationbytext').is(":checked");
        const mail = $('#cssp_billnotificationbymail').is(":checked");
        
        if (!email && !text && !mail){
            window.parent.$('#error-message').show();
            window.parent.$('#SaveBillingOptions').attr('disabled',true);
        }
        else{
            window.parent.$('#error-message').hide();
            window.parent.$('#SaveBillingOptions').attr('disabled',false);
        }
    }
    //ValidateBillNotifiationmethod();
});
