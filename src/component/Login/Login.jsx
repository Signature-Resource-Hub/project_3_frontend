// // import axios from 'axios'; // Import Axios
// // import React, { useState } from 'react';
// // import { FaLock } from "react-icons/fa";
// // import { IoIosMail } from "react-icons/io";
// // import { Link } from 'react-router-dom';
// // import { jwtDecode } from "jwt-decode";
// // import './Login.css'



// // const Login = () => {
// //     const [input, setInput] = useState({
// //         email: "",
// //         password: "",
// //         error: "",
// //         loading: false,
// //         didRedirect: false
// //     });

// //     const { email, password, error, loading, didRedirect } = input;

// //     const inputHandler = name => event => {
// //         setInput({ ...input, error: false, [name]: event.target.value });
// //     };

// //     const readValues = async (event) => {
// //         event.preventDefault();

// //         // Check if all fields are filled
// //         if (!input.email || !input.password) {
// //             alert("Please fill in all fields");
// //             return;
// //         }

// //         // Check if email is in correct format
// //         if (!input.email.endsWith('gmail.com')) {
// //             alert("Please enter a valid email address");
// //             return;
// //         }

// //         // Check if password has at least 8 characters
// //         if (input.password.length < 8) {
// //             alert("Password must be at least 8 characters long");
// //             return;
// //         }

// //         try {
// //             const response = await axios.post('http://localhost:8000/api/login', {
// //                 email: input.email,
// //                 password: input.password
// //             });
            
// //             console.log("Login successful:", response.data);
// //             console.log(response.data.token)
// //             const token = response.data.token
// //             if (token) {
// //                 const decodedToken = jwtDecode(token);
// //                 console.log(decodedToken.id)
// //                 localStorage.setItem('userId', decodedToken.id);
// //                 localStorage.setItem('user_type', decodedToken.user_type);
// //                 const user_type = localStorage.getItem('user_type');
// //                 if (user_type === 'user') {
// //                     window.location.href = '/Firstpage';
// //                 } else if (user_type === 'admin') {
// //                     // Redirect to job adding page for admin
// //                     window.location.href = '/addJob';
// //                 } else {
// //                     alert("Not a Valid User")
// //                 }
// //             }

// //             setInput({
// //                 email: "",
// //                 password: "",
// //                 error: "",
// //                 loading: false,
// //                 didRedirect: false
// //             });
// //         } catch (error) {
// //             console.error("Login error:", error);
// //             alert("Login failed. Please try again.");
// //         }
// //     };

// //     return (
// //         <div>
           
// //             <br />
// //             <br /><br /><br />
// //               <div className="container d-flex justify-content-center">
// //         <div className="rowL g-3">
// //           <form action=''>
// //             <h1>LOGIN</h1>
// //             <div className="input-boxL">
// //                                 <input
// //                                     type="email"
// //                                     name="email"
// //                                     value={email}
// //                                     onChange={inputHandler('email')}
// //                                     placeholder="Email"
// //                                     className="form-control"
// //                                 />
// //                                 <IoIosMail className="iconL" />
// //                             </div>
// //                             <div className="input-boxL">
// //                                 <input
// //                                     type="password"
// //                                     name="password"
// //                                     value={password}
// //                                     onChange={inputHandler('password')}
// //                                     placeholder="Password"
// //                                     className="form-control"
// //                                 />
// //                                 <FaLock className="iconL" />
// //                             </div>
// //                             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
// //                                 <button type="button" className="btn btn-danger" onClick={readValues}>Login</button>
// //                             </div>

// //                             <div className="register-linkL">
// //                                 <p>
// //                                     Don't have an account?<Link to="/LoginSignup">Sign up</Link>
// //                                 </p>
// //                             </div>
            
// //           </form>
// //         </div>
// //       </div>

// //         </div>
// //     );
// // }

// // export default Login;


// import axios from 'axios'; // Import Axios
// import React, { useState } from 'react';
// import { FaLock } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import jwtDecode from "jwt-decode"; // Import default function, not destructured
// import './Login.css';

// const Login = () => {
//     const [input, setInput] = useState({
//         email: "",
//         password: "",
//         error: "",
//         loading: false,
//         didRedirect: false
//     });

//     const { email, password } = input;

//     const inputHandler = name => event => {
//         setInput({ ...input, error: false, [name]: event.target.value });
//     };

//     const readValues = async (event) => {
//         event.preventDefault();

//         // Check if all fields are filled
//         if (!input.email || !input.password) {
//             alert("Please fill in all fields");
//             return;
//         }

//         // Check if email is in correct format
//         if (!input.email.endsWith('gmail.com')) {
//             alert("Please enter a valid email address");
//             return;
//         }

//         // Check if password has at least 8 characters
//         if (input.password.length < 8) {
//             alert("Password must be at least 8 characters long");
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:8000/api/login', {
//                 email: input.email,
//                 password: input.password
//             });

