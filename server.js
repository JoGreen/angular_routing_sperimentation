var express = require('express');
var morgan = require('morgan');
var routes = require('./routes/routing');

var app = express();
app.use(morgan('dev'));
routes(app);


app.listen(8080);
console.log('server is listening on port 8080');