(function(){
  'use strict';

  angular.module('menuApp')
  .controller('categoriesController',categoriesController);

  categoriesController.$inject = ['categories'];
  function categoriesController(categories){
    var cats = this;

    cats.list = categories.data;
    console.log(cats.list);






  }

})();
