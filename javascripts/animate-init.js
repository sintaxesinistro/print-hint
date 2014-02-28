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

    //ANIMATED ELEMENTS TRIGGERING
    $('.animated').appear(function() {
     $(this).each(function(){ 
        $(this).addClass('activate');
        $(this).addClass($(this).data('fx'));
       });
    },{accY: -150});

   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

