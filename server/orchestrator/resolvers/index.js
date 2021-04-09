const moviesResolvers = require('./movies')
const seriesResolvers = require('./series')

module.exports = {
  Query: {
    ...moviesResolvers.Query,
    ...seriesResolvers.Query,
  },
  Mutation: {
    ...moviesResolvers.Mutation,
    ...seriesResolvers.Mutation,
  },
};