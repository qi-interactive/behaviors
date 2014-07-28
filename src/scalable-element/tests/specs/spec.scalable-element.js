describe('Scalable Images Test Suite', function() {
	it('ensures elements are scaled to 100% if wider than container', function() {
		var elements = $(".scalable-element");
		elements.each(function(){
			var parentWidth = $(this).parent().width();
			if($(this).width() == parentWidth) {
				chai.assert.ok(this.style.width == '100%');
			}
		});
	});

	it('ensures elements stick to own percentage if narrower than container', function() {
		var elements = $(".scalable-element");

		elements.each(function(){
			var parentWidth = $(this).parent().width();
			if($(this).width() <= parentWidth) {
				var elementWidthPercentage = ($(this).width()/parentWidth)*100 + "%";
				chai.assert.ok(this.style.width == elementWidthPercentage);
			}
		});
	});
});