import angular from 'angular';

export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider
  .otherwise('/order');
}
