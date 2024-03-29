const userRepository = require('../repositories/UserRepository')
const cryptography = require('../utils/Cryptography')

module.exports = {
	createUser(user) {
		const createdUser = {
			...user,
			senha: cryptography.encrypt(user.senha),
		}
		return userRepository.createUser(createdUser)
	},
	getUsers() {
		return userRepository.getUsers()
	},
	getUserById(id) {
		return userRepository.getUserById(Number(id))
	},
	updateUser(id, data) {
		return userRepository.updateUser(Number(id), data)
	},
	deleteUser(id) {
		return userRepository.deleteUser(Number(id))
	},
}
