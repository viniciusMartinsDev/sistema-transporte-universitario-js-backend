const express = require('express')

const userValidation = require('../middlewares/userValidation')
const UserController = require('../controllers/UserController')
const { validateUser } = require('../middlewares/validateLogin')

const router = express.Router()

router.post('/users', userValidation, UserController.create)
router.use(validateUser)
router.get('/users', UserController.index)
router.get('/users/:id', UserController.show)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

module.exports = router
