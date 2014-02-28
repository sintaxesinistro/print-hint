// ANIMATE.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: TEMPLATE.
// Version: 1.0 Initial Release
// Release Date: 01st Oct 2013
// Author: Designova.
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

     //Detecting viewpot dimension
     var vW = $(window).width();
     var vH = $(window).height();
     var vHperc20 = vH*20/100;
     var vHperc40 = vH*40/100;

     //Setting heights via JS
     $('.topbanner, #intro').css('height',vH);
     $('.logo-emblem').css('padding-top',vHperc20);
     
    //Highlight the navigation on focusing a section
    // $('#mast-nav li > a').click(function(){
    //     $('#mast-nav li > a').removeClass('active');
    //     $(this).addClass('active');
    // });
    // $('.page-section').mouseenter(function(){
    //     var sectionId = $(this).attr('id');
    //     $('#mast-nav li > a').removeClass('active');
    //     $('#'+sectionId+'-linker').addClass('active');
    // });

    
    //Parallax Init
    $(window).stellar({
        responsive: false,
        horizontalScrolling: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: true
    });


    //ANIMATED ELEMENTS TRIGGERING
    $('.animated').appear(function() {
     $(this).each(function(){ 
        $(this).css('visibility','visible');
        $(this).addClass($(this).data('fx'));
       });
    },{accY: -150});

   
     //TWITTER INIT (Updated with compatibility on Twitter's new API):
     //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
      $(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 5,
              loading_text: 'loading twitter feed flame...',
              username:'designovastudio'
              /* etc... */
          });
        }); 

    //Waypoint Interaction
    $('#intro h1').waypoint(function(direction) {
      $('#masthead').removeClass('sub');
      $('.logo').removeClass('sub');
    });
    $('#about').waypoint(function(direction) {
      $('#masthead').addClass('sub');
      $('.logo').addClass('sub');
    });

    //Service Panel Switching
    var serviceIndex;
    var serviceActiveHover;
    //asigning the triangle to active icon
    $('.service-icon').click(function(){
        $('.service-icon').removeClass('current');
        $(this).addClass('current');
    })
    //assigning the triangle to relevant icon when hovering the service details panel.
    $('.service-details').mouseenter(function(){
        serviceActiveHover = $(this).attr('data-service-active-hover');
        $('.service-icon').removeClass('current');
        $('#'+serviceActiveHover).addClass('current');
    })


    //Carousels
      $("#thumb-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 4,
        touchDrag: true,
        mouseDrag: true
      });
      $(".testimonial-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        autoHeight: true,
        navigationText: ["&lt;","&gt;"],
        touchDrag: true,
        mouseDrag: true
      });


    //Portfolio Engine
    $('#grid').mixitup();

    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    })

    //Magnific Pop (Lightbox)
    $('.image-lightbox-link').magnificPopup({ 
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function 

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

