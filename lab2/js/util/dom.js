var DOM = (function () {
	var dom = {};
	dom.createElement = function (type, properties, children) {
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