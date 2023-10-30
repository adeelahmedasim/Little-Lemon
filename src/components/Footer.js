import React from 'react'
import LogoW from './assets/logo white.png'
import Arrow from './assets/arrow.png'
export default function Footer() {


        const goToBtn=()=>{
            window.scrollTo({top:0, behavior:'smooth'})}



  return (
    <section className='footer'>
      <img src={LogoW} alt="" className='logoWhite' />
      <h4 className='address'>5123 Market St. #22B 
Charlottesville, Chicago 44635</h4>

<div className='phoneEmail'>
<p>(434) 546-4356</p>
<p>contact@littlelemon.com</p>
</div>
<ul className='smallMenu'>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/">About</a>
    </li>
    <li>
        <a href="/">Menu</a>
    </li>
    <li>
        <a href="/">Reservation</a>
    </li>
    <li>
        <a href="/">Order Online</a>
    </li>
</ul>



<ul className='socialmedia'>
    <li>
        <a href="/">Facebook</a>
    </li>
    <li>
        <a href="/">Twitter</a>
    </li>
    <li>
        <a href="/">LinkedIn</a>
    </li>
    <li>
        <a href="/">instagram</a>
    </li>
</ul>


<p className='copyright'>© 2020 Little Lemon . All rights reserved.</p>


<button className='upBtn'><img src={Arrow} alt=""  onClick={goToBtn}/></button>
    </section>
  )
}
