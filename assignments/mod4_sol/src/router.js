(function(){
'use strict';

angular.module('menuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];
function RoutesConfig($stateProvider , $urlRouterProvider){

  //default
 $urlRouterProvider.otherwise('/');
  console.log("Router Working");

  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'src/home.html'
  });

  $stateProvider.state('categories',{
    url: '/categories',
    templateUrl: 'src/categories.html',
    controller: 'categoriesController as cats',
    resolve: {
      categories: ['MenuDataService' , function(MenuDataService){
          console.log("categories Resolve started");
          return MenuDataService.getAllCategories();
      }]
    }
  });

  $stateProvider.state('details' , {
    url: '/details/{short_name}',
    templateUrl: 'src/details.html',
    controller: 'detailController as details',
    resolve: {
      items: ['MenuDataService','$stateParams' , function(MenuDataService , $stateParams){
        console.log("details resolve working");
        console.log($stateParams.short_name);

        return MenuDataService.getItemsForCategory($stateParams.short_name);
      }]
    }
  } );



};

})();
