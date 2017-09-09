(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems',foundItems);

  NarrowItDownController.$inject=['$scope','MenuSearchService'];
  function NarrowItDownController($scope,MenuSearchService){
    var list = this;
    list.searchTerm="";
    list.searchBtn = function(){
      if( list.searchTerm.length>0 ){

        console.log(list.searchTerm);

        list.promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
        list.promise.then(function(result){
        list.found = result;

        console.log(result);
        });
      }
      else{
        list.found = [];
      }
    }


    list.onRemove = function(index){
      list.found.splice(index,1);
    };

  }

  MenuSearchService.$inject=['$http', 'ApiBasePath'];
  function MenuSearchService($http , ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
        console.log(searchTerm);
        var response = $http({
          method: "GET",
          url:(ApiBasePath + "/menu_items.json" ),
          params:{

          }
        });

        return response.then(function(result){

          service.allItems=result.data.menu_items;

          service.searchList=[];

          for( var i=0 ; i<service.allItems.length ; i++){
            if(service.allItems[i].description.indexOf(searchTerm) != -1){
              service.searchList.push(service.allItems[i]);
            }
          }

          console.log(service.searchList);

          return service.searchList;
        }).catch(function(error){
          return "ERROR";
        });
    };
  }

  function foundItems(){
    var ddo={
      templateUrl: 'custom.html',
      scope: {
        items:'<',
        onRemove: '&'
      },

    };

    return ddo;
  }



})();
