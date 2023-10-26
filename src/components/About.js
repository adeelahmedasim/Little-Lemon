import React from 'react'
import aboutImage from './assets/about.jpg'

export default function About() {
  return (
    <div className='aboutUs'>
    <section className='about'>
        <h3>About Us</h3>

        <p>Nestled in the heart of Chicago, Little Lemon is a culinary haven where every dish is kissed with vibrant citrus flavors. Our charming restaurant is a celebration of fresh, locally sourced ingredients and the bright, zesty essence of lemons.
Step into a warm, inviting space where you'll instantly feel at home. The ambiance is a perfect blend of modern comfort and rustic charm, creating the ideal backdrop for a memorable dining experience.
Our menu showcases a fusion of classic Chicago favorites infused with a twist of lemony creativity.
At Little Lemon, we believe in the power of hospitality. Our friendly staff is dedicated to ensuring your visit is nothing short of exceptional, offering personalized recommendations and a warm smile to accompany every dish.
 </p>
      </section>

<img src={aboutImage} alt="aboutImage" />

    </div>
  )
}
