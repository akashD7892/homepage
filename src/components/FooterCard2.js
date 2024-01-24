import React from 'react';
import Ali from './icons/AliReview.png';
import Insta from './icons/Instafeed.jpeg';
import Pay from './icons/Paypal.jpeg';
import Gog from './icons/googgleAna.jpeg';
import Shopi from './icons/shopifyFlow.jpeg';

export default function FooterCard2() {
  return (
    <div className='footerCard2'>

        <div className='upperCard'>
            <div className='upcard'>
              <h3 className='upCardh3'>Exclusive Onboarding Support for High-Volume Brands</h3>
              <p className='upCardp'>Unlock personalised guidance! Book a one-on-one onboarding call to streamline your experience.</p>
              <button style={{backgroundColor:'rgba(48, 48, 48, 1)', color:'rgba(255, 255, 255, 1)', fontSize:'12px', fontWeight:'600', lineHeight:'16px', width:'auto',height:'28px', borderRadius:'10px' }}>Schedule A Call</button>
            </div>
        </div>

        <div className='lowerCard'>
            <div className='locard'>
              <h3 className='upCardh3'>Explore Our Integrated Ecosystem</h3>
              <p className='upCardp'>Discover a variety of popular integrations tailor for your convenience.</p>
              
              <div className='images'>
                <img src={Pay} alt='soory' />
                <img src={Ali} alt='soory' />
                <img src={Insta} alt='soory' />
                <img src={Gog} alt='soory' />
                <img src={Shopi} alt='soory' />
              </div>

              <button style={{backgroundColor:'rgba(48, 48, 48, 1)', color:'rgba(255, 255, 255, 1)', fontSize:'12px', fontWeight:'600', lineHeight:'16px', width:'auto',height:'28px', borderRadius:'10px',marginTop:'20px' }}>Explore Integrations</button>
            </div>
        </div>
    </div>
  )
}
