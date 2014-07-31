/**
 * Vertical Centering function allows an element or elements to be vertically centered at all times 
 * 
 * @author  Kulamagal Mahendrarajah
 * @name  Vertical-centering
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


