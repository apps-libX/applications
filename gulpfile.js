var elixir = require('laravel-elixir'),
    path   = require('./tasks/app.components.js');

require('./tasks/angular.task.js');
require('./tasks/bower.task.js');
require('./tasks/ngHtml2Js.task.js');
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
        .angular(path.angularDirectory())
        .ngHtml2Js(path.htmlDirectory())
        .sass(path.sassDirectory(), 'public/css')
        .copy(path.copyDirectory(), 'public/views/')
        .livereload([
            'public/js/vendor.js',
            'public/js/partials.js',
            'public/js/app.js',
            'public/css/vendor.css',
            'public/css/app.css',
            'public/views/!**!/!*.html'
        ], {liveCSS: true})
        .phpUnit();
});

require('gulp').task('generate', require('./tasks/generators/tasks/generate.js').generate);

