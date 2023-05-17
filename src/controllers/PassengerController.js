const passengerService = require('../services/PassengerService')

module.exports = {
	async index(req, res) {
		try {
			const getPassengers = await passengerService.getPassengers()

			res.status(200).send(getPassengers)
		} catch (error) {
			res.status(400).send({ message: error.message })
		}
	},

	async show(req, res) {
		try {
			const { id } = req.params
			const getPassengerById = await passengerService.getPassengerById(id)

			res.status(200).send(getPassengerById)
		} catch (error) {
			res.status(400).send({ message: error.message })
		}
	},

	async create(req, res) {
		try {
			const passenger = req.body

			const createdPassenger = await passengerService.createPassenger(passenger)

			res.status(200).send(createdPassenger)
		} catch (error) {
			res.status(400).send({ message: error.message })
		}
	},

	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body

			const updatedPassenger = await passengerService.updatePassenger(id, data)

			res.status(200).send(updatedPassenger)
		} catch (error) {
			res.status(400).send({ message: error.message })
		}
	},

	async delete(req, res) {
		try {
			const { id } = req.params

			await passengerService.deletePassenger(id)

			res.status(200).send()
		} catch (error) {
			res.status(400).send(error.message)
		}
	},
}
