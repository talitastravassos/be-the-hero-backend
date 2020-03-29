const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    response.json({
      total: ongs.length,
      data: ongs
    });
  },

  async create(request, response) {
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
      id
    });
  }
};
