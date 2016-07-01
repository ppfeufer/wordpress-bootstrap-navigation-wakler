jQuery(function($) {
	/**
	 * fix for automatically generated menues to work with Bootstrap
	 */
	var $autMenuItems = $('ul.nav > li.page_item_has_children');
	$autMenuItems.each(function() {
		$(this).addClass('dropdown');

		$(this).find('li.current_page_item').addClass('active');

		$(this).find('>a').addClass('dropdown-toggle');
		$(this).find('>a').attr('data-toggle', 'dropdown');
		$(this).find('>a').append('<span class="caret"></span>');
		$(this).find('>a').attr('href', '#');

		// 1st Level
		$(this).find('>ul.children').addClass('dropdown-menu multi-level');

		// 2nd Level and maybe more?
		$(this).find('>ul.children li.page_item_has_children').addClass('dropdown-submenu')
		$(this).find('>ul.children ul').addClass('dropdown-menu');
	});
});