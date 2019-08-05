var express =  require('express');
var bodyParser = require('body-parser');
var app = express();

var studentsDB = [{
    firstname: "Anjali",
    lastname: "Svi",
    gender: "female"
}, {
    firstname: "Mhd",
    lastname: "Sadab",
    gender: "male"
}, {
    firstname: "Gaurav",
    lastname: "Verma",
    gender: "male"
}];


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getAllStudents', function (req, res) {
    res.json(studentsDB);
});

app.get('/getStudentByName', function (req, res) {
    console.log(req.query);
    var searchStudent = null;
    for(var i=0; i<studentsDB.length; i=i+1) {
        if(studentsDB[i].firstname.toLowerCase() == req.query.identity.toLowerCase()) {
            searchStudent = studentsDB[i];
        }
    }
    if(searchStudent == null) {
        res.json({error: "Student does not exist in database"});
    }
    else {
        res.json(searchStudent);
    }
});

app.get('/newStudentForm', function (req, res) {
    res.sendFile(__dirname + '/form.html');
})

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/addStudent', function(req, res) {
    console.log(req.body);
    studentsDB.push(req.body);
    res.json({ success: req.body.firstname + " is added!"});
});

app.put('/addStudent/:firstname', function (req, res) {
    console.log(req.body);
    var index = -1;
    for (var i = 0; i < studentsDB.length; i = i + 1) {
        if (studentsDB[i].firstname.toLowerCase() == req.params.firstname.toLowerCase()) {
            index = i;
        }
    }
    if (index == -1) {
        res.json({ error: "Student does not exist in database" });
    }
    else {
        studentsDB[index].lastname = req.body.lastname;
        studentsDB[index].gender = req.body.gender;
        res.json({ success: studentsDB[index].firstname + " is modified!" });
    }
});

app.delete('/addStudent/:firstname', function (req, res) {
    console.log(req.body);
    var index = -1;
    for (var i = 0; i < studentsDB.length; i = i + 1) {
        if (studentsDB[i].firstname.toLowerCase() == req.params.firstname.toLowerCase()) {
            index = i;
        }
    }
    if (index == -1) {
        res.json({ error: "Student does not exist in database" });
    }
    else {
        var deletedName = studentsDB[index].firstname;
        studentsDB.splice(index, 1);
        res.json({ success: deletedName + " is deleted!" });
    }
});

// app.get('/add/:num1/:num2', function (req, res) {
//     console.log(req.params);
//     res.json({ sum: parseInt(req.params.num1) + parseInt(req.params.num2)});
// });

// app.get('/add', function (req, res) {
//     console.log(req.query);
//     if (req.query.num1 != undefined && req.query.num2 != undefined)
//         res.json({ sum: parseInt(req.query.num1) + parseInt(req.query.num2) });
//     else
//         res.json({ error: "Numbers not given correctly" });
// });


app.listen(3000);