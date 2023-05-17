const jwtService = require('jsonwebtoken')

module.exports = {
	validateUser(req, res, next) {
		try {
			const { authorization } = req.headers

			if (authorization === undefined) throw new Error()

			const token = authorization.split(' ')
			const privateKey = process.env.JWT_PASS

			const decoded = jwtService.verify(token[1], privateKey)

			req.body.usuarioId = decoded.id

			next()
		} catch (error) {
			res.status(401).send({ message: 'Token inválido.' })
		}
	},
}
