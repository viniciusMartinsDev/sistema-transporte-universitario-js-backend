const transportService = require('../services/TransportService')

module.exports = {
	async index(req, res) {
		try {
			const transports = await transportService.getTransports()

			res.status(200).send(transports)
		} catch (error) {
			res.status(400).send(error)
		}
	},

	async show(req, res) {
		try {
			const { id } = req.params
			const transport = await transportService.findById(id)

			res.status(200).send(transport)
		} catch (error) {
			res.status(400).send(error)
		}
	},

	async create(req, res) {
		try {
			const dataTransport = req.body
			const createdTransport = await transportService.createTransport(dataTransport)

			res.status(200).send(createdTransport)
		} catch (error) {
			res.status(400).send(error)
		}
	},

	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body

			const updatedTransport = await transportService.updateTransport(id, data)

			res.status(200).send(updatedTransport)
		} catch (error) {
			res.status(400).send(error)
		}
	},

	async delete(req, res) {
		try {
			const { id } = req.params

			await transportService.deleteTransport(id)

			res.status(200).send({ message: 'Transporte deletado' })
		} catch (error) {
			res.status(400).send(error)
		}
	},
}
