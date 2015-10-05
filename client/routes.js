angular.module('simpleapp').run(['$rootScope','$state',
    function($rootScope, $state){
        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState , fromParams, error){
                if( error == 'AUTH_REQUIRED'){
                    $state.go('items');
                }
            }
        );

    }]);
angular.module('simpleapp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('items', {
            url: '/items',
            templateUrl: 'client/views/items/item-list.ng.html',
            controller: 'ItemListCtrl'
        })
            .state('itemDetails', {
                url: '/items/:itemCode',
                resolve: {
                    "currentUser": ["$meteor",function($meteor){
                        return $meteor.requireUser();
                    }]
                },
                templateUrl: 'client/views/items/item-details.ng.html',
                controller: 'ItemDetailsCtrl'
            });
        $urlRouterProvider.otherwise("/items");
    }
]);