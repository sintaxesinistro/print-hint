// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: DIGNITY.
// Author: Designova.
// Version 1.2 - Updated on 12 Nov 2013
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

     //Detecting viewpot dimension
     var vH = $(window).height();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#intro').css('height',vH);
  
   
    //Vertical Centering of natural content spcific elements (non-images)
     $(function ($) {
              /*if your element is an image then please use $(window).load() instead tha above function wrap, because we want the coding to take
              effect when the image is loaded. */
              
              //get the width of the parent
              var parent_height = $('.vertical-center').parent().height();
              var image_height = $('.vertical-center').height();
              
              var top_margin = (parent_height - image_height)/2;
              
              //center it
              $('.vertical-center').css( 'padding-top' , top_margin);
              //uncomment the following if ithe element to be centered is an image
              $('.vertical-center-img').css( 'margin-top' , top_margin);
       });


    
    //Parallax Init
    $(window).stellar({
        responsive: true,
        horizontalScrolling: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: true
    });


   
     //TWITTER INIT (Updated with compatibility on Twitter's new API):
     //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
      $(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 1,
              loading_text: 'loading twitter update...',
              username:'designovastudio'
              /* etc... */
          });
        }); 

    //Waypoint Interaction
    $('#intro h1').waypoint(function() {
      $('#masthead').removeClass('sub');
      $('.logo').removeClass('sub');
    });
    $('#about').waypoint(function() {
      $('#masthead').addClass('sub');
      $('.logo').addClass('sub');
    });

    //Service Panel Switching
    //var serviceIndex;
    var serviceActiveHover;
    //asigning the triangle to active icon
    $('.service-icon').click(function(){
        $('.service-icon').removeClass('current');
        $(this).addClass('current');
    });
    //assigning the triangle to relevant icon when hovering the service details panel.
    $('.service-details').mouseenter(function(){
        serviceActiveHover = $(this).attr('data-service-active-hover');
        $('.service-icon').removeClass('current');
        $('#'+serviceActiveHover).addClass('current');
    });


    //Carousels
      $("#thumb-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 4,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,8],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[800,3],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: true
      });
      $(".testimonial-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        autoHeight: true,
        navigationText: ["&lt;","&gt;"],
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[800,1],
        autoPlay: true
      });


       //Portfolio Engine
    $('#grid').mixitup({
      transitionSpeed : 800
    });

    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });

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







  

