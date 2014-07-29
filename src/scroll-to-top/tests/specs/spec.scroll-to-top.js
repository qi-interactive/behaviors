describe('Scroll-To-Top Test Suite', function() {
	it('ensures the body and/or html is scrolled to the top when clicking an element', function() {

		$("html, body").prop("scrollTop", 500);

		$(window).ready(function() {
			$(".scroll-to-top").trigger("click");

			setTimeout(function() {
				chai.assert.equals(0, $("html, body").prop("scrollTop"));
			}, 550)
		})
	});
});

