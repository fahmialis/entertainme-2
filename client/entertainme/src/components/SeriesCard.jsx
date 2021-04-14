import React from 'react'

export default function SeriesCard({serie}) {
  return (
    <div className="card bg-dark" style={{width: "19.5rem", height: 350, margin: 23, color: "whitesmoke", borderColor: "whitesmoke"}}>
        <img className="card-img-top" src={serie.poster_path} alt="Series poster" style={{height: 230}}/>
      <div className="card-body">
        <p className="card-text">{serie.title}</p>
        <p className="card-text">Rating : {serie.popularity}</p>
      </div>
    </div>
  )
}
