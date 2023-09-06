import React from 'react'
import '../App.css'
function Contact() {
  return (
    <div className='container-fluid contact my-3 p-3 'id='contacts'>
      <div className='container'>
      <div className='text-center p-4'>
        <h1 className='text-white'>Contact Us</h1>
        <p className='text-white'>Do you have any Questions?</p>
      </div>
      <div className='row justify-content-between'>
      <div className='col-8 col-md-3 col-lg-3 p-3 shadow rounded-2 border-0 contact1 d-flex flex-column justify-content-center align-items-center' style={{ height: "130px" }}>
        <span className='text-center'>
        <i class="fa fa-map-marker fs-4" aria-hidden="true" style={{color:"#d63384"}}></i> ADDRESS<br />
            Patricia Place,<br />
            16th Avenue Northeast, USA
        </span>
      </div>
      <div className='col-8 col-md-3 col-lg-3 p-3 rounded-2  shadow border-0 contact1 d-flex flex-column justify-content-center align-items-center' style={{ height: "130px" }}>
        <span className='text-center'>
        <i class="fa fa-envelope fs-4" aria-hidden="true" style={{color:"#d63384"}}></i> EMAIL<br/>
        info@business.com<br/>
        support@business.com
        </span>
      </div>
      <div className='col-8 col-md-3 col-lg-3 p-3 rounded-2  shadow border-0 contact1 d-flex flex-column justify-content-center align-items-center' style={{ height: "130px" }}>
        <span className='text-center'>
        <i class="fa fa-phone fs-4" aria-hidden="true"style={{color:"#d63384"}} ></i> PHONE<br/>
          +1 (424) 652-5294<br/>
          +1 (424) 652-5282.
        </span>
      </div>
      </div>
      <div className='row p-4'>
        <div className='col-md-5 col-lg-5 col-10'>
          <span className='fs-2 text-white'>Get in Touch </span><br/><br/>
          <p className='text-white' style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.<br/> Risus commodo viverra maecenas<br/> accumsan lacus vel facilisis.
          </p>
        </div>
        <div className='col-md-7 col-lg-7 col-10'>
           <form>
            <div className='row  justify-content-between'>
              <input type='text' placeholder='Your name' className='col-10 rounded-3 col-md-6 col-lg-6 text-white p-2 border-white bg-transparent' />
              <input type='text' placeholder='Email address' className='col-10 rounded-3 col-md-5 col-lg-5 text-white p-2 border-white bg-transparent'/>
              <textarea className='col-10 col-md-12 col-lg-12 mt-3 text-white rounded-3 border-white p-2 bg-transparent' placeholder='Enter message' rows="7" ></textarea>
            </div>
           </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
