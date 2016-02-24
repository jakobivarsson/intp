var DishView = function (model, ctrl) {
	model.addObserver(this); 

	function renderIngredients() {
		var dish = model.getSelectedDish();
		var price = model.getDishPrice(dish);
		return div({class: "col-md-6 ingredients"}, [
			h4({}, [text("Ingredients for " + model.getNumberOfGuests() + " people")]),
			hr(),
			table({class: "table"}, dish.ingredients.map(function (ingredient) {
				return tr({}, [
					td({}, [text(ingredient.quantity + " " + ingredient.unit)]),
					td({}, [text(ingredient.name)]),
					td({}, [text("SEK")]),
					td({style: "text-align: right"}, [text(ingredient.price * model.getNumberOfGuests())])
				])
			})),
			hr(),
			button({class: "btn", onClick: ctrl.confirmDish.bind(null, dish.id)}, [text("Confirm Dish")]),
			span({class: "pull-right"}, [text("Price: " + (price * model.getNumberOfGuests()))])
		])
	}

	var ingredients;

	this.render = function() {
		var dish = model.getSelectedDish();
		var price = model.getDishPrice(dish);

		ingredients = renderIngredients();

		return div({id: "mainView", class: "col-md-9"}, [
			div({class: "col-md-6"}, [
				h2({}, [text(dish.name)]),
				img({src: "images/" + dish.image}),
				p({}, [text(dish.description)]),
				button({class: "btn", onClick: ctrl.back}, [
					icon({class: "glyphicon glyphicon-chevron-left"}),
					text(" back to Select Dish")
				])
			]),
			ingredients,
			div({class: "col-md-12"}, [
				h3({}, [text("Preparation")]),
				p({}, [text(dish.description)])
			])
		]);
	}

	this.update = function () {
		var temp = renderIngredients();
		ingredients.replace(temp);
		ingredients = temp;
	}
};
