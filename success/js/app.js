$(".btn-close-menu-mob").click(function(){
    $(".burger-list").css("left","-50%");
});
$(".button_open_burger").click(function(){
    $(".burger-list").css("left","0px");
});

function init_swiper_cards(){
    const swiper_001 = new Swiper('.swiper_init_001', {
        loop: false,
        slidesPerView: 3,
        breakpoints: {
            376: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1200: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    });

    const swiper_002 = new Swiper(".swiper_init_002", {
        loop: false,
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        navigation: {
            prevEl: "#swiper_init_002_left",
            nextEl: "#swiper_init_002_right"
        }
    });

    const swiper_003 = new Swiper(".swiper_init_003", {
        loop: false,
        slidesPerView: 1,
        spaceBetween:30,
        navigation: {
            prevEl: "#swiper_init_003_left",
            nextEl: "#swiper_init_003_right"
        }
    });
}

function init_select(){
    const object = $(".select-init");

    $(object).click(function(){
        let isOpen = $(this).children(".list").is(":hidden");

        if(isOpen){
            $(this).children(".list").show(300);
        }else{
            $(this).children(".list").hide(300);
        }
    });

    $(object).find("li").click(function(){
        let text = $(this).text();
        $(this).closest(".select-init").find(".display").children(".title").text(text);
        let obj = $(this);
        setTimeout(function(){
            $(obj).parent().children("li").removeClass("active");
            $(obj).addClass("active");
        },300);
    });

    $(document).mouseup( function(e){ 
		var div = $( ".select-init" );
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) {
			div.find(".list").hide(300);
		}
	});

}