var Router = function (appContainer) {
	var container = appContainer;

	var model = new DinnerModel();

	var sidebarCtrl = new SidebarCtrl(model);
	var dishCtrl = new DishCtrl(model);
	var browserCtrl = new BrowserCtrl(model);

	var sidebarView = new SidebarView(model, sidebarCtrl);
	var browserView = new BrowserView(model, browserCtrl);
	var dishView = new DishView(model, dishCtrl);
	//var navigationView = new NavigationView(model, ctrl);
	// var dinnerView = new DinnerView(model, ctrl);
	// var recipeView = new RecipeView(model, ctrl);

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
			while (container.firstChild) {
		    	container.removeChild(container.firstChild);
			}
			render = routes[route];
			render();
			current = route;
		}
	}
}

