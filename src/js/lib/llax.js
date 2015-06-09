(function ($, undefined) {
  'use strict';
  
/* Paul Irish's requests animation shim
-------------------------------------------------------------------------------*/
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  
/* Decouple scroll/resize from animations
-------------------------------------------------------------------------------*/
  var lastWinHeight    = $(window).height(),
      lastWinScrollTop = $(window).scrollTop();
  
  $(document).ready(function () {
    $(window).on('resize', function () {
      lastWinHeight    = $(window).height();
      lastWinScrollTop = $(window).scrollTop();
    });
    
    $(window).on('scroll', function () {
      lastWinScrollTop = $(window).scrollTop();
    });
  });
  
/* PageParallax object that keeps track of DOM offsets internally
-------------------------------------------------------------------------------*/
  function PageParallax($parent, $child, side, startPct) {
    var self = this;
    
    self.$parent  = $parent;
    self.$child   = $child;
    self.side     = side;
    self.startPct = startPct;
    
    self.lastParentOffset = $parent.offset().top;
    self.lastParentHeight = $parent.height();
    
    $(window).on('resize', function () {
      self.lastParentHeight = $parent.height();
      self.lastParentOffset = $parent.offset().top;
    });
    
    $(window).on('scroll', function () {
      self.lastParentOffset = $parent.offset().top;
    });
  };
  
  PageParallax.prototype.setPosition = function () {
    var self = this;
    
    requestAnimationFrame(function() {
      self.setPosition();
    });
    
    var sectionOffset = this.lastParentOffset,
        start         = 0,
        startPercent  = this.startPct,
        offsetPercent = startPercent,
        percentDelta  = Math.abs(startPercent),
        scrollDelta   = lastWinHeight + this.lastParentHeight;
  
    // Make sure we don't start the parallax until the object is on the screen
    if (sectionOffset > lastWinHeight) {
      start = sectionOffset - lastWinHeight;
    }
    // If the object is on the screen start llaxin'
    if (lastWinScrollTop > start) {
      offsetPercent = startPercent +
        (percentDelta * (lastWinScrollTop - start) / scrollDelta);
    }
  
    if (offsetPercent > 0) {
      offsetPercent = 0;
    }
  
    this.$child.css(this.side, offsetPercent + '%');
  };

  
/* Make it a jQuery plugin
-------------------------------------------------------------------------------*/
  $.fn.llax = function (options) {
    var $parent   = options.$parent  || $(window),
        side      = options.side     || 'top',
        startPct  = options.startPct || -80,
        $children = this;
       
   
   $children.each(function (index, child) {
     var pp = new PageParallax($parent, $(child), side, startPct);

     window.requestAnimationFrame(function () {
       pp.setPosition();
     });
   });
  };
}(jQuery));