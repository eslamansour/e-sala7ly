$(document).ready(function () {
    if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-brand").addClass("small-navbrand");
        $(".navbar").addClass("smaillNavBar");
        $(".btn-to-top").css("display", "block")
    } else {
        $(".navbar-brand").removeClass("small-navbrand");
        $(".navbar").removeClass("smaillNavBar");
        $(".btn-to-top").css("display", "none")
    }
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-brand").addClass("small-navbrand");
            $(".navbar").addClass("smaillNavBar");
            $(".btn-to-top").css("display", "block");
            $(".hidden-nav").css("display", "block");

        } else {
            $(".navbar-brand").removeClass("small-navbrand");
            $(".navbar").removeClass("smaillNavBar");
            $(".btn-to-top").css("display", "none");
            $(".hidden-nav").css("display", "none");

        }
    });
    $("#scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $("#alert").fadeTo(2000, 500).slideUp(300, function () {
        $("#alert").slideUp(500);
    });
});