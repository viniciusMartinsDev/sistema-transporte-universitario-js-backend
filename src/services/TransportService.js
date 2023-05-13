const transportRepository = require('../repositories/TransportRepository')

module.exports = {
	getTransports() {
		return transportRepository.getTransports()
	},
	findById(id) {
		return transportRepository.findById(id)
	},
	createTransport(transport) {
		return transportRepository.createTransport(transport)
	},
	updateTransport(id, data) {
		return transportRepository.updateTransport(id, data)
	},
	deleteTransport(id) {
		return transportRepository.deleteTransport(id)
	},
}
