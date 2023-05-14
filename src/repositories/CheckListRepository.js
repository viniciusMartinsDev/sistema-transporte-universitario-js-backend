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
	async updateCheckList(id, data) {
		const updatedCheckList = await prisma.listaControle.update({
			where: {
				id,
			},
			data,
		})

		return updatedCheckList
	},
	async deleteCheckList(id) {
		const deletedCheckList = await prisma.listaControle.delete({
			where: { id },
		})

		return deletedCheckList
	},
}
