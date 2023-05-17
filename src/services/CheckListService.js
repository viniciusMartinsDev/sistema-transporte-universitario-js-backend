const checkListRepository = require('../repositories/CheckListRepository')

module.exports = {
	getAllCheckList() {
		return checkListRepository.getAllCheckList()
	},
	getCheckListById(id) {
		return checkListRepository.findByIdCheckList(Number(id))
	},
	newCheckList(checkList) {
		return checkListRepository.createCheckList(checkList)
	},
	updateCheckList(id, data) {
		return checkListRepository.updateCheckList(Number(id), data)
	},
	deleteCheckList(id) {
		return checkListRepository.deleteCheckList(Number(id))
	},
}
