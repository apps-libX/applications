var elixir = require('laravel-elixir'),
    build  = require('./gulp.build.json');

require('./tasks/angular.task.js');
require('./tasks/bower.task.js');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    'use strict';

    mix
        .bower()
        .angular([
            './' + build.base_directory + '/' + build.application + '/angular/main.js',
            './' + build.base_directory + '/' + build.application + '/angular/**/**/**/*.js',
            './' + build.base_directory + '/' + build.components[0] + '/angular/**/**/**/*.js',
        ])
        .sass('./' + build.base_directory + '/**/**/angular/**/**/**/*.scss', 'public/css')
        .copy('./' + build.base_directory + '/' + build.application + '/angular/**/**/**/*.html', 'public/views/')
        .copy('./' + build.base_directory + '/' + build.components[0] + '/angular/**/**/**/*.html', 'public/views/')
        .livereload([
            'public/js/vendor.js',
            'public/js/app.js',
            'public/css/vendor.css',
            'public/css/app.css',
            'public/views/!**!/!*.html'
        ], { liveCSS: true })
        .phpUnit();
});

