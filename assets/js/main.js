function viewMenu(){
    let menu = $('.header .navbar');
    let scroll = $(window).scrollTop();
    if(scroll>0){
        menu.addClass('open');
    }else{
        menu.removeClass('open');
    }
}

$(window).scroll(function () {
    //viewMenu();
});

$(document).ready(function () {

});