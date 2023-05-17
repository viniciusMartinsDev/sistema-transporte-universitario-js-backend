const express = require('express')

const TransportController = require('../controllers/TransportController')
const TransportSearches = require('../controllers/TransportSearches')

const transportValidation = require('../middlewares/transportValidation')
const validateOwner = require('../middlewares/validateOwner')

const router = express.Router()

router.get('/transports', TransportController.index)
router.get('/transports/:id', TransportController.show)

router.get('/transports/filter', TransportSearches.filter)
router.get('/transports-per-owner/:usuarioId', TransportSearches.findByOwner)

router.post('/transports', transportValidation, TransportController.create)

router.put('/transports/:id', validateOwner, TransportController.update)

router.delete('/transports/:id', TransportController.delete)

module.exports = router
