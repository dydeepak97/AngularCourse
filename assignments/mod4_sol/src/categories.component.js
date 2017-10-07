(function(){

  'use strict';

  angular.module('menuApp').
  component('category' , {
    templateUrl: 'src/category.html',
    bindings: {
      categories: '<'
    }
  });
})();
