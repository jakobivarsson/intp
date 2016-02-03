
var SidebarView = function (container, model) {
	
	var div = DOM.createElementFactory('div');
	var h3 = DOM.createElementFactory('h3');
	var h4 = DOM.createElementFactory('h4');
	var span = DOM.createElementFactory('span');
	var button = DOM.createElementFactory('button');
	var icon = DOM.createElementFactory('i');
	var li = DOM.createElementFactory('li');
	var ul = DOM.createElementFactory('ul');
	var text = DOM.createTextNode;



	var sidebar = div({}, [
		h3 ({}, [text("My dinner")]),
		div({}, [text("Number of guests: " + model.getNumberOfGuests())]),
		div({}, [
			button({class: "btn"}, [icon({class: "glyphicon glyphicon-minus"}, [])]),
			button({class: "btn"}, [icon({class: "glyphicon glyphicon-plus"}, [])])
		]),
		h4 ({}, [text("Dishes")]),
		ul({class: "list-unstyled"}, model.getFullMenu().map(function (dish) {
			return li({}, [text(dish.name)]);
		}))
	]);

	container.append(sidebar);


	// <h3>My dinner</h3>
	// <div>
	// 	Number of guests: <span id="numberOfGuests"></span>
	// </div>
	// <div>
 //  	<button id="minusGuest" class="btn"><span class="glyphicon glyphicon-minus"></span></button>
	// <button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button>
	// </div>
	// <h4>Dishes</h4>
	// <ul id="menu"></ul>
}
 
