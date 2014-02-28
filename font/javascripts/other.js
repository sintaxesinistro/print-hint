var $ = jQuery.noConflict();

// function image_preload(selector, parameters) {
// 	var params = {
// 		delay: 250,
// 		transition: 400,
// 		easing: 'linear'
// 	};
// 	$.extend(params, parameters);
		
// 	$(selector).each(function() {
// 		var image = $(this);
// 		image.css({visibility:'hidden', opacity: 0, display:'block'});
// 		image.wrap('<span class="preloader" />');
// 		image.one("load", function(evt) {
// 			$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
// 				$(this).unwrap('<span class="preloader" />');
// 			});
// 		}).each(function() {
// 			if(this.complete) $(this).trigger("load");
// 		});
// 	});
// }


jQuery(document).ready(function($) {
                
        
      


        setColumnWidth();


        function getNumColumns(){       
            var winWidth = jQuery(window).width();      
            var column = 4;
            if (winWidth<400) column = 1;
            else if(winWidth>=400 && winWidth<780) column = 2;
            else if(winWidth>=780 && winWidth<980) column = 3;
            else if(winWidth>=980  && winWidth<1320) column = 4;
            else if(winWidth>=1320) column = 5;
            return column;
        }
        
        function setColumnWidth(){
            var columns = getNumColumns();
            var containerWidth = jQuery(window).width();
            var postWidth = containerWidth/columns;
            postWidth = Math.floor(postWidth);
            jQuery(".portfolio-item").each(function(index){
                jQuery(this).css({"width":postWidth+"px"});
            });
        }
            
        function arrange(){
            setColumnWidth();       
            $('#portfolio-wrap').isotope('reLayout'); 
        }


        $(window).resize(function() {
            arrange();
        });


        // Portfolio Details
        
        var portfolioItems = $('#portfolio-wrap .portfolio-item');
        var portfolioDetails = $('#portfolio-ajax-wrap');
        var prevPostPortId = '';
        
        
        $('#portfolio-wrap .portfolio-item').click( function(e) {
        
            var portPostId = $(this).attr('id').split('portfolio-')[1];
        
            if( !$(this).hasClass('portfolio-active') ) {
                $(this).find('.preloader2').show();
                loadPortfolio(portPostId,prevPostPortId);
            }

            e.preventDefault();
        
        });
        
        
        function newNextPrev(portPostId) {
        
            var portNext = getNextPortfolio(portPostId);
            var portPrev = getPrevPortfolio(portPostId);
            $('#next-portfolio').attr('data-id', portNext);
            $('#prev-portfolio').attr('data-id', portPrev);

        }
        
        
        function loadPortfolio(portPostId, prevPostPortId, getIt) {
        
            if(!getIt) { getIt = false; }
            var portNext = getNextPortfolio(portPostId);
            var portPrev = getPrevPortfolio(portPostId);
            if(getIt == false) {
                closePortfolio(portfolioDetails);
                $("#portfolio-" + portPostId).find('.preloader2').show();
                var portfolioDataLoader = $("#portfolio-" + portPostId).attr('data-loader');
                portfolioDetails.find('#portfolio-ajax-show').load(portfolioDataLoader, { portid: portPostId, portnext: portNext, portprev: portPrev },
                function() {
                    initializePortfolio(portPostId,portfolioDetails);
                    loadAccordions();
                    loadFlexSlider();
                    loadMagnific();
                    reLoadFitvids();
                    openPortfolio(portfolioDetails);
                    portfolioItems.removeClass('portfolio-active');
                    $('#portfolio-' + portPostId).addClass('portfolio-active');
                    $("#portfolio-" + portPostId).find('.preloader2').hide();
                });
            }
        
        }
        
        
        function closePortfolio(portfolioDetails) {
        
            if( portfolioDetails && portfolioDetails.height() > 32 ) {
                portfolioDetails.find('#portfolio-ajax-show').stop(true).animate({ opacity: 0 }, 200);
                portfolioDetails.stop(true).animate({ height: 0 }, 500, 'easeOutQuad');
                portfolioDetails.find('#portfolio-ajax-single').remove();
            }
        
        }
        
        
        function openPortfolio(portfolioDetails) {
            $('html, body').stop().animate({
                'scrollTop': $( portfolioDetails ).offset().top
            }, 900, 'swing');
            portfolioDetails.stop(true).animate({ opacity: 1, height: portfolioDetails.find('#portfolio-ajax-show').outerHeight() }, 650, 'easeOutQuad', function () {
                portfolioDetails.css({ height: 'auto' });
                portfolioDetails.find('#portfolio-ajax-show').stop(true).animate({ opacity: 1 }, 200, function() {
                    var t=setTimeout(function(){ $( '.flexslider .slide' ).resize(); },1000);
                });
            });
        }
        
        
        function getNextPortfolio(portPostId) {
        
            var portNext = '';
            var hasNext = $('#portfolio-' + portPostId).next();
            if(hasNext.length != 0) {
                portNext = hasNext.attr('id').split('portfolio-')[1];
            }
            return portNext;

        }
        
        
        function getPrevPortfolio(portPostId) {
        
            var portPrev = '';
            var hasPrev = $('#portfolio-' + portPostId).prev();
            if(hasPrev.length != 0) {
                portPrev = hasPrev.attr('id').split('portfolio-')[1];
            }
            return portPrev;
            
        }
        
        
        function initializePortfolio(portPostId,portfolioDetails) {
            
            prevPostPortId = $('#portfolio-' + portPostId);
            
            $('#next-portfolio, #prev-portfolio').click( function() {
                var portPostId = $(this).attr('data-id');
                portfolioItems.removeClass('portfolio-active');
                $('#portfolio-' + portPostId).addClass('portfolio-active');
                loadPortfolio(portPostId,prevPostPortId);
                return false;
            });
            
            $('#close-portfolio').click( function() {
                portfolioDetails.stop(true).animate({ opacity: 0, height: 0 }, 500, 'easeOutQuad', function(){
                    portfolioDetails.find('#portfolio-ajax-show').stop(true).animate({ opacity: 0 }, 200);
                    portfolioDetails.find('#portfolio-ajax-single').remove();
                    $('html, body').stop().animate({
                        'scrollTop': $( '#portfolio-filter' ).offset().top - 40
                    }, 900, 'swing');
                });
                portfolioItems.removeClass('portfolio-active');
                return false;
            });
            
        }


        $window = $(window);

        $('[data-type="background"]').each(function(){

            var $bgobj = $(this); // assigning the object
            
            $(window).scroll(function() {
            
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!
                var yPos = -($bgobj.scrollTop() / $bgobj.data('speed')); 

                // Put together our final background position
                var coords = '0 '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

                if( $window.width() < 600 ) { $bgobj.css({ 'background-attachment': 'scroll' }); }

            }); // window scroll Ends

        });


        setTimeout(function() {
          if (location.hash) {
            window.scrollTo(0, 0);
          }
        }, 1);
        

});


