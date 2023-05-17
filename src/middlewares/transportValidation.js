const Joi = require('joi')
const transportService = require('../services/TransportService')

module.exports = async (req, res, next) => {
	const {
		saida,
		destino,
		periodo,
		placa,
		renavam,
		numPoltronas,
		numPoltronasLivres,
		modelo,
		marca,
	} = req.body

	const transport = Joi.object({

		placa: Joi.string()
			.min(7)
			.pattern(/^[a-zA-Z0-9]+$/)
			.required(),

		renavam: Joi.string()
			.min(11)
			.pattern(/^[0-9]+$/)
			.required(),

		numPoltronas: Joi.number()
			.min(1)
			.required(),

		numPoltronasLivres: Joi.ref('numPoltronas'),

		modelo: Joi.string()
			.min(3)
			.required(),

		marca: Joi.string()
			.min(3)
			.required(),

		saida: Joi.string()
			.min(3)
			.required(),

		destino: Joi.string()
			.min(3)
			.required(),

		periodo: Joi.string()
			.min(3)
			.required(),
	})

	try {
		await transport.validateAsync({
			saida,
			destino,
			periodo,
			placa,
			renavam,
			numPoltronas,
			numPoltronasLivres,
			modelo,
			marca,
		})

		const licensePlateExists = await transportService.findByLicensePlate(placa)

		const renavamExists = await transportService.findByRenavam(renavam)

		if (licensePlateExists) { throw new Error('Já existe um transporte com esta placa.') }

		if (renavamExists) { throw new Error('Já existe um transporte com este renavam.') }

		next()
	} catch (error) {
		if (error.details && error.details[0].path[0]) {
			let field = error.details[0].path[0]

			if (field === 'numPoltronas') field = 'número de poltronas'

			if (field === 'numPoltronasLivres') field = 'número de poltronas livres'

			res.status(400).send({ message: `Erro ao validar ${field}.` })
			return
		}

		res.status(400).send({ message: error.message })
	}
}
