const UserService = require('../services/UserService')

module.exports = {
	async index(req, res) {
		try {
			const getUsers = await UserService.getUsers()

			res.status(200).send(getUsers)
		} catch (error) {
			console.log(error)
		}
	},

	async show(req, res) {
		try {
			const { id } = req.params

			const user = await UserService.getUser(Number(id))
			res.status(200).send(user)
		} catch (error) {
			console.log(error)
		}
	},

	async create(req, res) {
		try {
			const {
				nome, sobrenome, rg, cpf, email, senha,
			} = req.body

			const user = {
				nome,
				sobrenome,
				rg,
				cpf,
				email,
				senha,
			}

			const createdUser = await UserService.createUser(user)

			res.status(200).send(createdUser)
		} catch (error) {
			console.log(error)
		}
	},

	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body

			const updateUser = await UserService.updateUser(Number(id), data)

			res.status(200).send(updateUser)
		} catch (error) {
			console.log(error)
		}
	},

	async delete(req, res) {
		try {
			const { id } = req.params

			await UserService.deleteUser(Number(id))

			res.status(200)
		} catch (error) {
			console.log(error)
		}
	},
}
