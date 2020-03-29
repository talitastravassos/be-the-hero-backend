const express = require('express');
const routes = express.Router();

const OngController = require('../controllers/OngController');
const IncidentsController = require('../controllers/IncidentsController');
const ProfileController = require('../controllers/ProfileController');

/* Ongs Routes */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/* Incidents Routes */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

/* Profile Routes */
routes.get('/profile/incidents', ProfileController.index);

module.exports = routes;
