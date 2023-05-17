const jwtService = require('jsonwebtoken')

const TransportService = require('../services/TransportService')

module.exports = async (req, res, next) => {
	try {
		const { id } = req.params

		const { authorization } = req.headers

		const token = authorization.split(' ')
		const privateKey = process.env.JWT_PASS

		const decoded = jwtService.verify(token[1], privateKey)

		const owner = await TransportService.findById(id)

		if (owner.usuarioId !== decoded.id) throw new Error()

		next()
	} catch (error) {
		res.send(401).send({ message: 'Você não é o dono do transporte.' })
	}
}
