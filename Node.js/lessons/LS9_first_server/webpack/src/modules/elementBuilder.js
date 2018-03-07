const jquery = require('jquery');

module.exports = (tagName = 'div', className = '', content = '') => {

	const element = jquery(`<${tagName}></${tagName}>`);
	element.addClass(className);
	element.html(content);

	return element;
};