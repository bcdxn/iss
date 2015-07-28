'use strict';

var WorkItem = {},
    items = [{
      'img': 'img/work/high_point_shuttle.png',
      'title': 'High Point Furniture Market',
      'desc': 'High Point Furniture Market comes twice a \
              year in High Point NC. Innovative Sign Systems \
              has produces signage for over  100 hotels in the \
              area recommended by the event organizers. We also \
              design and produce the shuttle schedules that are \
              the main source of transportation for the event.'
    },
    {
      'img': 'img/work/visit_raleigh.png',
      'title': 'Visit Raleigh',
      'desc': 'Innovate Sign Systems creates all the visitors \
              postors for the Greater Raleigh Convention \
              & Visitors Bureau. These informative signs \
              are one of the organization\'s approaches to \
              branding the event.'
    },
    {
      'img': 'img/work/holly_springs.png',
      'title': 'Holly Springs Parks & Rec',
      'desc': 'Innovate Sign Systems has created and fabricated over \
              seventy signs for the Holly Springs Parks & Rec. This \
              relationship has helped us build a valuable connection \
              as well as give back to the community of Holly Springs. We \
              have been working with Holly Springs Parks & Rec since \
              2008.'
    },
    {
      'img': 'img/work/duke.png',
      'title': 'Duke Energy Memorial Auditorium',
      'desc': 'Innovate Sign Systems has printed large (4\' x 7\') \
              \'coming soon\' posters for Duke Energy \
              Memorial Auditorium for the last six years. We \
              also partner with the Raleigh convention center. We are \
              a trusted name in large format printing.'
    },
    {
      'img': 'img/work/american_tobacco_campus.png',
      'title': 'American Tobacco Campus',
      'desc': 'Innovate Sign Systems makes all the directional \
              signage for Durham Bulls and ATC parking deck; The \
              deck has over 150 signs to direct easy access to \
              baseball games and the Durham Performing Arts \
              Center (DPAC).'
    },
    {
      'img': 'img/work/mclaurin_parking.png',
      'title': 'McLaurin Parking',
      'desc': 'Innovate Sign Systems has handled the signage \
              for all McLaurin parking lots in the city of \
              Asheville NC over the past four years. We have \
              designed and fabricated over 300 signs for \
              various sites. We create signs designed to last, \
              built from 1/4" heavy aluminum with U-channel posts.'
    },
    {
      'img': 'img/work/tyler_davis_dentist.png',
      'title': 'Tyler Davis Dentristy',
      'desc': 'Referred by a happy customer, Tyler Davis \
              Dentristy contracted Innovative Sign Systems to \
              design and build an outdoor storefront sign. \
              Our work for Tyler Davis Dentristy is a perfect \
              example of our talent in working with different \
              mediums.'
    },
    {
      'img': 'img/work/community_music_school.png',
      'title': 'Community Music School',
      'desc': 'Innovative Sign Systems\' art department created \
              a tri-fold invitation for the Community Music \
              School. Our design engineers matched the look and \
              feel of invitation with the artwork provided creating \
              a cohesive visual experience.'
    },
    {
      'img': 'img/work/external_signs.png',
      'title': 'Exterior Storefront Signage',
      'desc': 'Innovative Sign Systems illuminated pan channel \
              lettering is a standard for most businesses and \
              storefront facias. These signs are eye-catching, \
              even at night.'
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