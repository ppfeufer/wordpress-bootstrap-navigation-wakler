# WordPress Bootstrap Navigation Walker

Simple navigation walker for WordPress themes using twitter's bootstrap.

Also fixes the limitation to only one level for submenus that bootstrap has.

To use the walker, simply put the following in your themes's functions.php

```php
function menuWalkerSetup() {
	require_once(get_stylesheet_directory() .'/menu-walker.php');
}
add_action('after_setup_theme', 'menuWalkerSetup');
```

Adding CSS and JS to WordPress (you can as well just include it in your own CSS and JS files you are already loading):

```php
function addCss() {
	wp_enqueue_style('bootstrap-menu', get_stylesheet_directory() .'/menu-walker.css');
}
add_action('wp_enqueue_scripts', 'addCss');

function addJS() {
	wp_enqueue_script('bootstrap-menu-js', get_stylesheet_directory() .'/menu-walker.js', array('jquery', 'bootstrap'), '', true);
}
add_action('wp_enqueue_scripts', 'addJS');
```
