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
//props.dispatch(e);

}



  return (
    <>

      <fieldset className='bookingForm'>

          <form className='form' onSubmit={handleSubmit}>


 <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" className='dateBox' value={date} onChange={(e)=> handleChange(e.target.value)} />
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " value={time} className='timeBox' onChange={e=> setTime(e.target.value)}>
      <option value="Select Time"></option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
     
   </select>
   <label htmlFor="guests" >Number of guests</label>
   <input type="number" className='guestBox' placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=> setGuests(e.target.value)}/>
   <label htmlFor="occasion">Occasion</label>
   <select className='occasionBox' id="occasion" key={occassion} value={occassion} onChange={e=> setOccassion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
          </form>


          <div className='submitBtn'>
   <input type="submit" onClick={handleSubmit} value="Make Your reservation"/>
   </div>
      </fieldset>
      
    </>
  )
}
