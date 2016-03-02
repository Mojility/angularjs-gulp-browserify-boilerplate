function OnConfig($routeProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $routeProvider
      .when('/', {
        controller: 'ExampleCtrl as home',
        templateUrl: 'home.html'
      })
      .otherwise('/');
}

export default OnConfig;
