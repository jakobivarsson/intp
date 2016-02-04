var DOM = (function () {
	var dom = {};
	dom.createElement = function (type, properties, children) {
		children = children || [];
		properties = properties || {};
		var element = document.createElement(type);

		for(var property in properties) {
			if (properties.hasOwnProperty(property)) {
				element.setAttribute(property, properties[property]);
			}
		}

		children.forEach(function (child) {
			element.appendChild(child);
		});

		return element;
	};

	dom.createElementFactory = function (type) {
		return dom.createElement.bind(null, type);
	};

	dom.createTextNode = function (text) {
		return document.createTextNode(text);
	};

	return dom;
})();

var button = DOM.createElementFactory('button');
var div = DOM.createElementFactory('div');
var h1 = DOM.createElementFactory('h1');
var h2 = DOM.createElementFactory('h2');
var h3 = DOM.createElementFactory('h3');
var h4 = DOM.createElementFactory('h4');
var hr = DOM.createElementFactory('hr');
var icon = DOM.createElementFactory('i');
var img = DOM.createElementFactory('img');
var li = DOM.createElementFactory('li');
var p = DOM.createElementFactory('p');
var span = DOM.createElementFactory('span');
var a = DOM.createElementFactory('a');
var ul = DOM.createElementFactory('ul');
var input = DOM.createElementFactory('input');
var form = DOM.createElementFactory('form');
var text = DOM.createTextNode;
