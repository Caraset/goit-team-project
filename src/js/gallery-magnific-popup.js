// This will create a single gallery from all elements that have class "gallery-item"

$('.gallery-wrapper').magnificPopup({
  delegate: 'img', // child items selector, by clicking on it popup will open
  type: 'image',

  gallery: { enabled: true },
  // other options
});

// $('.gallery-item').magnificPopup({
//   type: 'image',
//   closeOnContentClick: true,
//   closeBtnInside: false,
//   mainClass: 'mfp-no-margins mfp-with-zoom',

//   gallery: {
//     enabled: true,
//   },
//   image: {
//     verticalFit: true,
//   },
//   zoom: {
//     enabled: true,
//     duration: 300,
//   },
// });
