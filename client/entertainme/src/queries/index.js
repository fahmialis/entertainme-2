import { gql } from '@apollo/client'

export const GET_ALL_DATA = gql `
query Entertainme {
  movies {
    _id
    title
    overview
    poster_path
    popularity
    tags
  }
  series {
    _id
    title
    overview
    poster_path
    popularity
    tags
  }
}
`

export const GET_FAVOURITES = gql`
  query getFavourites {
    Favourites @client
  }
`

export const GET_MOVIE_BY_ID = gql`
query findMovieById($id: ID) {
  findMovieById(id: $id){
    _id
    title
    overview
    poster_path
    popularity
    tags 
  }
}
`

export const DELETE_MOVIE = gql`
mutation deleteMovieById($id: ID) {
  deleteMovieById(id: $id) {
    _id
  }
}
`

export const ADD_NEW_MOVIE = gql `
mutation addNewMovie($newMovie: MoviesInput) {
  addNewMovie(newMovie: $newMovie){ 
    title
    overview
    poster_path
    popularity
    tags
  }
}
`

export const UPDATE_MOVIE = gql `
mutation editMovie($id:ID, $movieUpdate: MoviesInput) {
  updateMovieById(id:$id, movieUpdate: $movieUpdate) {
    _id
  }
}
`