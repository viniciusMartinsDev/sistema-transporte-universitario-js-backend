const transportRepository = require('../repositories/TransportRepository')

module.exports = {
	getTransports() {
		return transportRepository.getTransports()
	},
	getUniqueTransport(id) {
		return transportRepository.getUniqueTransport(id)
	},
	createTransport(transport) {
		return transportRepository.createTransport(transport)
	},
}
