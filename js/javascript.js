// RESPONSIVE NAV
$(document).ready(function() {
	var n = '#nav-ul', no = 'nav-open';
	$('#projects-nav-menu').on('click', function() {
		if ($(n).hasClass('nav-open')) {
			$(n).removeClass('nav-open');
		} else {
			$(n).addClass('nav-open');
		}
	});
});

// SCROLL TOP
$(document).ready(function() {
	$('#top').on('click', function() {
		$('html, body').animate({scrollTop:0}, 600);
		return false;
	});
});
