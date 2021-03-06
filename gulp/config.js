'use strict';

module.exports = {

    'browserport'  : 3000,
    'uiport'       : 3001,
    'serverport'   : 3002,

    'styles': {
        'src' : ['node_modules/animate.css/animate.min.css', 'app/styles/**/*.scss'],
        'dest': 'build/css',
        'concat': 'main.css'
    },

    'scripts': {
        'src' : 'app/js/**/*.js',
        'dest': 'build/js'
    },

    'images': {
        'src' : 'app/images/**/*',
        'dest': 'build/images'
    },

    'fonts': {
        'src' : ['node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*', 'app/fonts/**/*'],
        'dest': 'build/fonts'
    },

    'views': {
        'watch': [
            'app/index.html',
            'app/views/**/*.html'
        ],
        'src': 'app/views/**/*.html',
        'dest': 'app/js'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map}',
        'dest': 'build/',
        'options': {}
    },
    
    'dist': {
        'root'  : 'build'
    },

    'browserify': {
        'entries'   : ['./app/js/main.js'],
        'bundleName': 'main.js',
        'sourcemap' : true
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js'
    }

};
