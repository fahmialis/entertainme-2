const { gql } = require('apollo-server')

module.exports = gql`
  type Movies {
    _id: String
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input MoviesInput {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  type Series {
    _id: String
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input SeriesInput {
    title: String!
    overview: String!
    poster_path: String!
    popularity: Float!
    tags: [String]!
  }

  type Mutation {
    addNewMovie(newMovie: MoviesInput): Movies
    updateMovieById(id: ID, movieUpdate: MoviesInput): Movies
    deleteMovieById(id: ID): Movies

    addNewSeries(newSeries: SeriesInput): Series
    updateSeriesById(id: ID, seriesUpdate: SeriesInput): Series
    deleteSeriesById(id: ID): Series
  }

  type Query {
    movies: [Movies]
    findMovieById(id: ID): Movies

    series: [Series]
    findSeriesById(id: ID): Series
  }
`