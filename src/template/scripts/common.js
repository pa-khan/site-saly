$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	
	$('.best__list').slick({
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		dots: true
	})

	$('.product-p__img').slick({
		arrows: false,
		fade: true,
		asNavFor: '.product-p__imgs',
	})
	$('.product-p__imgs').slick({
		vertical: true,
		slidesToShow: 3,
		arrows: false,
		asNavFor: '.product-p__img',
		focusOnSelect: true
	})


	$('.sex__item').hover(function () {
		$('.sex__item').addClass('sex__item_unhover');
		$(this).removeClass('sex__item_unhover');
	}, function () {
		$('.sex__item').removeClass('sex__item_unhover');
	})


	$('.filter__head').click(function () {
		var filterBody = $(this).siblings('.filter__body'),
				filter = $(this).parents('.filter');
		

		if (!(filter.hasClass('filter_open-always'))) {
			filterBody.slideToggle(300);
			filter.toggleClass('filter_open');
		}
	})


	$('select').styler();

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
				element = $(newNameElement);

		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('checkbox');
	valueElementForm('radio');
	
});
