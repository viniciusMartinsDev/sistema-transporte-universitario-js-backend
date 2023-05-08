const userRepository = require('../repositories/UserRepository')

module.exports = {
	createUser(user) {
		userRepository.createUser(user)
	},
}
