const userService = require('../services/UserService')

module.exports = {
	async index(req, res) {
		try {
			const getUsers = await userService.getUsers()

			res.status(200).send(getUsers)
		} catch (error) {
			res.send(error)
		}
	},

	async show(req, res) {
		try {
			const { id } = req.params

			const user = await userService.getUser(Number(id))
			res.status(200).send(user)
		} catch (error) {
			res.send(error)
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

			const createdUser = await userService.createUser(user)

			res.status(200).send(createdUser)
		} catch (error) {
			res.send(error)
		}
	},

	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body

			const updateUser = await userService.updateUser(Number(id), data)

			res.status(200).send(updateUser)
		} catch (error) {
			res.send(error)
		}
	},

	async delete(req, res) {
		try {
			const { id } = req.params

			await userService.deleteUser(Number(id))

			res.status(200)
		} catch (error) {
			res.send(error)
		}
	},
}
