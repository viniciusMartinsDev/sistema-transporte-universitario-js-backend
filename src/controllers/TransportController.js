const TransportService = require('../services/TransportService')

module.exports = {
	async create(req, res) {
		try {
			const transport = req.body

			const createdTransport = await TransportService.createTransport(transport)

			res.status(200).send(createdTransport)
		} catch (error) {
			res.send(error)
		}
	},
}
