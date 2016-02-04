document.addEventListener("DOMContentLoaded", function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var sidebarView = new SidebarView(document.getElementById("sidebarView"), model);
	// var browserView = new BrowserView(document.getElementById("mainView"), model);
	var dishView = new DishView(document.getElementById("mainView"), model);


});
