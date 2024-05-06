import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import NavBAr from '../NavBAr'
import './ForgotPass.css'

const ForgotPass = () => {
    const [input, setInput] = useState({
        email: "",
        newPassword: ""
      });
    
      const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch("http://localhost:8000/api/forgot-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: input.email,
              newPassword: input.newPassword
            })
          });
          if (response.ok) {
            alert("Password Updated!");
            setInput({ email: "", newPassword: "" });
          } else {
            const data = await response.json();
            alert(data.msg || "Failed to update password");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to update password. Please try again later.");
        }
      };
    
  return (
    <div>
        <NavBAr/>
        <br />
      <br /><br /><br /><br />
      <div className="container d-flex justify-content-center">
        <div className="rowFP g-3">
          <form onSubmit={handleFormSubmit}>
            <h1>Forgot Password</h1>
            <div className="input-boxFP">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={input.email}
                onChange={inputHandler}
              />
              <MdEmail className='iconFP'/>
            </div>
            <div className="input-boxFP">
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                className="form-control"
                value={input.newPassword}
                onChange={inputHandler}
              />
              <FaLock className='iconFP'/>
            </div>
            <div className='remember-forgot'>
              <label><input type="checkbox"/>Remember Password</label>
            </div>
            <br />
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button type="submit" className="btn btn-danger">Reset Password</button>
            </div>
            <div className='register-link'>
              <p>Don't have an account?<Link to='/LoginSignup'>Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ForgotPass;