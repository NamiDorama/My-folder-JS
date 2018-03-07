const jquery = require('jquery');
const header = require('./modules/header/header');
const main = require('./modules/main/main');
const footer = require('./modules/footer/footer');

require('./app.css');

jquery('body').append(header, main, footer);