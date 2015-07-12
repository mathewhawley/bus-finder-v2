'use-strict';

var gulp = require( 'gulp' );
var config = require( './config' ).watch;

gulp.task( 'watch', [ 'browser-sync' ], function() {
    gulp.watch( config.sass, [ 'build-sass' ] );
    gulp.watch( config.javascript, [ 'build-js' ] );
    gulp.watch( config.html, [ 'build-html' ] );
    gulp.watch( config.assets, [ 'build-assets' ] );
} );
