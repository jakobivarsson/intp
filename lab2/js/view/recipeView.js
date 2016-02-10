var RecipeView = function (model, ctrl) {
	this.render = function () {
		return div({id: "recipeView", class: "container"}, [
			div({}, model.getFullMenu().map(function (dish) {
				return div({class: "row recipe-row"}, [
					div({class: "col-md-2"}, [img({src: "images/" + dish.image})]),
					div({class: "col-md-4"}, [
						h2({}, [text(dish.name)]),
						p({}, [text(dish.description)])
					]),
					div({class: "col-md-6"}, [
						h3({}, [text("Preparation")]),
						p({}, [text(dish.description)])
					])
				]);
			}))
		])
	};
}
