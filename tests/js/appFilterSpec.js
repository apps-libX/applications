describe('Filter: app.filters.appFilter', function() {
    'use strict';

    // load the service's module
    beforeEach(module('app.filters'));

    // instantiate service
    var filter;

    //update the injection
    beforeEach(inject(function(_app_) {
        filter = _app_;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function() {
        expect(filter('filterInput')).toBe('filterInput');
    });
});
