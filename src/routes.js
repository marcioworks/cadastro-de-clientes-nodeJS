const {Router}= require('express');
const ClientController = require('./app/controllers/ClienteController');

const routes = new Router();

routes.get('/clients',ClientController.index);
routes.post('/clients',ClientController.create)


module.exports= routes;
