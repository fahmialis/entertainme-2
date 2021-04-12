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
