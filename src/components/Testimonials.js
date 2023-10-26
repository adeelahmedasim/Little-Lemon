import React from 'react'
import ReviewCards from './ReviewCards'
import review from './assets/revie.png'

export default function Testimonials() {
  return (
    <section className='testimonials'>
      <h3>What Our Customers Say!</h3>
      <div className='reviews'>
<ReviewCards name='Sarah M.' stars={review} review=' Little Lemon is a burst of citrusy sunshine! The Chicken was tender, and the Salmon Salad was refreshing. Impeccable service and a cozy ambiance.'/>
<ReviewCards name='James H.' stars={review} review='Lovely experience at Little Lemon. Cozy atmosphere. Salmon Salad was fresh and satisfying. Suggestion: offer more vegetarian options. Great addition to Chicago'/>
<ReviewCards name='Karen L.' stars={review} review=' Little Lemon is a hidden gem! Inviting ambiance, treated like old friends. Zesty Chicken was a sensation, Blueberry Cheesecake was perfect. Highly recommended!'/>
      </div>
    </section>
  )
}
