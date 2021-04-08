const Redis = require("ioredis");
const redis = new Redis()
const axios = require('axios')

class SeriesController {
  static async read(req, res, next) {
    try {
      const moviesData = await redis.get('series:data')
      if(!moviesData){
        const { data } = await axios.get('http://localhost:4002/series')
        await redis.set('movies:data', JSON.stringify(data))
        res.status(200).json(data)
      } else {
        res.status(200).json(JSON.parse(moviesData))
      }
    } catch (err) {
      next({
      code : 400,
      message : err.message
      })
    }
  }

  static async add(req, res, next) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body[0]
      const newSeries = { title, overview, poster_path, popularity, tags }

      await redis.del('series:data')
      const { data } = await axios({
        url: 'http://localhost:4002/series',
        method: 'POST',
        data: newSeries
      })
      res.status(201).json(data)
    } catch (err) {
      next({
        code : 400,
        message : err.message
      })
    }
  }

  static async findOne(req, res, next) {
    try {
      const id = req.params.id
      const { data } = await axios({
        url: `http://localhost:4001/series/${id}`,
        method: 'GET'
      })
      res.status(200).json(data)
    } catch (err) {
      next({
        code : 400,
        message : err.message
      })
    }
  }


  static async update(req, res, next) {
    try {
      const id = req.params.id
      const { title, overview, poster_path, popularity, tags } = req.body[0]
      const updatedData = { title, overview, poster_path, popularity, tags }

      await redis.del('series:data')
      const { data } = await axios({
        url: 'http://localhost:4001/series',
        method: 'PATCH',
        data: updatedData
      })
      res.status(201).json(data)
    } catch (err) {
      next({
        code : 400,
        message : err.message
      })
      
    } 
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id
      const { data } = await axios({
        url: `http://localhost:4001/series/${id}`,
        method: 'DELETE'
      })
      res.status(200).json(data)
    } catch (err) {
      next({
        code : 400,
        message : err.message
      })
    }
  }
}

module.exports = SeriesController