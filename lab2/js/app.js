document.addEventListener("DOMContentLoaded", function() {
	router = new Router(document.getElementById("content"));
	router.route("browser");
});

var router;
