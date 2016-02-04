
var RecipeView = function (container, model) {
	container.appendChild(div({id: "dinnerView", class: "container"}, [
		div({class: "row"}, [
			h2({}, [
				text("My Dinner: " + model.getNumberOfGuests() + " people"),
				button({class: "btn pull-right"}, [
					icon({class: "glyphicon glyphicon-chevron-left"}),
					text("Go back and edit dinner")
				])
			])
		]),
		div({}, model.getFullMenu().map(function (dish) {
			return div({class: "row"}, [
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
	]));
}
