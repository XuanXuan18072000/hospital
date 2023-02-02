(function () {
  // --------- スクロール系

  // トップへジャンプbutton
  $(window).scroll(function () {
    thisOffset = $("header").offset().top + $("header").outerHeight();
    if ($(window).scrollTop() > thisOffset) {
      $(".totop-button").addClass("active");
    } else {
      $(".totop-button").removeClass("active");
    }
  });

})();

(function () {
  // スマホメニューボタン アクション
  $(".header_menu_button").on("click", function () {
    $(".header_nav").toggleClass("menuopen");
    $(this).toggleClass("open");
  });
})();

(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

})(jQuery);

(function () {
  var swiper = new Swiper(".other_group", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

})(jQuery);