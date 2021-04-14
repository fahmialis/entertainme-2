import React, { useState } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { useHistory } from "react-router-dom"
import { GET_ALL_DATA, ADD_NEW_MOVIE } from '../queries'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function AddMovie() {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [popularity, setPopularity] = useState('')
  const [poster_path, setPosterPath] = useState('')
  const [tags, setTags] = useState('')

  const [addNewMovie, {data, loading, error}] = useMutation(ADD_NEW_MOVIE, {
    refetchQueries: [{query: GET_ALL_DATA}]
  })

  const history = useHistory()
  
  const toHome = () => {
    history.push('/')
  }

  function addTitle(event) {
    setTitle(event.target.value)
  }

  function addOverview(event) {
    setOverview(event.target.value)
  }

  function addPopularity(event) {
    setPopularity(event.target.value)
  }

  function addPosterPath(event) {
    setPosterPath(event.target.value)
  }

  function addTags(event) {
    setTags(event.target.value)
  }

  function tagsToArray(tags) {
    return tags.split(', ').filter(tag => tag)
  }

  function submitMovie(event) {
    event.preventDefault()
    const newMovie = {
      title,
      overview,
      poster_path,
      popularity: +popularity,
      tags: tagsToArray(tags)
    }

    addNewMovie({
      variables: {
        newMovie: newMovie
      }
    })
    toast.success(`${newMovie.title} added to the list`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    })
    history.push('/')
  }

  return (
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
        <div className="card-body">
          <h4 className="card-title text-center"><b>Add Movie</b></h4>

          <form className="form-signin" onSubmit={(event) => submitMovie(event)}>
              <div className="form-label-group">
                <h5>Title</h5>
                <input type="text" className="form-control" placeholder="title" onChange={addTitle} required/>
              </div>
              <br/>
              <div className="form-label-group">
                <h5>Overview</h5>
                <input type="text" className="form-control" placeholder="Overview" onChange={addOverview} required/>
              </div>
              <br/>
              <div className="form-label-group">
                <h5>Popularity</h5>
                <input type="number" min="0" max="10" step="0.1" className="form-control" onChange={addPopularity} placeholder="Rating"required/>
              </div>
              <br/>
              <div className="form-label-group">
                <h5>Poster</h5>
                <input type="url" className="form-control" placeholder="Image url" onChange={addPosterPath} required/>
              </div>
              <br/>
              <div className="form-label-group">
                <h5>Tags</h5>
                  <input type="text" className="form-control" placeholder="tags" onChange={addTags} />
                  <small id="tagsHelp" className="form-text text-muted">Format: action, drama. Please mind the space after coma.</small>
              </div>
              <br/><br/>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
              <button className="btn btn-lg btn-danger btn-block" onClick={toHome}>Cancel</button>
          </form>

        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
