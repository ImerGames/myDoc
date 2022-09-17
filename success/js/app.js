$(document).ready(function(){
    $("#close_burger_menu").click(function(){
        $("header>.container>nav").css({left:"-100%"});
        $("header>.container>nav").fadeOut(300);
    });
    $("#open_burger_menu").click(function(){
        $("header>.container>nav").fadeIn(300);
        $("header>.container>nav").css({left:"0" });
    });
    $("#open__more").click(function(){
        const is_open = $(this).attr("data-open");
        if(is_open == "true"){
            $(".grid__container__program > .hide__element").fadeIn(300);
            $(this).attr("data-open" , "false");
            $(this).text("Показать менше");
        }else{
            $(".grid__container__program > .hide__element").fadeOut(300);
            $(this).attr("data-open" , "true");
            $(this).text("Показать еше");
        }
    });
});