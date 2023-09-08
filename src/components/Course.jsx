import React from 'react'
import '../App.css'
function Course() {
  return (
    <div>
      <div className='container ' id="courses">
        <div className='text-center'>
            <h1>Popular Courses</h1>
            <span className='' style={{color:"#e83e8c"}}>A modern and unique style</span>
        </div>
        <div className='row p-5 justify-content-between'>
            <div className=' card course1 active rounded-0 shadow-lg  col-5 col-md-1 col-lg-1 d-flex justify-content-center align-items-center' style={{width:"150px", height:"150px"}}>
                <div className='text-center'>
                    <i className="fa fa-car" ></i>
                    <p>NETWORKING</p>
                </div>
            </div>
            <div className=' card course1 rounded-0 shadow-lg border-0 col-5 col-md-1 col-lg-1 d-flex justify-content-center align-items-center' style={{width:"150px", height:"150px"}}>
                <div className='text-center'>
                    <i className="fa fa-car" ></i>
                    <p>PHP</p>
                </div>
            </div>
            <div className=' card course1 rounded-0 shadow-lg border-0 col-5 col-md-1 col-lg-1 d-flex justify-content-center align-items-center' style={{width:"150px", height:"150px"}}>
                <div className='text-center'>
                    <i className="fa fa-car" ></i>
                    <p>PYTHON</p>
                </div>
            </div>
            <div className=' card course1 rounded-0 shadow-lg border-0 col-5 col-md-1 col-lg-1 d-flex justify-content-center align-items-center' style={{width:"150px", height:"150px"}}>
                <div className='text-center'>
                    <i className="fa fa-car" ></i>
                    <p>DESIGN</p>
                </div>
            </div>
            <div className=' card course1 rounded-0 shadow-lg border-0 col-5 col-md-1 col-lg-1 d-flex justify-content-center align-items-center' style={{width:"150px", height:"150px"}}>
                <div className='text-center'>
                    <i className="fa fa-car" ></i>
                    <p>HTML5/CSS3</p>
                </div>
            </div>
            <div className=' card course1 rounded-0 shadow-lg border-0 col-5 col-md-1 col-lg-1 d-flex justify-content-center align-items-center' style={{width:"150px", height:"150px"}}>
                <div className='text-center'>
                    <i className="fa fa-car" ></i>
                    <p>PHOTOGRAPHY</p>
                </div>
            </div>
        </div>
        <div className='row bg-white p-2 m-3 shadow'>
            <div className='col'>
                <img src='https://codestar.xyz/demo/eduserve/assets/img/course/course-img-1.jpg' alt="course image"/>
            </div>
            <div className='col'>
                <h1>Nural Networking</h1>
                <span className='fs-4 fw-light'>Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine</span>
                <ul class="list-unstyled">
                    <li class="py-2"> <span className='fs-5' style={{color:"#e83e8c"}}>&#x25C6;</span> Pig swine prosciutto rump pork chop</li>
                    <li class="py-2"> <span className='fs-5' style={{color:"#e83e8c"}}>&#x25C6;</span> Tail spare ribs capicola flank shank</li>
                    <li class="py-2"> <span className='fs-5' style={{color:"#e83e8c"}}>&#x25C6;</span> 24-hour Supports for any courses</li>
                    <li class="py-2"> <span className='fs-5' style={{color:"#e83e8c"}}>&#x25C6;</span> Beef ribs sirloin cupim frankfurter</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Course
