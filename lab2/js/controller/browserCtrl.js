var BrowserCtrl = function (model) {
	this.selectDish = function (dish) {
		model.setSelectedDish(dish);
		router.route("dish");
	}
}