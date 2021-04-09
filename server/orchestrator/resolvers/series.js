const Redis = require("ioredis");
const redis = new Redis()
const axios = require("axios");

module.exports = {
  Query: {
    series: async () => {
      try {
        const seriesData = await redis.get('entertainme:series')
        if(!seriesData){
          const { data } = await axios.get('http://localhost:4002/series')
          await redis.set('entertainme:series', JSON.stringify(data))
          return(data)
        } else {
          return (JSON.parse(seriesData))
        }
      } catch (err) {
        return(err)
      }
    },
    findSeriesById: async (_, args) => {
      try {
        const {id} = args
        await redis.del('entertainme:series')
        const { data } = await axios({
          url: `http://localhost:4002/series/${id}`,
          method: 'GET'
        })
        return (data)
      } catch (err) {
        return(err)
      }
    }
  },
  Mutation: {
    addNewSeries: async (_, args) => {
      try {
        const input = {
          title: args.newSeries.title,
          overview: args.newSeries.overview,
          poster_path: args.newSeries.poster_path,
          popularity: args.newSeries.popularity,
          tags: args.newSeries.tags,
        }
        await redis.del('entertainme:series')
        const { data } = await axios({
          url: 'http://localhost:4002/series',
          method: 'POST',
          data: input
        })
        return(data[0])
      } catch (err) {
        return(err)
      }
    },
    updateSeriesById: async (_, args) => {
      try {
        const id = args.id
        const update = {
          title: args.seriesUpdate.title,
          overview: args.seriesUpdate.overview,
          poster_path: args.seriesUpdate.poster_path,
          popularity: args.seriesUpdate.popularity,
          tags: args.seriesUpdate.tags,
        }
        
        await redis.del('entertainme:series')
        const { data } = await axios({
          url: `http://localhost:4002/series/${id}`,
          method: 'PATCH',
          data: update
        })
          return(data)
        } catch (err) {
          return(err)
        } 

    },
    deleteSeriesById: async (_, args) => {
      try {
        const { id } = args
        await redis.del('entertainme:series')
        const { data } = await axios({
          url: `http://localhost:4002/series/${id}`,
          method: 'DELETE'
        })
        return(data)
      } catch (err) {
        return(err)
      }
    }
  }
};