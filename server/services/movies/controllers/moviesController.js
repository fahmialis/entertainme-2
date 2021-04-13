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
    const { title, overview, poster_path, popularity, tags } = req.body
    const data = { title, overview, poster_path, popularity, tags }

    Movies.create(data)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static delete(req, res, next) {
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
    console.log('masuk update');
    const id = req.params.id
    const { title, overview, poster_path, popularity, tags } = req.body
    const data = { title, overview, poster_path, popularity, tags }
    console.log(data);

    Movies.updateOne(id, data)
      .then(data => {
        // console.log(data);
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = MoviesController