$(document).ready(function(){
    init_slider();
    $("#mask__phone").inputmask({"mask": "+7 (***) ***-**-**"});
    new Swiper(".slider__block__service", {
        spaceBetween: 30,
        loop:true,
        grabCursor: true,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination-service",
            clickable: true
        }
    });
    

    let swiper__work = new Swiper("#slider__who", {
        spaceBetween: 30,
        loop:true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-service-next",
            prevEl: ".swiper-button-service-prev"
        },
    });

    new Swiper("#swiper-5",{
        spaceBetween: 25,
        loop:false,
        slidesPerView: 4,
        navigation: {
            nextEl: ".btn__swiper__right_5",
            prevEl: ".btn__swiper__left_5"
        },
        pagination: {
            el: ".swiper-pagination-swiper-5",
            clickable: true,
        },
        breakpoints: {
             300: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            500: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            1000: {
                slidesPerView: 3,
                centeredSlides: false,
            },
            1300: {
                slidesPerView: 4,
                centeredSlides: false,
            },
            
        }
    });
    let swiper__video = new Swiper("#swiper_4", {
        spaceBetween: 25,
        loop:false,
        slidesPerView: 5,
        navigation: {
            nextEl: ".swiper_4_next",
            prevEl: ".swiper_4_prev"
        },
        pagination: {
            el: ".swiper-pagination-swiper-4",
            clickable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                centeredSlides: false,
             },
             1000: {
                slidesPerView: 3,
                centeredSlides: false,
            },
            1400: {
                slidesPerView: 4,
                centeredSlides: false,
            },
            1410: {
                slidesPerView: 5,
                centeredSlides: false,
            },
            
        }
    });

    swiper__work.on('activeIndexChange', function () {
        setTimeout(function(){
            let index = parseInt( $("#slider__who .wrapper__main.swiper-slide-active").attr("data-swiper-slide-index")); 
            $(".nav__bar > li").removeClass("active");
            $(".nav__bar > li").eq(index).addClass("active");
        });
    });
    
    $(".nav__bar > li").click(function(){
        let index = parseInt($(this).attr("data-index")) + 1;
        swiper__work.slideTo(index, 600);
    });

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
    //customSlider 
    init();
    $(".right__btn__6").click(function(){
        clearInterval(intevel);

        let index = $(".custom__slider img.slider_active").attr("data-index");
        if(index == ($(".custom__slider img").length - 1)){
            index = -1;
        }

        $(".custom__slider img.slider_active").css({opacity:"0"});
        index = parseInt(index);
        index++;
        $(".custom__slider img.slider_active").removeClass("slider_active");
        $(".custom__slider img").eq(index).addClass("slider_active");
        $(".custom__slider img.slider_active").css({opacity:"1"}); 

        interval__slides();

    });

    $(".left__btn__6").click(function(){
        clearInterval(intevel);

        let index = $(".custom__slider img.slider_active").attr("data-index");
        if(index == 0){
            index = ($(".custom__slider img").length);
        }

        $(".custom__slider img.slider_active").css({opacity:"0"});
        index = parseInt(index);
        index--;
        $(".custom__slider img.slider_active").removeClass("slider_active");
        $(".custom__slider img").eq(index).addClass("slider_active");
        $(".custom__slider img.slider_active").css({opacity:"1"}); 

        interval__slides();

    });
    function init(){
        $(".custom__slider img").each(function(i){
            if(i == 0){
                $(this).addClass("slider_active");
            }
            $(this).attr("data-index",i);
        });

        interval__slides();
    }

    function interval__slides(){
        intevel = setInterval(()=>{
            next_slide();
        },3000);
    }
    function next_slide(){
        let index = $(".custom__slider img.slider_active").attr("data-index");
        if(index == ($(".custom__slider img").length - 1)){
            index = -1;
        }

        $(".custom__slider img.slider_active").css({opacity:"0"}); 
        index = parseInt(index);
        index++;
        $(".custom__slider img.slider_active").removeClass("slider_active");
        $(".custom__slider img").eq(index).addClass("slider_active");
        $(".custom__slider img.slider_active").css({opacity:"1"}); 
    }
});