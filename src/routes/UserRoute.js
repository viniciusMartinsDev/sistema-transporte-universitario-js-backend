const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()

router.get('/users', UserController.index)
router.get('/users/:id', UserController.getUniqueUser)
router.post('/users', UserController.create)

module.exports = router
