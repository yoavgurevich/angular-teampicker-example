function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'AngularJS Tutorial App'
  });

  $urlRouterProvider
      .when('/players', '/public/assets/players.json')
      .otherwise('/');
}

export default OnConfig;
