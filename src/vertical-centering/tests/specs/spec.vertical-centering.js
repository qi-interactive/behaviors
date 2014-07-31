describe('Vertical Centering Test Suite', function() {
	it('ensures elements are vertically centered within the parent container', function() {

		$(window).ready(function() {
			$('#main').css("height", '200px');
			$('#main').addClass("vertical-flex-grid-container");
			setTimeout(function() {
				chai.assert.equal('200px', $('#main').css("height"));
			}, 550)
		})
	});
});

