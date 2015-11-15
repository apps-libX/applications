/*Elixir Task
 *copyrights to https://github.com/HRcc/laravel-elixir-angular
 */

// Upgraded from https://github.com/jadjoubran/laravel5-angular-material-starter

var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint     = require('gulp-jshint'),
    stylish    = require('jshint-stylish'),
    uglify     = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    notify     = require('gulp-notify'),
    gulpif     = require('gulp-if'),
    Elixir     = require('laravel-elixir'),

    Task       = Elixir.Task;

Elixir.extend('angular', function(src, output, outputFilename) {

    'use strict';

    var baseDir = src || Elixir.config.assetsPath + '/angular/';

    new Task('angular in ' + baseDir, function() {
        // Main file has to be included first.
        return gulp.src([baseDir + "main.js", baseDir + "**/**/*.js"])
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            //.pipe(jshint.reporter('fail')).on('error', onError) //enable this if you want to force jshint to validate
            .pipe(gulpif(!config.production, sourcemaps.init()))
            .pipe(concat(outputFilename || 'app.js'))
            .pipe(ngAnnotate())
            .pipe(gulpif(config.production, uglify()))
            .pipe(gulpif(!config.production, sourcemaps.write()))
            .pipe(gulp.dest(output || config.js.outputFolder))
            .pipe(notify({
                title   : 'Laravel Elixir',
                subtitle: 'Angular Compiled!',
                icon    : __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message : ' '
            }));
    }).watch(baseDir + '/**/**/*.js');

});
