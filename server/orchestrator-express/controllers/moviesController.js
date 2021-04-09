const Redis = require("ioredis");
const redis = new Redis()
const axios = require('axios')

class MovieController {
  static async read(req, res, next) {
    try {
      const moviesData = await redis.get('movies:data')
      if(!moviesData){
        const { data } = await axios.get('http://localhost:4001/movies')
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
      const newMovie = { title, overview, poster_path, popularity, tags }

      await redis.del('movies:data')
      const { data } = await axios({
        url: 'http://localhost:4001/movies',
        method: 'POST',
        data: newMovie
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

      await redis.del('movies:data')
      const { data } = await axios({
        url: `http://localhost:4001/movies/${id}`,
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
      
      await redis.del('movies:data')
      const { data } = await axios({
        url: 'http://localhost:4001/movies',
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
      
      await redis.del('movies:data')
      const { data } = await axios({
        url: `http://localhost:4001/movies/${id}`,
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

module.exports = MovieController