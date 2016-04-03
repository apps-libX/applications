describe('Controller: app.controllers.AppCtrl', function() {
    'use strict';

    // load the controller's module
    beforeEach(module('app.controllers'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl  = $controller('AppCtrl', {
            $scope: scope
        });
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });
});
