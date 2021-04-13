import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Favourites } from '../graphql/cache'
import ClipLoader from "react-spinners/ClipLoader"
import { GET_FAVOURITES } from '../queries'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
  const {data: favourite, loading: favLoading, error: favError} = useQuery(GET_FAVOURITES)
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: {id}
  })

  function addToFavorite() {
    const isAdded = favourite.Favourites.find((fav) => {
      return fav._id === data.findMovieById._id
    })
    // console.log(data.findMovieById);
    if(!isAdded) {
      toast.success(`Added ${data.findMovieById.title} to your favorite`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
      const favouriteMovie = Favourites()
      Favourites([data.findMovieById, ...favouriteMovie])
    } else {
      toast.error(`${data.findMovieById.title} is already in your favorite`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
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
