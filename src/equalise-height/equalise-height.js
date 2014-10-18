/**
 * Sticky footer positions an element at the bottom of the page when there is sufficient content, or bottom of the 
 * screen when there is not. 
 *
 * @name  Grid
 * @type {Behavior}
 * @param {string} [contentContainer=#main] - the container of the content, which should be an element previous to the footer.
 */
 $.fn.addBehavior("equalise-height", function() {
 	
 	var maxHeight;
 	$(this).each(function(i, el) {

 		if ($(el).height() > maxHeight)
 			maxHeight = $(el).height()

 	})

 	if (maxHeight)
 		$(this).height(maxHeight)

 	return this;
 });

 