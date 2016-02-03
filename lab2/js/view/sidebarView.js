
var SidebarView = function (container, model) {
	container.appendChild(div({class: "sidebar"}, [
		h3({}, [text("My dinner")]),
		div({}, [text("Number of guests: " + model.getNumberOfGuests())]),
		div({}, [
			button({class: "btn"}, [icon({class: "glyphicon glyphicon-minus"})]),
			button({class: "btn"}, [icon({class: "glyphicon glyphicon-plus"})])
		]),
		h4({}, [text("Dishes")]),
		ul({class: "list-unstyled"}, model.getFullMenu().map(function (dish) {
			return li({}, [text(dish.name)]);
		})),
		hr(),
		div({}, [text("Total price: " + model.getTotalMenuPrice() + " SEK")]),
		div({}, [
			button({class: "btn"}, [text("Confirm Dinner")])
		])
	]));
}
