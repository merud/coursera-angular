(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                list: '<',
                searchTerm: "<",
                onRemove: '&'
            }
        };
        return ddo;
    }

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

        narrowItDown.removeItem = function (index) {
            narrowItDown.found.splice(index, 1);
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
                    if (searchTerm) {
                        if (element.description.includes(searchTerm.toLowerCase())) {
                            foundItems.push(element);
                        }
                    }
                })
                // return processed items
                return foundItems;
            });
        }
    }
})();