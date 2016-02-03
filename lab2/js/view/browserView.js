
var BrowserView = function (container, model) {
	container.appendChild(div({}, [
		div({class: "search-bar"}, [
			h3({}, [text("SELECT DISH")]),
			hr(),
			form({class: "form-inline"}, [
				input({placeholder: "Enter key words", class: "form-control"}),
				button({class: "btn"}, [text("search")])
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
