/**
 * Module dependencies.
 */
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var keys = require('./routes/keys');
var scheduler = require('./scheduler/scheduler');

var app = express();
var port = process.env.PORT || 3005;

app.set('view engine', 'ejs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use('/', routes);
app.use('/keys', keys);

app.listen(port, function () {
    console.log('Server running at http://localhost:3000');
});