(function () {
    angular.module('app')
        .factory('Scenario', function ($resource) {
            var factory = {
                get: get
            };

            return factory;

            function get() {
                return $resource('scenario.json').get(function(data) {
                    _.each(data.goals, function (goal, idxGoal) {
                        var mapAlt = function (id) {
                            return data.alternatives[id];
                        };
                        goal.idx = idxGoal;
                        goal.qPositive = _.map(goal.qPositive, mapAlt);
                        goal.qNeutral = _.map(goal.qNeutral, mapAlt);
                        goal.qNegative = _.map(goal.qNegative, mapAlt);
                    });
                    _.each(data.alternatives, function (alt, key) {
                        alt.id = key;
                    });
                    scenario = data;
                    return scenario;
                }).$promise;
            }
        });
})();