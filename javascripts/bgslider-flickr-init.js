// BGSLIDER-INIT.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is  JS file that activates a type of BG Image Slideshow used in this template*/
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

     //USE YOUR OWN FLICKR API KEY
            //http://www.flickr.com/services/apps/create/apply/

            $.mbFlickr.flickr_api_key="f40779ab07dd09e5890f48e3618296b3"; //this is my Flickr API key. Create your own
            $.mbFlickr.defaults.size="surce"; //  medium / surce
            $.mbFlickr.defaults.per_page=100;
            $.mbFlickr.defaults.flickr_photoset_id='72157600884372818';

            $.mbFlickr.defaults.callback=function(gallery){

                $(gallery.photos).each(function(i){
                    $.mbBgndGallery.defaults.images.push(this.source);
                    var img=$("<img/>").attr("src",this.square).click(function(){
                        var el=$("body").get(0);
                        el.opt.imageCounter=$(this).attr("i")-1;
                        $.mbBgndGallery.next(el);
                        el.opt.paused=true;
                    }).attr("i",i);
                    $("#thumbs").append(img);
                });

                $("#loading").hide();

                $.mbBgndGallery.buildGallery({
                    containment:"body",
                controls:false, //updated in v1.1
                    timer:3000,
                    effTimer:1000,
                    raster:"inc/raster.png",
                    folderPath:false
                });

                $(".bw").toggle(
                        function(){
                            var el=$("body").get(0);
                            el.opt.grayScale=true;
                            $(this).addClass("sel");
                            el.opt.gallery.find("img:first").greyScale();
                        },
                        function(){
                            var el=$("body").get(0);
                            el.opt.grayScale=false;
                            $(this).removeClass("sel");
                            el.opt.gallery.find("img:first").attr("src",el.opt.images[el.opt.imageCounter]);
                        }
                )
            };

            $("body").mb_loadFlickrPhotos();


   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

