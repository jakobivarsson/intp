document.addEventListener("DOMContentLoaded", function() {
	//We instantiate our model
	var model = new DinnerModel();

	// BROWSER
	var sidebarView = new SidebarView(document.getElementById("content"), model);
	var browserView = new BrowserView(document.getElementById("content"), model);

	// DISH
	// var sidebarView = new SidebarView(document.getElementById("content"), model);
	// var dishView = new DishView(document.getElementById("content"), model);

	// DINNER
	// var navigationView = new NavigationView(document.getElementById("content"), model);
	// var dinnerView = new DinnerView(document.getElementById("content"), model);
	
	// RECIPE
	// var navigationView = new NavigationView(document.getElementById("content"), model);
	// var recipeView = new RecipeView(document.getElementById("content"), model);
});
