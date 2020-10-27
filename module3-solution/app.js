(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.narrowDown = function () {
            var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);
            promise.then(function (response) {
                narrowItDown.found = response;
            }).catch(function () {
                console.log("something went wrong");
            })
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (result) {
                // process result and only keep items that match
                var fullList = result.data;
                var listItems = fullList.menu_items;
                var foundItems = [];

                listItems.forEach(function (element) {
                    if (element.description.includes(searchTerm.toLowerCase())) {
                        foundItems.push(element);
                    }
                })
                // return processed items
                return foundItems;
            });
        }
    }
})();
