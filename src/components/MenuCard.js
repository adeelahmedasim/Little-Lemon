import React from 'react'

export default function MenuCard(props) {
  return (
    <>
    <div className='menuCard'>
      <img src={props.image} alt="foodimage" />
      <div className='tilte'>
      <h4>{props.title}</h4>
      <h4>{props.price}</h4>
      </div>
      <p>{props.description}</p>
      
      <button>Order for delivery</button>
      </div>
    </>
  )
}
