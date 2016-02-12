function ExampleCtrl() {
  // ViewModel
  const vm = this;

  vm.title = 'AngularJS 1.5 Tutorial Using Gulp and Browserify';
  vm.phones = [
    {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.',
      'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.',
      'age': 2},
    {'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.',
      'age': 3}
  ];
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
