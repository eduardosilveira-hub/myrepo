$( document ).ready(function() {
    $('#UpdateButton').hide();
    $('#name_label').css('margin-top','10px');
    const header = document.querySelector('h2');
    if (header) header.style.display = "none";
    const legend = document.querySelector('legend');
    if (legend) legend.style.display = "none";
});