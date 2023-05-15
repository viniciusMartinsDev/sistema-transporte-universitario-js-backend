const bcrypt = require('bcryptjs')

module.exports = {
	encrypt(password) {
		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(password, salt)
		return hash
	},
	decrypt(password, dbPassword) {
		return bcrypt.compareSync(password, dbPassword)
	},
}
