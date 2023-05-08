const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async createUser(user) {
		const createdUser = await prisma.users.create({
			data: user,
		})

		return createdUser
	},
}
