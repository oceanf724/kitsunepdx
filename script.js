$(function () {
  // Your Code from here on down. Don't delete that line above!

  // code for single slider carousel
  $('.single-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    dots: true,
    draggable: false
  })
})
