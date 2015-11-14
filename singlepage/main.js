/**
 * Created by anonymoussc on 13/11/15 9:51.
 */

(function() {
    'use strict';

    angular.module('singlepage',
        [
            'singlepage.config',
            'singlepage.controllers',
            'singlepage.directives',
            'singlepage.factory',
            'singlepage.filters',
            'singlepage.services',
            'singlepage.routes'
        ]);

    angular.module('singlepage.config', []);
    angular.module('singlepage.controllers', [
        'ui.router',
        'ngMaterial',
        'ngStorage',
        'restangular',
        'ngMdIcons',
        'angular-loading-bar',
        'ngMessages',
        'vAccordion'
    ]);
    angular.module('singlepage.directives', []);
    angular.module('singlepage.factory', []);
    angular.module('singlepage.filters', []);
    angular.module('singlepage.services', []);
    angular.module('singlepage.routes', []);

})();