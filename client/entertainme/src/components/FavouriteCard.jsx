import React from 'react'

export default function FavouriteCard({favourite}) {
  return (
    <div className="card bg-dark" style={{width: "20rem", height: 350, margin: 10,color:"whitesmoke", borderColor: "whitesmoke"}}>
        <img className="card-img-top" src={favourite.poster_path} alt="Movies poster" style={{height: 230}}/>
      <div className="card-body">
        <p className="card-text">{favourite.title}</p>
        <p className="card-text">Rating : {favourite.popularity}</p>
      </div>
    </div>
  )
}
