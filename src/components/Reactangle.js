import React from 'react'
import ChartD from './ChartD'
import Labels from './Labels'
import OrderIcon from './icons/OrderIcon.svg' ;
import ViewIcon from './icons/ViewIcon.svg' ;



export default function Reactangle() {
  return (
    <div style={{height:'607px', marginTop:'396px',backgroundColor:'rgba(255, 247, 238, 1)'}}>
        <h1 className='heading'>Instant Drive into Your Performance Metrics</h1>
        
        
        <div className='frame' style={{marginTop:'20px', marginBottom:'20px'}}>
           <div className='f'><h3 style={{fontSize: '13px',fontWeight: '650'}}>Lifetime</h3> </div>
           <div className='f'><h3 style={{fontSize: '13px',fontWeight: '650'}}>Last Week</h3> </div>
           <div className='f'><h3 style={{fontSize: '13px',fontWeight: '650'}}>Last Month</h3> </div>
           <div className='f'><h3 style={{fontSize: '13px',fontWeight: '650'}}>Last Year</h3> </div>
           <div className='f'><h3 style={{fontSize: '13px',fontWeight: '650'}}>Customise Time Line</h3> </div>
        </div> 
        
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <div className='frame17'>
        <div style={{display:'flex', justifyContent:'space-between', marginLeft:'20px',marginTop:'10px', width:'416px', heigth:'20px',gap:'10px'}}>
            <div><h3 style={{fontSize: '14px',fontWeight: '650', color:'rgba(74, 74, 74, 1)'}}>Shipment Updates</h3></div>
            <div><h3 style={{fontSize: '14px',fontWeight: '450', color:'rgba(74, 74, 74, 1)'}}>Total Orders:394</h3></div>   
        </div>
        
        <div style={{display:'flex', marginLeft:'20px'}}>
        <div className='f' style={{backgroundColor:'rgba(255, 247, 238, 1)',width:'auto',height:'36px',padding:'8px 12px 8px 12px'}}><h3 style={{fontSize: '13px',fontWeight: '650'}}>Delivery</h3> </div>
           <div className='f' style={{backgroundColor:'rgba(255, 247, 238, 1)',width:'auto',height:'36px',padding:'8px 12px 8px 12px'}}><h3 style={{fontSize: '13px',fontWeight: '650'}}>Out for delivery</h3> </div>
           <div className='f' style={{backgroundColor:'rgba(255, 247, 238, 1)',width:'auto',height:'36px',padding:'8px 12px 8px 12px'}}><h3 style={{fontSize: '13px',fontWeight: '650'}}>Intransit</h3> </div>
           <div className='f' style={{backgroundColor:'rgba(255, 247, 238, 1)',width:'auto',height:'36px',padding:'8px 12px 8px 12px'}}><h3 style={{fontSize: '13px',fontWeight: '650'}}>Pending</h3> </div>
        </div>

        <div className='doughnut'><ChartD/></div>
        <Labels/>
          
        </div>

        <div className='RCard'>
            
            <h3 style={{fontSize:'14px',fontWeight:'650',lineHeight:'20px',padding:'8px'}}>Start facts about your orders!!!</h3>
            <p style={{fontSize:'13px',fontWeight:'450',lineHeight:'20px',padding:'8px'}}>There are 8 shipments that have been in out for delivery for more than 3 days</p>
            <p style={{fontSize:'13px',fontWeight:'450',lineHeight:'20px',padding:'8px'}}>There are 5 shipments in exception right now</p>
            <p style={{fontSize:'13px',fontWeight:'450',lineHeight:'20px',padding:'8px'}}>The maximum chargebacks are from Miami.</p>

            <button style={{width:"136px",height:'28px',borderRadius:'2px', fontSize:'12px',fontWeight:'550',marginLeft:'8px',lineHeight:'16px',color:'rgba(48, 48, 48, 1)', borderRadius:'10px'}}>Check Orders Page</button>
        </div>
        
        <div className='tracking'>
            <h3 style={{fontSize:'14px',fontWeight:'650',lineHeight:'20px',padding:'8px'}}>Tracking Page Views Vs Orders</h3>
            <p style={{fontSize:'13px',fontWeight:'450',lineHeight:'20px',padding:'8px'}}>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p> 
            
            <div style={{backgroundColor:'rgba(255, 235, 213, 1)', color:'rgba(74, 74, 74, 1)'}}>
                <h3 style={{fontSize:'12px', fontWeight:550 ,marginLeft:'8px'}}>Orders</h3>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div><p style={{fontSize:'36px',fontWeight:'700',marginLeft:'8px'}}>80</p></div>
                    <div style={{width:'45px', height:'45px', marginTop:'9.8px',marginLeft:'9.8px'}}><img src={OrderIcon} alt='sorry'/></div>
                </div>
            </div>

            <div style={{backgroundColor:'rgba(255, 200, 121, 1)',color:'rgba(74, 74, 74, 1)'}}>
                <h3 style={{fontSize:'12px', fontWeight:550,marginLeft:'8px'}}>Tracking Page View</h3>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div><p style={{fontSize:'36px',fontWeight:'700',marginLeft:'8px'}}>44</p></div>
                    <div style={{width:'45px', height:'45', marginTop:'9.8px',marginLeft:'9.8px'}}><img src={ViewIcon} alt='soory'/></div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
