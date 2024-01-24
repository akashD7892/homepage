import React from 'react'

export default function FooterCard3() {
  return (
    <div className='footerCard3'>
        <div style={{width:'300px', height:'auto', gap:'24px', padding:'8px'}}>
            <h3 className='upCardh3'>Seamlessly Integrate Custom HTML Elements</h3>
            <p className='upCardp'>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking paeg experience fro your customers</p>
        </div> 

        <div style={{width:'300px', height:'auto', marginLeft:'10px', marginRight:'10px'}}>
            <div style={{width:'300px', height:'auto'}}><h3 style={{fontSize:'13px', fontWeight:'450', lineHeight:'20px', color:'rgba(48, 48, 48, 1)'}}>HTML Link</h3></div>
            <div style={{width:'300px', height:'128px',border:'0.66px solid rgba(138, 138, 138, 1)', borderRadius:'10px'}}><p style={{fontSize:'13px', fontWeight:'450', lineHeight:'20px',padding:'8px'}}>Value</p></div>
            <div style={{display:'flex', marginTop:'20px'}}>
            <button style={{color:'rgba(48, 48, 48, 1)',width:'70px', height:'28px', fontSize:'12px', fontWeight:'550', lineHeight:'16px',marginRight:'10px', borderRadius:'10px'}}>Preview</button>
            <button style={{backgroundColor:'rgba(48, 48, 48, 1)', color:'rgba(255, 255, 255, 1)', fontSize:'12px', fontWeight:'600', lineHeight:'16px', width:'auto',height:'28px', borderRadius:'10px' }}>Apply Colors</button>
            </div>
        </div>
    </div>
  )
}
