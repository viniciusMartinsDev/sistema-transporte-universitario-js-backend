const userError = require('../errors/userErrors')
const userService = require('../services/UserService')
const dataViews = require('../views/dataViews')

module.exports = {
	async index(req, res) {
		try {
			const getUsers = await userService.getUsers()
			res.status(200).send(getUsers.map((users) => dataViews.user(users)))
		} catch (error) {
			res.status(400).send(error)
		}
	},

	async show(req, res) {
		try {
			const { id } = req.params

			const user = await userService.getUserById(id)
			res.status(200).send(dataViews.user(user))
		} catch (error) {
			res.status(400).send(error)
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

			res.status(200).send(dataViews.user(createdUser))
		} catch (error) {
			res.status(400).send(userError.userError(error))
		}
	},

	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body

			const updateUser = await userService.updateUser(id, data)

			res.status(200).send(dataViews.user(updateUser))
		} catch (error) {
			res.status(400).send(error)
		}
	},

	async delete(req, res) {
		try {
			const { id } = req.params

			await userService.deleteUser(id)

			res.status(200)
		} catch (error) {
			res.status(400).send(error)
		}
	},
}
