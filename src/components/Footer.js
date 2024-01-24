import React from 'react'
import FooterCard1 from './FooterCard1'
import FooterCard2 from './FooterCard2'
import FooterCard3 from './FooterCard3'

export default function Footer() {
  return (
    <div className='footer'>
       
       <h3>Discover the Heart of our Functionality</h3>
       <div className='fCards'>
        <FooterCard1/>
        <FooterCard2/>
        <FooterCard3/>
       </div>
       
    </div>
  )
}
