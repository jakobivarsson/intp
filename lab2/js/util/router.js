var Router = function (appContainer) {
	var container = appContainer;

	var model = new DinnerModel();

	var sidebarView = new SidebarView(model, ctrl);
	var browserView = new BrowserView(model, ctrl);
	var dishView = new DishView(model, ctrl);
	var navigationView = new NavigationView(model, ctrl);
	var dinnerView = new DinnerView(model, ctrl);
	var recipeView = new RecipeView(model, ctrl);

	var routes = {
		browser: function () {
			container.appendChild(sidebarView.render());
			container.appendChild(browserView.render());
		},
		dish: function () {
			container.appendChild(sidebarView.render());
			container.appendChild(dishView.render());
		},
		dinner: function () {
			container.appendChild(navigationView.render());
			container.appendChild(dinnerView.render());
		},
		recipe: function () {
			container.appendChild(navigationView.render());
			container.appendChild(recipeView.render());
		} 
	}

	var current;

	this.route = function (route) {
		if (current != route) {
			container.removeChildren();
			render = routes[route];
			render();
			current = route;
		}
	}
}

