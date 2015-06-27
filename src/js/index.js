'use strict';

var LandingHero = require('./landing-hero'),
    Header      = require('./header'),
    WorkItem    = require('./work-item');

$(document).ready(function () {
  var map, marker, latLng;
  
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
  
  // Contact Page
  if ($('#map-canvas').length > 0) {
    latLng = { lat: 35.773853, lng: -78.637281}
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: latLng,
      zoom: 17
    });
    
    marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: 'Innovative Sign Systems'
    });
  }
  
  // Work Page
  if ($('.work-item-detail').length > 0) {
    WorkItem.init();
  }

}); 