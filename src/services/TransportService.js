const transportRepository = require('../repositories/TransportRepository')

module.exports = {
	getTransports() {
		return transportRepository.getTransports()
	},

	findByRenavam(renavam) {
		return transportRepository.findByRenavam(renavam)
	},

	findByLicensePlate(licensePlate) {
		return transportRepository.findByLicensePlate(licensePlate)
	},

	findByOwner(usuarioId) {
		return transportRepository.findByOwner(Number(usuarioId))
	},

	findById(id) {
		return transportRepository.findById(Number(id))
	},

	getTransportsByFilter(where) {
		return transportRepository.getTransportsByFilter(where)
	},

	createTransport(transport) {
		return transportRepository.createTransport(transport)
	},

	updateTransport(id, data) {
		return transportRepository.updateTransport(Number(id), data)
	},

	deleteTransport(id) {
		return transportRepository.deleteTransport(Number(id))
	},
}
