const { ApolloServer, gql } = require('apollo-server')
const axios = require('axios')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Movies {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input MoviesInput {
    title: String!
    overview: String!
    poster_path: String!
    popularity: Float!
    tags: [String]!
  }

  type Series {
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
  }

  type Query {
    movies: [Movies]
    series: [Series]
    findMovieById(id: ID): Movies
  }
`

const resolvers = {
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
    findMovieById: (_, args) => {
      const {id} = args
      return axios({
        url: `http://localhost:4001/movies/${id}`,
        method: 'get'
      })
      .then(({data}) => {
        console.log(data);
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
        console.log(data);
        return data
      })
      .catch(err => {
        return err
      })
    },
    updateMovieById: (_, args) => {
      const id = args.newMovie.id
      const data = {
        title: args.newMovie.title,
        overview: args.newMovie.overview,
        poster_path: args.newMovie.poster_path,
        popularity: args.newMovie.popularity,
        tags: args.newMovie.tags,
      }
      return axios({
        method: 'PATCH',
        url: `http://localhost:4001/movies/${id}`,
        data
      })
      .then(({data}) => {
        return data
      })
      .catch(err => {
        return err
      })
    },
    deleteMovieById: (_, args) => {
      const { id } = args
      return axios({
        method: 'DELETE',
        url: `http://localhost:4001/movies/${id}`,
        data
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


const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});