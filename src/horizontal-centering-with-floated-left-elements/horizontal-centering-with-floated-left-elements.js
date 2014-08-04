/**
 * Horizontal Centering With Floated Left Elements centers a parent container and its floated left children within the main container at all times.
 * 
 * @author  Kulamagal Mahendrarajah
 * @name  Horizontal Centering With Floated Left Elements
 * @type {Behavior}
 *
 * @property {Number} containerMargin is compulsory as it adds equal margin-left and margin-right
 * to the elements. This should be calculated manually (see below for the formula),
 * [(Main container width / Total number of elements) - The width of the element]
 *
 * @property {Number} windowWidthToDisplayInline default value is 767,from this point the elements will be displayed as inline. 
 *
 */
 $.fn.addBehavior("horizontal-centering-with-floated-left-elements", function(containerMargin, options) {
 	console.log(containerMargin);

 	var defaultOptions = {

 		windowWidthToDisplayInline: 767,
 	};

 	options = $.extend(defaultOptions, options);

 	var that = this;

 	that.parent().addClass("horizontal-flex-grid-container");
 	itemWidth = that.width();
 	itemWidth += containerMargin;
 	var main = $("#main");

 	var fitItems = Math.floor(main.width() / itemWidth);

 	that.parent().width(fitItems * itemWidth);

 	$(window).width() <= options.windowWidthToDisplayInline ? that.parent().addClass('change-layout-mode') : that.parent().removeClass('change-layout-mode');
 });

/**
 * Parse DOM and apply behavior
 */
 $(window).ready(function() {

 	$(window).on('resize', function() {
 		$(".box").behavior("horizontal-centering-with-floated-left-elements", 15);

 	}).trigger('resize');    

 });


