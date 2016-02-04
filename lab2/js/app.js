document.addEventListener("DOMContentLoaded", function() {
	//We instantiate our model
	var model = new DinnerModel();


	//And create the needed controllers and views
	// var sidebarView = new SidebarView(document.getElementById("content"), model);

	// var browserView = new BrowserView(document.getElementById("content"), model);
	// var dishView = new DishView(document.getElementById("content"), model);

	// var dinnerView = new DinnerView(document.getElementById("content"), model);
	var recipeView = new RecipeView(document.getElementById("content"), model);
});
