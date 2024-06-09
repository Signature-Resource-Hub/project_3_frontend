import axios from "axios";
import React, { useState } from "react";
import { FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import './LoginSignup.css'
import { useNavigate, useLocation } from 'react-router-dom';

const LoginSignup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const inputHandler = (name) => (event) => {
    setInput({ ...input, [name]: event.target.value });
  };

  const readValues = (event) => {
    event.preventDefault();

    const { name, email, phone } = input;
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    // Check if email is in correct format
    if (!email.endsWith("gmail.com")) {
      alert("Please enter a valid email address");
      return;
    }

    // Check if phone number is 10 digits
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Phone number must be 10 digits long and should only contain numbers");
      return;
    }

    const payload = { name, email, phone };
    console.log('Request payload:', payload);

    try {
      // Store data locally instead of sending it to the backend
      localStorage.setItem("userData", JSON.stringify(payload));
      
      // Mock the response data
      const response = {
        data: {
          status: "approved",
          userData: payload
        }
      };

      if (response.data.status === "approved") {
        
        navigate("/verify", { state: { userData: response.data.userData } });
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="rowLS g-3">
          <form>
            <h1>SIGN-UP</h1>
            <div className="input-boxLS">
            <input
                type="name"
                value={input.name}
                onChange={inputHandler("name")}
                placeholder="User name"
                className="form-control"
              />
              <FaUser className="iconLS" />
            </div>
            <div className="input-boxLS">
              <input
                type="email"
                value={input.email}
                onChange={inputHandler("email")}
                placeholder="Email"
                className="form-control"
              />
              <IoIosMail className="iconLS" />
            </div>
            <div className="input-boxLS">
              <input
                type="tel"
                value={input.phone}
                onChange={inputHandler("phone")}
                placeholder="Phone"
                className="form-control"
              />
              <FaPhoneAlt className="iconLS" />
            </div>
            <div className="col col-12">
              <button className="btn btn-danger" onClick={readValues}>
                SIGN UP
              </button>
            </div>
            <div className="register-link">
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;