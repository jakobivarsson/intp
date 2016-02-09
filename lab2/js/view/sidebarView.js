var ViewFactory = function (renderFunction, container, model, ctrl) {

	var sidebarView = render(model, ctrl);

	var view = {
		render: renderFunction,
		update: update() {
			for(var i = 0; i < container.children.length; i++) {
				if (container.children[i] === sidebarView) {
					sidebarView = render(model, ctrl);
					container.replaceChild(sidebarView, container.children[i]);
					return;
				}
			}
		};
	};

	model.addObserver(view);
	container.appendChild(view);

	return view;
}

var SidebarView = ViewFactory.bind({}, function (model, ctrl) {
	return div({id: "sidebarView", class: "col-md-3"}, [
		div({class: "sidebar"}, [
			h3({}, [text("My dinner")]),
			div({style: "float:left; margin-bottom:20px"}, [text("People: " + model.getNumberOfGuests())]),
			div({style: "float:right;"}, [
				button({type: "button", class: "btn btn-default btn-xs", onClick: ctrl.decrementGuests}, [icon({class: "glyphicon glyphicon-minus"})]),
				button({class: "btn btn-default btn-xs", onClick: ctrl.incrementGuests}, [icon({class: "glyphicon glyphicon-plus"})])
			]),
			hr({style: "clear:both;"}),
			table({class: "table"}, [
				tr({}, [th({}, [text("Dish name")]), th({}, [text("Cost")])])]
					.concat(model.getFullMenu().map(function (dish) {
					return tr({}, [
						td({}, [text(dish.name)]),
						td({}, [text(model.getDishPrice(dish))]),
						td({onClick: ctrl.removeDish.bind(null, dish.id)}, [icon({class: "glyphicon glyphicon-remove remove"})])
					]);
				}))
			),
			hr(),
			div({style: "text-align:right"}, [text("Total price: " + model.getTotalMenuPrice() + " SEK")]),
			div({}, [
				button({class: "btn", onClick: "sideBarCtrl.showDinner()", style: "display:block; margin:auto; margin-top: 20px;"}, [text("Confirm Dinner")])
			])
		])
	]);
});


// var ViewFactory = function (renderFunction) {
// 	return function (container, model, ctrl) {
// 		var render = renderFunction.bind(null, model, ctrl);
// 		var view = render();
// 		container.appendChild(view);
//
// 		model.addObserver(this);
//
// 		this.update = function () {
// 			for(var i = 0; i < container.children.length; i++) {
// 				if (container.children[i] === sidebarView) {
// 					sidebarView = render();
// 					container.replaceChild(sidebarView, container.children[i]);
// 					return;
// 				}
// 			}
// 		};
// 	}
// }
//
// var SidebarView = ViewFactory (function (model, ctrl) {
// 	return div({id: "sidebarView", class: "col-md-3"}, [
// 		div({class: "sidebar"}, [
// 			h3({}, [text("My dinner")]),
// 			div({style: "float:left; margin-bottom:20px"}, [text("People: " + model.getNumberOfGuests())]),
// 			div({style: "float:right;"}, [
// 				button({type: "button", class: "btn btn-default btn-xs", onClick: ctrl.decrementGuests}, [icon({class: "glyphicon glyphicon-minus"})]),
// 				button({class: "btn btn-default btn-xs", onClick: ctrl.incrementGuests}, [icon({class: "glyphicon glyphicon-plus"})])
// 			]),
// 			hr({style: "clear:both;"}),
// 			table({class: "table"}, [
// 				tr({}, [th({}, [text("Dish name")]), th({}, [text("Cost")])])]
// 					.concat(model.getFullMenu().map(function (dish) {
// 					return tr({}, [
// 						td({}, [text(dish.name)]),
// 						td({}, [text(model.getDishPrice(dish))]),
// 						td({onClick: ctrl.removeDish.bind(null, dish.id)}, [icon({class: "glyphicon glyphicon-remove remove"})])
// 					]);
// 				}))
// 			),
// 			hr(),
// 			div({style: "text-align:right"}, [text("Total price: " + model.getTotalMenuPrice() + " SEK")]),
// 			div({}, [
// 				button({class: "btn", onClick: "sideBarCtrl.showDinner()", style: "display:block; margin:auto; margin-top: 20px;"}, [text("Confirm Dinner")])
// 			])
// 		])
// 	]);
// });

//
// var SidebarView = function (container, model, ctrl) {
// 	var sidebarView = render();
// 	container.appendChild(sidebarView);
//
// 	model.addObserver(this);
//
// 	function render() {
// 		return div({id: "sidebarView", class: "col-md-3"}, [
// 			div({class: "sidebar"}, [
// 				h3({}, [text("My dinner")]),
// 				div({style: "float:left; margin-bottom:20px"}, [text("People: " + model.getNumberOfGuests())]),
// 				div({style: "float:right;"}, [
// 					button({type: "button", class: "btn btn-default btn-xs", onClick: ctrl.decrementGuests}, [icon({class: "glyphicon glyphicon-minus"})]),
// 					button({class: "btn btn-default btn-xs", onClick: ctrl.incrementGuests}, [icon({class: "glyphicon glyphicon-plus"})])
// 				]),
// 				hr({style: "clear:both;"}),
// 				table({class: "table"}, [
// 					tr({}, [th({}, [text("Dish name")]), th({}, [text("Cost")])])]
// 						.concat(model.getFullMenu().map(function (dish) {
// 						return tr({}, [
// 							td({}, [text(dish.name)]),
// 							td({}, [text(model.getDishPrice(dish))]),
// 							td({onClick: ctrl.removeDish.bind(null, dish.id)}, [icon({class: "glyphicon glyphicon-remove remove"})])
// 						]);
// 					}))
// 				),
// 				hr(),
// 				div({style: "text-align:right"}, [text("Total price: " + model.getTotalMenuPrice() + " SEK")]),
// 				div({}, [
// 					button({class: "btn", onClick: "sideBarCtrl.showDinner()", style: "display:block; margin:auto; margin-top: 20px;"}, [text("Confirm Dinner")])
// 				])
// 			])
// 		]);
// 	}
//
// 	this.update = function () {
// 		for(var i = 0; i < container.children.length; i++) {
// 			if (container.children[i] === sidebarView) {
// 				sidebarView = render();
// 				container.replaceChild(sidebarView, container.children[i]);
// 				return;
// 			}
// 		}
// 	};
// }
