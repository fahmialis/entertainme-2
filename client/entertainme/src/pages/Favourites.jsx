import React from 'react'
import FavouriteCard from '../components/FavouriteCard'
import { useQuery } from '@apollo/client'
import { GET_FAVOURITES } from '../queries'
import ClipLoader from "react-spinners/ClipLoader"

export default function Favourites() {
  const {data, loading, error} = useQuery(GET_FAVOURITES)
  return (
    <div className="container mt-4 bg-dark p-5 main-bg mb-5" style={{color: "whitesmoke"}}>
      <div className="row d-flex mb-2">
        <div className="col-md-11">
          <h1 className="text-left ml-2">Favourites</h1>
        </div>
      </div>
      <div className="row row-cols-5 overflow-auto" style={{height: 500, padding: 50}}>
      {
        loading ? <ClipLoader></ClipLoader> :
        data.Favourites.map(favourite => {
          return <FavouriteCard favourite={favourite} key={favourite.id}></FavouriteCard>
        })
      }
      </div>
    </div>

  )
}
