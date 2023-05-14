const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
module.exports = {
	async getAllCheckList() {
		const getAll = await prisma.listaControle.findMany()

		return getAll
	},
	async findByIdCheckList(id) {
		const getCheckList = await prisma.listaControle.findUnique({
			where: {
				id,
			},
		})

		return getCheckList
	},
	async createCheckList(checkList) {
		const createdCheckList = await prisma.listaControle.create({
			data: checkList,
		})

		return createdCheckList
	},
}
