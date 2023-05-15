const jwtService = require('jsonwebtoken')

module.exports = {
	validateUser(req, res, next) {
		let { authorization } = req.headers
		if (authorization === undefined) authorization = ''
		const token = authorization.split(' ')
		const privateKey = process.env.JWT_PASS

		jwtService.verify(token[1], privateKey, (error, userInfo) => {
			if (error) {
				res.status(403).send('Não autorizado')
				return
			}
			req.userInfo = userInfo
			next()
		})
	},
}
