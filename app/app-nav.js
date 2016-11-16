(function () {
    angular.module('app').component('appNav', {
        templateUrl: 'app/app-nav.html',
        controller: NavController,
        bindings: {}
    });

    function NavController() {
        var vm = this;
    }
})();
