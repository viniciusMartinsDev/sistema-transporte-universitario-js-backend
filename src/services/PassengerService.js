const passengerRepository = require('../repositories/PassengerRepository')

module.exports = {
	createPassenger(pasenger) {
		return passengerRepository.createPassenger(pasenger)
	},
}
