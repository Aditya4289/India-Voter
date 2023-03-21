
// stricky header function
function stickyHeader () {
    if ($('.stricky').length) {
        var strickyScrollPos = 150;
        if($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('slideIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
            $('.scroll-to-top').fadeIn(500);
        }
        else if($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}
// stricky header activation
jQuery(window).scroll(function () {   
    (function ($) {
        stickyHeader();
    })(jQuery);
});



jQuery(document).ready(function( $ ) {    
    // hidden-bar activation
    var menuWrap = $('.hidden-bar .main-menu');
    menuWrap.find('.dropdown').children('a').append(function () {
        return '<button type="button" class="btn expander"><i class="fa fa-chevron-down"></i></button>';
    });
    menuWrap.find('.dropdown').children('ul').hide();
    // toggling child ul
    menuWrap.find('.btn.expander').each(function () {
        $(this).click(function () {
            $(this).parent() // return parent of .btn.expander (a) 
                .parent() // return parent of a (li)
                .children('ul').slideToggle();

            // adding class to expander container
            $(this).parent().toggleClass('current');
            // toggling arrow of expander
            $(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');


            return false;

        });
    });
    
    if ($('.hidden-bar-closer').length) {
        $('.hidden-bar-closer').click(function () {
            $('.hidden-bar').css({
                'right': '-150%'
            });
        });
    };
    if ($('.hidden-bar-opener').length) {
        $('.hidden-bar-opener').click(function () {
            $('.hidden-bar').css({
                'right': '0%'
            });
        });
    };
    
    //Show Popup
    $('.search-box-btn').click(function() {
        $('#search-popup').addClass('popup-visible');
    });

    //Hide Popup
    $('.close-search').click(function() {
        $('#search-popup').removeClass('popup-visible');
    });

});

//accordion activation
$(document).ready(function(){
    if ($('.accordion-box').length) {
        $('.accordion-box .acc-btn').click(function() {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    }
});

// wow activation
new WOW().init();

// back2top activation
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$(".back2Top").fadeIn("slow")
		} else {
			$(".back2Top").fadeOut("slow")
		}
	});

});


$(document).ready(function(){
    //    ionRangeSlider activation
    var $range = $("#example_id");
    $range.ionRangeSlider({
        type: "double",
        min: 25,
        max: 1000,
        from: 25,
        to: 500,
        hide_min_max: true,
        hide_from_to: false,
        grid: false,
        prefix: "$",
    });
});

// slider1 revuolution
if($('#slider1').length) {
    $("#slider1").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        delay: 9000,
        sliderType: "standard",

        navigation: {
            arrows: {
                enable: true
            }
        },
        gridwidth: 1170,
        gridheight: 820,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            touch: {
                touchenabled: "off",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                swipe_direction: "horizontal"
            },

            bullets:{
                style:"rev-bullet",
                enable:true,
                container:"slider",
                rtl:false,
                hide_onmobile:false,
                hide_onleave:true,
                hide_delay:5000,
                hide_delay_mobile:1000,
                hide_under:992,
                hide_over:9999,
                tmp:'<span class="tp-bullet-title"></span>',
                direction:"vertical",
                space:20,       
                h_align:"right",
                v_align:"center",
                h_offset:120,
                v_offset:0
            },
        },
    });
}


//   slider2 revolution activation
if($('#slider2').length) {
    $("#slider2").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        delay: 9000,
        sliderType: "standard",

        navigation: {
            arrows: {
                enable: true
            }
        },
        gridwidth: 1170,
        gridheight: 890,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            touch: {
                touchenabled: "off",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                swipe_direction: "horizontal"
            },
            arrows: {
                style: "slider-2-nav tp-resizeme",
                enable: true,
                rtl: false,
                hide_onmobile: true,
                hide_onleave: true,
                hide_delay: 5000,
                hide_delay_mobile: 5000,
                hide_under: 767,
                hide_over: 9999,
                tmp: '',
                left: {
                    container: "layergrid",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 80,
                    v_offset: 0
                },
                right: {
                    container: "layergrid",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 80,
                    v_offset: 0
                }
            },
            bullets:{
                style:"slider2-bullet",
                enable:true,
                container:"slider",
                rtl:false,
                hide_onmobile:true,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:200,
                hide_under:767,
                hide_over:9999,
                tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', 
                direction:"horizontal",
                space:11,       
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:50
            },
        },
    });
};
// slider3 revolution activation

