(function () {
    angular.module('app', ['angular-sortable-view', 'ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '/home',
                component: 'home',
                resolve: {
                    scenario: function(ScenarioFactory) {
                        return ScenarioFactory.getScenario();
                    }
                }
            },
            {
                name: 'about',
                url: '/about',
                component: 'about'
            },
            {
                name: 'test',
                url: '/test',
                template: '<h1>TEST</h1>'
            },
            
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
        
        $urlRouterProvider.otherwise('/home');
    });
    
//    .run(function(ScenarioFactory) {
//        ScenarioFactory.load();
//    });
})();