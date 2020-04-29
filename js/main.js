(function ($) {
  "use strict";


  // ------------------------------------------------------------------------------ //
  // Preloader
  // ------------------------------------------------------------------------------ //


  $(window).on('load', function () {
    if ($(".pre-loader-wrap").length > 0) {
      $(".pre-loader-wrap").fadeOut("slow");
    }
  });


  // ------------------------------------------------------------------------------ //
  // Scroll Top
  // ------------------------------------------------------------------------------ //

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".scroll-top").fadeIn(600);
    } else {
      $(".scroll-top").fadeOut(600);
    }
  });

  $(".scroll-top").on("click", function () {
    $("html,body").animate({
        scrollTop: 0
      },
      500
    );
    return false;
  });


  // ------------------------------------------------------------------------------ //
  // Main Menu
  // ------------------------------------------------------------------------------ //

  $('#dopeNav').dopeNav();

  // ------------------------------------------------------------------------------ //
  // Portfolio Carousel
  // ------------------------------------------------------------------------------ //

  $(".portfolio-carusel-wrap").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 15,
    responsive: {
      1200: {
        items: 4
      },
      1199: {
        items: 3
      }
    }
  });


  // ------------------------------------------------------------------------------ //
  // Counter Carousel
  // ------------------------------------------------------------------------------ //


  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function () {
    $('.odometer').each(function () {
      if ($(this).isInViewport()) {
        setTimeout(function () {
          $('.odometer_number_one').html('250');
          $('.odometer_number_two').html('120');
          $('.odometer_number_three').html('210');
          $('.odometer_number_four').html('390');
        }, 5);
      } else {}
    });
  });

  // ------------------------------------------------------------------------------ //
  // Tilt Effect
  // ------------------------------------------------------------------------------ //

  $('.single-service').tilt({
    speed: 3000, // Speed of the enter/exit transition.
    transition: true, // Set a transition on enter/exit.
    scale: 1.06
  })

  // ------------------------------------------------------------------------------ //
  // Testimonial Carousel
  // ------------------------------------------------------------------------------ //

  $(".testimonial-carousel").owlCarousel({
    items: 2,
    loop: true,
    margin: 15,
    nav: true,
    slideSpeed: 1200,
    smartSpeed: 500,
    autoplay: false,
    navText: [
      '<i class="icofont-arrow-left"></i>',
      '<i class="icofont-arrow-right"></i>'
    ],
    navContainer: '#leftNav',
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }

  });




  // ------------------------------------------------------------------------------ //
  // Brand Logo Carousel
  // ------------------------------------------------------------------------------ //

  $(".brand-logo-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 6,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });


  // ------------------------------------------------------------------------------ //
  // Portfolio Carousel
  // ------------------------------------------------------------------------------ //

  $(".portfolio-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 1,
    autoplay: true,
    autoplayTimeout:10000,
    dots: true,
  });

    // ------------------------------------------------------------------------------ //
  // What we can offer Carousel
  // ------------------------------------------------------------------------------ //

  $(".what-we-offer-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 4,
    margin: 0,
    autoplay: false,
    dots: true,

    responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
    }
  });

  // ------------------------------------------------------------------------------ //
  // Portfolio Filter
  // ------------------------------------------------------------------------------ //


  $(".filter-button").on('click', function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }

  $(this).addClass("active");

  $('.filter-list li').on('click', function (e) {
    e.preventDefault();
    $('li').removeClass('active');
    $(this).addClass('active');
  });



  // ------------------------------------------------------------------------------ //
  // Contact Form
  // ------------------------------------------------------------------------------ //

  var submitContact = $("#submit-message"),
    message = $("#msg");

  submitContact.on("click", function (e) {
    e.preventDefault();

    var $this = $(this);

    $.ajax({
      type: "POST",
      url: "mail.php",
      dataType: "json",
      cache: false,
      data: $("#contact-form").serialize(),
      success: function (data) {
        if (data.info !== "error") {
          $this
            .parents("form")
            .find("input[type=text],input[type=email],textarea,select")
            .filter(":visible")
            .val("");
          message
            .hide()
            .removeClass("success")
            .removeClass("error")
            .addClass("success")
            .html(data.msg)
            .fadeIn("slow")
            .delay(1000)
            .fadeOut("slow");
        } else {
          message
            .hide()
            .removeClass("success")
            .removeClass("error")
            .addClass("error")
            .html(data.msg)
            .fadeIn("slow")
            .delay(1000)
            .fadeOut("slow");
        }
      }
    });
  });

})(jQuery);

