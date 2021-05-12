var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

const testdb = './db.txt';
const fs = require('fs');
fs.open(testdb, 'w', (err, file) => {
    if (err) throw err;
    console.log('testdb.txt initialized.');
});
const readline = require('readline');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000);


// handlers
app.get('/data', function (req, res) {
    data = fs.readFileSync(testdb, 'UTF-8');
    lines = data.split(/\r?\n/);
    lines = lines.slice(0, lines.length-1);
    console.log(lines);

    var idx = 0;
    var array = [];
    lines.forEach((line)=>{
        var data = JSON.parse(line);
        console.log(data);
        var event = {
            id: idx,
            text: data.text,
            start_date: new Date(data.start_date),
            end_date: new Date(data.end_date),
            color: "#DD8616"
        };
        array.push(event);
        idx++;
    });
    console.log(array)
    res.send(array);
});

app.post('/put', function (req, res) {
    var data = req.body;
    fs.appendFileSync(testdb, JSON.stringify(data) + '\r\n', (err)=>{
        if (err) throw err;
    });
    res.send("Inserted:\n" + JSON.stringify(data));
});