const passengerRepository = require('../repositories/PassengerRepository')

module.exports = {
	getPassengers() {
		return passengerRepository.getPassengers()
	},
	getPassengerById(id) {
		return passengerRepository.findById(id)
	},
	createPassenger(pasenger) {
		return passengerRepository.createPassenger(pasenger)
	},
	updatePassenger(id, data) {
		return passengerRepository.updatePassenger(id, data)
	},
	deletePassenger(id) {
		return passengerRepository.deletePassenger(id)
	},
}
