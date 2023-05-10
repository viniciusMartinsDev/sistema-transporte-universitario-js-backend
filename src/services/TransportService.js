const transportRepository = require('../repositories/TransportRepository')

module.exports = {
	createTransport(transport) {
		return transportRepository.createTransport(transport)
	},
}
