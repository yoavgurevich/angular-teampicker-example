function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'PlayersCtrl as home',
    templateUrl: 'home.html',
    title: 'NBA Fan-Team Picker'
  });

  $urlRouterProvider
      .when('/players', '/public/assets/players.json')
      .otherwise('/');
}

export default OnConfig;
