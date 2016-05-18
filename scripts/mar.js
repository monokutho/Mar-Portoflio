$(document).ready(function() {
    $('#goldfishR').animate({left:'2000px'},42000);
    $('#goldfishL').animate({right:'2000px'},50000);
    $('footer').hover(function() {
        $('#mushSpark').fadeToggle('slow');
    });
});
