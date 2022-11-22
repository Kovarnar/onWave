$(document).ready(function(){
    $('.hero__slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        easing:'ease',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        zIndex: -1,
        asNavFor:".hero__text-slider",
        initialSlide:2
    });
});

$(document).ready(function(){
    $('.hero__text-slider').slick({
        dots: false,
        arrows: false,
        speed: 500,
        easing:'ease',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        asNavFor:".hero__slider",
        initialSlide:2
    });
});

$(document).ready(function(){
    $('.partners__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow:2,
        slidesToScroll:2,
        speed:1000,
        autoplay: true,
        autoplaySpeed: 1000,
        initialSlide:7,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow:6,
                    slidesToScroll:1
                }
            },{
                breakpoint: 1024,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow:7,
                    slidesToScroll:1
                }
            },{
                breakpoint: 1400,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow:9,
                    slidesToScroll:1
                }
            }
        ]
    });
});

