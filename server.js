const express = require('express');
const bodyParser = require('body-parser');
const db = require('./model/connect_to_db');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('./client/src'));
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

app.post('/login', (req, res) => {
	db
		.authenticate({
			username: req.body.username,
			password: req.body.password
		})
		.then(({ success }) => {
			if (success) res.sendStatus(200)
			else res.sendStatus(401)
		})
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

