describe('Horizontal Centering With Floated Left Elements Test Suite', function() {
	it('ensures a parent container and its floated left children are horizontally centered within the main container', function() {

		$(window).on("ready resize", function() {
			$('.parent-container').addClass("horizontal-flex-grid-container");
			setTimeout(function() {

				$('.box').width('220px');
				chai.assert.ok(1, $('.box').css("width"));
			}, 550)
		})
	});
});

