(function() {
  'use strict';

  angular
    .module('catApp')
    .controller('navBarController', navBarController)

    function navBarController(navBarService) {
      const vm = this;

      vm.service = navBarService

      vm.$onInit = function () {
        vm.options = navBarService.options
      }
    }


}());
