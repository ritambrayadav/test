import React from 'react'

function Firstsec(props) {
  return (
    <div className="card">
      <img className="product_image" src={props.url} alt="product image" />
      <p>
        <h6>Collection</h6>
        <h2>{props.heading}</h2>
      </p>
      <button>Show all</button>
    </div>
  )
}

export default Firstsec
