
var SidebarView = function (container, model) {
	var menuTable;
	var numberOfGuests;
	var menuPrice;


	function renderMenuTable() {
		return table({class: "table"}, [
			tr({}, [th({}, [text("Dish name")]), th({}, [text("Cost")])])]
				.concat(model.getFullMenu().map(function (dish) {
				return tr({}, [
					td({}, [text(dish.name)]), 
					td({}, [text(model.getDishPrice(dish))]),
					td({}, [icon({class: "glyphicon glyphicon-remove remove"})])
				]);
			}))
		);
	}

	function renderNumberOfGuests() {
		return div({style: "float:left; margin-bottom:20px"}, [text("People: " + model.getNumberOfGuests())]);
	}

	function renderMenuPrice() {
		return div({style: "text-align:right"}, [text("Total price: " + model.getTotalMenuPrice() + " SEK")]);
	}

	this.render = function() {
		menuTable = renderMenuTable();
		numberOfGuests = renderNumberOfGuests();
		menuPrice = renderMenuPrice();

		return div({id: "sidebarView", class: "col-md-3"}, [
			div({class: "sidebar"}, [
				h3({}, [text("My dinner")]),
				numberOfGuests,
				div({style: "float:right;"}, [
					button({type: "button", class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-minus"})]),
					button({class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-plus"})])
				]),
				hr({style: "clear:both;"}),
				menuTable,
				hr(),
				menuPrice;
				div({}, [
					button({class: "btn", style: "display:block; margin:auto; margin-top: 20px;"}, [text("Confirm Dinner")])
				])
			])
		]));
	}

	this.mounted = false;

	this.update = function (object) {
		if(mounted) {
			menuTable.replace(renderMenuTable());
			numberOfGuests.replace(renderNumberOfGuests());
			menuPrice.replace(renderMenuPrice());
		}
	}
}
