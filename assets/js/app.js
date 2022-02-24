$(document).ready(function () {
    $(".loader").hide();
    AOS.init();

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".revealUp").forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            // end: "bottom 20%",
            markers: false,
            onEnter: function () {
                gsap.fromTo(
                    elem,
                    { y: 100, autoAlpha: 0 },
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeave: function () {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
                gsap.fromTo(
                    elem,
                    { y: 100, autoAlpha: 0 },
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeaveBack: function () {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
        });
    });
    if($(this).scrollTop() > 10){
        $("nav").addClass("scrolled");
    }

    $(window).scroll(function () {
        var _scroll = $(this).scrollTop() > 10;
        $("nav").toggleClass("scrolled", _scroll);
    });

    $('.hamburger-icon-outer').click(function () {
        console.log("Ordered to open the menu")
        $(this).toggleClass('open');
        $(".mobile-menu").toggleClass('open');
    });
    $('.hamburger-icon-inner').click(function () {
        $(".hamburger-icon-outer").toggleClass('open');
        $(".mobile-menu").toggleClass('open');
    });
    
});