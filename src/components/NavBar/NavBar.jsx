import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";




const NavBar = () => {
  return (
    <div>
    


<nav class="navbar navbar-expand-xl navbar-light bg-light py-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav1">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><Link class="nav-link active" to="#">Home <span class="sr-only"></span></Link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1"><CgProfile/></a>
          <div class="dropdown-menu" aria-labelledby="dropdown1">
           <Link class="dropdown-item" to="/">MY PROFILE</Link>
            {/* <Link class="dropdown-item" to="/ProfileUpdate">UPDATE PROFILE</Link> */}
            <Link class="dropdown-item" to="/updatepass">CHANGE PASSWORD</Link>
            <Link class="dropdown-item" to="/Forgotpass">FORGOT PASSWORD</Link>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control form-control-sm me-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-sm my-2 my-sm-0 btn-outline-secondary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar