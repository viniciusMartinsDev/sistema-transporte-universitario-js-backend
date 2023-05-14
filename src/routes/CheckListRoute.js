const express = require('express')

const CheckListController = require('../controllers/CheckListController')

const router = express.Router()

router.get('/checklists', CheckListController.index)
router.get('/checklists/:id', CheckListController.show)
router.post('/checklists', CheckListController.create)
router.put('/checklists/:id', CheckListController.update)
router.delete('/checklists/:id', CheckListController.delete)

module.exports = router
