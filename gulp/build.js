'use-strict';

var gulp = require( 'gulp' );
var runSequence = require( 'run-sequence' );
var minifyHtml = require( 'gulp-minify-html' );

gulp.task( 'build', function ( done ) {
    runSequence( 'clean', [ 'buildhtml' ], done );
} );

gulp.task( 'buildhtml', function () {
    gulp.src( './app/src/*.html' )
        .pipe( minifyHtml() )
        .pipe( gulp.dest( './app/dist' ) );
} );
