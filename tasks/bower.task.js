/*Elixir Task for bower
 * Upgraded from https://github.com/ansata-biz/laravel-elixir-bower
 */

// Upgraded from https://github.com/jadjoubran/laravel5-angular-material-starter

var gulp           = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    filter         = require('gulp-filter'),
    notify         = require('gulp-notify'),
    minify         = require('gulp-minify-css'),
    uglify         = require('gulp-uglify'),
    concat_sm      = require('gulp-concat-sourcemap'),
    concat         = require('gulp-concat'),
    gulpIf         = require('gulp-if'),
    Elixir         = require('laravel-elixir'),

    Task           = Elixir.Task;

Elixir.extend('bower', function(jsOutputFile, jsOutputFolder, cssOutputFile, cssOutputFolder) {

    'use strict';

    var cssFile = cssOutputFile || 'vendor.css',
        jsFile  = jsOutputFile || 'vendor.js';

    if (!Elixir.config.production) {
        concat = concat_sm;
    }

    var onError = function(err) {
        notify.onError({
            title   : "Laravel Elixir",
            subtitle: "Bower Files Compilation Failed!",
            message : "Error: <%= error.message %>",
            icon    : __dirname + '/../node_modules/laravel-elixir/icons/fail.png'
        })(err);
        this.emit('end');
    };

    new Task('bower-js', function() {
        return gulp.src(mainBowerFiles())
            .on('error', onError)
            .pipe(filter('**/*.js'))
            .pipe(concat(jsFile, { sourcesContent: true }))
            .pipe(gulpIf(Elixir.config.production, uglify()))
            .pipe(gulp.dest(jsOutputFolder || Elixir.config.js.outputFolder))
            .pipe(notify({
                title   : 'Laravel Elixir',
                subtitle: 'Javascript Bower Files Imported!',
                icon    : __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message : ' '
            }));
    }).watch('bower.json');

    new Task('bower-css', function() {
        return gulp.src(mainBowerFiles())
            .on('error', onError)
            .pipe(filter('**/*.css'))
            .pipe(concat(cssFile))
            .pipe(gulpIf(config.production, minify()))
            .pipe(gulp.dest(cssOutputFolder || config.css.outputFolder))
            .pipe(notify({
                title   : 'Laravel Elixir',
                subtitle: 'CSS Bower Files Imported!',
                icon    : __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message : ' '
            }));
    }).watch('bower.json');

});
