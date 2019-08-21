var express = require('express');
var app = express();


var team = [// MONGODB will provide
    {
        imageUrl: 'https://avatars0.githubusercontent.com/u/2?v=4',
        firstname: 'Ram',
        lastname: 'Kumar',
        bio: 'I am Ram. Be like me!'
    },
    {
        imageUrl: 'https://avatars0.githubusercontent.com/u/3?v=4',
        firstname: 'Sadab',
        lastname: 'Mohammad',
        bio: 'I am Sadab. Be like me!'
    },
    {
        imageUrl: 'https://avatars0.githubusercontent.com/u/4?v=4',
        firstname: 'Gaurav',
        lastname: 'Verma',
        bio: 'I am Gaurav. Be like me!'
    }
];

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home.hbs', {
        title: 'Home',
        style: 'home.css',
        script: 'home.js'
    });
});

app.get('/about', function (req, res) {
    res.render('about.hbs', {
        title: 'About Us',
        style: 'about.css',
        script: 'about.js',
        team: team
    });
});

app.listen(3000);