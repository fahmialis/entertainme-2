import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"

import {
  useHistory
} from "react-router-dom"

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

export default function EditMovie() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [popularity, setPopularity] = useState('')
  const [poster_path, setPosterPath] = useState('')
  const [tags, setTags] = useState('')
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: {id}
  })
  const history = useHistory()
  
  const toHome = () => {
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
          <form className="form-signin">
            <div className="form-label-group">
              <h5>Title</h5>
              <input type="text" className="form-control" value={data.findMovieById.title} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Overview</h5>
              <input type="text" className="form-control" value={data.findMovieById.overview} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Rating</h5>
              <input type="number" min="0" className="form-control" value={data.findMovieById.popularity} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Image</h5>
              <input type="url" className="form-control" value={data.findMovieById.poster_path} required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Tags</h5>
                <input type="text" className="form-control" value={data.findMovieById.tags}  />
                <small id="tagsHelp" className="form-text text-muted">Example Tags: action, drama</small>
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
