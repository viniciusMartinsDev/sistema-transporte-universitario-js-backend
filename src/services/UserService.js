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
	},
	updateUser(id, data) {
		return userRepository.updateUser(id, data)
	},
	deleteUser(id) {
		return userRepository.deleteUser(id)
	},
}
