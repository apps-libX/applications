/**
 * states.run.js
 * Created by anonymous on 18/11/15 17:31.
 */

(function() {
    'use strict';

    angular.module('app').run(function($rootScope, $mdSidenav) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            if (toState.data && toState.data.pageName) {
                $rootScope.title = toState.data.pageName;
            }
        });

        $rootScope.$on('$viewContentLoaded', function(event, toState) {
            window.Prism.highlightAll();
        });

    });
})();
