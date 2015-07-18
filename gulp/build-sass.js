'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var concat = require( 'gulp-concat' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );
var minifyCss = require( 'gulp-minify-css' );
var rename = require( 'gulp-rename' );

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
