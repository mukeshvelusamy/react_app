// import React from 'react';

// function Navbar() {
//   return (
//     <div>
//       <style>
//         {`
//           .sidebar {
//             background-color: rgba(255, 255, 255, 0.15);
//             backdrop-filter: blur(10px);
//           }
//         `}
//       </style>

//       <nav className="navbar navbar-expand-lg navbar-expand-md  fixed-top" style={{ backgroundColor: 'white' }}>
//         <div className="container">
//           <a className="navbar-brand fs-4" href="#">
//            <img src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp' style={{width:"150px",height:"40px"}} alt='logo'/>
//           </a>
//           <button
//             className="navbar-toggler shadow-none border-0"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasNavbar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="sidebar offcanvas offcanvas-end" id="offcanvasNavbar">
//             <div className="offcanvas-header text-white border-bottom">
//               <button
//                 type="button"
//                 className="btn-close btn-close-dark shadow-none"
//                 data-bs-dismiss="offcanvas"
//               ></button>
//             </div>
//             <div className="offcanvas-body">
//               <ul className="navbar-nav justify-content-end ms-auto ps-3">
//                 <li className="nav-item">
//                   <a className="nav-link  rounded-pill px-4 text-white" href="#homes" style={{ fontSize:"20px", background: "linear-gradient(to top, rgba(255, 0, 122, 1) 0%, rgba(142, 0, 116, 1) 100%)" }}>
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link px-4" href="#courses"style={{fontSize:"20px"}}>
//                     Courses
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link px-4" href="#teachers"style={{fontSize:"20px"}}>
//                     Teacher
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link px-4" href="#prices"style={{fontSize:"20px"}}>
//                     Pricing  
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link px-4" href="#contacts"style={{fontSize:"20px"}}>
//                    Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home'); 

  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  return (
    <div>
      <style>
        {`
          .sidebar {
            background-color: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
          }
          .active-link {
            background: linear-gradient(to top, rgba(255, 0, 122, 1) 0%, rgba(142, 0, 116, 1) 100%);
            color: white; 
          }
          .navbars{
            background-color:#7e1162;
          }
        `}
      </style>

      <nav className="navbar navbars navbar-expand-lg navbar-expand-md  fixed-top" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <a className="navbar-brand fs-4" href="#">
            <img src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp' style={{ width: "150px", height: "40px" }} alt='logo' />
          </a>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="sidebar offcanvas offcanvas-end" id="offcanvasNavbar">
            <div className="offcanvas-header text-white border-bottom">
              <button
                type="button"
                className="btn-close btn-close-dark shadow-none"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end ms-auto ps-3">
                <li className="nav-item">
                  <a
                    className={`nav-link  ${activeLink === 'home' ? 'active-link rounded-pill px-4 text-white' : ''}`}
                    href="#homes"
                    style={{ fontSize: "20px" }}
                    onClick={() => handleLinkClick('home')}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link px-4 ${activeLink === 'courses' ? 'active-link rounded-pill px-4 text-white' : ''}`}
                    href="#courses"
                    style={{ fontSize: "20px" }}
                    onClick={() => handleLinkClick('courses')}
                  >
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link px-4 ${activeLink === 'teachers' ? 'active-link rounded-pill px-4 text-white' : ''}`}
                    href="#teachers"
                    style={{ fontSize: "20px" }}
                    onClick={() => handleLinkClick('teachers')}
                  >
                    Teachers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link px-4 ${activeLink === 'prices' ? 'active-link rounded-pill px-4 text-white' : ''}`}
                    href="#prices"
                    style={{ fontSize: "20px" }}
                    onClick={() => handleLinkClick('prices')}
                  >
                    price
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link px-4 ${activeLink === 'contacts' ? 'active-link rounded-pill px-4 text-white' : ''}`}
                    href="#contacts"
                    style={{ fontSize: "20px" }}
                    onClick={() => handleLinkClick('contacts')}
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

