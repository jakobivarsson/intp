
var BrowserView = function (model, ctrl) {
	model.addObserver(this);

	function renderDishes(type, filter) {
		return div({class: "browse"}, model.getAllDishes(type, filter).map(function (dish) {
			return div({class: "col-sm-3"}, [
				div({class: "browse-dish", onClick: ctrl.selectDish.bind(null, dish)}, [
					div({class: "image-container"}, [
						img({src: "images/" + dish.image})
					]),
					div({class: "info"}, [
						h4({}, [text(dish.name)]),
						p({}, [text(dish.description)])
					])
				])
			]);
		}));
	}

	var dishes;

	this.render = function () {
		dishes = renderDishes(model.getSelectedType());

		return div({id: "mainView", class: "col-md-9"}, [
			div({class: "search-bar"}, [
				h3({}, [text("SELECT DISH")]),
				hr(),
				div({class: "row"}, [
					form({class: "form-inline col-sm-4"}, [
						input({placeholder: "Enter key words", class: "form-control"}),
						button({class: "btn"}, [text("search")])
					]),
					div({class: "dropdown col-sm-4"}, [
						button({class: "btn dropdown-toggle", "data-toggle": "dropdown"}, [
							text(model.getSelectedType() + " "),
							span({class: "caret"})
						]),
						ul({class: "dropdown-menu"}, model.getDishTypes().map(function (type) {
							return li({onClick: ctrl.selectType.bind(null, type)}, [a({href: "#"}, [text(type)])]);
						}))
					])
				])
			]),
			dishes
		]);
	};

	this.update = function () {
		var temp = renderDishes(model.getSelectedType());
		dishes.replace(temp);
		dishes = temp;
	}

}
