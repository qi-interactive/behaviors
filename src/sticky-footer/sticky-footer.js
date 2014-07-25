
/** This is a description of the foo function. */


/**
 * Call this method passing the behavior name to call the behavior
 *
 * Additional options can be passed to the function, e.g $("#main").behavior("sticky-footer", "#option1", "#option2")
 * To learn which options can be passed, please consult documentation for specific behaviors.
 * @name  Sticky Footer
 * @type {Behavior}
 * @param {string} behaviorName - The name of the behavior.
 */
$.fn.addBehavior("stickyFooter", function(contentContainer) {
	this.parent().addClass("b-sticky-footer-container");

	var cContainer = contentContainer ? $(contentContainer) : $("#main");

	if (cContainer.length == 0)
		throw "[Sticky Footer behavior] contentContainer not found: " + contentContainer;

	cContainer.addClass('b-sticky-footer-content')
	return this;
});