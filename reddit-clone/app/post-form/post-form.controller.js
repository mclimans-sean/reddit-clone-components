(function() {
  'use strict';

  angular
    .module('catApp')
    .controller('postCats', postCats)

    function postCats(catFailsService) {
      const vm = this;

      vm.newcat = catFailsService


        console.log('Lets see some cats, bro!!!');
        catFailsService.push(vm.newcat)
        vm.newcat.submitted = Date.now()
        vm.newcat.user_comments = []
        delete vm.newcat

    }

}());
