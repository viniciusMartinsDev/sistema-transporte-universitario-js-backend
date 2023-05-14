const checkListRepository = require('../repositories/CheckListRepository')

module.exports = {
	getAllCheckList() {
		return checkListRepository.getAllCheckList()
	},
	getCheckListById(id) {
		return checkListRepository.findByIdCheckList(id)
	},
	newCheckList(checkList) {
		return checkListRepository.createCheckList(checkList)
	},
	updateCheckList(id, data) {
		return checkListRepository.updateCheckList(id, data)
	},
	deleteCheckList(id) {
		return checkListRepository.deleteCheckList(id)
	},
}
