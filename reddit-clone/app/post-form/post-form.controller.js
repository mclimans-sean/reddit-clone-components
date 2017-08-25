(function() {
  'use strict';

  angular
    .module('catApp')
    .controller('postCats', postCats)

    function postCats(catFailsService) {
      const vm = this;

      vm.newcat = catFailsService
      console.log('Lets see some cats, bro!!!');

      vm.onSave({savedCat: vm.newCat})
    }

}());
