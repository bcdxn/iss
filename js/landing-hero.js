'use strict';

var LandingHero = {};

LandingHero.init = function () {
  if ($('.hero-wrapper').length > 0) {
    LandingHero.$hero = $('.hero-wrapper');

    _initHeight(LandingHero.$hero);
    LandingHero.$hero.css('opacity', '1.0');
  
    $(window).on('resize', function () {
      _initHeight(LandingHero.$hero);
    });
  }
};

function _initHeight($hero) {
  $hero.css('height', $(window).height() + 'px');
}

module.exports = LandingHero;