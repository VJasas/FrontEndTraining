$(document).ready(function () {
    stickyMenu();

    $(window).scroll(function () {
        stickyMenu();
    });

    function stickyMenu() {
        if ($(window).scrollTop() > $('nav').outerHeight()) {
            $('#stickytop').addClass('sticky');
        } else {
            $('#stickytop').removeClass('sticky');
        }
    }
});