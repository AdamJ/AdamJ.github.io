/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2021 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
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
