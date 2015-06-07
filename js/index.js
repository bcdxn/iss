/// <reference path="../typings/jquery/jquery.d.ts"/>

'use strict';

var LandingHero = require('./landing-hero'),
    Header      = require('./header');

$(document).ready(function () {
  LandingHero.init();
  Header.init();
  

  // Sticky Title
  if ($('#productTitle').length > 0) {
    $('.sticky-header').fixTo('body', {
      top: 0,
      zIndex: 3
    });
    $('#productTitle').fixTo('.products-wrapper', {
      className : 'sticky-title',
      top: 0,
      zIndex: 2,
      mind: '.sticky-header'
    });
  }
  
  // Parallax
  if ($('.intro-summary-img .vertical-img').length > 0) {
      $('.intro-summary-img .vertical-img').llax({
      '$parent': $('.intro-wrapper'),
      'side': 'top',
      'startPct': -80
    });
    
    $('.intro-summary-img .horizontal-img').llax({
      '$parent': $('.intro-wrapper'),
      'side': 'left',
      'startPct': -80
    });
    
     $('.clients-wrapper .section-content').llax({
      '$parent': $('.clients-wrapper'),
      'side': 'top',
      'startPct': -50
    });
  }

}); 