const Series = require('../models/series')

class SeriesController {
  static read(req, res, next) {
    Series.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static findOne(req, res, next) {
    const id = req.params.id

    Series.findById(id)
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

    Series.create(data)
      .then(data => {
        res.status(201).json(data.ops)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static delete(req, res, next) {
    const id = req.params.id
    Series.destroy(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
    
  static update(req, res, next) {
    const id = req.params.id
    const { title, overview, poster_path, popularity, tags } = req.body
    const data = { title, overview, poster_path, popularity, tags }

    Series.updateOne(id, data)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = SeriesController