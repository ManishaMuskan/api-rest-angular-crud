var restful = require('node-restful');

module.exports = function(app, route) {

  // Setup the controller for Rest.
  var rest = restful.model(
    'movie', app.models.movie
  ).methods(['get', 'put', 'post', 'delete']);

  //Register this endpoint with the application.
  rest.register(app, route);

  //Return Middleware.
  return function(req, res, next){
    next();
  };
};
