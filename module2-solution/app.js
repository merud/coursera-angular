(function () {
    'use strict';

    angular.module('ShoppingList', [])
        .controller('ListToGetController', ListToGetController);
        .controller('ListHaveGotController', ListHaveGotController);

    ListToGetController.$inject = ['$scope'];
    ListHaveGotController.$inject = ['$scope'];
    function ListToGetController($scope) {

    }

    function ListHaveGotController($scope) {

    }
})();
