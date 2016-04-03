describe('Directive: app.directives.appDirective', function() {
    'use strict';

    var ele, scope;

    beforeEach(module('app.directives'));
    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();

        //update the line below!
        ele = angular.element('<app-directive>');
        //update the above line if you haven't!
        $compile(ele)(scope);
        scope.$apply();
    }));

    /**
     * @description
     * Sample test case to check if HTML rendered by the directive is non empty
     * */
    it('should not render empty html', function() {
        scope.$apply(function() {

            /**
             * Set the scope properties here.
             * scope.desc = 'test hostname';
             * scope.status = 'valid';
             *
             */
        });
        expect(ele.html()).not.toBe('');
    });
});
