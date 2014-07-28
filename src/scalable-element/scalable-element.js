/**
 * Scalable Element scales elements if they are wider than parent container
 * or set original element width in percentages if narrower than parent container.
 * 
 *
 * @name  Scalable Element
 * @type {Behavior}
 */
$.fn.addBehavior("scalable-element", function() {

	var elements = $(this);

	if (elements.length == 0)
		throw "[Scalable Element behavior] element not found: " + elements;

	elements.each(function(){
		var parentWidth = $(this).parent().width();
		if($(this).width() > parentWidth)
			$(this).css({width: '100%'});
		else {
			var elementWidthPercentage = ($(this).width()/parentWidth)*100;
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

