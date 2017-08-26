(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.counter= 0;
  $scope.name= "DY";
  $scope.showNumberOfWatchers = function () {
    console.log('# of watchers : ', $scope.$$watchersCount);
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function(){
    $scope.counter++;
  };

  $scope.$watch(function (){
    console.log("Digest loop fired!");
  });

//  $scope.$watch('onceCounter' , function(newValue , oldvalue){
//    console.log('oldvalue: ',oldvalue);
//    console.log('newvalue: ',newValue);
//  });
//
//  $scope.$watch('counter' , function(newValue , oldvalue){
//    console.log('couner oldvalue: ',oldvalue);
//    console.log('counter newvalue: ',newValue);
//  });

}

})();
