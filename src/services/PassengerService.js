const passengerRepository = require('../repositories/PassengerRepository')
const transportRepository = require('../repositories/TransportRepository')

module.exports = {
	getPassengers() {
		return passengerRepository.getPassengers()
	},

	getPassengerById(id) {
		return passengerRepository.findById(Number(id))
	},

	getPassengersByTransport(transporteId) {
		return passengerRepository.getPassengersByTransport(Number(transporteId))
	},

	async createPassenger(passenger) {
		const transport = await transportRepository.findById(passenger.transporteId)

		if (passenger.usuarioId === transport.usuarioId) { throw new Error('O usuário é o dono do transporte.') }

		const passengers = await passengerRepository.getPassengersByTransport(passenger.transporteId)

		if (passengers && passengers.find((p) => p.usuarioId === passenger.usuarioId)) { throw new Error('O usuário já é um passageiro.') }

		return passengerRepository.createPassenger(passenger)
	},

	updatePassenger(id, data) {
		return passengerRepository.updatePassenger(Number(id), data)
	},

	deletePassenger(id) {
		return passengerRepository.deletePassenger(Number(id))
	},
}
