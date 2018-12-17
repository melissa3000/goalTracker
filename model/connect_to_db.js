// protect from SQL injections
// hash user passwords for security

require('dotenv').config();
let mysql = require('mysql');

// Connect to the db
let con = mysql.createConnection({
	host: "localhost",
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: "goalTracker"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to db!");
});


module.exports = {
	createUser ({ username, password, emailAddress }) {
		console.log(`Add user ${username}`)
		let user_details = {username: username, password: password, emailAddress: emailAddress}
		// let new_user = `INSERT INTO users (username, password, emailAddress) VALUES (${username}, ${password}, ${emailAddress})`
			con.query('INSERT INTO users SET ?', user_details, (err, res) => {
			// con.query(new_user, (err, res) => {
				if (err) throw err;
				console.log('new user added successfully');
		})
	}
}
