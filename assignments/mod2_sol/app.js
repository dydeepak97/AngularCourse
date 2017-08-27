(function(){
  'use strict';

  angular.module('DYShop',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['$scope' , 'ShoppingListCheckOffService'];
  function ToBuyController($scope , ShoppingListCheckOffService ){
    var toBuy = this;

    toBuy.bought = function(index){
      ShoppingListCheckOffService.buy(index);
    };

    toBuy.showlist = ShoppingListCheckOffService.getbuyList();
    console.log(toBuy.showlist);
    // toBuy.len = toBuy.showlist.length();
    console.log(toBuy.showlist.length);
  };

  AlreadyBoughtController.$inject=['$scope' , 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope , ShoppingListCheckOffService ){
    var bought = this;

    bought.showlist = ShoppingListCheckOffService.getboughtList();
    console.log(bought.showlist);

  };


  function ShoppingListCheckOffService(){
    var service= this;

    var buyList=[
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 20 },
      { name: "memes", quantity: 100 },
      { name: "dank memes", quantity: 20 },
      { name: "coca cola", quantity: 5 },
    ];


    var boughtList = [];

    service.buy = function(index){
      boughtList.push(buyList[index]);
      buyList.splice(index , 1);
    };

    service.getbuyList = function(){
      return buyList;
    };


    service.getboughtList = function(){
      return boughtList;
    };

  };

})();
