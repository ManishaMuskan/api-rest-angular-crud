var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title:{
    type: String,
    required:true
  },
  url:{
    type: String,
    required: true
  }
}).set('collection', 'movies');//if not defined, collection name will be pluralised and lower case by default. Api will return empty array.

//Export the model Schema.
module.exports = MovieSchema;
