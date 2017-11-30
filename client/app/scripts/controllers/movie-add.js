'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function (Movie, $location) {
    this.movie ={};//this will change because of two way binding property, title and url will be attached
    this.saveMovie = function(){
      Movie.post(this.movie).then(function(){
        $location.path('/movies');
      });
      //Restangular Movie object will be called and post to url on saveMovie();
    };
  });
