const userError = require('../errors/userErrors')
const userService = require('../services/UserService')
const userView = require('../views/UserView')

module.exports = {
	async index(req, res) {
		try {
			const getUsers = await userService.getUsers()
			res.status(200).send(getUsers.map((users) => userView.userView(users)))
		} catch (error) {
			res.status(500).send(error)
		}
	},

	async show(req, res) {
		try {
			const { id } = req.params

			const user = await userService.getUserById(Number(id))
			res.status(200).send(userView.userView(user))
		} catch (error) {
			res.status(500).send(error)
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

			res.status(200).send(userView.userView(createdUser))
		} catch (error) {
			res.status(500).send(userError.userError(error))
		}
	},

	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body

			const updateUser = await userService.updateUser(Number(id), data)

			res.status(200).send(userView.userView(updateUser))
		} catch (error) {
			res.status(500).send(error)
		}
	},

	async delete(req, res) {
		try {
			const { id } = req.params

			await userService.deleteUser(Number(id))

			res.status(200)
		} catch (error) {
			res.status(500).send(error)
		}
	},
}
