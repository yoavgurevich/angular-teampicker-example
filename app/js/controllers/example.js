import playerData from '../players.json';

function ExampleCtrl() {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS 1.5 Tutorial Using Gulp and Browserify';
  vm.players = playerData;
  vm.positions = [
    {
      id: 'c',
      pName: 'VACANT',
      filled: false
    },
    {
      id: 'f',
      pName: 'VACANT',
      filled: false
    },
    {
      id: 'cf',
      pName: 'VACANT',
      filled: false
    },
    {
      id: 'g',
      pName: 'VACANT',
      filled: false
    },
    {
      id: 'gf',
      pName: 'VACANT',
      filled: false
    }
  ];
  vm.findPosition = function(key) {
    for (var i = 0; i < vm.positions.length; i++) {
      if (vm.positions[i].id === key) {
        return vm.positions[i];
      }
    }
  };
  vm.placePlayer = function(playerName, position) {
    var foundPos = vm.findPosition(position.replace(/-/g, '').toLowerCase());
    foundPos.pName = playerName;
    if(!foundPos.filled) {
      foundPos.filled = true;
    }
  };
  vm.removePlayer = function(position) {
    var foundPos = vm.findPosition(position);
    console.log(foundPos);
    foundPos.filled = false;
    foundPos.pName = "VACANT";
    console.log('end of function: ', foundPos);
  };
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
