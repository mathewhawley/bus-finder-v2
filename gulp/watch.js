'use-strict';

var gulp = require( 'gulp' );
var config = require( './config' ).watch;

gulp.task( 'watch', [ 'browser-sync' ], function() {
    gulp.watch( config.sass, [ 'sass' ] );
} );
