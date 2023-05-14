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
}
