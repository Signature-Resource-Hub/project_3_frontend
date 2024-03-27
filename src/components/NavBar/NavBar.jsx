import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-light bg-light py-0 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src="https://t3.ftcdn.net/jpg/03/04/98/16/360_F_304981698_qUq95lRuPGJGKIy1fxwvyYK8m8EOZxDG.jpg" alt="Bootstrap" width="60" height="60"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav1">
            <ul className="navbar-nav me-auto">
              {/* <li className="nav-item"><Link className="nav-link active " to="/home">Home <span className="sr-only"></span></Link></li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1"><CgProfile/></a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item " to="/">LOGIN</Link>
                  <Link className="dropdown-item " to="/LoginSignup">SIGNUP</Link>
                  <Link className="dropdown-item " to="/profile">PROFILE</Link>
                  <Link className="dropdown-item " to="/updatepass">CHANGE PASSWORD</Link>
                  <Link className="dropdown-item " to="/Forgotpass">FORGOT PASSWORD</Link>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control form-control-sm me-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-sm my-2 my-sm-0 btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
