var BrowserCtrl = function (model) {
	this.selectDish = function (dish) {
		model.setSelectedDish(dish);
		router.route("dish");
	}

	this.selectType = function (type) {
		model.setSelectedType(type);
	}
}