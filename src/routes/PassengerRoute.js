const express = require('express')

const PassengerController = require('../controllers/PassengerController')

const router = express.Router()

router.get('/passengers', PassengerController.index)
router.get('/passengers/:id', PassengerController.show)
router.post('/passengers', PassengerController.create)
// router.put('/passengers/:id', PassengerController.update)
// router.delete('/passengers/:id', PassengerController.delete)

module.exports = router
