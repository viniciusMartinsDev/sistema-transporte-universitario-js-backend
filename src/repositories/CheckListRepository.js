const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
module.exports = {
	async createCheckList(checkList) {
		const createdCheckList = await prisma.listaControle.create({
			data: checkList,
		})

		return createdCheckList
	},
}
