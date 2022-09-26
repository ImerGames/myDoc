$(document).ready(function(){   
    let swiper_our = null;
    let component = $(".grid__slider__list_our");
    let masonry_init = false;
    let swiper_init = false;
    
    init_slider();    
    initHeight();

    $(".main__page>main>.section__main>.container>.right>.list .wrapper>.item").mouseenter(function(){
        setCustomHeight($(this) , false);
    });
    $(".main__page>main>.section__main>.container>.right>.list .wrapper>.item").mouseleave(function(){
        setCustomHeight($(this) , true);
    });

    function initHeight(){
       setTimeout(function(){
        $(".section__main>.container>.right .item").each(function(){
            let new_height = $(this).children().height();
            let width = $(this).children(".title").width();
            $(this).height(new_height);
            $(this).width(width);
            console.log(width);
        });
       },10000);
    }
    function setCustomHeight(obj , isOpen){
        let text = NaN;
        if(isOpen){
            text  = obj.children(".FrontText").text();
            
        }else{
            text  = obj.children(".BackText").text();
        }
        
        obj.children(".title").css({opacity:"0"});
        setTimeout(()=>{
            obj.children(".title").text(text);
            obj.toggleClass("active");
            if(isOpen){
                let new_width = obj.children(".title").width();
                $(obj).css({"min-width":new_width});
            }else{
                $(obj).css({"min-width":"100%"});
            }
            $(obj).css({"max-width":600});
            setTimeout(()=>{
                let new_height = obj.children(".title").height();
                obj.height(new_height);    
                new_width = obj.find(".title").width();
                obj.width(new_width + 20);
                setTimeout(() => {
                    obj.children(".title").css({opacity:"1"});
                }, 1);
            },200);
        },100);
    }
    resizer__section__our(true);
    $(window).resize(function(){
        resizer__section__our(false);
    });
    new Swiper(".swiper__serteficate",{
        spaceBetween: 30,
        slidesPerView: 2,
        navigation: {
            nextEl: ".right__button_siper_sertificate",
            prevEl: ".left__button_siper_sertificate",
        },
        breakpoints:{
            1200:{
                slidesPerView: 2,
            },
            300:{
                slidesPerView: 1,
            }
        }
    });
    
    let swiper_thrumb_express = new Swiper("#swiper__express_thrumb",{
        spaceBetween: 10,
        slidesPerView: 3,
        crubCursor:true,
        loop:true,
        navigation: {
            nextEl: ".right__button_siper_express",
            prevEl: ".left__button_siper_express",
        },
        
        pagination: {
            el: ".express__pagination",
            clickable: true,
          },

          breakpoints: {
          300:{
            centeredSlides: true,
            slidesPerView: 1,
         },
          1000:{
            slidesPerView: 2,
          },
           1600: {
               slidesPerView: 3,
               centeredSlides: false,
           },
           
       }
    });
    
    var swiper2 = new Swiper("#swiper__express", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper_thrumb_express,
        },
    });
    $('.fancybox').fancybox({
        helpers : {
            title : {
                type : 'inside'
            },
            overlay : {
                css : {
                    'background' : 'rgba(238,238,238,0.85)'
                }
            }
        }
    });
    $(".open__more__2").click(function(){
        $(this).fadeOut(300);
        $(this).parent().css("max-height","none");
    });
    $("#mask__phone").inputmask({"mask": "+7 (***) ***-**-**"});
    new Swiper(".slider__block__service", {
        spaceBetween: 30,
        loop:true,
        grabCursor: true,
        mousewheel: true,
        navigation: {
            nextEl: ".swiper-button-service-next-inside",
            prevEl: ".swiper-button-service-prev-inside"
        },
        pagination: {
            el: ".swiper-pagination-service",
            clickable: true
        }
    });
    

    new Swiper("#swiper-list_2", {
        spaceBetween: 30,
        loop:true,
        grabCursor: true,
        slidesPerView: 4,
        navigation: {
            nextEl: ".button__right__list__23",
            prevEl: ".button__left__list__23"
        },
        pagination: {
            el: ".pagination_list_23",
            clickable: true,
            dynamicBullets:true,
            dynamicMainBullets:5
        },
        breakpoints: {
            1200:{},
            1000:{
                slidesPerView: 3,
            },
            900:{
                slidesPerView: 2,
            },
            300:{
                slidesPerView:"auto",
                centeredSlides: true,
                spaceBetween: 0,
            }
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
    
    function resizer__section__our(isInit){
        let width = $(window).width();
        if(isInit){
            if(width > 900){
                if(masonry_init == true) return;
                masonry_init = true;
                setTimeout(function(){
                    component.masonry({
                        itemSelector: '.image_item',
                        percentPosition: true,
                        gutter:50
                    });  
                    $(".swiper-init-our").css("opacity","1");
                },1000);
            }else{
                // swiper init
                if(swiper_init == true) return;
                swiper_init = true;
                $(".swiper-init-our").addClass("swiper");
                $(".swiper-init-our").children().addClass("swiper-wrapper");
                $(".swiper-init-our").children().children().each(function(){
                    $(this).addClass("swiper-slide");
                });
                swiper_our = new Swiper(".swiper-init-our",{
                    spaceBetween: 10,
                    slidesPerView: 2,
                    centeredSlides: true,
                    pagination: {
                        el: ".our__pagination",
                        clickable: true,
                    }
                });
            }
        }else{
            if(width > 900){
                if(swiper_init == false) return;
                swiper_init = false;
                masonry_init = true;
                swiper_our.destroy(true , true);
                $(".swiper-init-our").removeClass("swiper");
                $(".swiper-init-our").children().removeClass("swiper-wrapper");
                $(".swiper-init-our").children().children().each(function(){
                    $(this).removeClass("swiper-slide");
                });
                setTimeout(function(){
                    component.masonry({
                        itemSelector: '.image_item',
                        percentPosition: true,
                        gutter:50
                    });  
                    $(".swiper-init-our").css("opacity","1");
                },1000);
            }else{
                if(masonry_init == false) return;
                masonry_init = false;
                swiper_init = true;
                component.masonry('destroy');

                $(".swiper-init-our").addClass("swiper");
                $(".swiper-init-our").children().addClass("swiper-wrapper");
                $(".swiper-init-our").children().children().each(function(){
                    $(this).addClass("swiper-slide");
                });
                swiper_our = new Swiper(".swiper-init-our",{
                    spaceBetween: 10,
                    slidesPerView: 2,
                    centeredSlides: true,
                    pagination: {
                        el: ".our__pagination",
                        clickable: true,
                    }
                });
            }
        }
    }
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
            $(".nav__bar > li").each(function(){
                if($(this).hasClass("active")){
                    return false;
                }
                $(this).addClass("active");
            });
        });
    });
    
    $(".nav__bar > li").click(function(){
        let index = parseInt($(this).attr("data-index")) + 1;
        swiper__work.slideTo(index, 600);
    });

    // $(".slick__items__2").slick({
    //     arrows:true,
    //     dots:true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     responsive: [
    //         {
    //           breakpoint: 1400,
    //           settings: {
    //             slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 1000,
    //             settings: {
    //               slidesToShow: 2,
    //               arrows:false
    //             }
    //         },
    //         {
    //             breakpoint: 500,
    //             settings: {
    //               slidesToShow: 1,
    //               arrows:false,
    //               centerMode:true
    //             }
    //         }
    //     ]
    // });

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
        if($(window).width() <= 1200 && $(".slick__program").hasClass("slick-initialized") == false){
            $(".slick__program").slick({
                arrows:false,
                dots:true,
                slidesToShow: 3,
                slidesToScroll: 1,
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
                        breakpoint: 600,
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
    $(".open__more").click(function(){
        $(this).parent().fadeOut(300);
        $(this).parent().parent().css("height","100%");
    });
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
        let title = $(".custom__slider img").eq(index).attr("data-title");
        let p = $(".custom__slider img").eq(index).attr("data-p");
        $("#slider__status__title").text(title);
        $("#slider__status__p").text(p);
        $(".custom__slider img.slider_active").css({opacity:"1"}); 

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
        let title = $(".custom__slider img").eq(index).attr("data-title");
        let p = $(".custom__slider img").eq(index).attr("data-p");
        $("#slider__status__title").text(title);
        $("#slider__status__p").text(p);
        $(".custom__slider img.slider_active").css({opacity:"1"}); 

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
        let title = $(".custom__slider img").eq(index).attr("data-title");
        let p = $(".custom__slider img").eq(index).attr("data-p");
        $("#slider__status__title").text(title);
        $("#slider__status__p").text(p);
        $(".custom__slider img.slider_active").css({opacity:"1"}); 
    }
    $("#mask__phone").keydown(function(){
        if($(this).val().length > 4){
            $("#feedback__button").prop("disabled" , false);
        }else{
            $("#feedback__button").prop("disabled" , true);
        }
    });
});