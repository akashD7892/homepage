import React from 'react'

export default function Labels() {
  return (
    <div className='labels'>
        <div style={{display:'flex', color:'black'}}>
          <div className='Innerlabel'>
            <div ><button className='lbutton' style={{backgroundColor:'rgba(94, 66, 0, 1)'}}/></div> 
            <div><p>Exception</p></div>
          </div>
          <div className='Innerlabel'>
            <div><button className='lbutton' style={{backgroundColor:'rgba(149, 111, 0, 1)'}}/></div> 
            <div><p>Intransit</p></div>
          </div>
          <div className='Innerlabel'>
            <div><button className='lbutton' style={{backgroundColor:'rgba(229, 165, 0, 1)'}}/></div> 
            <div><p>Pending</p></div>
          </div>
        </div> 

        <div style={{display:'flex', color:'black'}}>
          <div className='Innerlabel'>
            <div><button className='lbutton' style={{backgroundColor:'rgba(255, 200, 121, 1)'}}/></div> 
            <div><p>Delivered</p></div>
          </div>
          <div className='Innerlabel'>
            <div><button className='lbutton' style={{backgroundColor:'rgba(255, 221, 182, 1)'}}/></div> 
            <div><p style={{width:'auto'}}>Out for delivery</p></div>
          </div>
          </div>
    </div>
  )
}
