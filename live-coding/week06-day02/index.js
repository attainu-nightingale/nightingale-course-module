var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret: 'This is my personal customisable secret used to sign session ID cookie'
}));

app.use(function(req, res, next) {
    if(!req.session.views) {
        req.session.views = {};
    }
    var path = req.originalUrl;
    if(req.session.views[path] > 0)
        req.session.views[path]++;
    else
        req.session.views[path] = 1;
    next();
});

app.get('/', function(req, res) {
    res.send("<h1>Welcome to my homepage</h1><h2>You are visiting here for the " + req.session.views[req.originalUrl] + " time</h2>");
    count++;
});

app.get('/news', function (req, res) {
    res.send("<h1>Welcome to my news feed</h1><h2>You are visiting here for the " + req.session.views[req.originalUrl] + " time</h2>");
    newsCount++;
});

app.listen(3000);