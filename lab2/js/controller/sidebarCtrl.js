var SidebarCtrl = function (model) {
    this.incrementGuests = function () {
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    }

    this.decrementGuests = function () {
        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    }

    this.removeDish = function (id) {
        model.removeDishFromMenu(id);
    }
}
