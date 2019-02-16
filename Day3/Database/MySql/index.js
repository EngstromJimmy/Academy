var mysql      = require('mysql');
var connection = mysql.createConnection({
  //Get this part from Canvas
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM books', function (error, results, fields) {
    if (error)
        throw error;

        console.log(results);
        var str = JSON.stringify(results)
        var fs=require("fs")
        fs.writeFile(__dirname +"/books.json",str,(err)=>{});
    results.forEach(result => {
        console.log(result.Name);
    });
});

connection.query('SELECT * FROM authors', function (error, results, fields) {
    if (error)
        throw error;

        console.log(results);
        var str = JSON.stringify(results)
        var fs=require("fs")
        fs.writeFile(__dirname +"/authors.json",str,(err)=>{});
    results.forEach(result => {
        console.log(result.Name);
    });
});
    connection.query('SELECT * FROM bookauthors', function (error, results, fields) {
        if (error)
            throw error;
    
            console.log(results);
            var str = JSON.stringify(results)
            var fs=require("fs")
            fs.writeFile(__dirname +"/bookauthors.json",str,(err)=>{});
        results.forEach(result => {
            console.log(result.Name);
        });
    });
connection.end();
