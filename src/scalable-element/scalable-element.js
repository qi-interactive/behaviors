/**
 * Scalable Element scales elements if they are wider than parent container
 * or set original element width in percentages if narrower than parent container.
 * 
 * @author  Michal Fiedorowicz
 * @name  Scalable Element
 * @type {Behavior}
 * 
 * @property {Element} relativeToElement when provided, width of {this} will be calculated based on {relativeToElement} width
 * @property {Number} relativeToWidth when provided, width of {this} will be calculated based on the value of this param
 * 
 */
 $.fn.addBehavior("scalable-element", function(options) {


 	var defaultOptions = {

 		
 		relativeToElement: null,

 		
 		relativeToWidth: null
 	};

 	options = $.extend(defaultOptions, options);

 	var relativeToElement = options.relativeToElement || $(this).parent();
 	var relativeToWidth = parseInt(options.relativeToWidth) || $(relativeToElement).width();

 	this.each(function(){

 		var isImg = (this.nodeName.toLowerCase() === 'img');
    	var el = $(this);

 		if(isImg) {
 			var img = new Image();
      		img.src = $(this).attr('src');
      		img.onload = function() {
        		if(img.width > relativeToWidth)
          			el.css({width: '100%'});
        		else {
          			var elementWidthPercentage = (img.width/relativeToWidth)*100;
          			el.css({width: elementWidthPercentage + "%"});
        		}
      		}
		}
    	else {
      		if($(this).width() > relativeToWidth)
        		$(this).css({width: '100%'});
      		else {
        		var elementWidthPercentage = ($(this).width()/relativeToWidth)*100;
        		$(this).css({width: elementWidthPercentage + "%"});
      		}
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

