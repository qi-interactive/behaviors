describe('Vertical Centering Test Suite', function() {
	it('ensures elements are vertically centered within the parent container', function() {

		$(window).ready(function() {
			 expect($("#main .box").position().top).to.equal(200);
		});
	});
	});
