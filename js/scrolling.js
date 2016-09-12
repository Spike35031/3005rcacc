$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 750);
				return false;
			}
		}
	});
});

$(function() {
	$(".expand-header").each(function(i) {
		el = $(this)
		el.on("click", function() {
			var el = $(this);
			if (el.hasClass("expanded")) {
				el.removeClass("expanded");
			} else {
				$(".expand-header").each(function(i) {$(this).removeClass("expanded")});
				el.addClass("expanded");
			}
		})
	});
});

$(function() {
	$("header").headroom()
})
