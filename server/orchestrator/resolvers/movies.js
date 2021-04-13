const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis()

module.exports = {
  Query: {
    movies: async () => {
      try {
        const moviesData = await redis.get('entertainme:movies')
        if(!moviesData){
          const { data } = await axios.get('http://localhost:4001/movies')
          await redis.set('entertainme:movies', JSON.stringify(data))
          return(data)
        } else {
          return(JSON.parse(moviesData))
        }  
      } catch (err) {
        return(err)
      }
    },
    findMovieById: async (_, args) => {
      try {
        const {id} = args
        await redis.del('entertainme:movies')
        const { data } = await axios({
          url: `http://localhost:4001/movies/${id}`,
          method: 'GET'
        })
        return(data)
      } catch (err) {
        return(err)
      }
    }
  },
  Mutation: {
    addNewMovie: async (_, args) => {
      try {
        const input = {
          title: args.newMovie.title,
          overview: args.newMovie.overview,
          poster_path: args.newMovie.poster_path,
          popularity: args.newMovie.popularity,
          tags: args.newMovie.tags,
        }
        await redis.del('entertainme:movies')
        const { data } = await axios({
          url: 'http://localhost:4001/movies',
          method: 'POST',
          data: input
        })
        return(data[0])
      } catch (err) {
        return(err)
      }
    },
    updateMovieById: async (_, args) => {
      try {
      // console.log(args.movieUpdate, 'update');
      // console.log(args.id, '<<<<<<<<<<<<<')
      const id = args.id
      const update = {
        title: args.movieUpdate.title,
        overview: args.movieUpdate.overview,
        poster_path: args.movieUpdate.poster_path,
        popularity: args.movieUpdate.popularity,
        tags: args.movieUpdate.tags,
      }
      
      await redis.del('entertainme:movies')
      const { data } = await axios({
        url: `http://localhost:4001/movies/${id}`,
        method: 'PATCH',
        data: update
      })
        return(data)
      } catch (err) {
        // console.log(err)
        return(err)
      } 
    },
    deleteMovieById: async (_, args) => {
      try {
        const { id } = args
        await redis.del('entertainme:movies')
        const { data } = await axios({
          url: `http://localhost:4001/movies/${id}`,
          method: 'DELETE'
        })
        return(data)
      } catch (err) {
        return(err)
      }
    }
  }
};