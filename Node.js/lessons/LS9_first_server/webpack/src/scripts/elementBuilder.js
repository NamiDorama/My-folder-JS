module.exports = (tagName = 'div', className = '', content = '') => {
	const element = document.createElement(tagName);

	element.className = className;

	element.innerHTML = content;

	return element;
};