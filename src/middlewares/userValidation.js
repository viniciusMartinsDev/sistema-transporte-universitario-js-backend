const Joi = require('joi')

module.exports = async (req, res, next) => {
	const {
		nome, sobrenome, rg, cpf, email, senha, senhaRepetida,
	} = req.body

	const user = Joi.object({
		nome: Joi.string()
			.min(3)
			.required(),

		sobrenome: Joi.string()
			.min(3)
			.required(),

		rg: Joi.string(),

		cpf: Joi.string()
			.min(14)
			.required(),

		email: Joi.string()
			.min(14)
			.required(),

		senha: Joi.string()
			.min(8)
			.required(),

		senhaRepetida: Joi.ref('senha'),
	})

	try {
		await user.validateAsync({
			nome,
			sobrenome,
			rg,
			cpf,
			email,
			senha,
			senhaRepetida,
		})

		next()
	} catch (error) {
		res.status(400).send({ message: `Erro ao validar ${error.details[0].path[0]}.` })
	}
}
