import React from 'react'

import {
  useHistory
} from "react-router-dom"

export default function EditMovie() {
  const history = useHistory()
  
  const toHome = () => {
    history.push('/')
  }

  return (
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
        <div className="card-body">
          <h4 className="card-title text-center"><b>Edit Movie</b></h4>
          <form className="form-signin">
            <div className="form-label-group">
              <h5>Title</h5>
              <input type="text" className="form-control" placeholder="title" v-model="product.name" required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Overview</h5>
              <input type="text" className="form-control" placeholder="Overview" required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Rating</h5>
              <input type="number" min="0" className="form-control" placeholder="Rating"required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Image</h5>
              <input type="url" className="form-control" placeholder="Image url" required/>
            </div>
            <br/>
            <div className="form-label-group">
              <h5>Tags</h5>
              <input type="checkbox" name="Action" value="Action"/>
              <label htmlFor="Action">Action</label>
              <input type="checkbox" name="Drama" value="Drama"/>
              <label htmlFor="Drama">Drama</label>
              <input type="checkbox" name="Comedy" value="Comedy"/>
              <label htmlFor="Comedy">Comedy</label>
              <input type="checkbox" name="Romance" value="Romance"/>
              <label htmlFor="Romance">Romance</label>
              <input type="checkbox" name="Adventure" value="Adventure"/>
              <label htmlFor="Adventure">Adventure</label><br/>
              <input type="checkbox" name="Horror" value="Horror"/>
              <label htmlFor="Horror">Horror</label>
              <input type="checkbox" name="Thriller" value="Thriller"/>
              <label htmlFor="Thriller">Thriller</label>
              <input type="checkbox" name="Crime" value="Crime"/>
              <label htmlFor="Crime">Crime</label>
              <input type="checkbox" name="Mistery" value="Mistery"/>
              <label htmlFor="Mistery">Mistery </label>
              <input type="checkbox" name="Fantasy" value="Fantasy"/>
              <label htmlFor="Fantasy">Fantasy</label>
            </div>
            <br/><br/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
            <button className="btn btn-lg btn-danger btn-block" onClick={() => {toHome()}}>Cancel</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
