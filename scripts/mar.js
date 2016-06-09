$(document).ready(function() {
    $('#goldfishR').animate({left:'2000px'},42000);
    $('#goldfishL').animate({right:'2000px'},50000);
    $('footer').hover(function() {
        $('#mushSpark').animate({opacity:'1'},'slow');
    }, function(){
    $('#mushSpark').animate({opacity:'0'},'slow');
    });
});
