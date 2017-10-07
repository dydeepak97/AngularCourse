(function(){
'use strict';

angular.module('menuApp')
.controller('detailController' , detailController );

detailController.$inject = ['items'];
function detailController(items){
  var details = this;
  details.items = items.data.menu_items;

  console.log(details.items);
}

})();
