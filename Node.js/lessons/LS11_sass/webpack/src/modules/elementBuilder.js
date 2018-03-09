import $ from 'jquery';

export const builder = (tagName = 'div', className = '', content = '') => {

	const element = $(`<${tagName}></${tagName}>`);
	element.addClass(className);
	element.html(content);

	return element;
};