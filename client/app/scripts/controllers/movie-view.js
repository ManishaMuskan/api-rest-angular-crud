'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieViewCtrl', function ($routeParams, Movie) {
    this.viewMovie = true;
    this.movie = Movie.one($routeParams.id).get().$object;
  });
