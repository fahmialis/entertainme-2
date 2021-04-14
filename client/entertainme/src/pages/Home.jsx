import React from 'react'
import SeriesCard from '../components/SeriesCard'
import MovieCard from '../components/MoviesCard'
import { useQuery } from '@apollo/client'
import { GET_ALL_DATA } from '../queries'
import ClipLoader from "react-spinners/ClipLoader"

export default function Home() {
  const { data, loading } = useQuery(GET_ALL_DATA)
  return (
    <div>
      {/* movie */}
      <div className="container mt-4 bg-dark p-5 main-bg mb-5">
      <div className="row d-flex mb-2">
        <div className="col-md-11"> 
        <h1 className="font-weight-bold text-uppercase" style={{color:"whitesmoke"}}>Movies List</h1>
        </div>
          <div className="row row-cols-5 overflow-auto" style={{height: 500, marginBottom: 0}}>
            {
              loading ? <ClipLoader></ClipLoader> :
              data.movies.map(movie => {
                return <MovieCard movie={movie} key={movie._id}></MovieCard>
              })
            }
          </div>
          </div>
      </div>
      <hr/>
      {/* movie */}

      <div className="container mt-4 bg-dark p-5 main-bg mb-5">
      <div className="row d-flex mb-2">
        <div className="col-md-11"> 
        <h1 className="font-weight-bold text-uppercase" style={{color:"whitesmoke"}}>Series List</h1>
        </div>
          <div className="row row-cols-5 overflow-auto" style={{height: 500}}>
            {
              loading ? <ClipLoader></ClipLoader> :
              data.series.map(serie => {
                return <SeriesCard serie={serie} key={serie._id}></SeriesCard>
              })
            }
          </div>
          </div>
      </div>
    </div>
  )
}
