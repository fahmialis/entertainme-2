const Redis = require("ioredis");
const redis = new Redis()
const axios = require('axios')
const MovieController = require('../controllers/moviesController')
const SeriesController = require('../controllers/seriesController')

class OrchestratorController {
  static async readAll(req, res, next) {
    try {
      const seriesData = await redis.get('series:data')
      const moviesData = await redis.get('movies:data')
      if(seriesData && moviesData) {
        const response = {movies: JSON.parse(moviesData), series: JSON.parse(seriesData)}
        res.status(200).json(response)
      } else {
        const [movies, series] = await Promise.all([
          MovieController.read(),
          SeriesController.read()
        ])

      }
    } catch (err) {
      next({
        code : 400,
        message : err.message
        })
    }
  }
}

module.exports = OrchestratorController