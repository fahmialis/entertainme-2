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
      <div className="container-fluid mt-2 mb-3" style={{height: 400}}>
        <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> 
        <h1 className="font-weight-bold text-uppercase">Movies List</h1>
        </div>
          <div className="row row-cols-5 overflow-auto" style={{height: 500, padding: 30}}>
            {
              loading ? <ClipLoader></ClipLoader> :
              data.movies.map(movie => {
                return <MovieCard movie={movie} key={movie._id}></MovieCard>
              })
            }

          </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      {/* movie */}

      <div className="container-fluid mt-2 mb-3" style={{height: 400}}>
        <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> 
        <h1 className="font-weight-bold text-uppercase">Series List</h1>
        </div>
          <div className="row row-cols-5 overflow-auto" style={{height: 500, padding: 30}}>
            {
              loading ? <ClipLoader></ClipLoader> :
              data.series.map(serie => {
                return <SeriesCard serie={serie} key={serie._id}></SeriesCard>
              })
            }
          </div>
      </div>
    </div>
  )
}
