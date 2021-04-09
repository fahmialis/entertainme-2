const Redis = require("ioredis");
const redis = new Redis()
const axios = require('axios')

class OrchestratorController {
  static async readAll(req, res, next) {
    try {
      const entertainme = JSON.parse(await redis.get("entertainme"))
      if (entertainme) {
        res.status(200).json(entertainme)
      } else {
        let movies;
        axios.get("http://localhost:4001/movies")
          .then(({ data }) => {
            movies = data
            return axios.get("http://localhost:4002/series")
          })
          .then(({ data }) => {
            const series = data;
            redis.set("entertainme", JSON.stringify({ movies, series }))
            res.status(200).json({ movies, series })
          })
          .catch((err) => {
            res.status(500).json(err)
          })
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