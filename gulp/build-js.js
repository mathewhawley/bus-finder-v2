'use-strict';

var gulp = require( 'gulp' );
var exec = require( 'child_process' ).execSync;

gulp.task( 'build-js', function() {
    exec( 'npm run buildjs', function( err, stdout, stderr ) {
        if ( err )
            throw err;
    } );
} );
