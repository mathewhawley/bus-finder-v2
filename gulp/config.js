'use-strict';

module.exports = {

    browsersync: {
        development: {
            server: {
                baseDir: 'app/src'
            },
            port: 9999,
            files: 'app/src'
        }
    },
    watch: {
        sass: 'app/src/styles/scss/**/*.scss'
    }

};
