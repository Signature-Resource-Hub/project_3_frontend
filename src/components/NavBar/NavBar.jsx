import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


const NavBar = () => {
  return (
    <div className="container-fluid"> 
    <nav className="navbar navbar-expand-xl navbar-light bg-body-tertiary rounded" style={{ width: '100%' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav1">
          <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link active text-black" to=""> <span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link active text-black" to=""> <span className="sr-only"></span></Link></li>
            <li className="nav-item"><Link className="nav-link active text-black" to="/home">Home <span className="sr-only"></span></Link></li>
           
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1">Jobs</a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item text-black" to="/recommend">Search By title</Link>
                  <Link className="dropdown-item text-black" to="/job">Search By Career Summary</Link>
                
                </div>
              </li>



              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1">Property</a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item text-black" to="/viewprop">All</Link>
                  <Link className="dropdown-item text-black" to="/rent">Rent</Link>
                  <Link className="dropdown-item text-black" to="/sale">Sale</Link>
                </div>
              </li>





              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1">Service</a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
              
                <Link className="dropdown-item text-black" to="/viewservices">All</Link>
                  <Link className="dropdown-item text-black" to="">Nursing</Link>
                  <Link className="dropdown-item text-black" to="">Household</Link>
                  <Link className="dropdown-item text-black" to="">Automobiles</Link>
                  <Link className="dropdown-item text-black" to="">Travel Guide</Link>
                  <Link className="dropdown-item text-black" to="">Legal services</Link>
                  <Link className="dropdown-item text-black" to="">Pet services</Link>
                </div>
              </li>
              <li className="nav-item"><Link className="nav-link active text-black" to="/News">News <span className="sr-only"></span></Link></li>
              <li className="nav-item"><Link className="nav-link active text-black" to="/LoginSignup">About <span className="sr-only"></span></Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1"><CgProfile className="text-black" /></a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item text-black" to="/profile">PROFILE</Link>
                  <Link className="dropdown-item text-black" to="/updatepass">CHANGE PASSWORD</Link>
                  <Link className="dropdown-item text-black" to="/Forgotpass">FORGOT PASSWORD</Link>
                </div>
              </li>
              <li className="nav-item"><Link className="nav-link active text-black" to="/LoginSignup">Login/signup <span className="sr-only"></span></Link></li>
              <li className="nav-item"><Link className="nav-link active text-black" to=" ">Contact <span className="sr-only"></span></Link></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1">Add</a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item text-black" to="/addprop">Property</Link>
                  <Link className="dropdown-item text-black" to="/addServices">Service</Link>
                  <Link className="dropdown-item text-black" to="/addJob">Job</Link>
                  
                </div>
              </li>
             
              <li className="nav-item"><Link className="nav-link active text-black" to=""> <span className="sr-only"></span></Link></li>
              <li className="nav-item"><Link className="nav-link active text-black" to=""> <span className="sr-only"></span></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar