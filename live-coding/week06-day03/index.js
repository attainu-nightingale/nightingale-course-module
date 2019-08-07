var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(session({
    secret: 'This is my personal customisable secret used to sign session ID cookie'
}));

app.use(bodyParser.urlencoded());

app.use(express.static('public'));

var users = [{
        username: "vishal",
        password: "vishal123"
    },{
        username: "zanul",
        password: "zanulzanul"
    },{
        username: "nikhila",
        password: "password"
    }
];

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

app.get('/', function (req, res) {
    if (req.session.loggedIn)
        res.redirect('/profile');
    else
        // res.sendFile(__dirname + '/public/login.html');
        res.redirect('/login.html');
});

app.get('/profile', function (req, res) {
    if(req.session.loggedIn)
        res.send("<h1>Welcome " + req.session.user.firstname + "</h1><h2>You are visiting here for the " + req.session.views[req.originalUrl] + " time</h2><a href='/logout'>Log out</a>");
    else
        res.redirect('/');
});

app.post('/auth', function(req, res) {
    var flag = false;
    for(var i=0; i<users.length; i++) {
        if (users[i].username == req.body.username && users[i].password == req.body.password) {
            flag = true;
            break;
        }
    }
    if(flag) {
        req.session.loggedIn = true;
        req.session.user = {
            firstname: "Vishal",
            lastname: "Kumar"
        };
        res.redirect("/profile");
    }
    else
        res.redirect("/");
});

app.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000);