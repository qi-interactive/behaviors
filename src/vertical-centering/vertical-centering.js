/**
 * Vertical Centering function allows an element or elements to be vertically centered within the parent container
 * at all times regardless of window size. 
 * Tested in Chrome Firefox Safari Opera
 * IE8 uses a polyfil, PLEASE TEST CAREFULLY.
 * 
 * @author  Kulamagal Mahendrarajah
 * @name  Vertical-Centering
 * @type {Behavior}
 * 
 */

 (function() {

 	$.fn.addBehavior("vertical-centering", function() {

 		if (Modernizr.flexbox) {
 			this.each(function() {
 				$(this).parent().addClass("vertical-flex-grid-container");
 			});
 		} else {
 			polyfil(this);
 		}

 		return this;
 	});

 	function polyfil(el) {

 		el.each(function(i) {
 			that = $(this);
 			that.css({
 				"display" : "inline-block",
 				"vertical-align" : "middle",
 				"position" : "relative",
 				"top" : that.parent().height() / 2 - (that.outerHeight() / 2)
 			});	
 		});
 	}

	 /**
	  * Parse DOM and apply behavior
	  */
	  $(window).ready(function() {
	  	$(".vertical-centering").behavior("vertical-centering");
	  });

	})();
