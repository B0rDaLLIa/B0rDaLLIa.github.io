$(function () {
  var mixer = mixitup(".hall__gallery-list", {
    animation: {
      effects: "fade",
    },

    load: {
      filter: ".hall-1",
    },
  });

  var mixer = mixitup(".hall__option-list", {
    animation: {
      effects: "fade",
    },

    load: {
      filter: ".hall-1",
    },
  });

  $(".hall__gallery-base").slick({
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable: true,
    arrows: false,
    // fade: true  ,
    asNavFor: ".hall__gallery-nav",
  });

  $(".hall__gallery-nav").slick({
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    // draggable: true,
    arrows: false,
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,
    asNavFor: ".hall__gallery-base",
  });

  $(".hall__arrow--prev").on("click", function (e) {
    e.preventDefault();
    $(".hall__gallery-base").slick("slickPrev");
  });

  $(".hall__arrow--next").on("click", function (e) {
    e.preventDefault();
    $(".hall__gallery-base").slick("slickNext");
  });

  function WithoutAnimation(slider, index) {
    slider.slick("slickSetOption", "speed", 0, false);
    slider.slick("slickGoTo", index);
    slider.slick("slickSetOption", "speed", 400, false);
  }

  $(".hall__filter-item").on("click", function (e) {
    $(".hall__filter-item").removeClass("hall__filter-item--active");
    $(this).addClass("hall__filter-item--active");
    // console.log(index);

    // console.log(slideCount);
    // const slider = $('.hall__gallery-nav');

    WithoutAnimation($(".hall__gallery-base"), 0);
    WithoutAnimation($(".hall__gallery-nav"), 0);
  });

  $(".hall__gallery-base")
    .on("init afterChange", function (event, slick) {
      $(".slide-current").text(slick.currentSlide + 1);
      $(".slide-count").text(slick.slideCount);
    })
    .slick("slickGoTo", 0);
  $(".manual__slider-list").slick({
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".manual__arrow--prev").on("click", function (e) {
    e.preventDefault();
    $(".manual__slider-list").slick("slickPrev");
  });

  $(".manual__arrow--next").on("click", function (e) {
    e.preventDefault();
    $(".manual__slider-list").slick("slickNext");
  });

  $(".manual__slider-list")
    .on("init afterChange", function (event, slick) {
      $(".manual__nav-current").text(slick.currentSlide + 1);
      $(".manual__nav-count").text(slick.slideCount);
    })
    .slick("slickGoTo", 2);

  $(".qna__acc-description").hide();

  $(".qna__acc-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("acc--open")) {
      $(this).removeClass("acc--open");
      $(this).children(".qna__acc-description").slideUp();
    } else {
      $(".qna__acc-link").removeClass("acc--open");
      $(".qna__acc-description").slideUp();
      $(this).addClass("acc--open");
      $(this).children(".qna__acc-description").slideDown();
    }
  });

  $(".burger").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("menu--open");
  });
});
