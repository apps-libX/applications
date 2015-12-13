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

    if (build.published) {
        build.base_directory = "";
        build.application    = "";

        for (var i = 0; i < build.components.length; i++) {
            build.components[i] = "";
        }
    }

    mix
        .bower()
        .angular(angularDirectory())
        .sass(sassDirectory(), 'public/css')
        .copy(copyDirectory(), 'public/views/')
        .livereload([
            'public/js/vendor.js',
            'public/js/app.js',
            'public/css/vendor.css',
            'public/css/app.css',
            'public/views/!**!/!*.html'
        ], { liveCSS: true })
        .phpUnit();
});

require('gulp').task('generate', require('./tasks/generators/tasks/generate.js').generate);

function angularDirectory() {
    'use strict';
    var ngMod = ngModFn(),
        ngDir = ngDirFn();

    return ngMod.concat(ngDir);
}

function sassDirectory() {
    'use strict';
    return sassDirFn();
}

function copyDirectory() {
    'use strict';
    return cpDirFn();
}

function ngModFn() {
    'use strict';
    var n = [];
    for (var x = 0; x < build.components.length; x++) {
        n.push('./' + build.base_directory + build.components[x] + 'angular/*.module.js');
    }

    n.push('./' + build.base_directory + build.application + 'angular/*.module.js');

    return n;
}

function ngDirFn() {
    'use strict';
    var m = ['./' + build.base_directory + build.application + 'angular/**/**/**/*.js'];
    for (var y = 0; y < build.components.length; y++) {
        m.push('./' + build.base_directory + build.components[y] + 'angular/**/**/**/*.js');
    }

    return m;
}

function sassDirFn() {
    'use strict';
    var m = ['./' + build.base_directory + build.application + 'angular/**/**/**/*.scss'];
    for (var y = 0; y < build.components.length; y++) {
        m.push('./' + build.base_directory + build.components[y] + 'angular/**/**/**/*.scss');
    }

    return m;
}

function cpDirFn() {
    'use strict';

    var c = ['./' + build.base_directory + build.application + 'angular/**/**/**/*.html'];
    for (var d = 0; d < build.components.length; d++) {
        c.push('./' + build.base_directory + build.components[d] + 'angular/**/**/**/*.html');
    }

    return c;
}

