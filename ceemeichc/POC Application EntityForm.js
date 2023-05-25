$(document).ready(() => {    
    var questionIcon = document.createElement('span')
    questionIcon.addEventListener('mouseover', (questionIcon) => {
        questionIcon.target.style.cursor = 'pointer';
    })
    questionIcon.id = 'dwellingSnippet';
    questionIcon['data-toggle'] = "tooltip"; 
    questionIcon['data-placement'] = "top";
    questionIcon['title'] = "{{ snippets['Application/dwellingStyle'] | default: 'Your dwelling place' }}";
    questionIcon.classList.add('fa','fa-question-circle');
    questionIcon.style.color = '#447bb5';
    var table = document.querySelector('table[data-name="projectdetails_section_3"]')
    var field = table.querySelector('#cmhc_dwellingstyle_label');
    field.insertAdjacentElement('afterend',questionIcon);
    $('[data-toggle="tooltip"]').tooltip();

    var questiondesc = document.createElement('div')
    questiondesc.id = 'dwellingSnippet';
    questiondesc.style.color = 'gray';
    questiondesc.style.fontStyle = 'italic';
    questiondesc.style.fontSize = 'smaller';
    questiondesc.innerHTML = "{{ snippets['Application/dwellingStyle'] | default: 'Your dwelling place' }}";
    var table = document.querySelector('table[data-name="projectdetails_section_3"]')
    var field = table.querySelector('#cmhc_dwellingstyle_label').parentElement.parentElement;
    field.insertAdjacentElement('beforeend',questiondesc);

    document.querySelector('#cmhc_totalrequestedloanamount').addEventListener('blur', (event) => {
        debugger;
        let a = efformatCurrency(document.querySelector('#cmhc_totalrequestedloanamount'));
        if (a) showToastr("{{ snippets['Application/TotalLoanValidation'] | default: 'Wrong Total Loan Amount' }}", null, 'error');
    });

    fields = [
        'cmhc_loanpurpose',
        'cmhc_sheltermodel'
    ]

    fields.forEach((field) => {
        debugger;
        console.log(field);
        document.querySelector('#' + field).addEventListener('change', () => {
            debugger;
            if ((document.querySelector('#' + fields[0]).value === '758280003') && (document.querySelector('#' + fields[1]).value === '0')) {
                showToastr("Your selection is not valid. Please Pick either a different Purpose or Shelter.",null,'error');
                document.querySelector("#InsertButton").disabled = true;
            }
            else 
            document.querySelector("#InsertButton").disabled = false;
        });
    })


});

function efformatCurrency (input) {
    var numbers = /^\d+(\.\d{1,2}([,.][0-9]{1,2}))?$/;
    let totalloanErr = document.querySelector('#totalloanErr');
    if (totalloanErr)
        totalloanErr.remove();

    if(input.value.match(numbers)) {
        if (totalloanErr) {
            totalloanErr.remove();
            document.querySelector("#InsertButton").disabled = false;
        }
        if (input.value < 0 || input.value > 1000000000) {
            createLoanErrorMessage(input);
            return true;
        }
    }
    else {
        createLoanErrorMessage(input);
    }
}

function createLoanErrorMessage (input) {
    let errorMessage = document.createElement('div');
    errorMessage.id = 'totalloanErr';
    errorMessage.style.color = 'red';
    errorMessage.style.fontStyle = 'italic';
    errorMessage.style.fontSize = 'smaller';
    errorMessage.innerHTML = "{{ snippets['Application/TotalLoanValidation'] | default: 'Wrong Total Loan Amount' }}";
    input.insertAdjacentElement('afterend', errorMessage)
    document.querySelector("#InsertButton").disabled = true;
}

function showToastr (message = null, confirmation = false, type = 'info') {
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
}