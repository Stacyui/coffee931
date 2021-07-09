$(document).ready(function () {
  $('#online-store-all').click(function () {
    $('.coffee-beans').show(),
    $('.tools').show(),
    $('.goods').show();
  });

  $('#online-store-coffee-beans').click(function () {
    $('.coffee-beans').show(),
    $('.tools').hide(),
    $('.goods').hide();
  });

  $('#online-store-tools').click(function () {
    $('.coffee-beans').hide(),
    $('.tools').show(),
    $('.goods').hide();
  });

  $('#online-store-goods').click(function () {
    $('.coffee-beans').hide(),
    $('.tools').hide(),
    $('.goods').show();
  });

  // tab box
  $(function(){
    $("#header-nav-store").on("mousemove", function() {
      $(".tabBoxes").show();
      });
      return false;
    });
    $("#header-nav-store").on("mouseout", function() {
      $(".tabBoxes").hide();
    });

  // ---tab box
  // Home - slide
  $('.slick-track').slick({
    infinite: true,
    speed: 100,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    arrows: false
  });
  
  // ---Home -slide
});