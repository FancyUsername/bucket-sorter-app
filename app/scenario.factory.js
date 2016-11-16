(function () {
    angular.module('app')
        .factory('ScenarioFactory', ScenarioFactory);

    function ScenarioFactory($http) {
        var scenario = {};

        var factory = {
            getScenario: getScenario,
            scenario: scenario
        };

        return factory;

        function getScenario() {
            return $http.get('app/data/scenario.json').then(function(res) {
                scenario = res.data;
                return scenario;
            });
        }
    }
})();