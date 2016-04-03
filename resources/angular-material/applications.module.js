/**
 * applications.module.js
 * Created by anonymous on 08/12/15 17:07.
 */

(function() {
    'use strict';

    /* Application */
    angular.module('applications', ['app']);

    angular.module('app', [
        /* Themes */
        'quetzalcoatl',

        /* Shared */
        'appFoundation',
        'widgets',

        /* Components */
        'seneschal',
        'dashboard',
        'pages',
        'posts',
        'client'
    ]);

})();

