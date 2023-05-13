const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async createPassenger(passenger) {
		const createdPassenger = await prisma.passageiro.create({
			data: passenger,
		})

		return createdPassenger
	},
}
