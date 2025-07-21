<?php

function blogbuilder_setup_theme() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('editor-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
    add_theme_support('html5', ['search-form', 'gallery', 'caption']);

    register_nav_menus([
        'primary' => __('Primary Menu', 'blogbuilder')
    ]);
}
add_action('after_setup_theme', 'blogbuilder_setup_theme');
