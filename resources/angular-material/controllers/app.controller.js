/**
 * app.controller.js
 * Created by anonymous on 01/12/15 2:46.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$rootScope'];

    /* @ngInject */
    function AppController($scope, $rootScope) {

        var vm = this;

        activate();

        ////////////////

        function activate() {

            $scope.$watch(function() {
                return $rootScope.title;
            }, function(newPage) {
                $scope.title = newPage || 'Application';
            });

        }

    }

})();
