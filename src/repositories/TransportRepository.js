const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async getTransports() {
		const getTransports = await prisma.transporte.findMany()
		return getTransports
	},
	async findById(id) {
		const getUniqueTransport = await prisma.transporte.findUnique({
			where: {
				id,
			},
		})
		return getUniqueTransport
	},
	async createTransport(transport) {
		const createdTransport = await prisma.transporte.create({
			data: transport,
		})

		return createdTransport
	},
	async updateTransport(id, data) {
		const updatedTransport = await prisma.transporte.update({
			where: {
				id,
			},
			data,
		})

		return updatedTransport
	},
	async deleteTransport(id) {
		const deleteTransport = await prisma.transporte.delete({
			where: {
				id,
			},
		})

		return deleteTransport
	},
}
