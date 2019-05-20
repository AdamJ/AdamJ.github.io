function updateMenuButton() {
  $('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

$(document).ready(function() {
  $('.js-menu-button').click(function(e){
    e.preventDefault();
    updateMenuButton();
  });
});

var loc = window.location.pathname;

$('.prototypes').find('.aj-site-header').each(function() {
	$(this).addClass('prototype-nav');
});
$('.code').find('.aj-site-header').each(function() {
	$(this).addClass('code-nav');
});
$('.about').find('.aj-site-header').each(function() {
	$(this).addClass('about-nav');
});
