import React from 'react'
import { Link } from 'react-router-dom'
import MenuCard from './MenuCard'
import chicken from './assets/chicken.jpg'
import fish from './assets/fish.jpg'

import cheesecake from './assets/cheesecake.jpg'

export default function MenuItems() {
  return (
    <section className='menuItems'>


    <div className='menuHeading'>
    <h3>Hot Deals</h3>
    <Link to='/menu'><button>Menu</button></Link>
    </div>

    <div className='horizontalCards'>
        <MenuCard title="Zesty Lemon Herb Chicken" price="$16.99"  description="Tender chicken breasts marinated in a blend of fresh lemon juice, aromatic herbs, and a hint of garlic, then grilled to perfection. Served with a side of citrus-infused quinoa and sautéed seasonal vegetables." image={chicken}/>

        <MenuCard title="Citrus-Kissed Salmon Salad" price="$18.99"  description="A light and refreshing salad featuring flaky, lemon-infused grilled salmon atop a bed of mixed greens, cherry tomatoes, cucumber, and avocado. Drizzled with a tangy citrus vinaigrette and garnished with toasted almonds." image={fish}/>
        
        <MenuCard title="Lemon Blueberry Cheesecake" price="$14.99"  description="A luscious, velvety cheesecake infused with the bright flavors of lemon zest and studded with plump, juicy blueberries. Nestled atop a buttery graham cracker crust and finished with a delicate lemon glaze." image={cheesecake}/>
    </div>
      
    </section>
  )
}
