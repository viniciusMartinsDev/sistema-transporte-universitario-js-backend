const TransportService = require('../services/TransportService')

module.exports = {
	async index(req, res) {
		try {
			const transports = await TransportService.getTransports()

			res.status(200).send(transports)
		} catch (error) {
			res.send(error)
		}
	},
	async show(req, res) {
		try {
			const { id } = req.params
			const transport = await TransportService.getUniqueTransport(Number(id))

			res.status(200).send(transport)
		} catch (error) {
			res.send(error)
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
			const createdTransport = await TransportService.createTransport(transport)

			res.status(200).send(createdTransport)
		} catch (error) {
			res.send(error)
		}
	},
}
