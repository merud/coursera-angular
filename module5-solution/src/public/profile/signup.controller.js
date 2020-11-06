(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['ProfileService', 'MenuService'];
    function SignupController(ProfileService, MenuService) {
        var signup = this;

        signup.submit = function () {
            signup.completed = true;
            ProfileService.addUser(signup.user);
          };

        //Get Profile Values from Form Component to create a user profile validated in angular way
          

        //Check the favorite item shortname in MenuService for validity


        //Save the Profile in ProfileService after validating the form


    }

})();