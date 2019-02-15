var mysql      = require('mysql');
var connection = mysql.createConnection({
    //Insert config here
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

    results.forEach(result => {
        console.log(result.Name);
    });
});

connection.end();
