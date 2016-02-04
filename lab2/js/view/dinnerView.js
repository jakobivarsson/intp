
var DinnerView = function (container, model) {
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
		div({class: "row"}, [
			div({class: "col-md-9"},
				model.getFullMenu().map(function (dish) {
					return div({class: "col-md-4"}, [
						div({}, [img({src: "images/" + dish.image}), text(dish.name)]),
						text("45")
					])
				})
			),
			div({class: "col-md-3"}, [
				text("Total:"),
				text(model.getTotalMenuPrice() + " SEK")
			])
		]),
		hr(),
		button({class: "btn"}, [text("Print full recipe")])
	]));
}
