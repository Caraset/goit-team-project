(() => {
  // Image src replace (for lazy-loading)
  const targets = document.querySelectorAll('[data-photos-lazy]');

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.setAttribute('src', '#'); //img starts to load after scr is set to "#".
          img.classList.add('appear');
          console.log('imageLoaded');
          observer.disconnect(); // after loading the img - remove the observer from the main thread.
        }
      });
    });

    io.observe(target);
  };
  targets.forEach(lazyLoad);

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
