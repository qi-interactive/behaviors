if (typeof jQuery === "undefined") { throw new Error("Behaviors requires jQuery") }

   (function ($) {

    /**
     * Call this method passing the behavior name to call the behavior
     *
     * Additional options can be passed to the function, e.g $("#main").behavior("sticky-footer", "#option1", "#option2")
     * To learn which options can be passed, please consult documentation for specific behaviors.
     * @name  behavior
     * @param {string} behaviorName - The name of the behavior.
     */
     $.fn.behavior = function(behaviorName) {
      return qi.behaviors[behaviorName].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }

    /**
     * Registers new behavior 
     *
     * @name addBehavior
     * @param {string} behaviorName - The name of the behavior. Needs to be unique 
     * @param {string} fnc - The name of the behavior.
     */
     $.fn.addBehavior = function(behaviorName, fnc) {

      try {
        qi.behaviors;
      } catch (e) {
        qi = window.qi || {};
        qi.behaviors = qi.behaviors || [];
      }

      if (qi.behaviors[behaviorName] != null) 
        throw "Behavior with the name: " + behaviorName + " has already been registered."

      qi.behaviors[behaviorName] = fnc;
    };
  }(jQuery));;$.fn.addBehavior("grid", function() {
 	this.addClass("b-grid");
 	this.find(" > *").addClass('b-grid-cell');

 	this.find(" > *").each(function(i, el) {
 		if ($(el).inlineStyle("width") != "")
 			$(el).css("flex", "none")
 	});

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


/**
 * TODO update this method to also check if property set in CSS. Will remove the need for grid-defined-width property
 * Helper function which checks if a property has been set by the user (ONLY inline)
 */
 ;(function ($) {
 	$.fn.inlineStyle = function (prop) {
 		return this.prop("style")[$.camelCase(prop)];
 	};
 }(jQuery));;$.fn.addBehavior("scalable-element", function(options) {


	var defaultOptions = {

		
		relativeToElement: null,

		
		relativeToWidth: null
	};

	options = $.extend(defaultOptions, options);

	var relativeToElement = options.relativeToElement || $(this).parent();
	var relativeToWidth = parseInt(options.relativeToWidth) || $(relativeToElement).width();

	this.each(function(){

		if($(this).width() > relativeToWidth)
			$(this).css({width: '100%'});
		else {
			var elementWidthPercentage = ($(this).width()/relativeToWidth)*100;
			$(this).css({width: elementWidthPercentage + "%"});
		}
	});

	return this;
});

/**
 * Parse DOM and apply behavior
 */
$(window).ready(function() {
	$(".scalable-element").behavior("scalable-element");
});

// $(window).on('resize', function() {
// 	$(".scalable-element").behavior("scalable-element");
// });

;$.fn.addBehavior("scroll-to-top", function() {

 	this.each(function() {
 		$(this).on('click', function() { 
 			$("html, body").animate({ scrollTop: 0 }, "slow");
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

;$.fn.addBehavior("sticky-footer", function(contentContainer) {
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
});

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


