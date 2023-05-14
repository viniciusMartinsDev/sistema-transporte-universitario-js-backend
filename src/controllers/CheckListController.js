const checkListService = require('../services/CheckListService')

module.exports = {
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
