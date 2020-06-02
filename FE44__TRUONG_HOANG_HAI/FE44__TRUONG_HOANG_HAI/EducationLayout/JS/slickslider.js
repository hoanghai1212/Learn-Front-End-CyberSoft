$(document).ready(function () {
  $(".testimonials-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
