const checkListRepository = require('../repositories/CheckListRepository')

module.exports = {
	newCheckList(checkList) {
		return checkListRepository.createCheckList(checkList)
	},
}
