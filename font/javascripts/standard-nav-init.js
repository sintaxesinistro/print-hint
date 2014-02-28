// ANIMATE-INIT.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is  JS file that activates element animation effects used in this template*/
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

   //Highlight the navigation on focusing a section
   $('.standard-nav li > a').click(function(){
        $('.standard-nav li > a').removeClass('highlighted');
        $(this).addClass('highlighted');
    });
    $('.page-section').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.standard-nav li > a').removeClass('highlighted');
        $('#'+sectionId+'-linker').addClass('highlighted');
    });

    //Waypoint Interaction
    $('#intro h1').waypoint(function(direction) {
      $('.standard-nav li > a').removeClass('sub');
    });
    $('#about').waypoint(function(direction) {
      $('.standard-nav li > a').addClass('sub');
    });
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

