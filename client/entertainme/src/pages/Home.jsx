import React from 'react'
import SeriesCard from '../components/SeriesCard'
import MovieCard from '../components/MovieCard'

export default function Home() {
  return (
    <div>
      <div className="jumbotron" style={{background : 'none', marginBottom: 0, width:"100%", padding: 25}}>
        <h1 className="display-4">Home</h1>
        <h2 className="lead">Movie and series list</h2> 
      </div>
      <div className="container d-flex justify-content-around" style={{margin: 20}}>
        {/* movie */}
        <div className="col-lg-6">
          <div className="jumbotron" style={{background : 'black', marginBottom: 0, color: 'white'}}>
            <h3 className="display-4">Movie</h3>
            <h2 className="lead">Movie list</h2> 
          </div>
        {/* movie cards */}
        <MovieCard></MovieCard>
        </div>


        {/* series */}
        {/* <div className="col-lg-6">
          <div className="jumbotron" style={{background : 'black', marginBottom: 0, color: 'white'}}>
            <h3 className="display-4">Series</h3>
            <h2 className="lead">Series list</h2> 
          </div> */}
        {/* series cards */}
        {/* <SeriesCard></SeriesCard> */}
        
        {/* </div> */}

      </div>
    </div>
  )
}
