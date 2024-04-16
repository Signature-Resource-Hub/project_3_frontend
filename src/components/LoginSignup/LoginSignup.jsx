import axios from "axios";
import React, { useState } from "react";
import { FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

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

  const inputHandler = (name) => (event) => {
    setInput({ ...input, error: false, [name]: event.target.value });
  };

  const readValues = (event) => {
    event.preventDefault();
    setInput({ ...input, error: false });

    // Check if all fields are filled
    if (!name || !email || !phone || !password) {
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

    // Check if password has at least 8 characters
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    axios.post("http://localhost:8000/api/register", input)
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          setInput({ ...input, error: response.data.error, success: false });
        } else {
          setInput({
            name: "",
            email: "",
            phone: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((error) => {
        setInput({ ...input, error: "Something went wrong. Please try again later.", success: false });
        console.error('Error occurred:', error);
      });
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/login">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <br />
      <div className="container d-flex justify-content-center">
        <div className="row g-3">
          <form action=''>
            <h1>SIGN-UP</h1>
            <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={inputHandler("name")}
                  placeholder="Username"
                  className="form-control"
                  autoComplete="name"
                />
                <FaUser className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={inputHandler("email")}
                  placeholder="email"
                  className="form-control"
                  autoComplete="email"
                />
                <IoIosMail className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={inputHandler("phone")}
                  placeholder="phone"
                  className="form-control"
                  autoComplete="phone"
                />
                <FaPhoneAlt className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={inputHandler("password")}
                  placeholder="password"
                  className="form-control"
                  autoComplete="password"
                />
                <FaLock className="icon" />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button
                  className="btn btn-danger"
                  onClick={(event) => readValues(event)}
                >
                  SIGN UP
                </button>
              </div>
              <div className="register-link">
                <p>
                  Already have an account?<Link to="/">Login</Link>
                </p>
              </div>
          </form>
        </div>
      </div>

      {/* <div className="container" style={{ marginTop: "30px" }}>
        <div className="row justify-content-center">
          <div className="wrapper">
            <form>
              <h1>SIGN UP</h1>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={inputHandler("name")}
                  placeholder="Username"
                  className="form-control"
                  autoComplete="name"
                />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={inputHandler("email")}
                  placeholder="email"
                  className="form-control"
                  autoComplete="email"
                />
                <IoIosMail className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={inputHandler("phone")}
                  placeholder="phone"
                  className="form-control"
                  autoComplete="phone"
                />
                <FaPhoneAlt className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={inputHandler("password")}
                  placeholder="password"
                  className="form-control"
                  autoComplete="password"
                />
                <FaLock className="icon" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button
                  className="btn btn-danger"
                  onClick={(event) => readValues(event)}
                >
                  SIGN UP
                </button>
              </div>
              <div className="register-link">
                <p>
                  Already have an account?<Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* {successMessage()}
      {errorMessage()} */}

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
