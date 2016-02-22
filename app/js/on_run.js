function OnRun($rootScope, AppSettings) {
  'ngInject';
  angular.element(document).ready(function() {
    $("img").error(function() {
      $(this).attr('src', 'images/brilliant-basketball-sm.png');
    });
  });

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });
}

export default OnRun;
