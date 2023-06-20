function menu(){
    /* Menu fixed */
    $(window).scroll(function(){
        var cach_top = $(window).scrollTop();
        var heaigt_header = $('.header-wrapper').height();

        if(cach_top >= heaigt_header){
            if(!$('.header-wrapper').hasClass('fix_head animate__animated animate__fadeIn')){
                $('.header-wrapper').addClass('fix_head animate__animated animate__fadeIn');
            }
        }else{
            $('.header-wrapper').removeClass('fix_head animate__animated animate__fadeIn');
        }
    });

    // mmenu
    if($("nav#menu").length)
    {
        $('nav#menu').mmenu({
            "extensions": ["border-full", "position-left", "position-front","theme-black"]
        });

        $('#hamburger').click(function(){
            if($(this).parents('.mm-wrapper').hasClass('mm-wrapper_opened'))
            {
                $(this).attr('href','');
            }

            setTimeout(function() { 
                $('#hamburger').attr('href','#menu');
            }, 3000);
        });
    }
}

$(document).ready(function(){
    menu();
})