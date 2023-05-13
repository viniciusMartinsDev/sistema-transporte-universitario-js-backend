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
	deleteTransport(id) {
		return transportRepository.deleteTransport(id)
	},
}
