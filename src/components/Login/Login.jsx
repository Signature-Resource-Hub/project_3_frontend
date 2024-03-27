import axios from 'axios'; // Import Axios
import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    });

    const { email, password, error, loading, didRedirect } = input;

    const inputHandler = name => event => {
        setInput({ ...input, error: false, [name]: event.target.value });
    };

    const readValues = async (event) => {
        event.preventDefault();

        // Check if all fields are filled
        if (!input.email || !input.password) {
            alert("Please fill in all fields");
            return;
        }

        // Check if email is in correct format
        if (!input.email.endsWith('gmail.com')) {
            alert("Please enter a valid email address");
            return;
        }

        // Check if password has at least 8 characters
        if (input.password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: input.email,
                password: input.password
            });
            
            console.log("Login successful:", response.data);
            window.location.href = '/profile';
            // return <Link to="/dashboard" />;

            setInput({
                email: "",
                password: "",
                error: "",
                loading: false,
                didRedirect: false
            });
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div>
            <br />
            <br /><br /><br />
              <div className="container d-flex justify-content-center">
        <div className="row g-3">
          <form action=''>
            <h1>LOGIN</h1>
            <div className="input-box">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={inputHandler('email')}
                                    placeholder="Email"
                                    className="form-control"
                                />
                                <IoIosMail className="icon" />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={inputHandler('password')}
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <FaLock className="icon" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button type="button" className="btn btn-danger" onClick={readValues}>Login</button>
                            </div>

                            <div className="register-link">
                                <p>
                                    Don't have an account?<Link to="/LoginSignup">Sign up</Link>
                                </p>
                            </div>
            
          </form>
        </div>
      </div>

        </div>
    );
}

export default Login;
