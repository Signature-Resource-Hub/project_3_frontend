// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported
// import './MainPage.css';
// const Mainpage = () => {
//     return (
//         <div>
//            <div className="content-container bg-body-tertiary fixed-top">
//                 <div className="row">
//                     <div className="col d-flex justify-content-between align-items-center">
//                         {/* Left side with brand name */}
//                         <div>
//                             <br />
//                             <a className="navbar-brand centered">
//                                 <h1><b>Unify.</b></h1>
//                             </a>
//                         </div>

//                         {/* Right side with link to login page */}
//                         <div className="login-link-container">
//                             <a href="/login" className="login-link">
//                                 Login
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Carousel image of Canada */}
//             <div className="carousel">
//                 <div className="carousel-inner">
//                     {/* First carousel item */}
//                     <div className="carousel-item active">
                        
//                         <img
//                             src="https://ychef.files.bbci.co.uk/3840x1920/p0ctsp2r.jpeg" // Replace with the URL of the Canada image you want to use
//                             className="d-block w-100"
//                             alt="Canada"
//                         />
//                         {/* Text overlay */}
//                         <div className="carousel-caption d-flex justify-content-center align-items-center">
//                             <h1 className="text-center text-light">
//                             <b>  Welcome to Canada's online classifieds website!</b>
//                             </h1>
//                         </div>
//                     </div>
//                     {/* Add more carousel items here if needed */}
//                 </div>
//             </div>


//             <br /><br /><br />

//                         <div className="container bg-body-tertiary ">
//             <div className="row">
//                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                 <div className="row g-3">
//                     <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                     <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
//                     <p>43 Raymouth Rd. tornoto, Canada 3910</p>
//                     <p>+1(123)-456-7890</p>
//                     <p>+1(123)-456-7890</p>
//                     <p>info@mydomain.com</p>
//                     </div>
//                     <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                     <a href="/about"> <h4 style={{ textAlign: 'center' }}>About</h4></a>
//                     <p>About us</p>
//                     <p>Mission</p>
//                     <p>Vission</p>
//                     <p>Terms</p>
//                     <p>Privacy</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>

//         </div>
//     );
// }

// export default Mainpage;

import React from 'react';
import './MainPage.css'; // Import your CSS file

const Mainpage = () => {
    return (
        <div>
            <div className="content-container bg-body-tertiary fixed-top">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        {/* Left side with brand name */}
                        <div className="brand">
                            <br />
                            <a className="navbar-brand centered">
                                <h1><b>Unify.</b></h1>
                            </a>
                        </div>

                        {/* Right side with link to login page */}
                        <div className="login-link-container">
                            <a href="/login" className="login-link">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel">
                <div className="carousel-inner">
                    {/* First carousel item */}
                    <div className="carousel-item active">
                        
                        <img
                            src="https://ychef.files.bbci.co.uk/3840x1920/p0ctsp2r.jpeg" // Replace with the URL of the Canada image you want to use
                            className="d-block w-100"
                            alt="Canada"
                        />
                        {/* Text overlay */}
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            <h1 className="text-center text-light">
                            <b>  Welcome to Canada's online classifieds website!</b>
                            </h1>
                        </div>
                    </div>
                    {/* Add more carousel items here if needed */}
                </div>
            </div>

            <br /><br /><br />

                         <div className="container bg-body-tertiary ">
             <div className="row">
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
                    <p>43 Raymouth Rd. tornoto, Canada 3910</p>
                     <p>+1(123)-456-7890</p>
                     <p>+1(123)-456-7890</p>
                     <p>info@mydomain.com</p>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <a href="/about"> <h4 style={{ textAlign: 'center' }}>About</h4></a>
                    <p>About us</p>
                     <p>Mission</p>
                     <p>Vission</p>
                     <p>Terms</p>
                    <p>Privacy</p>
                   </div>
                </div>
                 </div>
            </div>
            </div>

            {/* Add your carousel and other content here */}
        </div>
    );
}

export default Mainpage;

