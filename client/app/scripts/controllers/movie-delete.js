'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDeleteCtrl', function ($routeParams, Movie, $location) {
    this.movie = Movie.one($routeParams.id).get().$object;
    this.deleteMovie = function(){
      this.movie.remove().then(function(){
        $location.path('/movies');
      });
    };
    this.back = function(){
      $location.path('/movie/' + $routeParams.id);
    };
  });
