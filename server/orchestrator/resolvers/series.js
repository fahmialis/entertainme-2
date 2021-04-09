const axios = require("axios");

module.export = {
  Query: {
    series: () => {
      return axios({
        url: 'http://localhost:4002/series',
        method: 'get'
      })
      .then(({data}) => {
        return data
      })
      .catch(err => {
        return err
      })
    },
    findSeriesById: (_, args) => {
      const {id} = args
      return axios({
        url: `http://localhost:4002/series/${id}`,
        method: 'get'
      })
      .then(({data}) => {
        return data.data
      })
      .catch(err => {
        return err
      })
    }
  },
  Mutation: {
    addNewSeries: (_, args) => {
      const data = {
        title: args.newSeries.title,
        overview: args.newSeries.overview,
        poster_path: args.newSeries.poster_path,
        popularity: args.newSeries.popularity,
        tags: args.newSeries.tags,
      }
      return axios({
        method: 'POST',
        url: 'http://localhost:4002/series',
        data
      })
      .then(({data}) => {
        return data[0]
      })
      .catch(err => {
        return err
      })
    },
    updateSeriesById: (_, args) => {
      console.log(args, 'update');
      const id = args.id
      const data = {
        title: args.seriesUpdate.title,
        overview: args.seriesUpdate.overview,
        poster_path: args.seriesUpdate.poster_path,
        popularity: args.seriesUpdate.popularity,
        tags: args.seriesUpdate.tags,
      }
      return axios({
        method: 'PATCH',
        url: `http://localhost:4002/series/${id}`,
        data
      })
      .then(({data}) => {
        return data.result
      })
      .catch(err => {
        return err
      })
    },
    deleteSeriesById: (_, args) => {
      const { id } = args
      return axios({
        method: 'DELETE',
        url: `http://localhost:4002/series/${id}`
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