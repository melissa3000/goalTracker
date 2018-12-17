const express = require('express');
const bodyParser = require('body-parser');
const db = require('./model/connect_to_db');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/createUser', (req, res) => {
	db
		.createUser({
			username: req.body.username,
			password: req.body.password,
			emailAddress: req.body.emailAddress
		})
		.then(() => res.sendStatus(200))
})


// app.post('/login', (req, res) => {
// 	store
// 		.authenticate({
// 			username: req.body.username,
// 			password: req.body.password
// 		})
// 		.then(({ success }) => {
// 			if (success) res.sendStatus(200)
// 			else res.sendStatus(401)
// 		})
// })

app.listen(5000, () => {
	console.log('Server running on http://localhost:5000')
})

