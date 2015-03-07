'use strict';
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/notesapp_development');

var app = express();
app.use(express.static(__dirname + '/build'));
var goatsRouter = express.Router();

routes(goatsRouter);

app.use('/api/v1', goatsRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server listening on port ' + (process.env.PORT || 3000));
});
