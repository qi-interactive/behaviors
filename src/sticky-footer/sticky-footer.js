/**
 * Sticky footer positions an element at the bottom of the page when there is sufficient content, or bottom of the 
 * screen when there is not. 
 *
 * Body should have min-height: 100%, html should be height: 100%
 * 
 * @name  Sticky Footer
 * @type {Behavior}
 * @param {string} [contentContainer=#main] - the container of the content, which should be an element previous to the footer.
 */
 $.fn.addBehavior("sticky-footer", function(contentContainer) {
 	this.parent().addClass("b-sticky-footer-container");

 	var cContainer = contentContainer ? $(contentContainer) : $("#main");

 	if (cContainer.length == 0)
 		throw "[Sticky Footer behavior] contentContainer not found: " + contentContainer;

 	cContainer.addClass('b-sticky-footer-content');
 	return this;
 });

/**
 * Parse DOM and apply behavior
 */
 $(window).ready(function() {
 	$(".sticky-footer").behavior("sticky-footer");
 })