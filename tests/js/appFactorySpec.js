describe('Service: app.factory.appFactory', function() {
    'use strict';

    // load the service's module
    beforeEach(module('app.factory'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function(app) {
        service = app;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function() {
        expect(service).toBeDefined();
    });
});
