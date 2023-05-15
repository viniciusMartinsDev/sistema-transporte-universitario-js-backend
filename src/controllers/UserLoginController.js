const jwt = require('jsonwebtoken')
const userLoginService = require('../services/UserLoginService')
const cryptography = require('../utils/Cryptography')
const { userView } = require('../views/UserView')

module.exports = {
	async login(req, res) {
		try {
			const { email, senha } = req.body

			const user = await userLoginService.getUserByEmail(email)

			if (!user) throw new Error('Email não encontrado ou inválido!')

			const verifyPass = cryptography.decrypt(senha, user.senha)

			if (!verifyPass) throw new Error('Senha incorreta!')

			const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, { expiresIn: '1d' })

			const verifyUser = {
				user: userView(user),
				token,
			}
			res.status(200).send(verifyUser)
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}
