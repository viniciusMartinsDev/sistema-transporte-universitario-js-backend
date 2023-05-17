module.exports = {
	user(user) {
		const newView = {
			email: user.email,
			nome: user.nome,
			sobrenome: user.sobrenome,
			rg: user.rg,
			cpf: user.cpf,
		}

		return newView
	},

	transport(transport) {
		const newView = {
			placa: transport.placa,
			numPoltronas: transport.numPoltronas,
			numPoltronasLivres: transport.numPoltronasLivres,
			modelo: transport.modelo,
			marca: transport.marca,
			saida: transport.saida,
			destino: transport.destino,
			periodo: transport.periodo,
		}

		return newView
	},

	passenger(passenger) {
		const newView = {
			assento: passenger.assento,
			status: passenger.status,
			usuarioId: passenger.usuarioId,
			transporteId: passenger.transporteId,
		}

		return newView
	},
}
