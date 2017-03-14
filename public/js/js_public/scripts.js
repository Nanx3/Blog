// all functions ------------------
function initOutdoor() {
    "use strict";
	$(window).load(function() {
		"use strict";
		$(".loader").fadeOut(500, function() {
			$("#main").animate({
				opacity: "1"
			});
		});
		initgalheight();
	});	
    initgalheight();
	// css ------------------
	$(".hero-title , .team-social , .srtp ul , .slide-title , .scroll-page-nav , .count-folio").addClass("cdc");
    function a() {
        $(" .fullheight-carousel .item").css({
            height: $(".fullheight-carousel").outerHeight(true)
        });
        $(".hero-slider .item").css({
            height: $(".hero-slider").outerHeight(true)
        });
        $(".slideshow-item .item").css({
            height: $(".slideshow-item ").outerHeight(true)
        });
        $("#content-sidebar").css({
            top: $("header").outerHeight(true)
        });
        $(".cdc").css({
            "margin-top": -1 * $(".cdc").height() / 2 + "px"
        });
        var a = $(window).height(), b = $("header").outerHeight(), c = $("footer").outerHeight(), d = $(".port-subtitle-holder").outerHeight(), e = $(".p_horizontal_wrap");
        e.css("height", a - b - c);
        $(" #portfolio_horizontal_container .portfolio_item img , .port-desc-holder").css({
            height: $(".p_horizontal_wrap").outerHeight(true) - d
        });
        $(".mm").css({
            "padding-top": $("header").outerHeight(true)
        });
    }
    a();
    $(window).resize(function() {
        a();
    });
    $(".show-hidden-info").on("click", function() {
        $(this).toggleClass("vhi");
        $(this).closest(".resume-box").find(".hidden-info").slideToggle(500);
    });
    function d() {
        var a = document.querySelectorAll(".intense");
        Intense(a);
    }
    d();
	//swiper  ------------------
    var e = $("#horizontal-slider").data("mwc");
    var ec = $("#horizontal-slider").data("mwa");
    var f = new Swiper("#horizontal-slider", {
        speed: 1200,
        loop: false,
        preventLinks: true,
        grabCursor: true,
        mousewheelControl: e,
        mode: "horizontal",
        pagination: ".pagination",
        paginationClickable: true,
        autoplay: ec
    });
    $(".hor a.arrow-left").on("click", function(a) {
        a.preventDefault();
        f.swipePrev();
    });
    $(".hor a.arrow-right").on("click", function(a) {
        a.preventDefault();
        f.swipeNext();
    });
	// popups  ------------------
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        fixedContentPos: true,
        fixedBgPos: true,
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        zoom: {
            enabled: true,
            duration: 700
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $(".hide-column").bind("click", function() {
        $(".not-vis-column").animate({
            right: "-100%"
        }, 500);
    });
    $(".show-info").bind("click", function() {
        $(".not-vis-column").animate({
            right: "0"
        }, 500);
    });
	// owl carousel  ------------------
    var b = $(".full-width");
    b.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: true
    });
    $(".fullwidth-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".fullwidth-slider-holder").find(b).trigger("owl.next");
    });
    $(".fullwidth-slider-holder  a.prev-slide").on("click", function() {
        $(this).closest(".fullwidth-slider-holder").find(b).trigger("owl.prev");
    });
    var heroslides = $(".hero-slider");
    var synksldes = $(".hero-slider.synkslider");
    heroslides.each(function(index) {
        var auttime = eval($(this).data("attime"));
        var rtlt = eval($(this).data("rtlt"));
        $(this).owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: auttime,
            autoplayHoverPause: false,
            autoplaySpeed: 1600,
            rtl: rtlt
        });
    });
    synksldes.on("change.owl.carousel", function(a) {
        synkslider2.trigger("to.owl.carousel", [ a.item.index, 10, true ]);
    });
    var auttime2 = $(".hero-text").data("attime");
    var synkslider2 = $(".hero-text");
    synkslider2.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        animateOut: "fadeOut",
        startPosition: 1,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: auttime2,
        autoplayHoverPause: false,
        autoplaySpeed: 1600
    });
    var customSlider = $(".custom-slider");
    customSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1
    });
    $(".custom-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".custom-slider-holder").find(customSlider).trigger("next.owl.carousel");
    });
    $(".custom-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".custom-slider-holder").find(customSlider).trigger("prev.owl.carousel");
    });
    var slsl = $(".slideshow-item");
    slsl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 4e3,
        autoplayHoverPause: false,
        autoplaySpeed: 3600
    });
    var testiSlider = $(".testimonials-slider");
    testiSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true
    });
    $(".testimonials-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".testimonials-slider-holder").find(testiSlider).trigger("next.owl.carousel");
    });
    $(".testimonials-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".testimonials-slider-holder").find(testiSlider).trigger("prev.owl.carousel");
    });
    $(".servicses-holder li").hover(function() {
        var a = $(this).data("bgscr");
        $(".bg-ser").css("background-image", "url(" + a + ")");
    });
    $(".scroll-page-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link"
    });
	// isotope  ------------------
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
            a.isotope("on", "layoutComplete", function(a, b) {
                var c = b.length;
                $(".num-album").html(c);
            });
        }
        var b = {
            touchbehavior: true,
            cursoropacitymax: 1,
            cursorborderradius: "0",
            background: "#eee",
            cursorwidth: "10px",
            cursorborder: "0px",
            cursorcolor: "#292929",
            autohidemode: false,
            bouncescroll: false,
            scrollspeed: 120,
            mousescrollstep: 90,
            grabcursorenabled: true,
            horizrailenabled: true,
            preservenativescrolling: true,
            cursordragontouch: true,
            railpadding: {
                top: -15,
                right: 0,
                left: 0,
                bottom: 0
            }
        };
        $(".p_horizontal_wrap").niceScroll(b);
        var c = $("#portfolio_horizontal_container");
        c.imagesLoaded(function(a, d, e) {
            var f = {
                itemSelector: ".portfolio_item",
                layoutMode: "packery",
                packery: {
                    isHorizontal: true,
                    gutter: 0
                },
                resizable: true,
                transformsEnabled: true,
                transitionDuration: "700ms"
            };
            var g = {
                itemSelector: ".portfolio_item",
                layoutMode: "packery",
                packery: {
                    isHorizontal: false,
                    gutter: 0
                },
                resizable: true,
                transformsEnabled: true,
                transitionDuration: "700ms"
            };
            if ($(window).width() < 768) {
                c.isotope(g);
                c.isotope("layout");
                if ($(".p_horizontal_wrap").getNiceScroll()) $(".p_horizontal_wrap").getNiceScroll().remove();
            } else {
                c.isotope(f);
                c.isotope("layout");
                $(".p_horizontal_wrap").niceScroll(b);
            }
            $(".gallery-filters").on("click", "a", function(a) {
                a.preventDefault();
                var b = $(this).attr("data-filter");
                c.isotope({
                    filter: b
                });
                $(".gallery-filters a").removeClass("gallery-filter_active");
                $(this).addClass("gallery-filter_active");
            });
            c.isotope("on", "layoutComplete", function(a, b) {
                var c = b.length;
                $(".num-album").html(c);
            });
        });
    }
    var j = $(".portfolio_item , .gallery-item").length;
    $(".all-album , .num-album").html(j);
    n();
    $(window).load(function() {
        n();
    });
    $(".portfolio_item a").on("click", function() {
        var a = $(this).attr("href");
        window.location.href = a;
        return false;
    });
    $(".filter-button").on("click", function() {
        $(".hid-filter").slideToggle(500);
        $(".filter-button i").toggleClass("roticon");
    });
	//  contact form  ------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
	//  other functions   ------------------
    function showHidDes() {
        $(".show-hid-content").removeClass("ishid");
        $(".hidden-column").animate({
            left: "50px",
            opacity: 1
        }, 500);
        $(".anim-holder").animate({
            left: "450px"
        }, 500);
    }
    function hideHidDes() {
        $(".show-hid-content").addClass("ishid");
        $(".hidden-column").animate({
            left: "-450px",
            opacity: 0
        }, 500);
        $(".anim-holder").animate({
            left: "0"
        }, 500);
    }
    $(".show-hid-content").on("click", function() {
        if ($(this).hasClass("ishid")) showHidDes(); else hideHidDes();
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) $(".to-top").addClass("vistotop"); else $(".to-top").removeClass("vistotop");
    });
    $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(".fix-box").scrollToFixed({
        marginTop: 90,
        minWidth: 1036
    });
    var gR = $(".gallery_horizontal"), w = $(window);
    function initGalleryhorizontal() {
        var a = $(window).height(), c = $("header").outerHeight(), d = $("footer").outerHeight(), e = $("#gallery_horizontal");
        e.find("img").css("height", a - c - d);
        if (gR.find(".owl-stage-outer").length) {
            gR.trigger("destroy.owl.carousel");
            gR.find(".horizontal_item").unwrap();
        }
        if (w.width() > 1036) gR.owlCarousel({
            autoWidth: true,
            margin: 10,
            items: 3,
            smartSpeed: 1300,
            loop: true,
            nav: false,
            dots: false,
            onInitialized: function() {
                gR.find(".owl-stage").css({
                    height: a - c - d,
                    overflow: "hidden"
                });
            }
        });
    }
    if (gR.length) {
        initGalleryhorizontal();
        w.on("resize.destroyhorizontal", function() {
            setTimeout(initGalleryhorizontal, 150);
        });
    }
    gR.on("mousewheel", ".owl-stage", function(a) {
        if (a.deltaY < 0) gR.trigger("next.owl"); else gR.trigger("prev.owl");
        a.preventDefault();
    });
    $(".resize-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("next.owl.carousel");
    });
    $(".resize-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("prev.owl.carousel");
    });
	// team  ------------------	
    $(".team-box").hover(function() {
        $(this).find("ul.team-social").fadeIn();
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 1,
                    top: "0"
                }, 400);
            }, 150 * a);
        });
    }, function() {
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 0,
                    top: "50px"
                }, 400);
            }, 150 * a);
        });
        setTimeout(function() {
            $(this).find("ul.team-social").fadeOut();
        }, 150);
    });
	// counter  ------------------	
    var $i = 1;
    $(document.body).on("appear", ".stats", function(a) {
        if (1 === $i) stats(2600);
        $i++;
    });
    function number(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(e); else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function stats(a) {
        $(".stats .num").each(function() {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            number(c, d, b, a);
        });
    }
    $(".animaper").appear();
	// video  ------------------	
    var l = $(".background-video").data("vid");
    var m = $(".background-video").data("mv");
    $(".background-video").YTPlayer({
        fitToBackground: true,
        videoId: l,
        pauseOnScroll: true,
        mute: m,
        callback: function() {
            var a = $(".background-video").data("ytPlayer").player;
        }
    });	
	//  Share  ------------------	
    var shs = eval($(".share-container").attr("data-share"));
    $(".share-container").share({
        networks: shs
    });
    function hideShare() {
        $(".show-share").addClass("isShare");
        $(".share-container a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 0
                }, 500);
            }, 120 * a);
        });
        setTimeout(function() {
            $(".share-container ").removeClass("visshare");
        }, 400);
    }
    function showShare() {
        $(".show-share").removeClass("isShare");
        $(".share-container ").addClass("visshare");
        setTimeout(function() {
            $(".share-container a").each(function(a) {
                var b = $(this);
                setTimeout(function() {
                    b.animate({
                        opacity: 1
                    }, 500);
                }, 120 * a);
            });
        }, 400);
    }
    $(".show-share").on("click", function(a) {
        a.preventDefault();
        if ($(".show-share").hasClass("isShare")) showShare(); else hideShare();
    });
	//  menu    ------------------
    var nb = $(".nav-button"), nh = $(".nav-holder"), an = $(".nav-holder ,.nav-button ");
    function showMenu() {
        nb.removeClass("vis-m");
        nh.slideDown(500);
    }
    function hideMenu() {
        nb.addClass("vis-m");
        nh.slideUp(500);
    }
    nb.on("click", function() {
        if ($(this).hasClass("vis-m")) showMenu(); else hideMenu();
    });
}
//  Parralax  ------------------
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = $(".content");
        b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
            s = skrollr.init();
            s.destroy();
            skrollr.init({
                forceHeight: !1,
                easing: "outCubic",
                mobileCheck: function() {
                    return !1;
                }
            });
        });
    }
    if (trueMobile) $(".background-video").remove();
}
function initgalheight() {
    var a = $(window).height(), b = $("header").outerHeight(), c = $("footer").outerHeight(), d = $(".port-subtitle-holder").outerHeight(), e = $(".p_horizontal_wrap");
    e.css("height", a - b - c);
    $(" #portfolio_horizontal_container .portfolio_item img , .port-desc-holder").css({
        height: $(".p_horizontal_wrap").outerHeight(true) - d
    });
}
//   Init all fucntions  ------------------
$(document).ready(function() {
    initOutdoor();
    initparallax();
});