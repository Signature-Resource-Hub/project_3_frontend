import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


const NavBar = () => {
  return (
    <div className="container-fluid"> 
    <nav className="navbar navbar-expand-xl navbar-light bg-success rounded" style={{ width: '100%' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav1">
          <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link active text-white" to=""> <span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link active text-white" to=""> <span className="sr-only"></span></Link></li>
            <li className="nav-item"><Link className="nav-link active text-white" to="/home">Home <span className="sr-only"></span></Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1">Property</a>
              <div className="dropdown-menu" aria-labelledby="dropdown1">
                <Link className="dropdown-item text-black" to="/">Rent</Link>
                <Link className="dropdown-item text-black" to="/LoginSignup">Sale</Link>
              </div>
              </li>
              <li className="nav-item"><Link className="nav-link active text-white" to="/job">Job <span className="sr-only"></span></Link></li>
            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1">Service</a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                <Link className="dropdown-item text-black" to="/">All</Link>
              
                  <Link className="dropdown-item text-black" to="/category/Baby sitting">Baby sitting</Link>
                  <Link className="dropdown-item text-black" to="/category/Household">Household</Link>
                  <Link className="dropdown-item text-black" to="/category/Automobiles">Automobiles</Link>
                  <Link className="dropdown-item text-black" to="/category/travel Guide">Travel Guide</Link>
                  <Link className="dropdown-item text-black" to="/category/Legal services">Legal services</Link>
                  <Link className="dropdown-item text-black" to="/category/Pet services">Pet services</Link>
                </div>
              </li>
              <li className="nav-item"><Link className="nav-link active text-white" to="/News">News <span className="sr-only"></span></Link></li>
              <li className="nav-item"><Link className="nav-link active text-white" to="/LoginSignup">About <span className="sr-only"></span></Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1"><CgProfile className="text-white" /></a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item text-black" to="/profile">PROFILE</Link>
                  <Link className="dropdown-item text-black" to="/updatepass">CHANGE PASSWORD</Link>
                  <Link className="dropdown-item text-black" to="/Forgotpass">FORGOT PASSWORD</Link>
                </div>
              </li>
              <li className="nav-item"><Link className="nav-link active text-white" to="/LoginSignup">Login/signup <span className="sr-only"></span></Link></li>
              <li className="nav-item"><Link className="nav-link active text-white" to=" ">Contact <span className="sr-only"></span></Link></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1">Add</a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item text-black" to="/addprop">Property</Link>
                  <Link className="dropdown-item text-black" to="/updatepass">Service</Link>
                  
                </div>
              </li>
             
              <li className="nav-item"><Link className="nav-link active text-white" to=""> <span className="sr-only"></span></Link></li>
              <li className="nav-item"><Link className="nav-link active text-white" to=""> <span className="sr-only"></span></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar