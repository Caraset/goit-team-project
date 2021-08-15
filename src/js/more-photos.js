(() => {
  const targets = document.querySelectorAll('[data-lazy]');

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.setAttribute('src', '#'); //img starts to load after scr is set to "#".
          img.classList.add('fade');
          console.log('imageLoaded');
          observer.disconnect(); // after loading the img - remove the observer from the main thread.
        }
      });
    });

    io.observe(target);
  };

  targets.forEach(lazyLoad);
})();
