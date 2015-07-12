'use-strict';

var gulp = require( 'gulp' );

gulp.task( 'build-assets', function() {
    gulp.src( 'app/src/assets/*' )
        .pipe( gulp.dest( 'app/dist/assets' ) );
} );
