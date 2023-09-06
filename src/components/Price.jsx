import React from 'react'

function Price() {
  return (
    <div className='container p-5' id='prices'>
       <div className='text-center'>
            <h2>Affordable Packages</h2>
            <span className='' style={{color:"#e83e8c"}}>A modern and unique style</span>
        </div>
        <div className='row justify-content-around m-3 p-3 text-center'>
            <div className=' col-md-4 col-lg-4 col-8 shadow rounded-4' style={{width:"300px",height:"350px"}}>
                <h2 className='p-2'>STANDARD</h2>
                <ul className='list-unstyled text-center align-self-center'>
                    <li className='py-2'><span className='fs-1 text-danger'>$ 99 </span>/month</li>
                    <li className='py-2'>100 MB Disk Space</li>
                    <li className='py-2'>2 Subdo mains</li>
                    <li className='py-2'>5 Email Accounts</li>
                    <li className='py-2'>No License</li>
                    <li className='py-2'>Phone & Mail Support</li>
                </ul>
            </div>
            <div className=' col-md-4 col-lg-4 col-8 shadow rounded-4' style={{width:"300px",height:"350px",borderTop: "5px solid #FF007A",borderBottom: "5px solid #FF007A"}}>
                 <h2 className='p-2'>STANDARD</h2>
                <ul className='list-unstyled text-center'>
                    <li className='py-2'><span className='fs-1 text-danger'>$ 199 </span>/month</li>
                    <li className='py-2'>100 MB Disk Space</li>
                    <li className='py-2'>2 Subdo mains</li>
                    <li className='py-2'>5 Email Accounts</li>
                    <li className='py-2'>No License</li>
                    <li className='py-2'>Phone & Mail Support</li>
                </ul>
            </div>
            <div className=' col-md-4 col-lg-4 col-8 shadow rounded-4' style={{width:"300px",height:"350px"}}>
                <h2 className='p-2'>STANDARD</h2>
                <ul className='list-unstyled text-center'>
                    <li className='py-2'><span className='fs-1 text-danger'>$ 350 </span>/month</li>
                    <li className='py-2'>100 MB Disk Space</li>
                    <li className='py-2'>2 Subdo mains</li>
                    <li className='py-2'>5 Email Accounts</li>
                    <li className='py-2'>No License</li>
                    <li className='py-2'>Phone & Mail Support</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Price
