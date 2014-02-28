// SLIDINGMENU.JS
//--------------------------------------------------------------------------------------------------------------------------------
//JS for operating the sliding menu*/
// -------------------------------------------------------------------------------------------------------------------------------
// Author: Designova.
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";

$(function ($) {

// Menu Action
$('#sm-trigger, .menu-close').on('click', function(){
    $('#sm-trigger').toggleClass('active');
    $('#mastwrap').toggleClass('sliding-toright');
    $('#sm').toggleClass('menu-open');
    $('#mastwrap').addClass('nav-opened');
});
$('#mastwrap').on('click', function(){
    $('#mastwrap').removeClass('sliding-toright');
    $('#sm').removeClass('menu-open');
});

});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends

