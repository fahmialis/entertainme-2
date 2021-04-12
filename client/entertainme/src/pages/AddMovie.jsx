import React from 'react'

export default function AddMovie() {
  return (
  <div className="container">
      <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
              <div className="card-body">
                  <h4 className="card-title text-center"><b>Add Movie</b></h4>
                  <form className="form-signin">
                      <div className="form-label-group">
                          <h5>Name</h5>
                          <input type="text" id="inputName" className="form-control" placeholder="Name" v-model="product.name" required/>
                      </div>
                      <br/>
                      <div className="form-label-group">
                          <h5>Overview</h5>
                          <input type="text" id="inputOverview" className="form-control" placeholder="Overview" required/>
                      </div>
                      <br/>
                      <div className="form-label-group">
                          <h5>Rating</h5>
                          <input type="number" id="inputRating" min="0" className="form-control" placeholder="Rating"required/>
                      </div>
                      <br/>
                      <div className="form-label-group">
                          <h5>Image</h5>
                          <input type="url" id="inputImage" className="form-control" placeholder="Image url" required/>
                      </div>
                      <br/>
                      <div className="form-label-group">
                          <h5>Tags</h5>
                          <input type="checkbox" name="Action" value="Action"/>
                          <label for="Action">Action</label>
                          <input type="checkbox" name="Drama" value="Drama"/>
                          <label for="Drama">Drama</label>
                          <input type="checkbox" name="Comedy" value="Comedy"/>
                          <label for="Comedy">Comedy</label>
                          <input type="checkbox" name="Romance" value="Romance"/>
                          <label for="Romance">Romance</label>
                          <input type="checkbox" name="Adventure" value="Adventure"/>
                          <label for="Adventure">Adventure</label><br/>
                          <input type="checkbox" name="Horror" value="Horror"/>
                          <label for="Horror">Horror</label>
                          <input type="checkbox" name="Thriller" value="Thriller"/>
                          <label for="Thriller">Thriller</label>
                          <input type="checkbox" name="Crime" value="Crime"/>
                          <label for="Crime">Crime</label>
                          <input type="checkbox" name="Mistery" value="Mistery"/>
                          <label for="Mistery">Mistery </label>
                          <input type="checkbox" name="Fantasy" value="Fantasy"/>
                          <label for="Fantasy">Fantasy</label>
                      </div>
                      <br/><br/>
                      <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                      <button className="btn btn-lg btn-danger btn-block">Cancel</button>
                  </form>
              </div>
              </div>
          </div>
      </div>
  </div>
  )
}
