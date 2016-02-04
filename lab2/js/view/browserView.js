
var BrowserView = function (container, model) {
	container.appendChild(div({id: "mainView", class: "col-md-9"}, [
		div({class: "search-bar"}, [
			h3({}, [text("SELECT DISH")]),
			hr(),
			div({class: "row"}, [
				form({class: "form-inline col-sm-4"}, [
					input({placeholder: "Enter key words", class: "form-control"}),
					button({class: "btn"}, [text("search")])
				]),
				div({class: "dropdown col-sm-4"}, [
					button({class: "btn dropdown-toggle", "data-toggle": "dropdown"}, [
						text("Main"),
						span({class: "caret"})
					]),
					ul({class: "dropdown-menu"}, [
						li({}, [a({href: "#"}, [text("All")])]),
						li({}, [a({href: "#"}, [text("Starter")])]),
						li({}, [a({href: "#"}, [text("Main")])]),
						li({}, [a({href: "#"}, [text("Desert")])])
					])
				])
			])
		]),
		div({class: "browse"}, model.getAllDishes().map(function (dish) {
			return div({class: "col-sm-3"}, [
				div({class: "browse-dish"}, [
					div({class: "image-container"}, [
						img({src: "images/" + dish.image})
					]),
					h4({}, [text(dish.name)]),
					p({}, [text(dish.description)])
				])
			]);
		}))
	]));

}
