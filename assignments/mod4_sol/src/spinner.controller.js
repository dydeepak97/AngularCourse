(function(){
  'use strict';

  angular.module('menuApp').controller('spinnerController' , spinnerController);

  spinnerController.$inject= ['$rootScope'];

  function spinnerController($rootScope){
    var spin = this;

    console.log("spinning");

    $rootScope.on('$stateChangeStart' ,function(){
      spin.show= true;
    });

    $rootScope.on('$stateChangeSuccess' ,function(){
      spin.show= false;
    });

  }


})();
