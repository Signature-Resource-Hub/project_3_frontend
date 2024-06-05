// LoginSignup.jsx
import React, { useState } from 'react';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import axios from 'axios';

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

  const readValues = async (event) => {
    event.preventDefault();

    const { name, email, phone } = input;
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    if (!email.endsWith("gmail.com")) {
      alert("Please enter a valid email address");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Phone number must be 10 digits long and should only contain numbers");
      return;
    }

    const payload = { name, email, phone };
    console.log('Request payload:', payload);

    try {
      const response = await axios.post("http://localhost:8000/api/register", payload);
      if (response.data.status === "pending") {
        navigate("/verify", { state: { userData: response.data.userData } });
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error('Error occurred:', error.response?.data);
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
                type="text"
                value={input.name}
                onChange={inputHandler("name")}
                placeholder="User Name"
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
