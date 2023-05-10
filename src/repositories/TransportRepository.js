const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async createTransport(transport) {
		const createdTransport = await prisma.transporte.create({
			data: transport,
		})

		return createdTransport
	},
}
