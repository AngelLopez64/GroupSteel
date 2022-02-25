$(document).ready(function(){
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});