
var SidebarView = function (container, model) {
	container.appendChild(div({id: "sidebarView", class: "col-md-3"}, [
		div({class: "sidebar"}, [
			h3({}, [text("My dinner")]),
			div({style: "float:left; margin-bottom:20px"}, [text("People: " + model.getNumberOfGuests())]),
			div({style: "float:right;"}, [
				button({type: "button", class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-minus"})]),
				button({class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-plus"})])
			]),
			hr({style: "clear:both;"}),
			table({class: "table"}, [
				tr({}, [th({}, [text("Dish name")]), th({}, [text("Cost")])])]
					.concat(model.getFullMenu().map(function (dish) {
					return tr({}, [
						td({}, [text(dish.name)]), 
						td({}, [text(model.getDishPrice(dish))]),
						td({}, [icon({class: "glyphicon glyphicon-remove remove"})])
					]);
				}))
			),
			hr(),
			div({style: "text-align:right"}, [text("Total price: " + model.getTotalMenuPrice() + " SEK")]),
			div({}, [
				button({class: "btn", style: "display:block; margin:auto; margin-top: 20px;"}, [text("Confirm Dinner")])
			])
		])
	]));
}
