const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const incidents = await connection('incidents').select('*');

    response.json({
      total: incidents.length,
      data: incidents
    });
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    response.json({
      status: response.statusCode,
      id
    })
  }
}