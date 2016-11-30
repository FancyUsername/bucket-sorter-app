angular.module('app', ['ngResource', 'ngCookies'])

.controller('MainCtrl', function ($scope) {
    $scope.$on('altAdded', function (event, alt) {
        alt.id = _.guid();
        $scope.scenario.alternatives[alt.id] = alt;
        angular.forEach($scope.scenario.goals, function(goal) {
            goal.qNeutral.push(alt);
        });
    });
});