'use strict';

var gulp = require( 'gulp' );
var browsersync = require( 'browser-sync' );
var config = require( './config' ).browsersync.development

gulp.task( 'browser-sync', [ 'build' ], function() {
    browsersync( config );
} );
