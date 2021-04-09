const axios = require("axios");

module.exports = {
  Query: {
    movies: () => {
      return axios({
        url: 'http://localhost:4001/movies',
        method: 'get'
      })
      .then(({data}) => {
        return data
      })
      .catch(err => {
        return err
      })
    },
    findMovieById: (_, args) => {
      const {id} = args
      return axios({
        url: `http://localhost:4001/movies/${id}`,
        method: 'get'
      })
      .then(({data}) => {
        return data
      })
      .catch(err => {
        return err
      })
    }
  },
  Mutation: {
    addNewMovie: (_, args) => {
      const data = {
        title: args.newMovie.title,
        overview: args.newMovie.overview,
        poster_path: args.newMovie.poster_path,
        popularity: args.newMovie.popularity,
        tags: args.newMovie.tags,
      }
      return axios({
        method: 'POST',
        url: 'http://localhost:4001/movies',
        data
      })
      .then(({data}) => {
        return data[0]
      })
      .catch(err => {
        return err
      })
    },
    updateMovieById: (_, args) => {
      console.log(args.movieUpdate, 'update');
      const id = args.id
      const data = {
        title: args.movieUpdate.title,
        overview: args.movieUpdate.overview,
        poster_path: args.movieUpdate.poster_path,
        popularity: args.movieUpdate.popularity,
        tags: args.movieUpdate.tags,
      }
      return axios({
        method: 'PATCH',
        url: `http://localhost:4001/movies/${id}`,
        data
      })
      .then(({data}) => {
        console.log(data, 'ok');
        return data
      })
      .catch(err => {
        console.log(err,'err');
        return err
      })
    },
    deleteMovieById: (_, args) => {
      const { id } = args
      return axios({
        method: 'DELETE',
        url: `http://localhost:4001/movies/${id}`
      })
      .then(({data}) => {
        return data
      })
      .catch(err => {
        return err
      })
    }
  }
};