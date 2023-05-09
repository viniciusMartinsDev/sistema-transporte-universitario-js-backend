const userRepository = require('../repositories/UserRepository')

module.exports = {
	createUser(user) {
		return userRepository.createUser(user)
	},
}
