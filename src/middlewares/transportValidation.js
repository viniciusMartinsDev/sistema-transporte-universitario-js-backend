const Joi = require('joi')

module.exports = async (req, res, next) => {
	const {
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

	})

	try {
		await transport.validateAsync({
			placa,
			renavam,
			numPoltronas,
			numPoltronasLivres,
			modelo,
			marca,
		})

		next()
	} catch (error) {
		let field = error.details[0].path[0]

		if (field === 'numPoltronas') field = 'número de poltronas'

		if (field === 'numPoltronasLivres') field = 'número de poltronas livres'

		res.status(400).send({ message: `Erro ao validar ${field}.` })
	}
}
