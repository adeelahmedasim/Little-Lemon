import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from './assets/og.jpg'

export default function Header() {
  return (
    <header className='header'>
      <section className='banner'>
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Nestled in the heart of Chicago, Little Lemon is a charming culinary gem that brings a burst of sunshine to the city's vibrant food scene. This cozy restaurant exudes a warm, welcoming ambiance that instantly makes patrons feel at home.
        Little Lemon is more than a restaurant; it's a haven where moments are savored, connections are forged, and the vibrant spirit of Chicago comes to life in every delectable bite. </p>

        <Link to='/booking'><button>Reserve Now!</button></Link>

      </div>
      </section>

      <div className='image'>
<img src={bannerImage} alt="mainImage" />
</div>
    </header>
  )
}
