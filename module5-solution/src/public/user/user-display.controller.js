(function () {
    "use strict";

    angular.module('public')
        .controller('UserDisplayController', UserDisplayController);

    UserDisplayController.$inject = ['ProfileService', 'MenuService'];
    function UserDisplayController(ProfileService, MenuService) {
        var userDisplay = this;
        var user;

        //Pull the Profile information from the ProfileService

        user = ProfileService.getUser();

        //Assign the user information to the controller to display
        if (user) {
            userDisplay.firstName = user.firstName;
            userDisplay.lastName = user.lastName;
            userDisplay.email = user.email;
            userDisplay.phone = user.phone;
        }


    }

})();