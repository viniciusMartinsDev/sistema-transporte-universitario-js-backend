const UserService = require("../services/UserService")

module.exports = {
	async index(req, res) {
		try {
			const getUsers = await UserService.getUsers()

			res.status(200).send(getUsers)
		} catch (error) {
			console.log(error);
		}
	},

	async getUniqueUser(req, res) {
		try {
			const { id } = req.params

			const user = await UserService.getUser(parseInt(id))
			res.status(200).send(user)

		} catch (error) {
			console.log(error);
		}
	},

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
