const express = require('express');
const crypto = require('crypto');
const connection = require('../database/connection');

const routes = express.Router();

routes.get('/', function (request, response) {
  response.send('Hello');
});

routes.get('/ongs', async function (request, response) {
  const ongs = await connection('ongs').select('*');

  response.json(ongs);
});

routes.post('/ongs', async function (request, response) {
  const { name, email, whatsapp, city, uf } = request.body;

  console.log(request.body);

  const id = crypto.randomBytes(5).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  response.json({
    status: response.statusCode,
    responseText: 'success',
    id
  });
});

module.exports = routes;
