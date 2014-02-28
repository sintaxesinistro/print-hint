(function($){"use strict";
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };
	$(window).on('scroll', function() {
 $('.counter').each(function() {
 if ( $(this).hasClass( "element-visible" ) ) {
	  // do nothing
	  }
	   else {
	  var dataoffset = '80%';
      var parsePercent = parseFloat(dataoffset);
      var decimal = parsePercent / 100;
      var triggerpoint = $(window).height() * decimal + $(window).scrollTop(); // Call point in Viewport: viewport height * decimal(%) + pixels to top of window
	  
      var counterElement = $(this).offset().top;
	  if  (counterElement < triggerpoint) {
	  $(this).addClass("element-visible");
	var dataEndCount = $(this).data('end-count');
	var dataSpeed = $(this).data('speed');
  
        $(this).countTo({
            from: 0,
            to: dataEndCount,
            speed: dataSpeed,
            refreshInterval: 100,
        });	
		}
		}
		});
    });
})(jQuery);