// Sticky Header

$(window).scroll(function() {
  if ($(document).scrollTop() > 400) {
    $('.dope-nav-container').addClass('fixed');
    $('.dope-nav-container').addClass('custom-dope-navbar');
  } else {
    $('.dope-nav-container').removeClass('fixed');
    $('.dope-nav-container').removeClass('custom-dope-navbar');
  }
});

$(function() {

	$(this).impulse();

	$('body').impulse({fluid: false});
});

// ataredo.com/morphology/lucidscroll - documentation

(function($, nib) {

$.fn.impulse = function(options) {

	var set = $.extend({}, $.fn.impulse.default, options), gate = $(nib),
	vessel = this, object = $(set.target), area = {}, edge = [],
	fad = {}, entity, brink = [], outset = [], quit = [], morph,
	way, speed, destined = [], pour = 'requestAnimationFrame',
	use = $.extend({novel: pour in nib, turned: 0}, set);

	elementAnalysis();

	vessel.each(function(hit) {

		use = $.extend({}, use);

		$(this).data('impulse', use).on('wheel.excite', function(act, info) {

			if (!use.keen && !act.mien) return;

			if (act.mien) {
			fad = $.extend({}, use, info);
			use.annul = fad.delay == true;
			var loom = act.mien;
			fad.fluid = false;
			}
			else {
			if (use.annul) return;
			fad = use;
			loom = act.originalEvent.deltaY;
			}

			loom = loom/Math.abs(loom);

			if (use.crux) {
			entity = $(this);
			brink[0] = edge[hit];
			}
			else {
			entity = object;
			brink = edge;
			}

			$.each({range: 'orbit', tempo: 'pace'}, function(slot, mate) {
			if (typeof fad[slot] === 'function') fad[mate] = fad[slot]();
			else fad[mate] = fad[slot];
			});

			if (loom != use.zeal || act.mien) use.turned = 1;
			else use.turned = Math.min(use.curb, use.turned+1);

			if (!fad.delay && fad.fluid && use.turned == 1) morph = 'curve';
			else morph = fad.effect;

			way = loom*fad.orbit*Math.pow(use.leap, use.turned-1);
			speed = fad.pace*Math.pow(use.sloth, use.turned-1) || 1;
			use.zeal = loom;

			entity.each(function(part) {
			outset[part] = $(this).scrollTop();
			destined[part] = outset[part]+way;
			quit[part] = onFringe(this, part, outset[part]);
			});

			use.waive = ceaseOperation();

			if (!way) speed = 1;
			if (use.novel) {
			if (use.motion) {
			cancelAnimationFrame(use.motion);
			use.initial = use.present;
			}
			else use.initial = Date.now();
			use.motion = nib[pour](streamCore);
			}
			else inciteSource();
		});

		this.addEventListener('wheel', function(tick) {

			if (!use.keen) return;
			if (use.annul) return denyRise(tick);
			else if (fad.delay == true && !use.waive) use.annul = true;
			if (!(use.waive && use.occur)) denyRise(tick);

		}, hasQuiet() ? {passive: false} : false);
	});

	$.easing['curve'] = $.easing['easeInOutSine'];

	gate.resize(function() {
	clearTimeout(use.bound);
	use.bound = setTimeout(detectOverflow, 100);
	});

	return this;

	function streamCore() {
	use.present = Date.now();
	var advance = Math.min(use.present-use.initial, speed)/speed,
	increase = $.easing[morph](advance);
	entity.each(function(key) {
	if (!quit[key]) {
	$(this).scrollTop(outset[key]+increase*way);
	checkLimits(this, key, advance);
	}
	});
	if (advance < 1 && !use.waive) use.motion = nib[pour](streamCore);
	else hindStage();
	}

	function inciteSource() {
	entity.each(function(beat) {
	if (!quit[beat]) {
	$(this).stop().animate({scrollTop: destined[beat]}, {
	duration: speed,
	easing: morph,
	progress: function(current, sequence) {
	checkLimits(this, beat, sequence);
	},
	complete: hindStage
	});
	}
	});
	}

	function checkLimits(essence, rank, factor) {
	if (100*factor >= fad.reset) use.turned = 0;
	if (onFringe(essence, rank)) {
	quit[rank] = true;
	if (!use.novel) $(essence).stop(true, true);
	use.waive = ceaseOperation();
	}
	}

	function onFringe(matter, cue, genesis) {
	var put = Math.round(genesis || $(matter).scrollTop()),
	above = destined[cue] < 0 && !put,
	below = destined[cue] > brink[cue] && put == brink[cue] && fad.orbit > 0;
	return above || below;
	}

	function ceaseOperation() {
	return quit.every(function(flag) {return flag});
	}

	function hindStage() {
	use.turned = use.annul = use.motion = 0;
	}

	function denyRise(jab) {
	jab.preventDefault();
	jab.stopPropagation();
	}

	function elementAnalysis() {
	var item = $();
	if (!object.length) {
	use.crux = true;
	object = vessel;
	}
	object.each(function() {
	if ($.zenith(this)) {
	if (!use.main) {
	if (use.novel) use.main = nib;
	else use.main = baseTag();
	item = item.add(use.main);
	}
	}
	else item = item.add(this);
	});
	use.target = object = item;
	object.each(function(zest) {
	if ($.zenith(this)) area[zest] = 'hub';
	else area[zest] = 'sub';
	});
	if (use.crux && use.main) vessel = object;
	detectOverflow();
	}

	function baseTag() {
	var origin = gate.scrollTop();
	gate.scrollTop(1);
	if ($('html').scrollTop()) var root = 'html';
	else if ($('body').scrollTop()) root = 'body';
	else root = 'html, body';
	gate.scrollTop(origin);
	return root;
	}

	function detectOverflow() {
	object.each(function(peg) {
	if (area[peg] == 'hub') var teem = $(document).height()-gate.height();
	else teem = this.scrollHeight-$(this).height();
	edge[peg] = Math.round(teem);
	});
	}

	function hasQuiet() {
	var cold = false,
	hike = function() {};
	try {
	var aid = Object.defineProperty({}, 'passive', {
	get: function() {cold = true}
	});
	nib.addEventListener('test', hike, aid);
	nib.removeEventListener('test', hike, aid);
	} catch(e) {}
	return cold;
	}
};

$.zenith = function(sample) {

	var peak = [nib,document,'HTML','BODY'], facet;
	if (sample) return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
	$.each(peak, function(spot, detail) {
	facet = $(detail).data('impulse');
	if (facet) return false;
	});
	return facet;
};

$.fn.impulse.default = {

	target: '',
	range: 135,
	leap: 1.35,
	tempo: 500,
	sloth: 1.1,
	curb: 5,
	reset: 85,
	effect: 'easeOutSine',
	keen: true,
	delay: false,
	occur: true,
	fluid: true
};

$.fn.demit = function() {

	return this.each(function() {
	if ($.zenith(this)) var habit = $.zenith();
	else habit = $(this).data('impulse');
	if (habit) {
	if (habit.novel) cancelAnimationFrame(habit.motion);
	else habit.target.stop();
	habit.turned = habit.annul = habit.motion = 0;
	}
	});
};

$.fn.amend = function(gist) {

	return this.each(function() {
	if ($.zenith(this)) var quirk = $.zenith();
	else quirk = $(this).data('impulse');
	if (quirk) {
	$.each(gist, function(sign, rate) {
	if (sign in quirk) quirk[sign] = rate;
	});
	}
	});
};

$.fn.evoke = function(unit) {

	var lot = $.Event('wheel.excite', {mien: true}), bulk;
	return this.each(function() {
	if ($.zenith(this)) {
	if (!bulk) {
	bulk = $.zenith();
	if (bulk) $(bulk.main).trigger(lot, unit);
	}
	}
	else $(this).trigger(lot, unit);
	});
};
}(jQuery, window));


(function($){var b={};$.each(['Quad','Cubic','Quart','Quint','Expo'],function(i,n){b[n]=function(p){return Math.pow(p,i+2)}});$.extend(b,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var f,h=4;while(p<((f=Math.pow(2,--h))-1)/11){}return (1/Math.pow(4,3-h)-7.5625*Math.pow((f*3-2)/22-p,2))}});$.each(b,function(n,e){$.easing['easeIn'+n]=e;$.easing['easeOut'+n]=function(p){return 1-e(1-p)};$.easing['easeInOut'+n]=function(p){return p<0.5?e(p*2)/2:1-e(p*-2+2)/2}})})(jQuery);



