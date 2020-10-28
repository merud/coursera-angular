(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var hasBought = this;

        hasBought.items = ShoppingListCheckOffService.getItemsBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy = [];
        var itemsBought = [];

        //initializing values for itemsToBuy
        itemsToBuy.push({ name: "cookies", quantity: 10 });
        itemsToBuy.push({ name: "cake", quantity: 2 });
        itemsToBuy.push({ name: "milk", quantity: 20 });
        itemsToBuy.push({ name: "ice cream", quantity: 4 });
        itemsToBuy.push({ name: "pudding", quantity: 15 });

        service.buyItem = function (itemIndex) {
            var item = service.removeItem(itemIndex);
            service.addItem(item);
        }

        service.removeItem = function (itemIndex) {
            var item = itemsToBuy.splice(itemIndex, 1)[0];
            return item;
        }

        service.addItem = function (item) {
            itemsBought.push(item);
        }

        service.getItemsToBuy = function () {
            return itemsToBuy;
        }

        service.getItemsBought = function () {
            return itemsBought;
        }
    }
})();
