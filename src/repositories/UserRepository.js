const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
	async createUser(user) {
		const createdUser = await prisma.usuario.create({
			data: user,
		})

		return createdUser
	},

	async getUsers() {
		const getUsers = await prisma.usuario.findMany()

		return getUsers
	},

	async getUser(id) {
		const getUser = await prisma.usuario.findUnique({
			where: {
				id,
			},
		})

		return getUser
	},

	async updateUser(id, data) {
		const updateUser = await prisma.usuario.update({
			where: {
				id,
			},
			data,
		})

		return updateUser
	},

	async deleteUser(id) {
		const deleteUser = await prisma.usuario.delete({
			where: {
				id,
			},
		})

		return deleteUser
	},
}
