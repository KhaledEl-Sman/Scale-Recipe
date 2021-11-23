$(document).ready(function () {

    let lastScrollTop = 0;

    function ScrollDir() {
        let current = $(this).scrollTop();
        if (current > lastScrollTop && current > 200) {
            $('nav').css("top", "-85px");
        } else {
            $('nav').css("top", "0");
        }
        lastScrollTop = current;
    }

    $(window).scroll(function () {
        ScrollDir();
    });

})

$(document).ready(function () { function t() { $(window).scrollTop() >= $("#scale_recipe").offset().top && $(window).scrollTop() < $("#growth_booster").offset().top ? ($(".nav-item").each(function () { $(this).removeClass("active") }), $(".nav-item").eq(0).addClass("active")) : $(window).scrollTop() >= $("#growth_booster").offset().top && $(window).scrollTop() < $("#patient_convert_program").offset().top ? ($(".nav-item").each(function () { $(this).removeClass("active") }), $(".nav-item").eq(1).addClass("active")) : $(window).scrollTop() >= $("#patient_convert_program").offset().top && $(window).scrollTop() < $("#reviews").offset().top ? ($(".nav-item").each(function () { $(this).removeClass("active") }), $(".nav-item").eq(2).addClass("active")) : $(window).scrollTop() >= $("#reviews").offset().top && $(window).scrollTop() < $("#pricing").offset().top ? ($(".nav-item").each(function () { $(this).removeClass("active") }), $(".nav-item").eq(3).addClass("active")) : $(window).scrollTop() >= $("#pricing").offset().top && $(window).scrollTop() < $("#guarantee").offset().top ? ($(".nav-item").each(function () { $(this).removeClass("active") }), $(".nav-item").eq(4).addClass("active")) : $(window).scrollTop() >= $("#guarantee").offset().top && $(window).scrollTop() < $("#form").offset().top ? ($(".nav-item").each(function () { $(this).removeClass("active") }), $(".nav-item").eq(5).addClass("active")) : ($(".nav-item").each(function () { $(this).removeClass("active") }), $(".nav-item").eq(6).addClass("active")) } $(".first-button").on("click", function () { $(".animated-icon1").toggleClass("open") }), t(), $(window).scroll(function () { t() }), $(".nav-link").click(function () { let t = $(this).attr("href"); $("html, body").animate({ scrollTop: $(t).offset().top - 75 }, 100), $(".navbar-collapse").removeClass("show"), $(".animated-icon1").toggleClass("open") }), $(".open-alert").click(function () { "0px" != $(this).next().children(2).css("left") ? ($(this).css("animation", "unset").css("box-shadow", "none"), $(this).next().children(2).css("left", "0"), $(this).next().children(2).children(1).css("left", "0")) : "0px" == $(this).next().children(2).css("left") && ($(this).css("animation", "open-icon .75s infinite linear").css("box-shadow", "1px 1px 5px rgba(255, 255, 255, .65)"), $(this).next().children(2).css("left", "100%"), $(this).next().children(2).children(1).css("left", "200%")) }), (new WOW).init(), $(".bonus h5").click(function () { let t = 0; typeWriter = function () { t < "lake yard".length && (document.getElementById("project-text").innerHTML += "lake yard".charAt(t), t++, setTimeout(typeWriter, 200)) }, typeWriter() }), $(".footer button").click(function () { $(".footer button").each(function () { $(this).removeClass("active") }), $(this).addClass("active"); let t = "#" + $(this).attr("data-target") + " p"; $(".footer li p").each(function () { $(this).css("max-height", "0px") }), $(t).css("max-height", "1000px") }) });