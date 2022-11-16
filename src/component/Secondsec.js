import React from 'react'

function Secondsec(props) {
  return (
      <div className="cards">
      <img className="product_image" src={props.url} alt="product image" />
      <p>
      <p>{props.location}</p>
      <p>{props.description}</p>
      </p>
      <p><strong>From {props.price}</strong> / person</p>
    </div>
  )
}

export default Secondsec
