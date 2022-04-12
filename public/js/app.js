console.log("Design: Maria João Abrantes", "\n" ,"www.mariajoaoabrantes.work");

setTimeout(function () {
    $(".loader").hide();
}, 1000);
$(document).ready(function () {
    AOS.init({
        once: true,
        easing: "linear",
    });
    calculateDynamicMargin();

    function calculateDynamicMargin() {
        var marginRef = $(".benefits-section .container").css("margin-left");
        $("#sw_pill-container").css("margin-left", marginRef)
    }



    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".revealUp").forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 90%",
            markers: false,
            once: true,
            onEnter: function () {
                gsap.fromTo(
                    elem,
                    { y: 100, autoAlpha: 0 },
                    {
                        duration: 1,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            }
        });
    });
    if ($(this).scrollTop() > 10) {
        $("nav").addClass("scrolled");
    }

    $(window).scroll(function () {
        var _scroll = $(this).scrollTop() > 10;
        $("nav").toggleClass("scrolled", _scroll);

        calculateDynamicMargin();
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