(function ($) {

	"use strict";

	$(document).ready(function() {
		// init Masonry
		var $grid = $('.msnry-grid').masonry({
		  itemSelector: '.msnry-grid-item',
		  columnWidth: '.msnry-grid-sizer',
		  percentPosition: true,
		  transitionDuration: 0,
		});
		// layout Masonry after each image loads
		// $grid.imagesLoaded().progress( function() {
		// $grid.masonry('layout');
		// });
		// layout Masonry after each image loads (the other way)
		$('.msnry-grid img[loading=lazy]').each(function(){
			$(this).on('load', function(){
				$grid.masonry('layout');
			});
		});
	});

})(jQuery);
