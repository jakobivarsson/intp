var SidebarView = function (model, ctrl) {
	var menuTable;
	var numberOfGuests;
	var menuPrice;

	model.addObserver(this);

	function renderMenuTable() {
		return table({class: "table"}, [
			tr({}, [th({}, [text("Dish name")]), th({}, [text("Cost")])])]
				.concat(model.getFullMenu().map(function (dish) {
					return tr({}, [
						td({}, [text(dish.name)]),
						td({}, [text(model.getNumberOfGuests() * model.getDishPrice(dish))]),
						td({}, [icon({onClick: ctrl.removeDish.bind(null,dish.id), class: "glyphicon glyphicon-remove remove"})])
					]);
				}))
		);
	}

	function renderNumberOfGuests() {
		return div({style: "float:left; margin-bottom:20px"}, [text("People: " + model.getNumberOfGuests())]);
	}

	function renderMenuPrice() {
		return div({style: "text-align:right"}, [text("Total price: " +  (model.getNumberOfGuests() * model.getTotalMenuPrice()) + " SEK")]);
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
					button({onClick: ctrl.decrementGuests, class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-minus"})]),
					button({onClick: ctrl.incrementGuests, class: "btn btn-default btn-xs"}, [icon({class: "glyphicon glyphicon-plus"})])
				]),
				hr({style: "clear:both;"}),
				menuTable,
				hr(),
				menuPrice,
				div({}, [
					button({onClick: ctrl.confirm, class: "btn", style: "display:block; margin:auto; margin-top: 20px;"}, [text("Confirm Dinner")])
				])
			])
		]);
	}

	this.mounted = false;

	this.update = function (object) {
		var temp = renderMenuTable();
		menuTable.replace(temp);
		menuTable = temp;
		temp = renderNumberOfGuests();
		numberOfGuests.replace(temp);
		numberOfGuests = temp;
		temp = renderMenuPrice()
		menuPrice.replace(temp);
		menuPrice = temp;
	}
}
