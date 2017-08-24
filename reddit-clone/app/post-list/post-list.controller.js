(function() {
  'use strict';

  angular.module('catApp')

  .controller('updateCats', updateCats);

    function updateCats(navBarService, catFailsService) {
      const vm = this;

      vm.service = navBarService;
      vm.catService = catFailsService;

      vm.time = new Date()

      vm.$onInit = function () {
        vm.cats = catFailsService.cats
      }

      vm.postComment = function (post, cat) {
        console.log(post, cat);
        cat.user_comments.push({comment: post.newComment})
        post.newComment = ""
      }
    }

}());
