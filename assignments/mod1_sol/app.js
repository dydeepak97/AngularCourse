(function(){
console.log("Working");

'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.items = "";
  $scope.displaymsg = "";
  $scope.colorTag = "";
  $scope.borderTag = "";


  $scope.check = function(){
    if($scope.items.length!=0){   //this checks for empty string

      $scope.colorTag="color:green";              //To change border and text to
      $scope.borderTag = "border-color:green";    //GREEN when input not empty

      var itemList= $scope.items.split(',');
      var count = itemCounter(itemList);
      if (count<=3){
        $scope.displaymsg="Enjoy!";
      }
      else {
        $scope.displaymsg="Too much!";
      }
    }
    else {
      $scope.displaymsg="Please enter data first!";
      $scope.colorTag = "color:red";          //To change to RED
      $scope.borderTag = "border-color:red";
    }
  };
}

//Empty items i.e. ",," are NOT considered in counting

function itemCounter(itemList){
  var count = 0;
  for(i=0;i<itemList.length;i++){
    if(itemList[i].length!=0){     //This ommites empty items i.e.",," from count
      count++;
    }

  }
  return count;
}

})();
