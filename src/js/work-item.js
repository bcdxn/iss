'use strict';

var WorkItem = {},
    items = [{
      'img': 'img/work/high_point_shuttle.png',
      'title': 'High Point Furniture Market',
      'desc': 'High Point Furniture Market comes twice a \
              year in High Point NC. Innovative Sign Systems \
              has been producing signage schedules for over \
              100 hotels in the triad. A free shuttle service \
              is provided by the Mclaurin Parking Company from \
              3 airports to various hotels; the signs are in each \
              hotel for free shuttle to convention center.'
    },
    {
      'img': 'img/work/visit_raleigh.png',
      'title': 'Visit Raleigh',
      'desc': 'Innovate Sign Systems does all the visitors \
              postors for the Greater Raleigh Convention \
              & Visitors Bureau on a weekly basis to inform \
              people that this convention is in town.'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'Holly Springs Parks & Rec',
      'desc': 'Innovate Sign Systems created and fabricated over \
              70 signs for the Holly Springs Parks & Rec. This \
              program helped to showcase sponsors and to contribute \
              to the youth in the Holly Springs community. ISS \
              has been working with Holly Springs Parks & Rec since \
              2008.'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'Duke Energy Memorial Auditorium',
      'desc': 'Innovate Sign Systems has printed large (4\' x 7\') \
              \'coming soon\' posters for Duke Energy \
              Memorial Auditorium for the last six years. We \
              also partner with the Raleigh convention center.'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'American Tobacco Campus',
      'desc': 'Innovate Sign Systems makes all the directional \
              signage for Durham Bulls and ATC parking deck; The \
              deck has over 150 signs to direct easy access to \
              baseball games and the Durham Performing Arts \
              Center (DPAC).'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'McLaurin Parking',
      'desc': 'Innovate Sign Systems has handled the signage \
              for all McLaurin parking lots in the city of \
              Asheville NC over the past four years. We have \
              designed and fabricated over 300 signs for \
              various sites. We created signs designed to last, \
              built from 1/4" heavy aluminum with U-channel posts.'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'Tyler Davis Dentristy',
      'desc': 'Referred by a happy customer, Tyler Davis \
              Dentristy contracted Innovative Sign Systems to \
              design and build an outdoor storefront sign.'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'Community Music School',
      'desc': 'Innovative Sign Systems\' art department created \
              a tri-fold invitation for the Community Music \
              School.'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'Exterior Storefront Signage',
      'desc': 'Innovative Sign Systems illuminated pan channel \
              lettering is a standard for most businesses and \
              storefront facias. Lighting is installed within the \
              letter casings so they standout, event at night.'
    }];

WorkItem.init = function () {
  $('.work-item').on('click', function (evt) {
    var index = parseInt($(this).data('workindex'));
    
    $('.work-item-detail-inner').addClass('animated');
    $('.work-item-detail img').attr('src', items[index].img);
    $('.work-item-detail h4').html(items[index].title);
    $('.work-item-detail p').html(items[index].desc);
    
    $('.work-item-detail').addClass('show').addClass('animated');
    $('html').addClass('show-modal');
    $('body').addClass('show-modal');
  });
  
  $('.work-item-detail .link-btn').on('click', function () {
    $('.work-item-detail').removeClass('show');
    $('.work-item-detail-inner').removeClass('animated');
    $('.work-item-detail img').attr('src', '');
    $('html').removeClass('show-modal');
    $('body').removeClass('show-modal');
  });
};

module.exports = WorkItem;