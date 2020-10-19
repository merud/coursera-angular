(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.response = "";

        $scope.checkAmount = function () {
            var totalAmount = countItems($scope.lunch);
            var response = defineResponse(totalAmount);
            $scope.response = response;
        }

        function countItems(string) {
            var numItems = 0;
            if (typeof (string) == "undefined") {

            }
            else {
                if (emptyStringCheck(string)) {

                }
                else {
                    var items = string.split(',')
                    items.forEach((element) => {
                        if (emptyStringCheck(element)) {

                        } else {
                            numItems++;
                        }
                    })
                }
            }
            return numItems;
        }

        function emptyStringCheck(string) {
            var string = string.trim();
            var isEmpty;
            if (string.length == 0) {
                isEmpty = true;
            }
            else {
                isEmpty = false;
            }
            return isEmpty;
        }

        function defineResponse(lunchSize) {
            var response;
            if (lunchSize > 3) {
                response = "Too much!";
            } else if (lunchSize > 0) {
                response = "Enjoy!"
            } else {
                response = "Please enter data first";
            }
            return response;
        }
    }
})();
