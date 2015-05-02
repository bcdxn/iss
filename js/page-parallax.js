'use strict';

var PageParallax = {};

PageParallax.init = function() {
  PageParallax.windowHeight = $(window).height();

  $(window).on('resize', function () {
    PageParallax.windowHeight = $(window).height();
  });
};

PageParallax.llax = function ($parent, $child, side, startPct) {
  PageParallax.setPosition($parent, $child, side, startPct);
  $(window).on('scroll', function () {
    PageParallax.setPosition($parent, $child, side, startPct);
  });
};


PageParallax.setPosition = function ($parent, $child, side, startPct) {
  var sectionOffset = $parent.offset().top,
      start         = 0,
      startPercent  = startPct || -80,
      offsetPercent = startPercent,
      percentDelta  = Math.abs(startPercent),
      scrollDelta   = PageParallax.windowHeight + $parent.height();

  side = side || 'top';

  // Make sure we don't start the parallax until the object is on the screen
  if (sectionOffset > PageParallax.windowHeight) {
    start = sectionOffset - PageParallax.windowHeight;
  }
  // If the object is on the screen start llaxin'
  if ($(window).scrollTop() > start) {
    offsetPercent = startPercent +
      (percentDelta * ($(window).scrollTop() - start) / scrollDelta);
  }

  if (offsetPercent > 0) {
    offsetPercent = 0;
  }

  $child.css(side, offsetPercent + '%');
};

module.exports = PageParallax;