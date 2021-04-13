import React from 'react'

export default function FavouriteCard({favourite}) {
  console.log(favourite, 'card');
  return (
    <div className="card" style={{width: "10rem", height: 350}}>
        <img className="card-img-top" src={favourite.poster_path} alt="Movies poster" style={{height: 230}}/>
      <div className="card-body">
        <p className="card-text">{favourite.title}</p>
        <p className="card-text">Rating : {favourite.popularity}</p>
      </div>
    </div>
  )
}
