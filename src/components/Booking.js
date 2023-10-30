import React from 'react'
import BookingForm from './BookingForm'

export default function Booking(props) {
  return (
    <div>
      <BookingForm  availableTime={props.availableTime}  dispatch={props.dispatch}  submitForm={props.submitForm}/>
    </div>
  )
}
