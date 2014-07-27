/**
 * Sticky footer positions an element at the bottom of the page when there is sufficient content, or bottom of the 
 * screen when there is not. 
 *
 * @name  Grid
 * @type {Behavior}
 * @param {string} [contentContainer=#main] - the container of the content, which should be an element previous to the footer.
 */
 $.fn.addBehavior("grid", function() {
 	this.addClass("b-grid");
 	this.find(" > *").addClass('b-grid-cell');
 	return this;
 });

 $.fn.addBehavior("grid-gutters", function() {
 	this.css({
 		"margin-left" : -parseInt(this.find("> *").first().css("margin-left"))
 	})
 	return this;
 });

/**
 * Parse DOM and apply behavior
 */
 $(window).ready(function() {
 	$(".grid").behavior("grid");
 	$(".grid-gutters").behavior("grid-gutters")
 })