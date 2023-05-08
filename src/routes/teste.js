const express = require('express')
const UserRepository = require('../repositories/UserRepository')

const router = express.Router()

// router.use('/', (req, res) => {
// 	res.send('Hello World!')
// })

router.post('/users', (req, res) => {
	const user = UserRepository.createUser()
	res.send(200, user)
})

module.exports = router
