var DishCtrl = function (model) {
    this.back = function () {
        
    }

    this.confirmDish = function (id) {
        model.addDishToMenu(id);
    }
}
