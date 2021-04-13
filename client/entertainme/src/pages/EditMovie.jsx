import React, { useState, useEffect } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"
import { GET_ALL_DATA } from '../queries'
import { useHistory } from "react-router-dom"
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

const UPDATE_MOVIE = gql `
mutation editMovie($id:ID, $movieUpdate: MoviesInput) {
  updateMovieById(id:$id, movieUpdate: $movieUpdate) {
    _id
  }
}
`

export default function EditMovie() {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: {id}
  })
  
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [popularity, setPopularity] = useState('')
  const [poster_path, setPosterPath] = useState('')
  const [tags, setTags] = useState('')
  
  useEffect(() => {
    if(data) {
      setTitle(data.findMovieById.title)
      setOverview(data.findMovieById.overview)
      setPopularity(data.findMovieById.popularity)
      setPosterPath(data.findMovieById.poster_path)
      setTags(data.findMovieById.tags.join(', '))
    }
  }, [data])

  const [updateMovie, {data: updateData, loading: updateLoading, error: updateError}] = useMutation(UPDATE_MOVIE, {refetchQueries: [{query: GET_ALL_DATA}]})

  const history = useHistory()
  
  const toHome = () => {
    history.push('/')
  }

  function editTitle(event) {
    setTitle(event.target.value)
  }

  function editOverview(event) {
    setOverview(event.target.value)
  }

  function editPopularity(event) {
    setPopularity(event.target.value)
  }

  function editPosterPath(event) {
    setPosterPath(event.target.value)
  }

  function editTags(event) {
    setTags(event.target.value)
  }

  function tagsToArray(tags) {
    return tags.split(', ').filter(tag => tag)
  }
  
  function editMovie(event) {
    event.preventDefault()
    const movieUpdate = {
      title,
      overview,
      poster_path,
      popularity: +popularity,
      tags: tagsToArray(tags)
    }

    console.log(movieUpdate);

    updateMovie({
      variables: {
        id, movieUpdate
      }
    })

    toast.success(`${movieUpdate.title} updated`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
    });
    
    history.push('/')
  }

  return (
  <div className="container">
    {
      loading ? <ClipLoader></ClipLoader> :
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
        <div className="card-body">
          <h4 className="card-title text-center"><b>Edit Movie</b></h4>

          <form className="form-signin" onSubmit={editMovie}>
            <div className="form-label-group">
              <h5>Title</h5>
              <input type="text" className="form-control" value={title} onChange={editTitle} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Overview</h5>
              <input type="text" className="form-control" value={overview} onChange={editOverview} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Rating</h5>
              <input type="number" min="0" max="10" step="0.1" className="form-control" value={popularity} onChange={editPopularity} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Image</h5>
              <input type="url" className="form-control" value={poster_path} onChange={editPosterPath} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Tags</h5>
                <input type="text" className="form-control" value={tags} onChange={editTags}  />
                <small id="tagsHelp" className="form-text text-muted">Format: action, drama. Please mind the space after coma.</small>
            </div>
            <br/><br/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
            <button className="btn btn-lg btn-danger btn-block" onClick={() => {toHome()}}>Cancel</button>
          </form>

        </div>
        </div>
      </div>
    </div>
    }
  </div>
  )
}

