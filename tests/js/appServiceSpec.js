describe('Service: app.services.appService', function() {
    'use strict';

    // load the service's module
    beforeEach(module('app.services'));

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
