// requirements
var mysql = require("mysql");

// setting up mysql connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

// creating mysql connection
connection.connect(function(err,results) {
    // if error report
    if (err) throw err;
    
    // if connected
    console.log('connected as id: ' + connection.threadId);
});

// exporting connection
module.exports = connection;
