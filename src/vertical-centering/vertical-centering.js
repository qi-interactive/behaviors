/**
 * Vertical Centering function allows an element or elements to be vertically centered within the parent container
 * at all times regardless of window size. 
 * 
 * @author  Kulamagal Mahendrarajah
 * @name  Vertical-Centering
 * @type {Behavior}
 * 
 */
 $.fn.addBehavior("vertical-centering", function() {

 	this.each(function(i) {
 		$(this).parent().addClass("vertical-flex-grid-container");
 	});
 	return this;
 });

/**
 * Parse DOM and apply behavior
 */
 $(window).on("ready resize", function() {
 	$(".box").behavior("vertical-centering");
 });


