angular.module("app")

.directive("goalCol", function() {
    return {
        templateUrl: "components/goal-col.html",
        restrict: "E",
        replace: true,
        scope: {
            goal: "="
        },
        controller: function($scope, $cookies, $timeout) {
            $scope.altKeyPressed = function(event) {
                if (event.key === "Enter") {
                    $scope.$emit('altAdded', {
                        name : event.target.value
                    });
                    $(event.target).select();
                }
                else if (event.key === "Escape") {
                    $scope.altEditor = false;
                }
            };
            $scope.focusEditor = function(event) {
                $timeout(function() {
                    var input = angular.element(event.target).parent().parent().find("input");
                    input.val("");
                    input.focus();
                });
            };
        },
        link: function(scope, element) {
            angular.element(element).ready(function() {
                $(element).find(".q-area").sortable({
                    connectWith: ".goal-" + scope.goal.idx,
                    stop: function(e) {
                        function toIdx(clazz) {
                            return $(e.target).parent().find(clazz).map(function() { return $(this).data("alt"); }).get();
                        }
                        var mapAlt = function(idx) {
                            return scope.$parent.scenario.alternatives[idx];
                        };
                        var goal = scope.goal;
                        goal.qPositive = _.map(toIdx(".q-positive li"), mapAlt);
                        goal.qNeutral = _.map(toIdx(".q-neutral li"), mapAlt);
                        goal.qNegative = _.map(toIdx(".q-negative li"), mapAlt);
                        scope.$emit('goalChanged', goal);
                    }
                });
            });
        }
    };
})

.directive('altCard', function() {
    return {
        templateUrl: "components/alt-card.html",
        replace: true,
        controller: function($scope) {
            $scope.editMode = false;
            $scope.edit = function() {
                $scope.editMode = !$scope.editMode;
            };
            $scope.remove = function() {
                $scope.$emit('altRemoved', $scope.alt);
            };
        }
    };
});
