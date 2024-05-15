import NavBAr from '../NavBAr'
import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import './UpdatePassword.css';

const UpdatePassword = () => {
    const [input, setInput] = useState({
        email: "",
        currentPassword: "",
        newPassword: ""
      });
    
      const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
      };
    
      const updatePassword = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/updatePass', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
          });
          const data = await response.json();
          alert(data.msg); 
        } catch (error) {
          console.error('Error updating password:', error);
          alert('Failed to update password');
        }
      };
    
      const readValues = () => {
        if (!input.email || !input.newPassword || !input.currentPassword) {
          alert("Please fill in all the fields");
          return;
        }
    
        if (input.newPassword.length < 8) {
          alert("Password must have at least 8 characters.");
          return;
        }
    
        if (input.currentPassword === input.newPassword) {
          alert("New password is same as current password!!");
          return;
        }
    
        updatePassword();
      };
  return (
    <div>
        <NavBAr/>
        <br /><br /><br /><br />
      <div className="container d-flex justify-content-center">
        <div className="rowUP g-3">
          <form action=''>
            <h1>Change Password</h1>
            <div className="input-boxUP">
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="form-control"
                value={input.email}
                onChange={inputHandler}
              />
              <MdEmail className='iconUP' />
            </div>

            <div className="input-boxUP">
              <input
                type="password"
                name='currentPassword'
                placeholder="Current Password"
                className="form-control"
                value={input.currentPassword}
                onChange={inputHandler}
              />
              <FaLock className="iconUP" />
            </div>
            <div className="input-boxUP">
              <input
                type="password"
                name='newPassword'
                placeholder="New Password"
                className="form-control"
                value={input.newPassword}
                onChange={inputHandler}
              />
              <FaLock className="iconUP" />
            </div>

            <div className="remember-forgotUP">
              <label>
                <input type="checkbox" /> Remember Password
              </label>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button type="button" className="btn btn-danger" onClick={readValues}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default UpdatePassword