import axios from "axios";
import React, { useState } from "react";
import { FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import './LoginSignup.css'

const LoginSignup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, phone, password, error, success } = input;
  const navigate = useNavigate();

  const inputHandler = (name) => (event) => {
    setInput({ ...input, error: false, [name]: event.target.value });
  };

  const readValues = async (event) => {
    event.preventDefault();
    setInput({ ...input, error: false });

    if (!name || !email || !phone || !password) {
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

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/register", input);
      if (response.data.status === "pending") {
        navigate("/verify", { state: { userData: response.data.userData } });
      } else {
        setInput({ ...input, error: response.data.msg, success: false });
      }
    } catch (error) {
      setInput({ ...input, error: "Something went wrong. Please try again later.", success: false });
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <br />
      <div className="container d-flex justify-content-center">
        <div className="rowLS g-3">
          <form action=''>
            <h1>SIGN-UP</h1>
            <div className="input-boxLS">
              <input
                type="text"
                name="name"
                value={name}
                onChange={inputHandler("name")}
                placeholder="Username"
                className="form-control"
                autoComplete="name"
              />
              <FaUser className="iconLS" />
            </div>

            <div className="input-boxLS">
              <input
                type="email"
                name="email"
                value={email}
                onChange={inputHandler("email")}
                placeholder="email"
                className="form-control"
                autoComplete="email"
              />
              <IoIosMail className="iconLS" />
            </div>
            <div className="input-boxLS">
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={inputHandler("phone")}
                placeholder="phone"
                className="form-control"
                autoComplete="phone"
              />
              <FaPhoneAlt className="iconLS" />
            </div>

            <div className="input-boxLS">
              <input
                type="password"
                name="password"
                value={password}
                onChange={inputHandler("password")}
                placeholder="password"
                className="form-control"
                autoComplete="password"
              />
              <FaLock className="iconLS" />
            </div>

            <div className="col col-12">
              <button
                className="btn btn-danger"
                onClick={readValues}
              >
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

      {success && (
        <div className="alert alert-success" role="alert">
          New account was created successfully. Please <Link to="/">Login Here</Link>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
