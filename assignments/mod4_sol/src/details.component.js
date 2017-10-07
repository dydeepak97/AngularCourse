(function(){
'use strict';

angular.module('menuApp').component('detailsItem' , {
  templateUrl: 'src/details-item.html',
  bindings: {
    items: '<'
  }
});

})();
