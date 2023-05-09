const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async createUser(user) {
		const createdUser = await prisma.users.create({
			data: user,
		})

		return createdUser
	},

	async getUsers() {
		const getUsers = await prisma.users.findMany()

		return getUsers
	},

	async getUser(id) {
		const getUser = await prisma.users.findUnique({
			where: {
				id: id
			}
		})

		return getUser
	}
}
