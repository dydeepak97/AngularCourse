(function(){

angular.module('menuApp')
.component('spinner' , {
  templateUrl: 'src/spinner.html'
  controller: 'spinnerController as spin'
  bindings: '<'
});

})();
