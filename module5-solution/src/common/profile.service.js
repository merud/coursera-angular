(function () {
    "use strict";

    angular.module('common')
        .service('ProfileService', ProfileService);


    function ProfileService() {
        var service = this;
        //stores the user object between controllers
        var storedUser;

        //takes the user object as a value and stores it
        service.addUser = function (user) {
            storedUser = user;
        }

        //returns the user stored in the users array
        service.getUser = function () {
            return storedUser;
        }

    }
})();