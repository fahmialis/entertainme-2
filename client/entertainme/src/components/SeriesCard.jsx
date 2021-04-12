import React from 'react'

export default function SeriesCard() {
  return (
    <div className="card" style={{width: "10rem", height: 350}}>
        <img className="card-img-top" src="https://picsum.photos/100?greyscale" alt="Series poster" style={{height: 230}}/>
      <div className="card-body">
        <p className="card-text">Series title</p>
        <p className="card-text">Rating</p>
      </div>
    </div>
  )
}
