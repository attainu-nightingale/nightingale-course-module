var express = require('express');
var hbs = require('hbs');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
hbs.registerHelper('is', function (parameter, string, options) {
    if(parameter == string)
        return options.fn(this);
    else
        return options.inverse(this);
});


app.get('/', function(req, res) {
    var players = [
        { name: "Roger Federer", rank: 1 },
        { name: "Rafel Nadal", rank: 2 },
        { name: "David Nalbandian", rank: 12 },
        { name: "Andy Murray", rank: 14 },
        { name: "Andy Roddick", rank: 4 },
        { name: "Pete Sampras", rank: 3 },
        { name: "Rod Laver", rank: 190 },
        { name: "Andre Agassi", rank: 11 },
        { name: "Novak Djokovic", rank: 5 },
        { name: "Arthur Ashe", rank: 8 },
    ];
    res.render('home.hbs', {
        title: 'Home',
        style: 'home.css',
        array: players
    });
});

app.get('/about', function (req, res) {
    res.render('about.hbs', {
        title: 'About',
        style: 'about.css'
    });
});

app.get('/contact', function (req, res) {
    res.render('contact.hbs', {
        title: 'Contact'
    });
});

app.listen(3000);