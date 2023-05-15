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

	async getUserById(id) {
		const getUser = await prisma.usuario.findUnique({
			where: {
				id,
			},
		})

		return getUser
	},

	async getUserByEmail(email) {
		const getUserByEmail = await prisma.usuario.findUnique({
			where: {
				email,
			},
		})

		return getUserByEmail
	},

	async getUserByCpf(cpf) {
		const getUserByCpf = await prisma.usuario.findUnique({
			where: {
				cpf,
			},
		})

		return getUserByCpf
	},

	async getUserByRg(rg) {
		const getUserByRg = await prisma.usuario.findUnique({
			where: {
				rg,
			},
		})

		return getUserByRg
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
