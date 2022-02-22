$(document).ready(function () {
    $(".loader").hide();
    if($(this).scrollTop() > 10){
        $("nav").addClass("scrolled");
    }

    $(window).scroll(function () {
        var _scroll = $(this).scrollTop() > 10;
        $("nav").toggleClass("scrolled", _scroll);
    });

    $('.hamburger-icon-outer').click(function () {
        $(this).toggleClass('open');
        $(".mobile-menu").toggleClass('open');
    });
    $('.hamburger-icon-inner').click(function () {
        $(".hamburger-icon-outer").toggleClass('open');
        $(".mobile-menu").toggleClass('open');
    });
});