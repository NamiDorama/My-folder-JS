const builder = require('../elementBuilder');

const html = '<a href="/">Logo</a>';

require('./header.css');

module.exports = builder('header', 'header', html);