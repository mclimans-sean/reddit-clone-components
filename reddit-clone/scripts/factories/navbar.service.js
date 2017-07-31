(function() {
  'use strict';

  angular
    .module('catApp')
    .factory('navBarService', navBarService)

    function navBarService() {

      return {
        sortBy: '-votes',
        options: {
          "title": "TITLE",
          "-votes": "VOTES",
          "-createdAt": "DATE"
        }
      }
    };

}());
