function init() {
	window.addEventListener("scroll", doScroll);
}

function doScroll() {
	slideSliders();
}

function isScrolledOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}

function slideSliders() {
	var sliders = $('.slide-right');
	for (var i = 0; i < sliders.length; i++) {
		sliders[i].effect("slide", {}, 500);
	}
}

function slide(element, time) {
	element.animate({left: 0}, time);
}

$(document).ready(init);