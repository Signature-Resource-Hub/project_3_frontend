import React from 'react'
import'./NavBar.css'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const NavBAr = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
  <div class="container-fluid ">
    <a class="navbar-brand" href="/home"><b>Unify.</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/viewallj">Job</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/main">Services</a>
        </li>
        

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Property
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Viewproperty">View all</a></li>
            <li><a class="dropdown-item" href="/ViewRent">Rent</a></li>
            <li><a class="dropdown-item" href="/sale">Sale</a></li>
          </ul>
        </li>

      


        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/News">News</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           ADD
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/addJob">Job</a></li>
            <li><a class="dropdown-item" href="">Services</a></li>
            <li><a class="dropdown-item" href="/addprop">Property</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown1"><CgProfile className="text-black" /></a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <Link className="dropdown-item text-black" to="/profile">PROFILE</Link>
                  <Link className="dropdown-item text-black" to="/updatepass">CHANGE PASSWORD</Link>
                  <Link className="dropdown-item text-black" to="/Forgotpass">FORGOT PASSWORD</Link>
                </div>
              </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Login/Signup</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBAr