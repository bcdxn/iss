/// <reference path="../typings/jquery/jquery.d.ts"/>

'use strict';

var LandingHero  = require('./landing-hero'),
    PageParallax = require('./page-parallax');

$(document).ready(function () {
  LandingHero.init();

  PageParallax.init();

  PageParallax.llax($('.intro-wrapper'), $('.intro-summary-img .vertical-img'), 'top', -80);
  PageParallax.llax($('.intro-wrapper'), $('.intro-summary-img .horizontal-img'), 'left', -80);

  $('#productTitle').fixTo('.products-wrapper', {
    className : 'sticky-title',
    top: 0,
    zIndex: 2
  });

  PageParallax.llax($('.clients-wrapper'), $('.clients-wrapper .section-content'), 'top', -50);

});