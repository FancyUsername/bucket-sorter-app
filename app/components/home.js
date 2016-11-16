(function () {
    angular.module('app').component('home', {
        templateUrl: 'app/components/home.html',
        controller: HomeController,
        bindings: {
            scenario: '<'
        }
    });

    function HomeController() {
        var vm = this;
    }
})();