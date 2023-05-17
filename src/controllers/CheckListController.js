const checkListService = require('../services/CheckListService')

module.exports = {
	async index(req, res) {
		try {
			const getAll = await checkListService.getAllCheckList()
			res.status(200).send(getAll)
		} catch (error) {
			res.status(400).send(error)
		}
	},
	async show(req, res) {
		try {
			const { id } = req.params
			const checkList = await checkListService.getCheckListById(id)
			res.status(200).send(checkList)
		} catch (error) {
			res.status(400).send(error)
		}
	},
	async create(req, res) {
		try {
			const checkListData = req.body

			const createdCheckList = await checkListService.newCheckList(checkListData)

			res.status(200).send(createdCheckList)
		} catch (error) {
			console.log(error)
			res.status(400).send(error)
		}
	},
	async update(req, res) {
		try {
			const { id } = req.params
			const data = req.body
			const updatedCheckList = await checkListService.updateCheckList(id, data)
			res.status(200).send(updatedCheckList)
		} catch (error) {
			res.status(400).send(error)
		}
	},
	async delete(req, res) {
		try {
			const { id } = req.params
			await checkListService.deleteCheckList(id)

			res.status(200).send()
		} catch (error) {
			res.status(400).send(error)
		}
	},
}
