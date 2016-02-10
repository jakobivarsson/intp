var DishCtrl = function (model) {
    this.back = function () {
        router.route("browser");
    }

    this.confirmDish = function (id) {
        model.addDishToMenu(id);
    }
}
