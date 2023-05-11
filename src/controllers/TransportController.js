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
	async create(req, res) {
		try {
			const {
				placa,
				renavam,
				numPoltronas,
				numPoltronasOcupadas,
				numPoltronasLivres,
				modelo,
				marcas,
				usuarioId,
			} = req.body
			const id = Number(usuarioId)
			const transport = {
				placa,
				renavam,
				numPoltronas,
				numPoltronasOcupadas,
				numPoltronasLivres,
				modelo,
				marcas,
				usuarioId: id,
			}

			const createdTransport = await TransportService.createTransport(transport)

			res.status(200).send(createdTransport)
		} catch (error) {
			res.send(error)
		}
	},
}
