const passengerService = require('../services/PassengerService')

module.exports = {
	async create(req, res) {
		try {
			const dataPassenger = req.body
			const createdPassenger = await passengerService.createPassenger(dataPassenger)

			res.status(200).send(createdPassenger)
		} catch (error) {
			res.status(500).send(error)
		}
	},
}
