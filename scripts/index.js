$(window).on("load", function() {
  $(".loader-wrapper").fadeOut(300);
});
$(window).scroll(function() {
  $(".head").css("opacity", 1 - $(window).scrollTop() / 950);
});
$(window).scroll(function() {
  $(".title").css("opacity", 1 - $(window).scrollTop() / 250);
});
var timeout;
$("#side-title").mousemove(function(e) {
  if (timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
});

function callParallax(e) {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, ".head", -30);
}

function parallaxIt(e, target, movement) {
  var $this = $("#side-title");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
    ease: Power2.easeOut
  });
}

$("#elementContact").mousemove(function(e) {
  if (timeout) clearTimeout(timeout);
  setTimeout(callParallax3.bind(null, e), 200);
});

function callParallax3(e) {
  parallaxIt3(e, ".contact-block", -40);
  parallaxIt3(e, ".contact-tiger", -20);
}

function parallaxIt3(e, target, movement) {
  var $this = $("#elementContact");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
    ease: Power2.easeOut
  });
}
$("#side-project").mousemove(function(e) {
  if (timeout) clearTimeout(timeout);
  setTimeout(callParallax2.bind(null, e), 200);
});

function callParallax2(e) {
  parallaxIt2(e, ".portfolio-img", -60);
  parallaxIt2(e, ".p-section", -20);
}

function parallaxIt2(e, target, movement) {
  var $this = $("#side-project");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
    ease: Power2.easeOut
  });
}
var $circle = $(".circle"),
  $follow = $(".circle-follow");

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    x: e.clientX,
    y: e.clientY
  });
  TweenLite.to($follow, 0.7, {
    x: e.clientX,
    y: e.clientY
  });
}

function h1Func(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
    scale: 3
  });
}
function h2Func(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
    scale: 2.5
  });
}
function h3Func(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
    scale: 2
  });
}
function imageFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
    scale: 1.5
  });
}
function aFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
    scale: 1.5
  });
}
function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1
  });
  TweenLite.to($follow, 0.3, {
    scale: 1
  });
}

$(window).on("mousemove", moveCircle);

$("h1").hover(h1Func, unhoverFunc);
$(".project-heading").hover(h2Func, unhoverFunc);
$("h3").hover(h3Func, unhoverFunc);
$("img").hover(imageFunc, unhoverFunc);
$("a").hover(aFunc, unhoverFunc);

var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function(e, i) {
  e.addEventListener("click", function(e) {
    navItems.forEach(function(e2, i2) {
      e2.classList.remove("mobile-bottom-nav__item--active");
    });
    this.classList.add("mobile-bottom-nav__item--active");
  });
});
