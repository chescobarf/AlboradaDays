"use strict";

$('.carousel').slick({
  slidesToShow: 1,
  centerMode: false,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  cssEase: 'ease',
  dots: true,
  infinite: true,
  arrows: false
});
$('#filtro').on('change', function () {
  var value = $(this).val();
  $('.card').fadeOut();
  $('.' + value).fadeIn();

  if (value == 0) {
    $('.card').fadeIn();
  }
});