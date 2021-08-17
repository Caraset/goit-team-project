(() => {
  // Remove warnings from Dev Tools console about addEventListener - that it will not invoke the preventDefault() method;
  jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
      this.addEventListener('touchstart', handle, { passive: ns.includes('noPreventDefault') });
    },
  };
  jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
      this.addEventListener('touchmove', handle, { passive: ns.includes('noPreventDefault') });
    },
  };

  // Start slick-carousel slider
  $('[data-photos-carousel]').slick({
    dots: true,
    arrow: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    // adaptiveHeight: true,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          infinite: true,
        },
      },
    ],
  });
})();
