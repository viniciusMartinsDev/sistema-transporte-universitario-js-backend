const userRepository = require('../repositories/UserRepository')

module.exports = {
	getUserByEmail(email) {
		return userRepository.getUserByEmail(email)
	},
}
