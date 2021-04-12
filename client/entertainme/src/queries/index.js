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

export const GET_MOVIE_BY_ID = `gql
query findMovieById {
  findMovieById( id: ID){
    _id
    title
    overview
    poster_path
    popularity
    tags 
  }
}
`

export const DELETE_MOVIE_BY_ID = `gql 
mutation deleteMovie {
  deleteMovieById(id: ID){
		_id
  }
}
`