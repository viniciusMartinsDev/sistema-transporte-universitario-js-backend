const express = require('express')
const TransportController = require('../controllers/TransportController')

const router = express.Router()

router.get('/transports', TransportController.index)
// router.get('/transports/:id', TransportController.show)
router.post('/transports', TransportController.create)
// router.put('/transports/:id', TransportController.update)
// router.delete('/transports/:id', TransportController.delete)

module.exports = router
