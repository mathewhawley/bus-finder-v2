'use-strict';

var gulp = require( 'gulp' );
var minifyHtml = require( 'gulp-minify-html' );
var replace = require( 'gulp-replace' );

gulp.task( 'build-html', function() {
    gulp.src( 'app/src/*.html' )
        .pipe( replace( 'lib/system.js', 'app.min.js' ) )
        .pipe( replace( '<script src="config.js"></script>', '' ) )
        .pipe( replace( "<script>System.import( 'scripts/app' )</script>", '' ) )
        .pipe( minifyHtml() )
        .pipe( gulp.dest( 'app/dist' ) )
} );
