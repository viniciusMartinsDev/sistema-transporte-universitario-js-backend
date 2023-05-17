const express = require('express')

const PassengerController = require('../controllers/PassengerController')
const passengerValidation = require('../middlewares/passengerValidation')
const PassengerSearches = require('../controllers/PassengerSearches')

const router = express.Router()

router.get('/passengers', PassengerController.index)
router.get('/passengers/:id', PassengerController.show)

router.get('/passengers-per-transport/:transporteId', PassengerSearches.getPassengersByTransport)

router.post('/passengers', passengerValidation, PassengerController.create)

router.put('/passengers/:id', PassengerController.update)

router.delete('/passengers/:id', PassengerController.delete)

module.exports = router
