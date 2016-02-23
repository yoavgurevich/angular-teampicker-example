import playerData from '../players.json';
//import wdk from 'wikidata-sdk';

function PlayersCtrl($http) {
  'ngInject';

  //const url = wdk.getWikidataIdsFromWikipediaTitles({
  //  titles: 'List of current NBA team rosters',
  //  origin: 'https://en.wikipedia.org',
  //  action: 'centralauthtoken'
  //});
  //
  //$http.get(url)
  //  .then(function successCallback(response) {
  //    console.log(response.data);
  //  }, function errorCallback(response) {
  //    console.log(response);
  //});

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
