$(document).ready(function($) {

	
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
	


	$(window).on('load, scroll', function () {
		var windowScroll = $(window).scrollTop();
		
		if (windowScroll > 181) {
			$('.header__wrap').addClass('header__wrap_fixed');
		} else {
			$('.header__wrap').removeClass('header__wrap_fixed');
		}
	})

	$('.product-p__img-item').zoom();
});
