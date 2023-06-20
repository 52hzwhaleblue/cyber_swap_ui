function menu() {
    /* Menu fixed */
    $(window).scroll(function() {
        var cach_top = $(window).scrollTop();
        var heaigt_header = $('.header-wrapper').height();

        if (cach_top >= heaigt_header) {
            if (!$('.header-wrapper').hasClass('fix_head animate__animated animate__fadeIn')) {
                $('.header-wrapper').addClass('fix_head animate__animated animate__fadeIn');
            }
        } else {
            $('.header-wrapper').removeClass('fix_head animate__animated animate__fadeIn');
        }
    });

    // mmenu
    if ($("nav#menu").length) {
        $('nav#menu').mmenu({
            "extensions": ["border-full", "position-left", "position-front", "theme-black"]
        });

        $('#hamburger').click(function() {
            var a = $(this).attr('href');
            if ($(this).parents('.mm-wrapper').hasClass('mm-wrapper_opened')) {
                if (a == '#mm-0') {
                    $(this).attr('href', '#menu');
                } else {
                    $(this).attr('href', '#mm-0');
                }
            } else {
                $(this).attr('href', '#menu');
            }
        });
    }

    // FAQ
    if ($('.faq-items').length) {

        $('.faq-item:first').addClass('faq-active');

        $('.faq-item').click(function() {
            $(this).parents('.faq-wrapper').find('.faq-item').removeClass('faq-active');
            $(this).addClass('faq-active');
        })
    }
}

$(document).ready(function() {
    menu();
})