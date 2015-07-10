'use-strict';

var gulp = require( 'gulp' );
var runSequence = require( 'run-sequence' );

gulp.task( 'build', function ( done ) {
    runSequence( 'clean', [ 'build-sass', 'build-js' ], 'build-html', done );
} );
