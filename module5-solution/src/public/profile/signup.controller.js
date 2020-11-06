(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['ProfileService', 'MenuService'];
    function SignupController(ProfileService, MenuService) {
        var signup = this;
        var favItem;
        signup.submit = async function () {
            signup.attempted = false;
            //testing MenuService Check Here
            favItem = await MenuService.getItemByShortName(signup.user.favoriteShort);
            signup.attempted = true;
            if(favItem){
                signup.attempted = false;
                signup.user.favorite = favItem;
                ProfileService.addUser(signup.user);
                signup.completed = true;
            }
        };

        //Get Profile Values from Form Component to create a user profile validated in angular way


        //Check the favorite item shortname in MenuService for validity


        //Save the Profile in ProfileService after validating the form


    }

})();