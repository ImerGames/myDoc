$(document).ready(function(){
    init_slider();
    $("#mask__phone").inputmask({"mask": "+7 (***) ***-**-**"});
    $(".slick__items__2").slick({
        arrows:true,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  arrows:false
                }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  arrows:false,
                  centerMode:true
                }
            }
        ]
    });

    $(window).resize(function(){
        init_slider();
    });

    function init_slider(){
        if($(window).width() <= 1200 && $(".slick_items").hasClass("slick-initialized") == false){
            $(".slick_items").slick({
                arrows:false,
                dots:true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 700,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: true,
                          adaptiveHeight: false
                        }
                    }
                ]
            });
        }else if($(".slick_items").hasClass("slick-initialized") == true && $(window).width() >= 1200 ){
            $(".slick_items").slick("unslick");
        }
        console.log($(window).width() <= 1200 && $(".slick__program").hasClass("slick-initialized") == false);
        if($(window).width() <= 1200 && $(".slick__program").hasClass("slick-initialized") == false){
            $(".slick__program").slick({
                arrows:false,
                dots:true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 1000,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        adaptiveHeight: true
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: true,
                          adaptiveHeight: false
                        }
                    }
                ]
            });
            $(".slick__program").slick("resize");
        }else if($(".slick__program").hasClass("slick-initialized") == true && $(window).width() >= 1200 ){
            $(".slick__program").slick("unslick");
        }

        if($(window).width() <= 1200 && $(".sist__slide__facts").hasClass("slick-initialized") == false){
            $(".sist__slide__facts").slick({
                arrows:false,
                dots:false,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                centerMode:true,
                responsive: [
                    {
                      breakpoint: 1000,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        adaptiveHeight: true
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: false,
                          adaptiveHeight: true
                          }
                      },
                    {
                        breakpoint: 500,
                        settings: {
                          slidesToShow:1,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: false,
                          adaptiveHeight: false
                        }
                    }
                ]
            });
        }else if($(".sist__slide__facts").hasClass("slick-initialized") == true && $(window).width() >= 1200 ){
            $(".sist__slide__facts").slick("unslick");
        }

        
    }
});