const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async getPassengers() {
		const getPassengers = await prisma.passageiro.findMany()

		return getPassengers
	},
	async findById(id) {
		const getPassengerById = await prisma.passageiro.findUnique({
			where: {
				id,
			},
		})

		return getPassengerById
	},
	async createPassenger(passenger) {
		const createdPassenger = await prisma.passageiro.create({
			data: passenger,
		})

		return createdPassenger
	},
	async updatePassenger(id, data) {
		const updatedPassenger = await prisma.passageiro.update({
			where: {
				id,
			},
			data,
		})

		return updatedPassenger
	},
	async deletePassenger(id) {
		const deletedPassenger = await prisma.passageiro.delete({
			where: {
				id,
			},
		})

		return deletedPassenger
	},
}
