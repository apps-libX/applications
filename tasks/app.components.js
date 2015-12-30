/**
 * Created by anonymous on 14/12/15 4:45.
 */

var appPath = require('./app.components.config.json'),
    appComponents = require('./../' + appPath.angular_directory + appPath.application + 'angular/data/app.components.json');

var path = {
    angularDirectory: angularDirectory,
    sassDirectory   : sassDirectory,
    copyDirectory   : copyDirectory,
    htmlDirectory   : htmlDirectory
};

//////////////////////////////

/*
if (appComponents.published) {
    appComponents.base_directory = '';
    appComponents.application    = '';

    for (var i = 0; i < appComponents.components.length; i++) {
        appComponents.components[i] = '';
    }
}
*/

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

function htmlDirectory() {
    'use strict';

    return cpDirFn();
}

function ngModFn() {
    'use strict';

    var m = [];
    for (var y = 0; y < appComponents.components.length; y++) {
        m.push('./' + appComponents.base_directory + appComponents.components[y] + 'angular/' + appComponents.components[y].split('/')[1] + '.module.js');
    }

    m.push('./' + appComponents.base_directory + appComponents.application + 'angular/' + appComponents.application.split('/')[1] + '.module.js');

    return m;
}

function ngDirFn() {
    'use strict';

    var m = ['./' + appComponents.base_directory + appComponents.application + 'angular/**/**/**/*.js'];
    for (var y = 0; y < appComponents.components.length; y++) {
        m.push('./' + appComponents.base_directory + appComponents.components[y] + 'angular/**/**/**/*.js');
    }

    return m;
}

function sassDirFn() {
    'use strict';

    var m = ['./' + appComponents.base_directory + appComponents.application + 'angular/**/**/**/*.scss'];
    for (var y = 0; y < appComponents.components.length; y++) {
        m.push('./' + appComponents.base_directory + appComponents.components[y] + 'angular/**/**/**/*.scss');
    }

    return m;
}

function cpDirFn() {
    'use strict';

    var m = ['./' + appComponents.base_directory + appComponents.application + 'angular/**/**/**/*.html'];
    for (var y = 0; y < appComponents.components.length; y++) {
        m.push('./' + appComponents.base_directory + appComponents.components[y] + 'angular/**/**/**/*.html');
    }

    return m;
}

module.exports = path;
