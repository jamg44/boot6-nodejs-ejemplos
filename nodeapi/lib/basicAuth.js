'use strict';

const basic = require('basic-auth');

module.exports = (user, password) => {
  return function (req, res, next) {
    const credentials = basic(req);

    // buscar en la base de datos el usuario credentials.name
    // y comprobar la password

    if (!credentials || credentials.name !== user || credentials.pass !== password) {
      // responder que necesito credenciales
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      res.sendStatus(401);
      return;
    }
    next();
  }
}