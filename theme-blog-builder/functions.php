<?php

require_once get_template_directory() . '/inc/theme-setup.php';

function blogbuilder_enqueue_assets() {
    wp_enqueue_style('blogbuilder-style', get_template_directory_uri() . '/assets/css/main.css', [], '1.0', 'all');
    wp_enqueue_script('blogbuilder-script', get_template_directory_uri() . '/assets/js/main.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'blogbuilder_enqueue_assets');

function blogbuilder_block_assets() {
    wp_enqueue_script('blogbuilder-blocks', get_template_directory_uri() . '/blocks/post-grid/index.js', ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'], '1.0', true);
}
add_action('enqueue_block_editor_assets', 'blogbuilder_block_assets');
