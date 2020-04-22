var shopsObject;

$(document).ready(function () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'ajax/shops.php', false);
	xhr.send(null);

	var dataObject = {};
	if (xhr.status == 200)
		dataObject = JSON.parse(xhr.responseText);
	shopsObject = dataObject.shops;


	for (var _shop in shopsObject) {
		$('[data-text-id="' + _shop + '"]').text(shopsObject[_shop].code)
	}

	var currentCategory = "",
		currentSubCategory = "",
		currentFloor = "";

	var floorText = {
		"s1": "на 1 этаже строительной выставки",
		"s2": "на 2 этаже строительной выставки",
		"1": "на 1 этаже",
		"2": "на 2 этаже",
		"3": "на 3 этаже",
		"4": "на 4 этаже",
		"5": "на 5 этаже"
	};

	var tooltip = $('.js-scheme-tooltip');
	var activeShops = '[data-shop].is-active';

	$('.js-category-nav-link').on('click', function (e) {
		e.preventDefault();

		if (!$(this).hasClass('is-active') || ($(this).hasClass('is-active') && !e.originalEvent)) {
			$('.js-category-nav-link').removeClass('is-active');
			$(this).addClass('is-active');
			tooltip.html('').hide();

			currentCategory = $(this).data('category');
			currentSubCategory = '';

			var floorCount = {
				"s1": 0,
				"s2": 0,
				"1": 0,
				"2": 0,
				"3": 0,
				"4": 0,
				"5": 0
			};

			$('[data-shop]').each(function () {
				$(this)[0].classList.remove('is-opened', 'is-hovered', 'is-active');
			});

			for (var shop in shopsObject) {

				if (shopsObject[shop].category[currentCategory]) {

					var floor = shopsObject[shop].floor;
					floorCount[floor]++;

					$('[data-shop="' + shop + '"]').each(function () {
						$(this)[0].classList.add('is-active');
					});
				}
			}

			$('.js-floor-nav').show();

			$('.js-floor-nav-link').each(function () {
				if (floorCount[$(this).data('floor')] != 0) {
					$(this).find('.js-floor-nav-count').text(floorCount[$(this).data('floor')]);
					$(this).addClass('is-visible');
				} else {
					$(this).find('.js-floor-nav-count').text(0);
					$(this).removeClass('is-visible');
				}
			});

			if ($('.js-catalog-page').length > 0) {
				$('.js-floor-nav-link').removeClass('is-active');
				$('.js-floor-nav-link').each(function () {
					if ($(this).hasClass('is-visible')) {
						$('.js-scheme-section' + $(this).attr('href')).addClass('is-visible');
						$('.js-scheme-section' + $(this).attr('href')).find('.js-scheme-object-title-count').text($(this).find('.js-floor-nav-count').text());
					} else {
						$('.js-scheme-section' + $(this).attr('href')).removeClass('is-visible');
						$('.js-scheme-section' + $(this).attr('href')).find('.js-scheme-object-title-count').text(0);
					}
				});
			} else {

				if ($('.js-floor-nav-link.is-active').length < 1) {
					$('.js-floor-nav-link.is-visible').eq(0).trigger('click');
				}

				if (currentSubCategory == '') {
					$('.js-scheme-block-title-1').text(currentCategory);
				} else {
					$('.js-scheme-block-title-1').text(currentSubCategory);
				}
				$('.js-scheme-block-title-2').text(floorText[currentFloor]);
			}
		}
	});


	$('.js-category-subnav-link').on('click', function (e) {
		//$('.js-category-subnav-link').click(function(e){
		e.preventDefault();
		if (!$(this).hasClass('is-active') || ($(this).hasClass('is-active') && !e.originalEvent)) {
			$('.js-category-subnav-link').removeClass('is-active');
			$(this).addClass('is-active');
			tooltip.html('').hide();

			currentCategory = $(this).closest('.js-category-nav-item').find('.js-category-nav-link').data('category');
			currentSubCategory = $(this).data('subcategory');

			var floorCount = {
				"s1": 0,
				"s2": 0,
				"1": 0,
				"2": 0,
				"3": 0,
				"4": 0,
				"5": 0
			};

			$('[data-shop]').each(function () {
				$(this)[0].classList.remove('is-opened', 'is-hovered', 'is-active');
			});

			for (var shop in shopsObject) {
				if (shopsObject[shop].category[currentCategory] && (shopsObject[shop].category[currentCategory].length == 0 || shopsObject[shop].category[currentCategory].indexOf(currentSubCategory) !== -1)) {
					var floor = shopsObject[shop].floor;
					floorCount[floor]++;

					$('[data-shop="' + shop + '"]').each(function () {
						$(this)[0].classList.add('is-active');
					});
				}
			}

			$('.js-floor-nav').show();

			$('.js-floor-nav-link').each(function () {
				if (floorCount[$(this).data('floor')] != 0) {
					$(this).find('.js-floor-nav-count').text(floorCount[$(this).data('floor')]);
					$(this).addClass('is-visible');
				} else {
					$(this).find('.js-floor-nav-count').text(0);
					$(this).removeClass('is-visible');
				}
			});

			if ($('.js-catalog-page').length > 0) {
				$('.js-floor-nav-link').removeClass('is-active');
				$('.js-floor-nav-link').each(function () {
					if ($(this).hasClass('is-visible')) {
						$('.js-scheme-section' + $(this).attr('href')).addClass('is-visible');
						$('.js-scheme-section' + $(this).attr('href')).find('.js-scheme-object-title-count').text($(this).find('.js-floor-nav-count').text());
					} else {
						$('.js-scheme-section' + $(this).attr('href')).removeClass('is-visible');
						$('.js-scheme-section' + $(this).attr('href')).find('.js-scheme-object-title-count').text(0);
					}
				});
			} else {
				if ($('.js-floor-nav-link.is-active').length < 1) {
					$('.js-floor-nav-link.is-visible').eq(0).trigger('click');
				}

				if (currentSubCategory == '') {
					$('.js-scheme-block-title-1').text(currentCategory);
				} else {
					$('.js-scheme-block-title-1').text(currentSubCategory);
				}
				$('.js-scheme-block-title-2').text(floorText[currentFloor]);
			}
		}
	});
	$('.js-floor-nav-link').on('click', function (e) {
		//$('.js-floor-nav-link').click(function(e){
		e.preventDefault();
		if (!$(this).hasClass('is-active') || ($(this).hasClass('is-active') && !e.originalEvent)) {
			$('.js-floor-nav-link').removeClass('is-active');
			$(this).addClass('is-active');

			if ($('.js-catalog-page').length > 0) {
				var $this = $(this);
				var H = $('.category-nav__subnav-wrapper').height() + $('.category-nav').height();

				$('html,body').animate({
					scrollTop: $('.js-scheme-section' + $this.attr('href')).offset().top - H
				}, 700, 'linear', function () {
					var H1 = $('.category-nav__subnav-wrapper').height() + $('.category-nav').height();
					if (H1 != H) {
						$('html,body').animate({
							scrollTop: $('.js-scheme-section' + $this.attr('href')).offset().top - H1
						}, 100, 'linear');
					}
				});
			} else {
				$('.js-scheme-section').removeClass('is-visible');
				$('.js-scheme-section' + $(this).attr('href')).addClass('is-visible');

				currentFloor = $(this).data('floor');

				$('.js-scheme-block-title').show();
				if (currentSubCategory == '') {
					$('.js-scheme-block-title-1').text(currentCategory);
				} else {
					$('.js-scheme-block-title-1').text(currentSubCategory);
				}
				$('.js-scheme-block-title-2').text(floorText[currentFloor]);
			}
		}
	});
	$(window).load(function () {

		if ($('.js-category-nav-item .js-category-nav-link').hasClass('is-active'))
			$('.js-category-nav-item .js-category-nav-link.is-active').trigger('click');
		else
			$('.js-category-nav-item').eq(0).find('.js-category-nav-link').trigger('click');

		if ($('.js-category-subnav-link').hasClass('is-active'))
			$('.js-category-subnav-link.is-active').trigger('click');


	});
	$(document).on('mouseenter', activeShops, function () {
		if ($(this).closest('.scheme-block__object-content-wrapper').length == 0 || !$(this).closest('.scheme-block__object-content-wrapper').hasClass('is-locked')) {
			$('[data-shop].is-opened').each(function () {
				$(this)[0].classList.remove('is-opened');
			});
			$('[data-shop="' + $(this).data('shop') + '"]').each(function () {
				$(this)[0].classList.add('is-opened');
			});

			var $area = $(this),
				areaL = $area.offset().left,
				areaT = $area.offset().top,

				shopData = shopsObject[$area.data('shop')],

				documentW = $(document).width(),
				documentH = $(document).height();

			if (tooltip.outerWidth() + areaL > $(document).width()) {
				tooltip.addClass('is-right');
				tooltip.removeClass('is-left');
			} else {
				tooltip.addClass('is-left');
				tooltip.removeClass('is-right');
			}

			var htmlContent = tooltipContent(shopData, $area.data('shop'));

			tooltip
				.html(htmlContent)
				.css({
					'left': (areaL / documentW) * 100 + '%',
					'right': (documentW - areaL) / documentW * 100 + '%',
					'bottom': ((documentH - areaT) / documentH) * 100 + '%'
				}).show();
		}
	});

	$(document).on('mouseleave', activeShops, function (e) {
		if (!$(e.relatedTarget).hasClass('js-scheme-tooltip') && $(e.relatedTarget).parents('.js-scheme-tooltip').length == 0) {
			$('[data-shop].is-opened').each(function () {
				$(this)[0].classList.remove('is-opened');
			});
			tooltip.html('').hide();
		}
	});

	tooltip.on('mouseleave', function (e) {
		if (!$(e.relatedTarget)[0].classList.contains('is-active')) {
			$('[data-shop].is-opened').each(function () {
				$(this)[0].classList.remove('is-opened');
			});
			tooltip.html('').hide();
		}
	});

	function tooltipContent(shopData, id) {
		var floorT = {
			"s1": "1 этаж строительной выставки",
			"s2": "2 этаж строительной выставки",
			"1": "1 этаж",
			"2": "2 этаж",
			"3": "3 этаж",
			"4": "4 этаж",
			"5": "5 этаж"
		};

		var htmlContent = '';
		htmlContent += '<div class="scheme-tooltip__box">';
		htmlContent += '<div class="scheme-tooltip__description">';
		htmlContent += '<div class="scheme-tooltip__description-main">';
		if (shopData.title) {
			htmlContent += '<div class="scheme-tooltip__title">' + shopData.title + '</div>';
		}

		htmlContent += '<div class="scheme-tooltip__entity">' + (shopData.entity ? shopData.entity : '') + '</div>';

		if (shopData.phones.length > 0) {
			htmlContent += '<div class="scheme-tooltip__phones">';
			for (var phone in shopData.phones) {
				htmlContent += '<div class="scheme-tooltip__phones-item">' + shopData.phones[phone] + '</div>';
			}
			htmlContent += '</div>';
		}


		htmlContent += '</div>';
		htmlContent += '<div class="scheme-tooltip__description-aside">' + shopData.code + ' салон ' + floorT[shopData.floor] + '</div>';
		htmlContent += '</div>';
		if (shopData.brands.length > 0) {
			htmlContent += '<div class="scheme-tooltip__brands">';
			htmlContent += '<div class="scheme-tooltip__brands-title">Узнайте о каждом бренде подробнее</div>';
			htmlContent += '<div class="scheme-tooltip__brands-content">';
			htmlContent += '<div class="scheme-tooltip__brands-content-inner">';


			for (var brand in shopData.brands) {
				htmlContent += '<div class="scheme-tooltip__brands-field">';
				if (shopData.brands[brand].link) {
					htmlContent += '<a href="' + shopData.brands[brand].link + '">';
				}

				if (shopData.brands[brand].logo) {
					htmlContent += '<img src="' + shopData.brands[brand].logo + '" alt="">';
				} else {
					htmlContent += shopData.brands[brand].title;
				}

				if (shopData.brands[brand].link) {
					htmlContent += '</a>';
				}
				htmlContent += '</div>';

			}
			htmlContent += '</div>';
			htmlContent += '</div>';
			htmlContent += '<span class="scheme-tooltip__brands-arrow"></span>';
			htmlContent += '</div>';

		}
		htmlContent += '</div>';


		return htmlContent;
	}

	/**
	 * LightSlider
	 * @see  http://sachinchoolur.github.io/lightslider/index.html
	 */
	$('.js-more-brands').lightSlider({
		autoWidth: true,
		pager: false,
		slideMargin: 44,
		responsive: [{
			breakpoint: 767,
			settings: {
				slideMargin: 10
			}
		}]
	});

	$('.js-additional-items').lightSlider({
		item: 4,
		pager: false,
		slideMargin: 10,
		responsive: [{
			breakpoint: 767,
			settings: {
				item: 2
			}
		}]
	});

	/**
	 * bxSlider
	 * @see  http://bxslider.com/
	 */
	if ($('.js-actions-carousel').length) {
		var actions_carousel, actions_carousel_desktop = false,
			actions_carousel_mobile = false;
		if (!$('.responsive-helper_xs').is(':visible')) {
			actions_carousel_desktop = true;
			actions_carousel = $('.js-actions-carousel').bxSlider({
				useCSS: false,
				ticker: true,
				tickerHover: true,
				speed: 5000 * $('.js-actions-carousel .actions__item').length
			});
		} else {
			actions_carousel_mobile = true;
			actions_carousel = $('.js-actions-carousel').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				slideMargin: 0,
				ticker: false
			});
		}

		$(window).resize(function () {
			if (!$('.responsive-helper_xs').is(':visible')) {
				if (!actions_carousel_desktop) {
					actions_carousel_desktop = true;
					actions_carousel_mobile = false;

					actions_carousel.reloadSlider({
						useCSS: false,
						ticker: true,
						tickerHover: true,
						speed: 5000 * $('.js-actions-carousel .actions__item').length
					});
				}
			} else {
				if (!actions_carousel_mobile) {
					actions_carousel_mobile = true;
					actions_carousel_desktop = false;

					actions_carousel.reloadSlider({
						minSlides: 1,
						maxSlides: 1,
						slideMargin: 0,
						ticker: false
					});
				}
			}
		});
	}

	/**
	 * FancyBox
	 * @see  http://fancyapps.com/fancybox/
	 */
	$('.js-popup-link').fancybox({
		padding: 0,
		wrapCSS: 'fancybox-popup',
		afterLoad: function () {
			$('html').addClass('fancybox-margin fancybox-lock');
			$('.fancybox-wrap').appendTo('.fancybox-overlay');
		}
	});

	if ($('.js-parallax-block').length) {
		$(window).scroll(function () {
			var block_height = $('.js-parallax-block').height(),
				block_top = $('.js-parallax-block').offset().top,
				window_height = $(window).height(),
				scrollTop = $(document).scrollTop();

			var min = block_top - window_height,
				max = block_top + block_height,
				P = scrollTop <= min ? 0 : scrollTop >= max ? 100 : (scrollTop - min) * 100 / (max - min);

			$('.js-parallax-block').css({
				'background-position': 'center ' + P + '%'
			});
		});
	}

	$('.js-fancy-link').fancybox();

	/**
	 * Placeholder IE
	 * @see  https://github.com/mathiasbynens/jquery-placeholder/
	 */
	$('input, textarea').placeholder();

	/**
	 * Form Validation
	 * @see  http://jqueryvalidation.org/validate/
	 */
	$('.js-validation-form').each(function () {
		var $form = $(this);
		$form.validate();
	});


	if ($('[data-parallax]').length) {
		$(window).scroll(function () {
			$('[data-parallax]').each(function () {
				$(this).css({
					'background-position': 'center ' + ($(this).offset().top - $(document).scrollTop()) * $(this).data('parallax') + 'px'
				});
			});
		});
	}

	$('.js-tab-link').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('is-active')) {
			$('.js-tab-link').removeClass('is-active');
			$(this).addClass('is-active');
			$('.js-tab-item').hide();
			$('.js-tab-item').eq($(this).index()).fadeIn();
		}
	});

	/* Category nav */
	if ($('.js-category-nav').length) {
		var catNav = $('.js-category-nav'),
			catNavWrapper = $('.js-category-nav-wrapper'),
			catNavWidth = $('.js-category-nav').width(),
			catNavWrapperWidth = $('.js-category-nav-wrapper').width(),
			catNavMaxLeft = catNavWidth - catNavWrapperWidth,
			catNavLeft = 0,
			catNavStep = 1,
			catNavInterval;

		$(window).resize(function () {
			catNavWidth = $('.js-category-nav').width();
			catNavWrapperWidth = $('.js-category-nav-wrapper').width();
			catNavMaxLeft = catNavWidth - catNavWrapperWidth;
		});

		$('.js-cat-next').mousemove(function (e) {
			catNavStep = ((e.pageX - $('.js-cat-next').offset().left) / $('.js-cat-next').width()) * 5;
		});

		$('.js-cat-prev').mousemove(function (e) {
			catNavStep = (($('.js-cat-prev').offset().left + $('.js-cat-prev').width() - e.pageX) / $('.js-cat-prev').width()) * 5;
		});

		$('.js-cat-next').mouseenter(function () {
			$('.js-cat-prev').show();
			catNavInterval = setInterval(function () {
				catNavLeft += catNavStep;
				if (catNavLeft > catNavMaxLeft) {
					catNavLeft = catNavMaxLeft;
					clearInterval(catNavInterval);
					$('.js-cat-next').hide();
				}
				catNav.css('marginLeft', -catNavLeft);
			}, 10);
		});

		$('.js-cat-next').mouseleave(function () {
			clearInterval(catNavInterval);
		});

		$('.js-cat-prev').mouseenter(function () {
			$('.js-cat-next').show();
			catNavInterval = setInterval(function () {
				catNavLeft -= catNavStep;
				if (catNavLeft < 0) {
					catNavLeft = 0;
					clearInterval(catNavInterval);
					$('.js-cat-prev').hide();
				}
				catNav.css('marginLeft', -catNavLeft);
			}, 10);
		});

		$('.js-cat-prev').mouseleave(function () {
			clearInterval(catNavInterval);
		});


		if ($('.js-category-nav').hasClass('is-fixed')) {
			/**
			 * Sticky-Kit
			 * @see  http://leafo.net/sticky-kit/
			 */
			$('.js-category-nav-block').stick_in_parent({
				parent: $('body'),
				sticky_class: 'is-stuck'
			});

			$('.js-category-nav-link, .js-category-subnav-link').click(function () {
				if ($('.category-nav-container').offset().top < $(document).scrollTop()) {
					//$('html,body').animate({scrollTop: $('.category-nav-container').offset().top}, 700);
					var L = $('.js-category-nav-wrapper').scrollLeft();
					$('html,body').scrollTop($('.category-nav-container').offset().top);
					setTimeout(function () {
						$('.js-category-nav-wrapper').scrollLeft(L);
					});
				}
			});

			/*$('.js-cat-toggle').click(function(e){
				e.preventDefault();
				$('.js-category-nav-block').addClass('is-opened');
			});*/

			/*var lastScrollTop = 0;
			$(window).scroll(function(){
				var st = $(this).scrollTop();
				if (st > lastScrollTop){
					$('.js-category-nav-block').removeClass('is-opened');
				} else {
					$('.js-category-nav-block').addClass('is-opened');
				}
				lastScrollTop = st;
			});*/
		}
	}
	if ($('.js-category-nav-link.is-active').length > 0)
		categoryNavScroll($('.js-category-nav-link.is-active'));

	function categoryNavScroll($active) {

		catNavLeft = $active.offset().left - catNav.offset().left - 50;

		$('.js-cat-prev, .js-cat-next').show();

		if (catNavLeft == 0) {
			$('.js-cat-prev').hide();
		} else if (catNavLeft >= catNavMaxLeft) {
			catNavLeft = catNavMaxLeft;
			$('.js-cat-next').hide();
		}

		if ($(window).width() > 767) {
			catNav.css('marginLeft', -catNavLeft);
		} else {
			catNavWrapper.scrollLeft($active.offset().left - catNav.offset().left);
		}
	}

	$('.js-header-nav-target').click(function (e) {
		e.preventDefault();
		$('.js-header-nav').addClass('is-opened');
	});

	$('.js-header-nav-close').click(function (e) {
		e.preventDefault();
		$('.js-header-nav').removeClass('is-opened');
	});

	$('.js-brand-scheme-link').click(function (e) {
		e.preventDefault();
		$('.js-brand-scheme').addClass('is-opened');
	});

	$('.js-brand-scheme-close').click(function (e) {
		e.preventDefault();
		$('.js-brand-scheme').removeClass('is-opened');
	});

	$('.scheme-block__object-content').mouseenter(function () {
		if ($(window).width() > 767) {
			var $block = $(this).closest('.scheme-block__object-content-wrapper');
			$block.addClass('is-locked');
			$block.addClass('is-opened');
			setTimeout(function () {
				if ($block.hasClass('is-opened')) {
					$block.removeClass('is-locked');
				}
			}, 300);
		}
	});

	$('.scheme-block__object-content').mouseleave(function (e) {
		if ($(window).width() > 767) {
			var $block = $(this).closest('.scheme-block__object-content-wrapper');
			if (!$(e.relatedTarget).hasClass('js-scheme-tooltip') && $(e.relatedTarget).parents('.js-scheme-tooltip').length == 0) {
				$block.removeClass('is-opened');
				$block.addClass('is-locked');
				$('[data-shop].is-opened').each(function () {
					$(this)[0].classList.remove('is-opened');
				});
				tooltip.html('').hide();
			}
		}
	});

	tooltip.on('mouseleave', function (e) {
		if ($(window).width() > 767) {
			$('.scheme-block__object-content-wrapper').removeClass('is-opened');
			$('.scheme-block__object-content-wrapper').addClass('is-locked');
		}
	});

	$('.brands-nav__list-link').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700);
	});


	$('.js-search-input').keyup(function () {
		$('.js-search-dropdown, .js-search-loader, .js-search-result, .js-search-info').hide();

		if ($(this).val().length > 0) {
			$('.js-search-dropdown').show();
			$('.js-search-loader').show();
			$.ajax({
					url: 'ajax/search.php',
					type: 'GET',
					dataType: 'json',
					data: {
						query: $(this).val()
					},
				})
				.done(function (data) {
					if (data.suggestions.length > 0) {
						$('.js-search-result').html('');
						for (var i = data.suggestions.length - 1; i >= 0; i--) {
							$('.js-search-result').append('<a href="' + data.suggestions[i].url + '" class="search-field__result-list-item">' +
								'<span class="search-field__result-value">' + data.suggestions[i].name + '</span>' +
								'<span class="search-field__result-label search-field__result-label_' + data.suggestions[i].type + '">' + data.suggestions[i].type_name + '</span>' +
								'</a>');
						}
						$('.js-search-loader').hide();
						$('.js-search-result').show();
					} else {
						$('.js-search-loader').hide();
						$('.js-search-info').show();
					}

					console.log("success");
				})
				.fail(function () {
					console.log("error");
					$('.js-search-loader').hide();
					$('.js-search-info').show();
				})
				.always(function () {
					console.log("complete");
				});


			// setTimeout(function(){
			// 	$('.js-search-loader').hide();

			// 	if(true){
			// 		$('.js-search-result').show();
			// 	}else{
			// 		$('.js-search-info').show();
			// 	}
			// },500);
		} else {
			$('.js-search-dropdown').show();
			$('.js-search-info').show();
		}
	});

	$('.js-search-input').blur(function () {
		setTimeout(function () {
			$('.js-search-dropdown, .js-search-loader, .js-search-result, .js-search-info').hide();
		}, 300);
	});


	// $('.menu__list table tr > td:nth-child(2n-1)').each(function(index, el) {

	// });


	$('.js-event-calendar').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		dateFormat: "yy-mm-dd",
		defaultDate: $('.js-event-calendar').data('default'),
		firstDay: 1,
		beforeShowDay: function (date) {
			var format_date = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

			if (event_dates.indexOf(format_date) >= 0) {
				if (date < new Date()) {
					return [true, 'is-active is-completed', ''];
				} else {
					return [true, 'is-active', ''];
				}
			} else {
				return [true, '', ''];
			}
		},
		onSelect: function (date) {
			var $active_item = $('.news-list__item[data-date="' + date + '"]');
			$('.news-list__item').removeClass('is-active');
			if ($active_item.length) {
				$active_item.addClass('is-active');
				$('html, body').animate({
					scrollTop: $active_item.offset().top - 20
				}, 700);
			}
		}
	});

	$(document).on('click', '.ui-datepicker-prev.ui-corner-all', function (e) {
		e.preventDefault();
		location = $('.page-navigation__link_prev').attr('href');
		//$('.page-navigation__link_prev').trigger('click');
	});
	$(document).on('click', '.ui-datepicker-next.ui-corner-all', function (e) {
		e.preventDefault();
		location = $('.page-navigation__link_next').attr('href');
	});

	$(document).on('click', '.js-event-calendar-clear', function (e) {
		e.preventDefault();
		$('.news-list__item').removeClass('is-active');
		$('html, body').animate({
			scrollTop: 0
		}, 700);
	});

	$(document).on('click', 'a.ui-state-default', function (e) {
		e.preventDefault();
	});

	$('.events-sidebar__inner').stick_in_parent({
		parent: $('.events-sidebar__inner').closest('.wrapper'),
		inner_scrolling: false,
	});

	$(window).resize(function () {
		$(document.body).trigger("sticky_kit:recalc");
	});


	/**
	 * Окно подтверждения отправки формы
	 * FancyBox 3 - message form
	 * @see  http://fancyapps.com/fancybox/3/
	 */
	// $(".js-popup-open-btn").trigger("click");
});

/**
 * Русификатор Form Validation
 */
jQuery.extend(jQuery.validator.messages, {
	required: "Обязательное поле",
	remote: "Исправьте это поле",
	email: "Некорректный e-mail",
	url: "Некорректный url",
	date: "Некорректная дата",
	dateISO: "Некорректная дата (ISO)",
	number: "Некорректное число",
	digits: "Cимволы 0-9",
	creditcard: "Некорректный номер карты",
	equalTo: "Не совпадает с предыдущим значением",
	accept: "Недопустимое расширение",
	maxlength: jQuery.validator.format("Максимум {0} символов"),
	minlength: jQuery.validator.format("Минимум {0} символов"),
	rangelength: jQuery.validator.format("Минимум {0} и максимумт {1} символов"),
	range: jQuery.validator.format("Допустимо знаечение между {0} и {1}"),
	max: jQuery.validator.format("Допустимо значение меньше или равное {0}"),
	min: jQuery.validator.format("Допустимо значение больше или равное {0}")
});

$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: '&#x3c;Пред',
	nextText: 'След&#x3e;',
	currentText: 'Сегодня',
	monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
	],
	monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
		'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
	],
	dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
	dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
	dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	weekHeader: 'Не',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional["ru"]);