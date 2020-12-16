$(document).ready(function(){
    $("#namajudul").click(function(){
      $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
  $("#namajudul1").click(function(){
    $("#panel1").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#namajudul2").click(function(){
    $("#panel2").slideToggle("slow");
  });
});

// swip js

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



// swip js

var swiper = new Swiper('.sw-mobile', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


