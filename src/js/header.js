'use strict';

var Header = {};

Header.init = function () {
  var $hamburger = $('.hamburger-btn'),
      $pages = $('header .pages');
  
  $hamburger.on('click', function () {
    if ($pages.hasClass('active')) {
      $pages.removeClass('active');
    } else {
      $pages.addClass('active');
    }
  });
};

module.exports = Header;