// import React, { useState } from 'react';
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import NavBar from '../NavBar/NavBar';


// function ForgotPass() {
//   const [input, setInput]=new useState(
//     {
//         "email":"",
//         "newPassword":""
//     }
//   )
//   const inputHandler = (event) => {
//     setInput({...input,[event.target.name]:event.target.value})
//   };
  

//   const readValues =() =>{
//     if( !input.email || !input.newPassword){
//         alert("please fill in all the fields");
//         return;
//       }

//       if(!input.email.endsWith('gmail.com')){
//         alert("please enter valid email address");
//         return;
//       }

//       if (input.newPassword.length < 8) {
//         alert("Password must have at least 8 characters.");
//     }

//       console.log("Form submitted:" , input);
//       alert("Password Updated!");
//       setInput({
        
//         email:" ",
//         newPassword:" "
//       });


//   }

  

//   return (
//     <div>
//       <NavBar />
//       <br />
//       <br /><br />
//       <div className="container d-flex justify-content-center">
//       <div className="row g-3">
//         <form action=''>
//           <h1>Forgot Password</h1>
//           <div className="input-box">
//             <input
//               type="email"
//               name='email'
//               placeholder="Email"
//               className="form-control"
//               value={input.email}
//               onChange={inputHandler}
//             />
//             <MdEmail className='icon'/>
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               name='newPassword'
//               placeholder='New Password'
//               className="form-control"
//               value={input.newPassword}
//               onChange={inputHandler}
//             />
//             <FaLock className='icon'/>
//           </div>
//           <div className='remember-forgot'>
//             <label><input type="checkbox"/>Remember Password</label>
//           </div>
//           <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//             <button className="btn btn-danger" onClick={readValues}>Login</button>
//           </div>
//           <div className='register-link'>
//             <p>Don't have an account?<a href='#'>Sign up</a></p>
//           </div>
//         </form>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPass;

import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NavBar from '../NavBar/NavBar';

function ForgotPass() {
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
      <NavBar />
      <br />
      <br /><br />
      <div className="container d-flex justify-content-center">
        <div className="row g-3">
          <form onSubmit={handleFormSubmit}>
            <h1>Forgot Password</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={input.email}
                onChange={inputHandler}
              />
              <MdEmail className='icon'/>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                className="form-control"
                value={input.newPassword}
                onChange={inputHandler}
              />
              <FaLock className='icon'/>
            </div>
            <div className='remember-forgot'>
              <label><input type="checkbox"/>Remember Password</label>
            </div>
            <br />
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button type="submit" className="btn btn-danger">Reset Password</button>
            </div>
            <div className='register-link'>
              <p>Don't have an account?<a href='#'>Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;

