import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"

const GET_MOVIE_BY_ID = gql`
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

export default function DetailPage() {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: {id}
  })

  return (
    <div>
      {
        loading ? <ClipLoader></ClipLoader> :
        <div class="jumbotron" style={{marginTop: 0}}>
        <img id="main-image" src={data.findMovieById.poster_path} alt="movie poster"/> 
          <h1 class="display-4">{data.findMovieById.title}</h1>
          <p class="lead">{data.findMovieById.overview}</p>
          <p>Rating: {data.findMovieById.popularity}</p>
          <p>Tags: {data.findMovieById.tags.join(', ')}</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Add to favourite</a>
          </p>
        </div>
      }
    </div>
  )
}
