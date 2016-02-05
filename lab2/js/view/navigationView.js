
var NavigationView = function (container, model) {
	container.appendChild(div({id: "dinnerView", class: "container-fluid"}, [
		div({class: "row navigation-bar"}, [
			h2({}, [
				text("My Dinner: " + model.getNumberOfGuests() + " people"),
				button({class: "btn pull-right"}, [
					icon({class: "glyphicon glyphicon-chevron-left"}),
					text("Go back and edit dinner")
				])
			])
		])
	]));
}
