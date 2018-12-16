let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dbpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to db!");
});