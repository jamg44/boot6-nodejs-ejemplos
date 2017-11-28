'use strict';

const pagos = require('./pagos');

pagos.APIKEY = 'apikey cabiado';

const pagos1 = require('./pagos');
const pagos2 = require('./pagos');
const pagos3 = require('./pagos');
const pagos4 = require('./pagos');

console.log(pagos4.APIKEY);

pagos.pagar(500);
