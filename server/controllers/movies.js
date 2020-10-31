const db = require('../db/connection.js');
const model = require('../models/movies.js');

module.exports = {
  get: (req, res) => {
    model.getMovies('SELECT * FROM movieList', (err, data) => {
      if (err) {
        res.status(400);
        res.end();
      } else {
        res.status(200);
        res.json(data);
      }
    });
  }
}