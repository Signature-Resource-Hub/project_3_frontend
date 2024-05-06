// import React, { useState } from 'react';
// import NavBar from '../NavBar/NavBar';
// import axios from 'axios'; // Import axios for making HTTP requests

// const AddProperty = () => {
//   const [input, setInput] = useState({
//     price: '',
//     description: '',
//     phone: '',
//     whatsapp: '',
//     email: '',
//     location: '',
//     property_type: '',
//     image: '' // Assuming you have a mechanism to handle image upload
// });
// const [alert, setAlert] = useState('');

// const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
// };

// const handleSubmit = async () => {
//     // Check if any field is empty
//     if (!input.price || !input.description || !input.phone || !input.whatsapp || !input.email || !input.location || !input.property_type || !input.image) {
//         setAlert('Please fill all the fields');
//         // Remove the alert after 3 seconds
//         setTimeout(() => {
//             setAlert('enter all the fields');
//         }, 3000);
//         return;
//     }

//     try {
//         // Check if phone and WhatsApp have 10 digits
//         if (!(/^\d{10}$/.test(input.phone)) || !(/^\d{10}$/.test(input.whatsapp))) {
//             setAlert('Phone and WhatsApp must be 10 digits');
//             // Remove the alert after 3 seconds
//             setTimeout(() => {
//                 setAlert('phone number must be 10 digits');
//             }, 3000);
//             return;
//         }

//         // Check if email contains "@gmail.com"
//         if (!input.email.endsWith('@gmail.com')) {
//             setAlert('Email must end with @gmail.com');
//             // Remove the alert after 3 seconds
//             setTimeout(() => {
//                 setAlert('enter valid email');
//             }, 3000);
//             return;
//         }

//         // Make a POST request to your backend endpoint
//         const response = await axios.post('http://localhost:8000/api/register-properties', input);
//         console.log(response.data); // Log the response from the backend
//         setAlert('Property added successfully');
//         // Reset input fields after successful submission
//         setInput({
//             price: '',
//             description: '',
//             phone: '',
//             whatsapp: '',
//             email: '',
//             location: '',
//             property_type: '',
//             image: ''
//         });
//         // Remove the success alert after 3 seconds
//         setTimeout(() => {
//             setAlert('');
//         }, 3000);
//     } catch (error) {
//         console.error('Error:', error.response.data); // Log any errors
//         setAlert('Failed to add property');
//         // Remove the error alert after 3 seconds
//         setTimeout(() => {
//             setAlert('');
//         }, 3000);
//     }
// };

    
//     return (
//         <div>
//             <div>
              
//                 {alert && <div className="alert alert-info">{alert}</div>}
//             </div>
//             <div className="container-1">
//                 <div className="row-1">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <div className="row-1 position-relative">
//                             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                                 <div id="carouselExample" className="carousel slide">
//                                     <div className="carousel-inner">
//                                         <div className="carousel-item active position-relative">
//                                             <img src="https://amazingarchitecture.com/storage/files/1/architecture-firms/negre-studio/sf-seca/sf_seca_carlos_sanchez_negre_studio_spain-2.jpg" className="d-block w-100" alt="First slide" />
//                                             <div className="navbar-container position-absolute top-0 start-50 translate-middle-x mt-3">
//                                                 <NavBar />
//                                             </div>
//                                             <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
//                                                 <div className="text-center">
//                                                     <br />
//                                                     <br /><br /> <br />
//                                                     <h3 style={{ whiteSpace: 'nowrap' }}><b>Easiest way to find your dream home</b></h3>
//                                                     <div className="input-group mb-3">
//                                                         <input type="text" className="form-control" placeholder="Your ZIP Code or City  e.g. Toronto" />
//                                                         <div className="input-group-append">
//                                                             <button className="btn btn-success" type='submit'>Search</button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="carousel-item position-relative">
//                                             <img src="https://img.freepik.com/premium-photo/man-washes-foam-out-car-with-pressure-water_438099-2661.jpg?w=1060" className="d-block w-100" alt="Second slide" />
//                                             {/* Add any additional content or captions for this image */}
//                                         </div>
//                                         <div className="carousel-item position-relative">
//                                             <img src="https://i.pinimg.com/564x/7d/c0/13/7dc013379e92d317f7df84e8eed4960e.jpg" className="d-block w-100" alt="Third slide" />
//                                             {/* Add any additional content or captions for this image */}
//                                         </div>
//                                     </div>
//                                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">Previous</span>
//                                     </button>
//                                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">Next</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 <br />
//                 <div className="container d-flex justify-content-center">
//                     <div className="row g-3">
//                         <form>
//                             <div className="input-box">
//                                 <input type="text" name="price" placeholder="Price" className="form-control" onChange={handleChange} value={input.price} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="text" name="description" placeholder="Description" className="form-control" onChange={handleChange} value={input.description} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="tel" name="phone" placeholder="Phone" className="form-control" onChange={handleChange} value={input.phone} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="tel" name="whatsapp" placeholder="WhatsApp" className="form-control" onChange={handleChange} value={input.whatsapp} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} value={input.email} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="text" name="property_type" placeholder="Rent/Sale" className="form-control" onChange={handleChange} value={input.property_type} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="text" name="location" placeholder="Location" className="form-control" onChange={handleChange} value={input.location} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="file" name="image" id="image" className="form-control" onChange={handleChange} />
//                             </div>
//                             <br />
//                             <div className="mt-3">
//                                 <button type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddProperty;



