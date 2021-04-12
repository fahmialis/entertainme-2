import React from 'react'

import {
  useHistory
} from "react-router-dom"

export default function SeriesCard() {
  return (
    <div class="row p-2 bg-white border rounded" style={{textAlign: 'justify'}}>
    {/* <!-- image here --> */}
    <div class="col-md-3 mt-1">
      <img class="img-fluid img-responsive rounded product-image" src=".../100px180/" alt="movie poster"/>
    </div>
        {/* <!-- image here --> */}

        {/* <!-- item name here --> */}
    <div class="col-md-6 mt-1" style={{padding: 0}}>
      <h4>Title</h4>
      <br/>
      <div class="mt-1 mb-1 spec-1">
        <h5 style={{fontSize: 15}}>Overview</h5>
      </div>
      <div class="mt-1 mb-1 spec-1">
        <h5 style={{fontSize: 15}}>Rating</h5>
      </div>
      <div class="mt-1 mb-1 spec-1">
        <h5 style={{fontSize: 15}}>Tags</h5>
      </div>
    </div>
        {/* <!-- item name here --> */}

    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
      <br/>
      {/* <!-- link to action --> */}
      <div class="d-flex flex-column mt-4">
        <button class="btn btn-warning btn-sm"type="button" >Edit</button>
      </div>
      {/* <!-- link to action --> */}
    </div>
    </div>
  )
}
