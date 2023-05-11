const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async getTransports() {
		const getTransports = await prisma.transporte.findMany()
		return getTransports
	},
	async createTransport(transport) {
		const createdTransport = await prisma.transporte.create({
			data: transport,
		})

		return createdTransport
	},
}
