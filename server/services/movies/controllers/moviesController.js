const Movies = require('../models/movies')

class MoviesController {
  static read(req, res, next) {
    Movies.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static findOne(req, res, next) {
    // console.log(req.params);
    const id = req.params.id

    Movies.findById(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }

  static add(req, res, next) {
    // console.log(req.body, 'body');
    const data = req.body
    Movies.create(data)
      .then(data => {
        res.status(201).json(data.ops)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static delete(req, res, next) {
    // console.log(req.params);
    const id = req.params.id
    Movies.destroy(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
    
  static update(req, res, next) {
    // console.log(req.params);
    // console.log(req.body);
    const id = req.params.id
    const data = req.body

    Movies.updateOne(id, data)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = MoviesController