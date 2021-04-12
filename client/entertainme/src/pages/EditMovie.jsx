import React from 'react'

export default function EditMovie() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
              <div className="card-body">
                  <h4 className="card-title text-center"><b>Edit Movie</b></h4>
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
                        <input type="number" id="inputRating" className="form-control" placeholder="Rating"required/>
                      </div>
                      <br/>
                      <div className="form-label-group">
                        <h5>Image</h5>
                        <input type="url" id="inputImage" className="form-control" placeholder="Image url" required/>
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
