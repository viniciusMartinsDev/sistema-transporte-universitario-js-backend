const express = require('express')

const userValidation = require('../middlewares/userValidation')
const UserController = require('../controllers/UserController')
const { validateUser } = require('../middlewares/validateLogin')

const router = express.Router()

router.get('/users', validateUser, UserController.index)
router.get('/users/:id', validateUser, UserController.show)

router.post('/users', userValidation, UserController.create)

router.put('/users/:id', validateUser, UserController.update)

router.delete('/users/:id', validateUser, UserController.delete)

module.exports = router
