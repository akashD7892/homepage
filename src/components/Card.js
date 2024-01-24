import React from 'react'
import {ButtonGroup, Button, AppProvider} from '@shopify/polaris';

export default function Card() {
  return (
    <div className='card1'>

  <div className="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 className="card-title">Order Sync Successful!</h5>
    <p className="card-text">Your order details from the last 30 days have been successfully synced.check them out now!</p>
    <button className='Cartbutton'>Explore Your Orders</button>
    
  </div>
</div>

<div className="card" style={{width: '18rem',backgroundColor: '#FFF8DB'}}>
  <div class="card-body">
    <div style={{display:'flex'}}>
     <i class="bi bi-exclamation-triangle"></i>
     <h5 className="card-title" style={{color:'brown', marginLeft:'10px'}}>Customize Customer Notification</h5>
    </div>
   
    <p className="card-text" style={{color:'brown'}}>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
    <button className='Cartbutton'>Configure Notifications</button>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <div class="card-body">
    <div style={{display:'flex'}}>
    <i class="bi bi-exclamation-circle"></i>
    <h5 className="card-title" style={{marginLeft:'10px'}}>Your Tracking Link has been generated</h5>
    </div>
    
    <p className="card-text">Include the Link to Your Store's Navigation Menu</p>
    <button style={{backgroundColor:'white', borderRadius:'5px', height:'28px',fontSize:'12px', fontWeight:'500', marginRight:'10px'}}>Copy Link</button>
    <button className='Cartbutton'>Go to Navigation Menu</button>
  </div>
</div>

    </div>
  )
}
