/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2019 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/mindreeper2420/mindreeper2420.github.io/blob/master/LICENSE)
 */
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
