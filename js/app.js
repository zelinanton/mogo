$(function() {

    var header = $("#header"),// селектор элемента header.
        introH = $("#intro").innerHeight(),//высота блока Intro.
        scrollOffset = $(window).scrollTop();//проскроленное расстояние. Текущий скрол

    /* Fixed Headers */    
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();//обновление значения

        checkScroll(scrollOffset);

    });

    function checkScroll(){
        
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),//значение нажатой ссылки
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;//позиция элемента от верха страницы

        $("nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);  
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();//убираем стандартное поведение кнопки

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");//добавляет в селектор nav класс active
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),//значение нажатой ссылки
            blockId = $(this).data('collapse');

        $this.toggleClass("active");
        $(blockId).slideToggle();
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});