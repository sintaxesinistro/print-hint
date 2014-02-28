// SIMPLE-TEXT-ROTATOR-INIT.JS
//--------------------------------------------------------------------------------------------------------------------------------
//JS for initializing text rotator*/
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


    //Intro Text Rotator
   $(".text-rotator-fade").textrotator({
        animation: "fade",
        speed: 1200
      });
   $(".text-rotator-flip").textrotator({
        animation: "flip",
        speed: 2250
      });
   $(".text-rotator-dissolve").textrotator({
        animation: "dissolve",
        speed: 850
      });
   $(".text-rotator-flipcube").textrotator({
        animation: "flipCube",
        speed: 2250
      });
   $(".text-rotator-spin").textrotator({
        animation: "spin",
        speed: 2250
      });
   $(".text-rotator-flipup").textrotator({
        animation: "flipUp",
        speed: 2250
      });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