// import React, { useState } from 'react';
// import NavBar from '../NavBar/NavBar';
// import axios from 'axios'; // Import axios for making HTTP requests

// const AddProperty = () => {
//   const [input, setInput] = useState({
//     userId:'',
//     price: '',
//     description: '',
//     phone: '',
//     whatsapp: '',
//     email: '',
//     location: '',
//     property_type: ''
   
// });
// const [alert, setAlert] = useState('');

// const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
// };

// const handleSubmit = async () => {
//   // Check if any field is empty
//   if (!input.price || !input.description || !input.phone || !input.whatsapp || !input.email || !input.location || !input.property_type ) {
//       setAlert('Please fill all the fields');
//       // Remove the alert after 3 seconds
//       setTimeout(() => {
//           setAlert('');
//       }, 3000);
//       return;
//   }

//   try {
//       // Check if phone and WhatsApp have 10 digits
//       if (!(/^\d{10}$/.test(input.phone)) || !(/^\d{10}$/.test(input.whatsapp))) {
//           setAlert('Phone and WhatsApp must be 10 digits');
//           // Remove the alert after 3 seconds
//           setTimeout(() => {
//               setAlert('');
//           }, 3000);
//           return;
//       }

//       // Check if email contains "@gmail.com"
//       if (!input.email.endsWith('@gmail.com')) {
//           setAlert('Email must end with @gmail.com');
//           // Remove the alert after 3 seconds
//           setTimeout(() => {
//               setAlert('');
//           }, 3000);
//           return;
//       }

//       // Make a POST request to your backend endpoint
//       const response = await axios.post('http://localhost:8000/api/register-properties', input);
//       console.log(response.data); // Log the response from the backend
//       setAlert('Property added successfully');
//       // Reset input fields after successful submission
//       setInput({
//         userId:'',
//           price: '',
//           description: '',
//           phone: '',
//           whatsapp: '',
//           email: '',
//           location: '',
//           property_type: ''
//       });
//       // Remove the success alert after 3 seconds
//       setTimeout(() => {
//           setAlert('');
//       }, 3000);
//   } catch (error) {
//       console.error('Error:', error.response.data); // Log any errors
//       setAlert('Failed to add property');
//       // Remove the error alert after 3 seconds
//       setTimeout(() => {
//           setAlert('');
//       }, 3000);
//   }
// };

    
//     return (
//         <div>
//             <div>
              
//                 {alert && <div className="alert alert-info">{alert}</div>}
//             </div>
//             <div className="container-1">
//                 <div className="row-1">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <div className="row-1 position-relative">
//                             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                                 <div id="carouselExample" className="carousel slide">
//                                     <div className="carousel-inner">
//                                         <div className="carousel-item active position-relative">
//                                             <img src="https://amazingarchitecture.com/storage/files/1/architecture-firms/negre-studio/sf-seca/sf_seca_carlos_sanchez_negre_studio_spain-2.jpg" className="d-block w-100" alt="First slide" />
//                                             <div className="navbar-container position-absolute top-0 start-50 translate-middle-x mt-3">
//                                                 <NavBar />
//                                             </div>
//                                             <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
//                                                 <div className="text-center">
//                                                     <br />
//                                                     <br /><br /> <br />
//                                                     <h3 style={{ whiteSpace: 'nowrap' }}><b>Easiest way to find your dream home</b></h3>
//                                                     <div className="input-group mb-3">
//                                                         <input type="text" className="form-control" placeholder="Your ZIP Code or City  e.g. Toronto" />
//                                                         <div className="input-group-append">
//                                                             <button className="btn btn-success" type='submit'>Search</button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
                                       