$(window).load(function() {
    


    if ( $().flexslider ) {
        
        loadFlexSlider=function(){

        $('.fslider .flexslider').each(function() {

            var $flexsSlider = $(this);
            
            var flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation');
            var flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing');
            var flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction');
            var flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow');
            var flexsPause = $flexsSlider.parent('.fslider').attr('data-pause');
            var flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed');
            var flexsVideo = $flexsSlider.parent('.fslider').attr('data-video');
            var flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi');
            var flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows');
            var flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs');
            var flexsSheight = true;
            var flexsUseCSS = false;
            
            if( !flexsAnimation ) { flexsAnimation = 'slide'; }
            if( !flexsEasing || flexsEasing == 'swing' ) {
                flexsEasing = 'swing';
                flexsUseCSS = true;
            }
            if( !flexsDirection ) { flexsDirection = 'horizontal'; }
            if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
            if( !flexsPause ) { flexsPause = 5000; }
            if( !flexsSpeed ) { flexsSpeed = 600; }
            if( !flexsVideo ) { flexsVideo = false; }
            if( flexsDirection == 'vertical' ) { flexsSheight = false; }
            if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
            if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
            if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
            
            $flexsSlider.flexslider({
                
                selector: ".slider-wrap > .slide",
                animation: flexsAnimation,
                easing: flexsEasing,
                direction: flexsDirection,
                slideshow: flexsSlideshow,
                slideshowSpeed: Number(flexsPause),
                animationSpeed: Number(flexsSpeed),
                pauseOnHover: true,
                video: flexsVideo,
                controlNav: flexsPagi,
                directionNav: flexsArrows,
                smoothHeight: flexsSheight,
                useCSS: flexsUseCSS,
                start: function(slider){
                    if( slider.parent().parent().hasClass('portfolio-image') ) {
                        var t = setTimeout( function(){ $('#portfolio-wrap').isotope('reLayout'); }, 750 );
                    }
                    loadMagnific();
                }
                
            });
        
        });

        };
        loadFlexSlider();
    
    }


    $(window).delay(1500).queue(function(){
    
        var urlHash = window.location.hash;
        
        if( urlHash != "" ) {
            $('html, body').stop().animate({
                'scrollTop': $( urlHash ).offset().top
            }, 900, 'swing');
                    
        }
        
        $(this).dequeue();
    
    });

});