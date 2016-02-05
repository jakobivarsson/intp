
var SidebarView = function (container, model) {
	container.appendChild(div({id: "sidebarView", class: "col-md-3"}, [
		div({class: "sidebar"}, [
			h3({}, [text("My dinner")]),
			div({}, [text("People " + model.getNumberOfGuests())]),
			div({}, [
				button({type: "button", class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-minus"})]),
				button({class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-plus"})])
			]),
			hr(),
			table({class: "table"}, [
				tr({}, [th({}, [text("Dish name")]), th({}, [text("Cost")])])]
					.concat(model.getFullMenu().map(function (dish) {
					return tr({}, [td({}, [text(dish.name)]), td({}, [text("23")])]);
				}))
			),
			hr(),
			div({}, [text("Total price: " + model.getTotalMenuPrice() + " SEK")]),
			div({}, [
				button({class: "btn"}, [text("Confirm Dinner")])
			])
		])
	]));
}
