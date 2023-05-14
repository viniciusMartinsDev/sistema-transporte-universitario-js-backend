const checkListService = require('../services/CheckListService')

module.exports = {
	async index(req, res) {
		try {
			const getAll = await checkListService.getAllCheckList()
			res.status(200).send(getAll)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async show(req, res) {
		try {
			const { id } = req.params
			const checkList = await checkListService.getCheckListById(Number(id))
			res.status(200).send(checkList)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async create(req, res) {
		try {
			const checkListData = req.body

			const createdCheckList = await checkListService.newCheckList(checkListData)

			res.status(200).send(createdCheckList)
		} catch (error) {
			console.log(error)
			res.status(500).send(error)
		}
	},
}