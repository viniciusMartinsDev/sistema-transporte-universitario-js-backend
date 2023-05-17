const jwt = require('jsonwebtoken')
const userLoginService = require('../services/UserLoginService')
const cryptography = require('../utils/Cryptography')
const dataViews = require('../views/dataViews')

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
				user: dataViews.user(user),
				token,
			}
			res.status(200).send(verifyUser)
		} catch (error) {
			res.status(400).send(error.message)
		}
	},
}
