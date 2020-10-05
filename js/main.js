//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');

	
	$('.start-anim').addClass('anim');
	
	$('#banner .img_group.anim .wk').attr('data-aos', 'flip-left');
	$('#banner .img_group.anim .tiktok').attr('data-aos', 'flip-left');
	$('#banner .img_group.anim .ok').attr('data-aos', 'flip-left');
	$('#banner .img_group.anim .youtube').attr('data-aos', 'flip-left');
	$('#banner .img_group.anim .facebook').attr('data-aos', 'flip-left');
	$('#banner .img_group.anim .instagram').attr('data-aos', 'flip-left');
	$('#banner .img_group.anim .telegram').attr('data-aos', 'flip-left');
	
	$('#banner .txt').attr('data-aos', 'fade-up');
	$('#banner .txt').attr('data-aos-anchor-placement', 'top-bottom');
	
	$('#banner .bottom').attr('data-aos', 'fade-up');
	
	$('#contacts .img_group .img-1').attr('data-aos', 'fade-up-right');
	$('#contacts .img_group .img-2').attr('data-aos', 'fade-down-left');
	
});


$(window).on('load', function () {
	function anim1() {
	  $('#banner .img_group.anim .wk').addClass('aos-animate');
	  $('#banner .txt').addClass('aos-animate');
	  
	  $('#contacts .img_group .img-1').addClass('aos-animate');
	}
	setTimeout(anim1, 450);
	
	function anim2() {
	  $('#banner .img_group.anim .tiktok').addClass('aos-animate');
	  $('#banner .bottom').addClass('aos-animate');
	  
	  $('#contacts .img_group .img-2').addClass('aos-animate');
	}
	setTimeout(anim2, 650);
	
	function anim3() {
	  $('#banner .img_group.anim .ok').addClass('aos-animate');
	}
	setTimeout(anim3, 800);
	
	function anim4() {
	  $('#banner .img_group.anim .youtube').addClass('aos-animate');
	}
	setTimeout(anim4, 950);
	
	function anim5() {
	  $('#banner .img_group.anim .facebook').addClass('aos-animate');
	}
	setTimeout(anim5, 1100);
	
	function anim6() {
	  $('#banner .img_group.anim .instagram').addClass('aos-animate');
	}
	setTimeout(anim6, 1300);
	
	function anim7() {
	  $('#banner .img_group.anim .telegram').addClass('aos-animate');
	}
	setTimeout(anim7, 1600);
	

});




$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});

	


//dropdown
$(document).ready(function() {
	$(".dropdown__btn").click(function() {
		$(this).siblings(".dropdown__list").slideToggle('medium');
		$(this).children('.dropdown__wrap-ico').toggleClass('active');
	});
});


 /*MENU*/
$(document).on("ready", function () {
    $(".trigger_menu").click(function () {
        $(this).toggleClass('op');
		$(".mmenu").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('.trigger_menu .bar').toggleClass('animate');
    });
});



$(document).ready(function() {
	$(".service_catalog-more").hover(function() {
		$("#service_catalog .list .item").removeClass('index');
		$(this).parents(".item").addClass('index');
	});
});
//



// scroll to top
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroll_top').fadeIn();
        } else {
            $('#scroll_top').fadeOut();
        }
    });
    $('#scroll_top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});


// #service_catalog-inside
$(document).ready(function() {
	$("#service_catalog-inside .service_catalog-more .btn").click(function() {
		$(this).siblings(".more-list").slideToggle('medium');
		$(this).toggleClass('active');
	});
});


//Минус плюс
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


 /* select_payment */
$(document).on("ready", function () {
    $(".select_payment .payment_item").click(function () {
        $(".select_payment .payment_item").removeClass('active');
		$(this).addClass('active');
    });
});

		
	
AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
	once: true,
	disable: function () {
    var maxWidth = 1100;
    return window.innerWidth < maxWidth;
  }
	
});


// adartive
$(document).on("ready", function () {
	if( window.innerWidth <= 1220 ){
		
		// slider
		$(".payment_slider").addClass('swiper-container');
		$(".payment_slider .swiper-wrapper").removeClass('flex');

		var swiper = new Swiper(".payment_slider.swiper-container", {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: {
				el: '.payment_slider .swiper-pagination',
				clickable: true,
			},
			  breakpoints: {
				760: {
				  slidesPerView: 4,
				  spaceBetween: 10,
				}
			  }
		});

		// mob

	$("#service_catalog .service_catalog-more .btn").click(function() {
		$(this).siblings(".more-list").slideToggle('medium');
		$(this).toggleClass('active');
	});

	  	 
	} 
});


