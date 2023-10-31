import React, { useState } from 'react'

export default function BookingForm(props) {

const [date, setDate]=useState('')
const [time, setTime]=useState('')
const [guests, setGuests]=useState('')
const [occassion, setOccassion]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault();
props.submitForm(e)

}
  const handleChange=(e)=>{
setDate(e);
props.dispatch(e);

}

const isFormValid = () => {
  return date && time && guests && occassion;
};


  return (
    <>
      
      <fieldset className='bookingForm'>
      <h2>{'Book Now!'}</h2>
          <form className='form' onSubmit={handleSubmit}>


 <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" className='dateBox' required value={date} onChange={(e)=> handleChange(e.target.value)} />
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " value={time} className='timeBox' required onChange={e=> setTime(e.target.value)}>
      <option value="">Select Time</option>
     {
      props.availableTime.availableTime.map(availableTime=>{return <option key={availableTime}>{availableTime}</option>})
     }
   </select>
   <label htmlFor="guests" >Number of guests</label>
   <input type="number" className='guestBox' placeholder="1" min="1" max="10" id="guests" required value={guests} onChange={e=> setGuests(e.target.value)}/>
   <label htmlFor="occasion">Occasion</label>
   <select className='occasionBox' id="occasion" required key={occassion} value={occassion} onChange={e=> setOccassion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
          </form>


          <div className='submitBtn'>
   <input aria-label='On Click' type="submit" disabled={!isFormValid()} onClick={handleSubmit} value="Make Your reservation"/>
   </div>
      </fieldset>
      
    </>
  )
}
