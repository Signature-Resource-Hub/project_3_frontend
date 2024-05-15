// import React, { useState } from 'react';
// import axios from 'axios';
// import NavBAr from '../NavBAr';
// import Compress from 'compress.js';
// import './AddProperty.css';


// const AddProperty = () => {
//     const [input, setInput] = useState({
//         userId: '',
//         price: '',
//         bhk:'',
//         description: '',
//         phone: '',
//         whatsapp: '',
//         email: '',
//         location: '',
//         property_type: '',
//         imageUrl: ''
//     });
//     const [alert, setAlert] = useState('');
//     const [imagePreview, setImagePreview] = useState('');

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
        
//         if (file) {
//             const compress = new Compress();
//             const result = await compress.compress([file], {
//                 quality: 0.6, // Adjust the quality level as needed (0.0 - 1.0)
//                 maxWidth: 1920, // Adjust the max width of the image as needed
//                 maxHeight: 1920 // Adjust the max height of the image as needed
//             });

//             // Convert the compressed image to a base64 string
//             const base64String = `data:${result[0].prefix};base64,${result[0].data}`;

//             // Update the input state with the base64 image string
//             setInput({ ...input, imageUrl: base64String });

//             // Update the image preview
//             setImagePreview(base64String);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setInput({ ...input, [name]: value });
//     };

//     const handleSubmit = async () => {
//         try {
//             const response = await axios.post('http://localhost:8000/api/register-properties', input);
//             console.log('Response:', response);

//             // Check if data property exists
//             if (response && response.data) {
//                 console.log(response.data);
//                 setAlert('Property added successfully');
//                 setInput({
//                     userId: '',
//                     price: '',
//                     bhk:"",
//                     description: '',
//                     phone: '',
//                     whatsapp: '',
//                     email: '',
//                     location: '',
//                     property_type: '',
//                     imageUrl: ''
//                 });
//                 setImagePreview('');
//             } else {
//                 throw new Error('Unexpected response structure');
//             }
//         } catch (error) {
//             console.error('Error:', error);

//             // Improved error message
//             if (error.response) {
//                 console.error('Server response error:', error.response.data);
//                 setAlert(`Failed to add property: ${error.response.data.message}`);
//             } else {
//                 console.error('Network error or other error:', error.message);
//                 setAlert('Failed to add property: Network error');
//             }
//         }

//         // Reset alert after 3 seconds
//         setTimeout(() => {
//             setAlert('propperty added');
//         }, 3000);
//     };

    
//   return (
    
//     <div>
//         <NavBAr/>
//         <div className="container">
//         <div className="row g-3">
//             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
//             <div id="carouselExample" class="carousel slide">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://www.xoprivate.com/wp-content/uploads/2022/11/VC_living-room1.jpg" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//         <h1 ><b>Unify.</b></h1>
//         <p>Easiest way to find your dream home.</p>
//       </div>
//     </div>
//   </div>
// </div>
//             </div>
//         </div>
//       </div>


//       <div>
//                 {alert && <div className="alert alert-info">{alert}</div>}
//             </div>
//             <div className="containerAP">
//                 <br />
//                 <br />
//                 <div className="container d-flex justify-content-center">
//                     <div className="rowAP g-3">
//                         <form>
//                             <div className="input-boxAP">
//                                 <input type="text" name="userId" placeholder="User ID" className="form-control" onChange={handleChange} value={input.userId} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="text" name="price" placeholder="Price" className="form-control" onChange={handleChange} value={input.price} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="text" name="bhk" placeholder="BHK" className="form-control" onChange={handleChange} value={input.bhk} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="text" name="description" placeholder="Description" className="form-control" onChange={handleChange} value={input.description} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="tel" name="phone" placeholder="Phone" className="form-control" onChange={handleChange} value={input.phone} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="tel" name="whatsapp" placeholder="WhatsApp" className="form-control" onChange={handleChange} value={input.whatsapp} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} value={input.email} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="text" name="property_type" placeholder="Rent/Sale" className="form-control" onChange={handleChange} value={input.property_type} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="text" name="location" placeholder="Location" className="form-control" onChange={handleChange} value={input.location} />
//                             </div>
//                             <br />
//                             <div className="input-boxAP">
//                                 <input type="file" name="imageUrl" className="form-control" onChange={handleImageUpload} />
//                             </div>
//                             {imagePreview && (
//                                 <div className="mt-3">
//                                     <img src={imagePreview} alt="Image preview" className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
//                                 </div>
//                             )}
//                             <br />
//                             <div className="mt-3">
//                                 <button type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <br />

