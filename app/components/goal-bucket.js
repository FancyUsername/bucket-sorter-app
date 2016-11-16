(function () {
    angular.module('app').component('goalBucket', {
        templateUrl: 'app/components/goal-bucket.html',
        controller: GoalBucketController,
        controllerAs: 'vm',
        bindings: {
            goal: '<'
        }
    });

    function GoalBucketController() {
        var vm = this;
    }
})();