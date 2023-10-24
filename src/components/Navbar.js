import React, { useState } from 'react'
import logo from './assets/Logo.png'
import cart from './assets/cart.png'
import profile from './assets/profile.png'


export default function Navbar() {
    const [menuOpen, setmenuOpen]=useState(false);

    const toggleMenu= ()=>{
        setmenuOpen(!menuOpen);
    }


  return (

    <nav className={`navbar ${menuOpen  ? 'open': ''}`}>
<a href="/">
    <img src={logo} alt="Logo" />
</a>

<div className='hamburger' onClick={toggleMenu}>
    <div className='bar'></div>
    <div className='bar'></div>
    <div className='bar'></div>
</div>

<ul className={`menu ${menuOpen ? 'visible' : ''}`}>
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
<div className='icons'>
<a href="/">
    <img src={cart} alt="cart" width='24px' />
</a>

<a href="/">
    <img src={profile} alt="profile" width='24px' />
</a>
</div>

    </nav>
  )
}
