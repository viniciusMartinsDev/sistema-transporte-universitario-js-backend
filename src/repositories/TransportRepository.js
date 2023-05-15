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
	async getTransportsByFilter(where) {
		const getTransportsByFilter = await prisma
			.$queryRaw`SELECT * FROM TRANSPORTES WHERE ( destino = ${where.destino} OR ${where.destino} IS NULL )
				AND (saida = ${where.saida} OR ${where.saida} IS NULL)
				AND (periodo = ${where.periodo} OR ${where.periodo} IS NULL)
				`

		return getTransportsByFilter
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
