/**
 * applications.state.js
 * Created by anonymous on 18/11/15 17:31.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .config(applicationsState);

    applicationsState.$inject = ['$stateProvider', '$urlRouterProvider', 'layoutProvider'];

    /* @ngInject */
    function applicationsState($stateProvider, $urlRouterProvider, layoutProvider) {
        //
    }

})();