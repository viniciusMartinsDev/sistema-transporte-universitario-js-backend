module.exports = {
	userView(user) {
		const newView = {
			email: user.email,
			nome: user.nome,
			sobrenome: user.sobrenome,
			rg: user.rg,
			cpf: user.cpf,
		}

		return newView
	},
}
