'use strict';

var gulp = require( 'gulp' );
var runSequence = require( 'run-sequence' );
var sass = require( 'gulp-sass' );
var concat = require( 'gulp-concat' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );
var minifyCss = require( 'gulp-minify-css' );
var rename = require( 'gulp-rename' );
var exec = require( 'child_process' ).execSync;
var minifyHtml = require( 'gulp-minify-html' );
var replace = require( 'gulp-replace' );

gulp.task( 'build', function ( done ) {
    runSequence( 'clean', [ 'build-sass', 'build-js', 'build-assets' ], 'build-html', done );
} );

gulp.task( 'build-sass', function() {
    gulp.src( 'app/src/styles/**/*.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( concat( 'style.css' ) )
        .pipe( autoprefixer() )
        .pipe( minifyCss() )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( 'app/dist' ) );
} );

gulp.task( 'build-js', function() {
    exec( 'npm run buildjs' );
} );

gulp.task( 'build-assets', function() {
    gulp.src( 'app/src/assets/*' )
        .pipe( gulp.dest( 'app/dist/assets' ) );
} );

gulp.task( 'build-html', function() {
    gulp.src( 'app/src/*.html' )
        .pipe( replace( 'lib/system.js', 'app.min.js' ) )
        .pipe( replace( '<script src="config.js"></script>', '' ) )
        .pipe( replace( "<script>System.import( 'scripts/app' )</script>", '' ) )
        .pipe( minifyHtml() )
        .pipe( gulp.dest( 'app/dist' ) )
} );
