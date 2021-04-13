import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Favourites } from '../graphql/cache'
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

  function addToFavorite() {
    // console.log(data.findMovieById);
    const favouriteMovie = Favourites()
    Favourites([data.findMovieById, ...favouriteMovie])
  }
  return (
    <div>
      {
        loading ? <ClipLoader></ClipLoader> :
        <div className="jumbotron" style={{marginTop: 0}}>
        <img id="main-image" src={data.findMovieById.poster_path} alt="movie poster"/> 
          <h1 className="display-4">{data.findMovieById.title}</h1>
          <p className="lead">{data.findMovieById.overview}</p>
          <p>Rating: {data.findMovieById.popularity}</p>
          <p>Tags: {data.findMovieById.tags.join(', ')}</p>
          <p className="lead">

            <button type="button" className="btn btn-outline-primary" onClick={addToFavorite}>Add to Favourite</button>
          </p>
        </div>
      }
    </div>
  )
}
