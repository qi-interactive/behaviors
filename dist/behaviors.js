if (typeof jQuery === "undefined") { throw new Error("Behaviors requires jQuery") }

 

   (function ($) {

    /**
     * Call this method passing the behavior name to call the behavior
     *
     * Additional options can be passed to the function, e.g $("#main").behavior("sticky-footer", "#option1", "#option2")
     * To learn which options can be passed, please consult documentation for specific behaviors.
     * @name  kasiaa
     * @param {string} behaviorName - The name of the behavior.
     */
    $.fn.behavior = function(behaviorName) {
      return qi.behaviors[behaviorName].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }

    $.fn.addBehavior = function(behaviorName, fnc) {

      try {
        qi.behaviors;
      } catch (e) {
        qi = window.qi || {};
        qi.behaviors = qi.behaviors || [];
      }

      qi.behaviors[behaviorName] = fnc;
    };
  }(jQuery));;$.fn.addBehavior("grid", function() {
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
 });$.fn.addBehavior("sticky-footer", function(contentContainer) {
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