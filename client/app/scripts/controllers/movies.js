'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function (Movie) {
    //Movie(coming from app.js) as parameter receiving data from API
    this.movies = Movie.getList().$object;
  });
