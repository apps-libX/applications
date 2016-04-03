/**
 * theme.js
 * Created by anonymous on 03/01/16 2:42.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .config(defaultTheme)
        .config(warn);

    defaultTheme.$inject = ['$mdThemingProvider'];
    warn.$inject     = ['$mdThemingProvider'];

    /* @ngInject */
    function defaultTheme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('pink')
            .warnPalette('red');
    }

    /* @ngInject */
    function warn($mdThemingProvider) {
        $mdThemingProvider.theme('warn');
    }

})();

