/**
 * Scroll-To-Top function scrolls to the top of the page with jQuery animation. 
 * 
 * @author  Kulamagal Mahendrarajah
 * @name  Scroll-To-Top
 * @type {Behavior}
 * 
 */
 $.fn.addBehavior("scroll-to-top", function() {

 	this.each(function() {
 		$(this).on('click', function() { 
 			$("html, body").stop().animate({ scrollTop: 0 }, 'slow');
 		});
 	});
 	return this;
 });

/**
 * Parse DOM and apply behavior
 */
 $(window).ready(function() {
 	$(".scroll-to-top").behavior("scroll-to-top");
 });

