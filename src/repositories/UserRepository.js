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
				id,
			},
		})

		return getUser
	},

	async updateUser(id, data) {
		const updateUser = await prisma.users.update({
			where: {
				id,
			},
			data,
		})

		return updateUser
	},

	async deleteUser(id) {
		const deleteUser = await prisma.users.delete({
			where: {
				id,
			},
		})

		return deleteUser
	},
}
