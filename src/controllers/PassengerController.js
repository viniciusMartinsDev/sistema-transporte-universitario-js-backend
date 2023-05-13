const passengerService = require('../services/PassengerService')

module.exports = {
	async index(req, res) {
		try {
			const getPassengers = await passengerService.getPassengers()

			res.status(200).send(getPassengers)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async show(req, res) {
		const { id } = req.params
		const getPassengerById = await passengerService.getPassengerById(Number(id))

		res.status(200).send(getPassengerById)
	},
	async create(req, res) {
		try {
			const dataPassenger = req.body
			const createdPassenger = await passengerService.createPassenger(dataPassenger)

			res.status(200).send(createdPassenger)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body

			const updatedPassenger = await passengerService.updatePassenger(Number(id), data)

			res.status(200).send(updatedPassenger)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async delete(req, res) {
		try {
			const { id } = req.params

			await passengerService.deletePassenger(Number(id))

			res.status(200).send()
		} catch (error) {
			res.status(500).send(error)
		}
	},
}
