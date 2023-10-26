import React from 'react'

export default function ReviewCards(props) {
  return (
    <div className='reviewCard'>
        <div className='reviewHeading'>
        <h4>{props.name}</h4>
        <img src={props.stars} alt="" className='reviewImage' />
        </div>
        <p>{props.review}</p>
      
    </div>
  )
}