//                                     </div>
//                                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">Previous</span>
//                                     </button>
//                                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">Next</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 <br />
//                 <div className="container d-flex justify-content-center">
//                     <div className="row g-3">
//                         <form>
//                         <div className="input-box">
//                                 <input type="text" name="userId" placeholder="userId" className="form-control" onChange={handleChange} value={input.userId} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="text" name="price" placeholder="Price" className="form-control" onChange={handleChange} value={input.price} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="text" name="description" placeholder="Description" className="form-control" onChange={handleChange} value={input.description} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="tel" name="phone" placeholder="Phone" className="form-control" onChange={handleChange} value={input.phone} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="tel" name="whatsapp" placeholder="WhatsApp" className="form-control" onChange={handleChange} value={input.whatsapp} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} value={input.email} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="text" name="property_type" placeholder="Rent/Sale" className="form-control" onChange={handleChange} value={input.property_type} />
//                             </div>
//                             <br />
//                             <div className="input-box">
//                                 <input type="text" name="location" placeholder="Location" className="form-control" onChange={handleChange} value={input.location} />
//                             </div>
//                             <br />
                           
//                             <div className="input-box">
//                                 <input type="file" name="image" id="image" className="form-control" onChange={handleChange} />
//                             </div>
//                            <br />
//                             <div className="mt-3">
//                                 <button type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddProperty;

// 

import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios'; 

const AddProperty = () => {
    const [input, setInput] = useState({
        userId: '',
        price: '',
        description: '',
        phone: '',
        whatsapp: '',
        email: '',
        location: '',
        property_type: '',
        imageUrl: ''
    });
    const [alert, setAlert] = useState('');

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/register-properties', input);
            console.log(response.data);
            setAlert('Property added successfully');
            setInput({
                userId: '',
                price: '',
                description: '',
                phone: '',
                whatsapp: '',
                email: '',
                location: '',
                property_type: '',
                imageUrl: ''
            });
        } catch (error) {
            console.error('Error:', error.response.data);
            setAlert('Failed to add property');
        }
        setTimeout(() => {
            setAlert('');
        }, 3000);
    };

    return (
        <div>
            <div>
                {alert && <div className="alert alert-info">{alert}</div>}
            </div>
            <div className="container-1">
                <div className="row-1">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row-1 position-relative">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active position-relative">
                                            <img src="https://amazingarchitecture.com/storage/files/1/architecture-firms/negre-studio/sf-seca/sf_seca_carlos_sanchez_negre_studio_spain-2.jpg" className="d-block w-100" alt="First slide" />
                                            <div className="navbar-container position-absolute top-0 start-50 translate-middle-x mt-3">
                                                <NavBar />
                                            </div>
                                            <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                                                <div className="text-center">
                                                    <br />
                                                    <br /><br /> <br />
                                                    <h3 style={{ whiteSpace: 'nowrap' }}><b>Easiest way to find your dream home</b></h3>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Your ZIP Code or City  e.g. Toronto" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-success" type='submit'>Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container d-flex justify-content-center">
                    <div className="row g-3">
                        <form>
                            <div className="input-box">
                                <input type="text" name="userId" placeholder="userId" className="form-control" onChange={handleChange} value={input.userId} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="text" name="price" placeholder="Price" className="form-control" onChange={handleChange} value={input.price} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="text" name="description" placeholder="Description" className="form-control" onChange={handleChange} value={input.description} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="tel" name="phone" placeholder="Phone" className="form-control" onChange={handleChange} value={input.phone} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="tel" name="whatsapp" placeholder="WhatsApp" className="form-control" onChange={handleChange} value={input.whatsapp} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} value={input.email} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="text" name="property_type" placeholder="Rent/Sale" className="form-control" onChange={handleChange} value={input.property_type} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="text" name="location" placeholder="Location" className="form-control" onChange={handleChange} value={input.location} />
                            </div>
                            <br />
                            <div className="input-box">
                                <input type="text" name="imageUrl" placeholder="Image URL" className="form-control" onChange={handleChange} value={input.imageUrl} />
                            </div>
                            <br />
                            <div className="mt-3">
                                <button type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;