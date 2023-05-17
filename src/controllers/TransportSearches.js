const transportService = require('../services/TransportService')

module.exports = {
	async filter(req, res) {
		try {
			const { saida, destino, periodo } = req.query
			const where = {}
			if (saida) where.saida = saida
			if (destino) where.destino = destino
			if (periodo) where.periodo = periodo

			const filteredTransports = await transportService.getTransportsByFilter(where)
			res.status(200).send(filteredTransports)
		} catch (error) {
			console.log(error)
			res.status(400).send(error)
		}
	},

	async findByOwner(req, res) {
		try {
			const { usuarioId } = req.params

			const transports = await transportService.findByOwner(usuarioId)
			res.status(200).send(transports)
		} catch (error) {
			console.log(error)
			res.status(400).send(error)
		}
	},
}
