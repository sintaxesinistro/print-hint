 <!-- =============================================== -->
 <!-- ========== START SCROLL TO TOP SCRIPT ========== -->
 <!-- =============================================== -->
 (function($) { "use strict";
$(document).ready(function() {
     $(".scrollup").hide();
     $(window).scroll(function() {
         if ($(this).scrollTop() > 400) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });
     $('.scrollup').click(function() {
         $("html, body").animate({
             scrollTop: 0
         }, 800);
         return false;
     });
 });
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END SCROLL TO TOP SCRIPT ========== -->
<!-- =============================================== -->

<!-- =============================================== -->
<!-- ========== START BOOTSTRAP CAROUSEL SETTINGS ========== -->
<!-- =============================================== -->
 (function($) { "use strict";
$('.carousel').carousel({
  interval: 3000
});
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END BOOTSTRAP CAROUSEL SETTINGS ========== -->
<!-- =============================================== -->
	 
<!-- =============================================== -->
<!-- ========== START MOBILE MENU SETTINGS ========== -->
<!-- =============================================== -->
 (function($) { "use strict";
$(document).ready(function() {
 $('#navigation-button').click(function(){
    $('.drop-down').toggleClass('active');
  });
});
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END MOBILE MENU SETTINGS ========== -->
<!-- =============================================== -->

<!-- =============================================== -->
<!-- ========== START PAGE LOADER ========== -->
<!-- =============================================== -->
 (function($) { "use strict";

$(window).load(function() {
	$(".loader-img").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	var hash = window.location.hash;
	$(document).scrollTop( $(hash).offset().top -58); 
});
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END PAGE LOADER ========== -->
<!-- =============================================== -->
	 
	 
<!-- =============================================== -->
<!-- ========== START BOOTSTRAP SCROLLSPY ========== -->
<!-- =============================================== -->
 (function($) { "use strict";
	 $('html').scrollspy({ target: '.top-menu' });
	  })(jQuery);
<!-- =============================================== -->
<!-- ========== END BOOTSTRAP SCROLLSPY ========== -->
<!-- =============================================== -->
	 
<!-- =============================================== -->
<!-- ========== START BOOTSTRAP ACCORDIAN SETTINGS ========== -->
<!-- =============================================== -->
(function($) { "use strict";
var $accordion = $('#accordion .panel a');
$accordion.click(function(){
   $accordion.removeClass('selected');
   $(this).addClass('selected');
});
$('#accordion .panel a').on('click',function(e){
    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
     $accordion.removeClass('selected');
    }
});
})(jQuery);
<!-- =============================================== -->
<!-- ========== END BOOTSTRAP ACCORDIAN SETTINGS ========== -->
<!-- =============================================== -->
	 
<!-- =============================================== -->
<!-- ========== START SCROLL TO REPLY SECTION ========== -->
 <!-- =============================================== -->
 (function($) { "use strict";
		$(".go-to-reply").click(function() {
     $('html, body').animate({
         scrollTop: $("#formID").offset().top -155 }, 600);
 });
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END SCROLL TO REPLY SECTION ========== -->  
<!-- =============================================== -->
	 
<!-- =============================================== -->
<!-- ========== START REVOLUTION SLIDER SETTINGS ========== -->
<!-- =============================================== -->
	  (function($) { "use strict";
	$(document).ready(function() {
					   jQuery('.tp-banner').revolution(
						{
							delay:15000,
							startwidth:1170,
							startheight:500,
							hideThumbs:10,
							fullWidth:"off",
							fullScreen:"on",
							fullScreenOffsetContainer: "",
							onHoverStop:"off",
							touchenabled:"on",
							navigationType:"bullet",
							navigationArrows:"on",
						});

});
 })(jQuery); 
<!-- =============================================== -->
<!-- ========== END REVOLUTION SLIDER SETTINGS ========== -->
<!-- =============================================== -->
	 
	 
<!-- =============================================== -->
<!-- ========== START GOOGLE MAP SETTINGS ========== -->
<!-- =============================================== -->
var map;
var myLatLng = new google.maps.LatLng(40.749151,-73.984594);

function initialize() {

  var roadAtlasStyles = [ 
	{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, 
    { "elementType": "geometry.fill", 	"stylers": [ { "color": "#424957" } ] },
	{ "elementType": "labels.text", "stylers": [ { "color": "#ffffff" }, { "weight": 0.1 } ] },
	{ "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" }, { "weight": 0.2 }, { "invert_lightness": true } ] },
	{ "featureType": "water", "stylers": [ { "color": "#445069" } ] },
	{ "featureType": "road.highway", "elementType": "geometry.stroke" }
  ];

  var mapOptions = {
      zoom: 18,
    center: myLatLng,
	disableDefaultUI: true,
	scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
   
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'img/location-icon.png',
	  title: '',
  });
  
  var contentString = '<div style="max-width: 300px" id="content">'+
      '<div id="bodyContent">'+
	  '<h5 class="color-primary"><strong>CreativelyCoded</strong></h5>' +
      '<p style="font-size: 12px">Lorem ipsum dolor sit amet,' +
      'incididunt ut labore et dolore psum dolor magna aliqua.</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  var styledMapOptions = {
    name: 'US Road Atlas'
  };

  var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('usroadatlas', usRoadMapType);
  map.setMapTypeId('usroadatlas');
}

google.maps.event.addDomListener(window, 'load', initialize);


<!-- =============================================== -->
<!-- ========== END GOOGLE MAP SETTINGS ========== -->
<!-- =============================================== -->