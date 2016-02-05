
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
		div({class: "row", style: "display: flex"}, [
			div({class: "col-md-9"},
				model.getFullMenu().map(function (dish) {
					return div({class: "col-md-3", style: "float:right"}, [
						div({class: "browse-dish"}, [
							img({class: "border", src: "images/" + dish.image}),
							h4({}, [text(dish.name)])
						]),
						div({style: "text-align: right"}, [text(model.getDishPrice(dish) + " SEK")])
					])
				})
			),
			div({class: "col-md-3 total-price"}, [
				span({style: "position: absolute; bottom: 0; left: 10px"}, [text("Total: " + model.getTotalMenuPrice() + " SEK")])
			])
		]),
		hr(),
		button({class: "btn", style: "display:block; margin:auto"}, [text("Print full recipe")])
	]));
}
