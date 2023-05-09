const userRepository = require('../repositories/UserRepository')

module.exports = {
	createUser(user) {
		return userRepository.createUser(user)
	},
	getUsers() {
		return userRepository.getUsers()
	},
	getUser(id) {
		return userRepository.getUser(id)
	}
}