//             console.log("Login successful:", response.data);
//             const token = response.data.token;
//             if (token) {
//                 const decodedToken = jwtDecode(token);
//                 localStorage.setItem('userId', decodedToken.id);
//                 localStorage.setItem('token', token); // Storing token if needed for future requests

//                 const user_type = decodedToken.user_type;
//                 if (user_type === 'user') {
//                     window.location.href = '/Firstpage';
//                 } else if (user_type === 'admin') {
//                     // Redirect to job adding page for admin
//                     window.location.href = '/addJob';
//                 } else {
//                     alert("Not a Valid User");
//                 }
//             }

//             setInput({
//                 email: "",
//                 password: "",
//                 error: "",
//                 loading: false,
//                 didRedirect: false
//             });
//         } catch (error) {
//             console.error("Login error:", error);
//             alert("Login failed. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <br />
//             <br /><br /><br />
//             <div className="container d-flex justify-content-center">
//                 <div className="rowL g-3">
//                     <form action=''>
//                         <h1>LOGIN</h1>
//                         <div className="input-boxL">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={inputHandler('email')}
//                                 placeholder="Email"
//                                 className="form-control"
//                             />
//                             <IoIosMail className="iconL" />
//                         </div>
//                         <div className="input-boxL">
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={password}
//                                 onChange={inputHandler('password')}
//                                 placeholder="Password"
//                                 className="form-control"
//                             />
//                             <FaLock className="iconL" />
//                         </div>
//                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                             <button type="button" className="btn btn-danger" onClick={readValues}>Login</button>
//                         </div>

//                         <div className="register-linkL">
//                             <p>
//                                 Don't have an account?<Link to="/LoginSignup">Sign up</Link>
//                             </p>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBAr from '../NavBAr';

const FirstPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('No user ID found in local storage.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:8000/api/getUser', { userId });
        console.log('API Response:', response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBAr />
      <br /><br /><br />
      <div className="container">
        {user && (
          <div className="user-info text-center mb-5">
            <img 
              src={user.image || 'https://spng.pngfind.com/pngs/s/80-804949_profile-icon-for-the-politics-category-circle-hd.png'} 
              alt={user.name} 
              className="img-thumbnail rounded-circle" 
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        )}
        <div className="row animate-on-scroll">
          <div className="col-12">
            <div className="row g-3 animate-on-scroll">
              <div className="col-sm-12 col-md-6 col-lg-4 animate-on-scroll">
                <div className="card animate-on-scroll">
                  <img src="https://88designbox.com/upload/2015/12/09/modern-villa-in-canada.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    {/* <h5 className="card-title">Card title</h5> */}
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="/addprop" className="btn btn-primary">Add Property</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 animate-on-scroll">
                <div className="card animate-on-scroll">
                  <img src="https://www.thebalancemoney.com/thmb/PxVBgyMzX0U0W84srDRu8iZF2fM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1131797650-3a302020d1384c188632d9d619b4e200.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    {/* <h5 className="card-title">Card title</h5> */}
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="/addJob" className="btn btn-primary">Add Job</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 animate-on-scroll">
                <div className="card animate-on-scroll">
                  <img src="https://webtk.sfastservices.com/blogimg/Sfastservices%20house%20Cleaning%20Services.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    {/* <h5 className="card-title">Card title</h5> */}
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="" className="btn btn-primary">Add Service</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <br /><br />
        <div className="container animate-on-scroll">
          <div className="row animate-on-scroll">
            <div className="col-md-6  text-center animate-on-scroll">
              <h2>Live News</h2>
              <p>Live news is delivered through various mediums including television, radio, online platforms, and social media, offering real-time updates on breaking news and important events. Canadian news outlets are known for their commitment to journalistic integrity, providing in-depth analysis and coverage of stories that impact the nation and its citizens. Whether it's a major political announcement, a natural disaster, or a groundbreaking scientific discovery, live news in Canada ensures that people stay informed and connected to the world around them.</p>
              <a href="/News" className="btn btn-primary">Read</a>
            </div>
            <div className="col-md-6 animate-on-scroll">
              <img src="https://i.pinimg.com/564x/75/b8/7e/75b87e004fa5391d100272570f5f4b97.jpg" className="img-thumbnail" alt="Services" />
            </div>
          </div>
        </div>

<br /><br />
        <div className="container bg-body-tertiary ">
  <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <a href="/home"> <h4 style={{ textAlign: 'center' }}>Home</h4></a>
          <a href="/Viewproperty"> <h4 style={{ textAlign: 'center' }}>Properties</h4></a>
          <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Services</h4></a>
          <a href="/viewallj"> <h4 style={{ textAlign: 'center' }}>Jobs</h4></a>
          <a href="/News"> <h4 style={{ textAlign: 'center' }}>News</h4></a>
        </div>
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
        <a href="/about"> <h4 style={{ textAlign: 'center' }}>About</h4></a>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
 

  
  );
};

export default FirstPage;

