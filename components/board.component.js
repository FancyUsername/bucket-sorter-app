(function () {
    angular.module('app')
        .component('board', {
            templateUrl: 'components/board.component.html',
            controller: BoardCtrl,
            controllerAs: 'ctrl'
        });
    
    function BoardCtrl(Scenario) {
        var vm = this;
        Scenario.get().then(function(scenario) {
            vm.scenario = scenario;
        });
    }
})();