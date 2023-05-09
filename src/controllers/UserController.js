const UserService = require("../services/UserService")

module.exports = {
	async create(req, res) {
		try {
			const { nome, sobrenome, rg, cpf, email, senha } = req.body

			const user = {
				nome,
				sobrenome,
				rg,
				cpf,
				email,
				senha
			}

			const createdUser = await UserService.createUser(user)

			res.status(200).send(createdUser)
		} catch (error) {
			console.log(error)
		}
	},
}
