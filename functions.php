<?php
function empathy_child_files() {

    $parent_style = 'empathy-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_style( 'ytplayer-style',
        get_stylesheet_directory_uri() . '/js/ytplayer/css/jquery.mb.YTPlayer.min.css' );

    wp_register_script( 'ytplayer-script',
        get_stylesheet_directory_uri() . '/js/ytplayer/jquery.mb.YTPlayer.min.js',
        'jquery',
        '',
        true);
    wp_enqueue_script('ytplayer-script');

    wp_register_script( 'empathy-child',
        get_stylesheet_directory_uri() . '/js/empathy-child.js',
        '',
        '',
        true);
    wp_enqueue_script('empathy-child');
}
add_action( 'wp_enqueue_scripts', 'empathy_child_files' );
?>
