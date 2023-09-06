import React from 'react'
import '../App.css';
function Home() {
  return (
    <div>
    <div className='homes' id='contacts'>
    <div className='container '>
        <div className=' row d-flex justify-content-center align-items-center'  style={{minHeight: "100vh"}}>
        <div className='col-md-6 col-lg-6 col-12'>
        <div className='row'>
        <div className='col-8'> 
        <h1>A visually attractive and effective Landing page</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida
        </div></div>
        <button className='p-2 text-white btn-lg px-4 border-0 rounded-pill mt-3'style={{ background: "linear-gradient(to top, rgba(255, 0, 122, 1) 0%, rgba(142, 0, 116, 1) 100%)" }}>Start Learning Now</button>
        </div>
        <div className='col-md-6 col-lg-6 col-12'>
            <img src='https://codestar.xyz/demo/eduserve/assets/img/main.png ' className='homeimg' alt='home image'/>
        </div>
    </div>
    </div>
    </div>
    <div className='container'>
      <div className=' row p-5 justify-content-around homehover'>
        <div className='card1 shadow rounded-0 border-0 col-md-3 col-lg-3 col-10 d-flex justify-content-center align-items-center' style={{ height: '240px' }}>
          <div className='text-center'>
            <i className="fa fa-car" style={{ fontSize: '36px' }}></i>
            <h4>WHO WE ARE</h4>
            <p className="mt-3">Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div className='card1 shadow  rounded-0 border-0 col-md-3 col-lg-3 col-10 d-flex justify-content-center align-items-center' style={{ height: '240px' }}>
          <div className='text-center'>
            
            <i className="fa fa-car" style={{ fontSize: '36px' }}></i>
            <h4>OUR MISSION</h4>
            <p className="mt-3">Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div className='card1 shadow-lg rounded-0 border-0 col-md-3 col-lg-3 col-10 d-flex justify-content-center align-items-center' style={{ height: '240px' }}>
          <div className='text-center'>
            <i className="fa fa-car" style={{ fontSize: '36px' }}></i>
            <h4>OUR VISSION</h4>
            <p className="mt-3">Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home