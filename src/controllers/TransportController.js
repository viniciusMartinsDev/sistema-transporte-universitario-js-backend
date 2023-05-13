const transportService = require('../services/TransportService')

module.exports = {
	async index(req, res) {
		try {
			const transports = await transportService.getTransports()

			res.status(200).send(transports)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async show(req, res) {
		try {
			const { id } = req.params
			const transport = await transportService.findById(Number(id))

			res.status(200).send(transport)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async create(req, res) {
		try {
			const dataTransport = req.body
			const { usuarioId } = req.body
			const id = Number(usuarioId)

			const transport = {
				...dataTransport,
				usuarioId: id,
			}
			const createdTransport = await transportService.createTransport(transport)

			res.status(200).send(createdTransport)
		} catch (error) {
			res.status(500).send(error)
		}
	},

	async update(req, res) {
		try {

		} catch (error) {
			res.status(500).send(error)
		}
	},
	async delete(req, res) {
		try {
			const { id } = req.params

			await transportService.deleteTransport(Number(id))

			res.status(200).send('Transporte deletado')
		} catch (error) {
			res.status(500).send(error)
		}
	},
}
