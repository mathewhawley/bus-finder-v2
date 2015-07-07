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
    }

};
