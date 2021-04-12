import React from 'react'
import { useMutation, gql } from '@apollo/client';
import { GET_ALL_DATA } from '../queries'

import {
  useHistory
} from "react-router-dom"

const DELETE_MOVIE = gql`
mutation deleteMovieById($id: ID) {
  deleteMovieById(id: $id) {
    _id
  }
}
`

export default function MoviesCard({movie}) {
  const history = useHistory()
  const [deleted, {data: deletedData, loading: deletedLoading}] = useMutation(DELETE_MOVIE, {refetchQueries: [{query: GET_ALL_DATA}]})
  
  const toEdit = (id) => {
    history.push(`edit/${id}`)
  }

  const toDetail = (id) => {
    history.push(`detail/${id}`)
  }

  const deleteMovie = (id) => {
    deleted({
      variables: {
        id: id
      }
    })

  }
  
  return (
    <div className="card" style={{width: "10rem", height: 330}}>
      <img className="card-img-top" src={movie.poster_path} alt="Movie poster" style={{height: 230}}/>
      <div className="card-body">
        <p className="card-text">{movie.title}</p>
        <div className="d-flex justify-content-around">
          <button type="button" className="btn btn-outline-warning btn-sm" onClick={() => {
            toEdit(movie._id)
          }}>EDIT</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => {
            toDetail(movie._id)
          }}>DETAIL</button>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => {
            deleteMovie(movie._id)
          }}>DELETE</button>
        </div>
      </div>
    </div>
  )
}
