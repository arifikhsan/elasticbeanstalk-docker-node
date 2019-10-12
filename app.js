// get dependencies
var express = require('express');
var morgan = require('morgan');

var app = express();
var server = require('http').Server(app);
port = process.env.PORT || 8080;

// catch all other routes and return the index file
app.get('/', (_, res) => {
  res.send("Hello World !!");
});

// use morgan to log requests to the console
app.use(morgan('dev'));

server.listen(port);
console.log('App running at http://localhost:' + port);

