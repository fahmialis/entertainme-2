import React from 'react'
import SeriesCard from '../components/SeriesCard'
import MovieCard from '../components/MovieCard'

export default function Home() {
  return (
    <div>
      {/* movie */}
      <div className="container-fluid mt-2 mb-3" style={{height: 400}}>
        <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> 
        <h1 className="font-weight-bold text-uppercase">Movies List</h1>
        </div>
          <div className="row row-cols-4 overflow-auto" style={{height: 400, padding: 30}}>
          <MovieCard></MovieCard>

          </div>
      </div>
      <br/><br/><br/><br/><br/>
      {/* movie */}

      <div className="container-fluid mt-2 mb-3" style={{height: 400}}>
        <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> 
        <h1 className="font-weight-bold text-uppercase">Series List</h1>
        </div>
          <div className="row row-cols-4 overflow-auto" style={{height: 500, padding: 30}}>
          <SeriesCard></SeriesCard>
          </div>
      </div>
    </div>
  )
}
