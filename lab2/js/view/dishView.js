
var DishView = function (container, model) {
	var dish = model.getSelectedDish();

	var price = dish.ingredients.reduce(function (sum, ingredient) {
		return sum + ingredient.price;
	}, 0);

	container.appendChild(div({id: "mainView", class: "col-md-9"}, [
		div({class: "col-md-6"}, [
			h2({}, [text(dish.name)]),
			img({src: "images/" + dish.image}),
			p({}, [text(dish.description)]),
			button({class: "btn"}, [
				icon({class: "glyphicon glyphicon-chevron-left"}),
				text(" back to Select Dish")
			])
		]),
		div({class: "col-md-6 ingredients"}, [
			h4({}, [text("Ingredients for " + model.getNumberOfGuests() + " people")]),
			hr(),
			table({class: "table"}, dish.ingredients.map(function (ingredient) {
				return tr({}, [
					td({}, [text(ingredient.quantity + " " + ingredient.unit)]),
					td({}, [text(ingredient.name)]),
					td({}, [text("SEK")]),
					td({style: "text-align: right"}, [text(ingredient.price)])
				])
			})),
			hr(),
			button({class: "btn"}, [text("Confirm Dish")]),
			span({class: "pull-right"}, [text("Price: " + price)])
		]),
		div({class: "col-md-12"}, [
			h3({}, [text("Preparation")]),
			p({}, [text(dish.description)])
		])
	]));
}