//             <div className="container bg-body-tertiary ">
//   <div className="row">
//     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//       <div className="row g-3">
//         <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//           <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
//           <p>43 Raymouth Rd. tornoto, Canada 3910</p>
//           <p>+1(123)-456-7890</p>
//           <p>+1(123)-456-7890</p>
//           <p>info@mydomain.com</p>
//         </div>
//         <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//         <a href="/about"> <h4 style={{ textAlign: 'center' }}>About</h4></a>
//           <p>About us</p>
//           <p>Mission</p>
//           <p>Vission</p>
//           <p>Terms</p>
//           <p>Privacy</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
      

//     </div>
//   )
// }

// export default AddProperty;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import NavBAr from '../NavBAr';
import NavBAr from '../NavBAr';
import Compress from 'compress.js';
import './AddProperty.css';

const AddProperty = () => {
    const [input, setInput] = useState({
        userId: '',
        price: '',
        bhk: '',
        description: '',
        phone: '',
        whatsapp: '',
        email: '',
        location: '',
        property_type: '',
        imageUrl: ''
    });
    const [alert, setAlert] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    // Retrieve the user ID from local storage when the component mounts
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setInput((prevInput) => ({ ...prevInput, userId }));
        }
    }, []);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const compress = new Compress();
            const result = await compress.compress([file], {
                quality: 0.6,
                maxWidth: 1920,
                maxHeight: 1920
            });

            const base64String = `data:${result[0].prefix};base64,${result[0].data}`;
            setInput({ ...input, imageUrl: base64String });
            setImagePreview(base64String);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/register-properties', input);
            console.log('Response:', response);

            if (response && response.data) {
                console.log(response.data);
                setAlert('Property added successfully');
                setInput({
                    userId: '',
                    price: '',
                    bhk: '',
                    description: '',
                    phone: '',
                    whatsapp: '',
                    email: '',
                    location: '',
                    property_type: '',
                    imageUrl: ''
                });
                setImagePreview('');
            } else {
                throw new Error('Unexpected response structure');
            }
        } catch (error) {
            console.error('Error:', error);

            if (error.response) {
                console.error('Server response error:', error.response.data);
                setAlert(`Failed to add property: ${error.response.data.message}`);
            } else {
                console.error('Network error or other error:', error.message);
                setAlert('Failed to add property: Network error');
            }
        }

        setTimeout(() => {
            setAlert('');
        }, 3000);
    };

    return (
        <div>
            <NavBAr />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.xoprivate.com/wp-content/uploads/2022/11/VC_living-room1.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <h1 ><b>Unify.</b></h1>
                                        <p>Easiest way to find your dream home.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {alert && <div className="alert alert-info">{alert}</div>}
            </div>
            
            <div className="containerAP">
                <br />
                <br />
                <div className="container d-flex justify-content-center">
                    <div className="rowAP g-3">
                        <form>
                            {/* Removed the User ID input field since it's automatically set */}
                            <div className="input-boxAP">
                                <input type="text" name="price" placeholder="Price" className="form-control" onChange={handleChange} value={input.price} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="text" name="bhk" placeholder="BHK" className="form-control" onChange={handleChange} value={input.bhk} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="text" name="description" placeholder="Description" className="form-control" onChange={handleChange} value={input.description} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="tel" name="phone" placeholder="Phone" className="form-control" onChange={handleChange} value={input.phone} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="tel" name="whatsapp" placeholder="WhatsApp" className="form-control" onChange={handleChange} value={input.whatsapp} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} value={input.email} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="text" name="property_type" placeholder="Rent/Sale" className="form-control" onChange={handleChange} value={input.property_type} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="text" name="location" placeholder="Location" className="form-control" onChange={handleChange} value={input.location} />
                            </div>
                            <br />
                            <div className="input-boxAP">
                                <input type="file" name="imageUrl" className="form-control" onChange={handleImageUpload} />
                            </div>
                            {imagePreview && (
                                <div className="mt-3">
                                    <img src={imagePreview} alt="Image preview" className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                                </div>
                            )}
                            <br />
                            <div className="mt-3">
                                <button type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />

            <div className="container bg-body-tertiary ">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <a href="/contactus"><h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
                                <p>43 Raymouth Rd. tornoto, Canada 3910</p>
                                <p>+1(123)-456-7890</p>
                                <p>+1(123)-456-7890</p>
                                <p>info@mydomain.com</p>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <a href="/about"><h4 style={{ textAlign: 'center' }}>About</h4></a>
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

        </div>
    );
};

export default AddProperty;
