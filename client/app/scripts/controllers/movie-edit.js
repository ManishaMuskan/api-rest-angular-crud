'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieEditCtrl', function ($routeParams, Movie, $location) {
    var vm = this;
    this.editMovie = true;
    this.movie = {};
    Movie.one($routeParams.id).get().then(function(movie){
      vm.movie = movie;
      vm.saveMovie = function(){
        vm.movie.save().then(function(){
          $location.path('/movie/' + $routeParams.id);
        });
      };
    });
  });
