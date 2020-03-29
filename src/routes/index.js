const express = require('express');
const routes = express.Router();

const OngController = require('../controllers/OngController');
const IncidentsController = require('../controllers/IncidentsController');

/* Ongs Routes */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/* Incidents Routes */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

module.exports = routes;
