// if (window.outerWidth >= 769) {
//   $("nav").addClass("justify-content-end navbar-right");
//   $("nav").removeClass("justify-content-center");
// }

jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 769) {
      $("nav").removeClass("justify-content-end navbar-right");
      $("nav").addClass("justify-content-center");
    } else if (ww >= 769) {
      $("nav").addClass("justify-content-end navbar-right");
      $("nav").removeClass("justify-content-center");
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
