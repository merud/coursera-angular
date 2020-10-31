(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MainItemsController', MainItemsController);

    MainItemsController.$inject = ['items'];
    function MainItemsController(items) {
        var categoryItems = this;
        categoryItems.items = items;
    }
})();