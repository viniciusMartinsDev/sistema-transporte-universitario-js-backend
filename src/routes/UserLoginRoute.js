const express = require('express')

// const userValidation = require('../middlewares/userValidation')
const LoginController = require('../controllers/UserLoginController')

const router = express.Router()

// router.get('/users', UserController.index)
// router.get('/users/:id', UserController.show)
router.post('/login', LoginController.login)
// router.put('/users/:id', UserController.update)
// router.delete('/users/:id', UserController.delete)

module.exports = router
