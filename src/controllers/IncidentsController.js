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
    });

    response.json({
      status: response.statusCode,
      id
    });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).send({ error: 'Operation not permitted.' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    response.json({
      status: "Incident deleted",
      statusCode: response.statusCode
    })
  }
};
