$(window).ready(function() {

	$('.slider-1').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 620,
				settings: {
                    infinite: true,
					slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px'
				}
			},
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    centerMode: false
                }
            }
		]
	});

	$('.slider-2').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                	infinite: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '120px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px'
                }
            }
        ]
	});


	$('.slider-1 .slick-arrow').insertAfter('.navigation-1');

	$('.slider-2 .slick-arrow').insertAfter('.navigation-2');




	$('.category-item-name').click(function() {
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');
	});

    $('.burger').click(function() {
        $(this).toggleClass('fa-bars fa-close');
        $('.mobile-nav').toggleClass('active');
    });

    $('#sign-up').click(function() {
        $('.modal').fadeIn().css('display', 'flex');
    });

    $('.modal').click(function(event) {

        var item = $(event.target);

        if (!item.closest($('.form-sign')).length) $('.modal').fadeOut();
        if (item.hasClass('close-modal')) $('.modal').fadeOut();

    });



    if($(window).width() <= 980) {
        $('.card-search').insertAfter('body > header');
    } else {
        $('.card-search').insertBefore('.card-4');
    }




    if($(window).width() <= 768) {
        $('nav').appendTo('.mobile-nav');
        $('.categories-bar').appendTo('.mobile-nav');
        $('.header-buttons a:not([class])').prependTo('.mobile-nav');
    } else {
        $('.categories-bar').insertAfter('.header-top');
        $('nav').prependTo('.header-top-links');
        $('.mobile-nav a').prependTo('.header-buttons');
    }

    $(window).resize(function() {

		$('.slider-1 .slick-arrow').insertAfter('.navigation-1');
		$('.slider-2 .slick-arrow').insertAfter('.navigation-2');

		if($(window).width() <= 980) {
			$('.card-search').insertAfter('body > header');
		} else {
			$('.card-search').insertBefore('.card-4');
		}

        if($(window).width() <= 768) {
            $('nav').appendTo('.mobile-nav');
            $('.categories-bar').appendTo('.mobile-nav');
            $('.header-buttons a:not([class])').prependTo('.mobile-nav');
        } else {
            $('.categories-bar').insertAfter('.header-top');
            $('nav').prependTo('.header-top-links');
            $('.mobile-nav a').prependTo('.header-buttons');
        };

    });

});