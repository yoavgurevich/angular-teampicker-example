import playerData from '../players.json';

function PlayersCtrl() {
  'ngInject';
  angular.element(document).ready(function() {
    $("img").error(function() {
      $(this).attr('src', 'images/brilliant-basketball-sm.png');
    });
  });

  // ViewModel
  const vm = this;

  vm.title = 'NBA Fan-Team Picker Example';
  vm.dragOptions = {
    container: 'canvas'
  };
  vm.players = playerData;
  vm.positions = [
    {
      id: 'c',
      pName: '',
      filled: false
    },
    {
      id: 'f',
      pName: '',
      filled: false
    },
    {
      id: 'cf',
      pName: '',
      filled: false
    },
    {
      id: 'g',
      pName: '',
      filled: false
    },
    {
      id: 'gf',
      pName: '',
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
    foundPos.filled = false;
    foundPos.pName = "";
  };
}

export default {
  name: 'PlayersCtrl',
  fn: PlayersCtrl
};
