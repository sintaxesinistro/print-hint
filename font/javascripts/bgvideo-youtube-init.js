// BGVIDEO-INIT.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is  JS file that activates element animation effects used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: DIGNITY.
// Author: Designova.
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

   		if( !device.tablet() && !device.mobile() ) {

			/* plays the BG video if non-mobile device is detected*/ 
			$(".player").mb_YTPlayer();
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('.player').addClass('hide');
			$('#intro').addClass('video-poster-image');
			
		}

   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