if($('#slider3').length) {
    $("#slider3").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        delay: 9000,
        sliderType: "standard",

        navigation: {
            arrows: {
                enable: true
            }
        },
        gridwidth: 1170,
        gridheight: 1070,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            touch: {
                touchenabled: "off",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                swipe_direction: "horizontal"
            },
            arrows: {
                style: "slider-2-nav tp-resizeme",
                enable: true,
                rtl: false,
                hide_onmobile: true,
                hide_onleave: true,
                hide_delay: 5000,
                hide_delay_mobile: 5000,
                hide_under: 0,
                hide_over: 9999,
                tmp: '',
                left: {
                    container: "layergrid",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 80,
                    v_offset: 0
                },
                right: {
                    container: "layergrid",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 80,
                    v_offset: 0
                }
            },
            bullets:{
                style:"slider3-bullet",
                enable:true,
                container:"slider",
                rtl:false,
                hide_onmobile:true,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                hide_under:767,
                hide_over:9999,
                tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', 
                direction:"horizontal",
                space:11,       
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:50
            },
        },
    });
}


//accrodion activation
jQuery(document).ready(function () {
function accrodion () {
    if ($('.accrodion-grp').length) {

        $('.accrodion-grp').each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function() {
                $(this).find('.accrodion-title').click(function () {
                    if ($(this).parent().hasClass('active') === false ) {					
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');					
                        $(this).parent().find('.accrodion-content').slideDown();	
                    };
                });
            });
        });

    };
}
});


// mixitup activation
if($('#mixit').length) {
    $('#mixit').mixItUp();
}
// countdown activation 
if($('#clock').length){
    $('#clock').countdown({
        date: '12/24/2016 23:59:59'
    });
}

// counter activation
if($('.counter').length) {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

}

// owl-carousel client activation
if($('.client-carousel').length) {
    $(".client-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: false,
        items: 5,
        mouseDrag: true,
        dots: false,
        autoplayTimeout: 2000,
        responsiveClass:true,
        lazyLoad: true,
        center: true,
        responsive:{
            0:{
                items:1,
                nav:false,
                center: true,
            },
            400:{
                items:2,
                nav:false,
                center: true,
            },
            768:{
                items:3,
                nav:false,
                center: true
            },
            1024:{
                items:5,
                nav:false,
            }
        }
    });
}




// owl carousel news activation
if($('.carousel-news-content-slide-wrapper').length) {
    $('.carousel-news-content-slide-wrapper').owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 3000,
        mouseDrag: true,
        dots: true,
        items: 1,
        mouseDrag: false,
        dotsContainer: "#owl-dots",
        autoplayTimeout: 5000,
        nav: true,
        navText:["<i class='fa carousel-news-control fa-chevron-left'></i>","<i class='fa carousel-news-control fa-chevron-right'></i>"],
        responsiveClass: true,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
    });
}

// owl carousel client-3 activation
if($('.clients-3-carousel').length) {
    $(".clients-3-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        autoHeight: true,
        slideBy: 2,
        items:2,
        responsive:{
            0:{
                items:1,
                slideBy:1,
            },
            768:{
                items:2,
                slideBy:2,
            },
        },
        autoplayTimeout: 5000,
        nav: true,
        navText:["<i class='fa clients-3-carousel-control fa-chevron-left'></i>","<i class='fa clients-3-carousel-control fa-chevron-right'></i>"],
    });
}

// mCustomScrollbar activation
if($('.hidden-bar-wrapper').length) {
    $('.hidden-bar-wrapper').mCustomScrollbar();
}

jQuery(document).ready(function( $ ) {
    // progress section responsive
    if ($(window).width() > 1199) {
        $('.progress-2-right').outerHeight($('.progress-2-left').outerHeight());
    };

    $(".scroll-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    });
    
    //    nav-2 sticky responsive
    if ($(window).width() < 767) {
        $('.nav-2').removeClass('stricky');
        $('.header-2-search').addClass('stricky');
    }
    else {
        $('.nav-2').addClass('stricky');
        $('.header-2-search').removeClass('stricky');
    }

});