(function () {
    "use strict";

    angular.module('public')
        .controller('UserDisplayController', UserDisplayController);

    UserDisplayController.$inject = ['ProfileService', 'MenuService'];
    function UserDisplayController(ProfileService, MenuService) {
        var $ctrl = this;

        //Pull the Profile information from the ProfileService


        //Assign the values from the ProfileService to be displayed in the html


        //Pull/Assign the values from the MenuService relevant to the favorite item (picture, name, etc)

        
        //Have all values displayed via component


    }

})();