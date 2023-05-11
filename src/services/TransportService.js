const transportRepository = require('../repositories/TransportRepository')

module.exports = {
	getTransports() {
		return transportRepository.getTransports()
	},
	createTransport(transport) {
		return transportRepository.createTransport(transport)
	},
}
