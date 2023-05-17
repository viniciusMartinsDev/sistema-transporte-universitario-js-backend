const Joi = require('joi')

const statusPassenger = require('../utils/statusPassenger')

module.exports = async (req, res, next) => {
	const {
		assento,
		status,
		usuarioId,
		transporteId,
	} = req.body

	const passenger = Joi.object({
		assento: Joi.string()
			.required(),

		status: Joi.string()
			.valid(...statusPassenger)
			.required(),

		usuarioId: Joi.required(),

		transporteId: Joi.required(),
	})

	try {
		await passenger.validateAsync({
			assento, status, usuarioId, transporteId,
		})

		next()
	} catch (error) {
		let field = error.details[0].path[0]

		if (field === 'usuarioId') field = 'usuário'

		if (field === 'transporteId') field = 'transporte'

		res.status(400).send({ message: `Erro ao validar ${field}.` })
	}
}
