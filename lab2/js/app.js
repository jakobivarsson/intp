document.addEventListener("DOMContentLoaded", function() {
	showDishView();
});

function deleteViews() {
	var myNode = document.getElementById("content");
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
}

function showBrowserView() {
	deleteViews();
	var sidebarView = new SidebarView(document.getElementById("content"), model);
	var browserView = new BrowserView(document.getElementById("content"), model);
}

function showDishView() {
	deleteViews();
	var sidebarCtrl = new SidebarCtrl(model);
	var dishCtrl = new DishCtrl(model);
	var sidebarView = new SidebarView(document.getElementById("content"), model, sidebarCtrl);
	var dishView = new DishView(document.getElementById("content"), model, dishCtrl);
}

function showDinnerView() {
	deleteViews();
	var navigationView = new NavigationView(document.getElementById("content"), model, "showBrowserView()");
	var dinnerView = new DinnerView(document.getElementById("content"), model);
}

function showRecipeView() {
	deleteViews();
	var navigationView = new NavigationView(document.getElementById("content"), model, "showDinnerView()");
	var recipeView = new RecipeView(document.getElementById("content"), model);
}
