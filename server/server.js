var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//Create the application
var app = express(); // this is creating the express application.

//Add Middleware necessary for REST APIs.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
//CORS Support
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next(); // without next browser will hang and request will never get sent.
});

app.use('/hello', function(req, res, next){
  console.log('Sending response...');
  res.send('hello world!');
  next();
});

//Connect to MongoDB
mongoose.connect('mongodb://localhost/MeanApp', {
    useMongoClient: true
});
mongoose.connection.once('open', function(){

//Load the models.
app.models = require('./models/index');

//Load the routes.
var routes = require('./routes');
_.each(routes, function(controller, route){
  app.use(route, controller(app, route));
});

  console.log('Listening on port 3000...');
  app.listen(3000);
});
