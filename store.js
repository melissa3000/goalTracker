// mock the store to verify the API works. 
// Entering a user and password on the site gets displayed in the console.

module.exports = {
	createUser ({ username, password }) {
		console.log(`Add user ${username} with password ${password}`)
		return Promise. resolve()
	}
}