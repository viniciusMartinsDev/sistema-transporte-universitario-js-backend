const passengerService = require('../services/PassengerService')
const dataViews = require('../views/dataViews')

module.exports = {
	async getPassengersByTransport(req, res) {
		try {
			const { transporteId } = req.params

			const passengers = await passengerService.getPassengersByTransport(transporteId)

			res.status(200).send(passengers.map((passenger) => dataViews.passenger(passenger)))
		} catch (error) {
			res.status(400).send({ message: error.message })
		}
	},
}
