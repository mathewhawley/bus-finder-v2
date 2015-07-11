'use-strict';

module.exports = {

    browsersync: {
        development: {
            server: {
                baseDir: 'app/dist'
            },
            port: 9999,
            files: 'app/src'
        }
    },
    watch: {
        sass: 'app/src/styles/**/*.scss',
        javascript: 'app/src/scripts/**/*.js',
        html: 'app/src/*.html'
    },
    clean: {
        src: 'app/dist/*'
    }

};
