describe('Sticky Footer Test Suite', function() {
	it('ensures footer is always at the bottom', function() {

		if ($(document).height() < 450)
			throw "Window height needs to be >= 450px, is " + $(document).height(); 

		// position is off by < 1px depending on the browser, test to 1px precision
		var footerPosition = $("footer").offset().top + $("footer").outerHeight(true, true);
		chai.assert.ok(footerPosition < $(document).height() + 1 && footerPosition > $(document).height() -1 );

		$("#content").hide();

		footerPosition = $("footer").offset().top + $("footer").outerHeight(true, true);
		chai.assert.ok(footerPosition < $(document).height() + 1 && footerPosition > $(document).height() -1 );

	});
});