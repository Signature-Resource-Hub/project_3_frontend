// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import NavBAr from '../NavBAr';
// import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHome, FaBath } from 'react-icons/fa';
// import './ViewById.css';

// const ViewById = () => {
//     const [property, setProperty] = useState(null);
//     const location = useLocation();
//     const propertyId = location.state && location.state.property._id;

//     useEffect(() => {
//         if (propertyId) {
//             fetchPropertyById(propertyId);
//         }
//     }, [propertyId]);

//     const fetchPropertyById = async (propertyId) => {
//         try {
//             const response = await axios.post('http://localhost:8000/api/get-property', { id: propertyId });
//             if (response.data && response.data.property) {
//                 setProperty(response.data.property);
//             } else {
//                 console.error('Property data is missing from API response');
//             }
//         } catch (error) {
//             console.error('Error fetching property:', error);
//         }
//     };

//     return (
//         <div>
//             <NavBAr />
            
//                 <br /><br /><br />
//             <div className="container property-container">
//                 {property ? (
//                     <>
//                         {/* Left column for property image */}
//                         <div className="property-image">
//                             <img src="https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_social/public/img/2021/05/19/dillon-kydd-pvdx8c6y5by-unsplash.jpg?itok=II9fA0n9" alt="Property" style={{ width: '100%' }} />
//                         </div>

//                         {/* Right column for property details */}
//                         <div className="property-details">
//                             <br /><br />
//                             {/* <p>ID: {property._id}</p> */}
//                             <p><FaBath className="icon-color" /> {property.description}</p> {/* Use bathtub icon for description */}
//                             <p><FaPhone className="icon-color" /> {property.phone}</p>
//                             <p><FaWhatsapp className="icon-color" /> {property.whatsapp}</p>
//                             <p><FaEnvelope className="icon-color" /> {property.email}</p>
//                             <p><FaMapMarkerAlt className="icon-color" /> {property.location}</p>
//                             <p><FaHome className="icon-color" /> {property.property_type}</p>
//                         </div>
//                     </>
//                 ) : (
//                     <p>Loading property details...</p>
//                 )}
//             </div>

            
// <br />
// <br />
// <div className="container bg-body-tertiary ">
//   <div className="row">
//     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//       <div className="row g-3">
//         <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//         <h4>contact</h4>
//           <p>43 Raymouth Rd. tornoto, Canada 3910</p>
//           <p>+1(123)-456-7890</p>
//           <p>+1(123)-456-7890</p>
//           <p>info@mydomain.com</p>
//         </div>
//         <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//           <h4>source </h4>
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
//         </div>
//     );
// };

// export default ViewById;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NavBAr from '../NavBAr';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHome, FaBath } from 'react-icons/fa';
import './ViewById.css';

const ViewById = () => {
    const [property, setProperty] = useState(null);
    const location = useLocation();
    const propertyId = location.state && location.state.property._id;

    useEffect(() => {
        if (propertyId) {
            fetchPropertyById(propertyId);
        }
    }, [propertyId]);

    const fetchPropertyById = async (propertyId) => {
        try {
            const response = await axios.post('http://localhost:8000/api/get-property', { id: propertyId });
            if (response.data && response.data.property) {
                setProperty(response.data.property);
            } else {
                console.error('Property data is missing from API response');
            }
        } catch (error) {
            console.error('Error fetching property:', error);
        }
    };

    // Function to generate the WhatsApp URL
    const generateWhatsAppURL = (phoneNumber) => {
        // Remove any non-numeric characters from the phone number
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
        return `https://wa.me/${cleanedPhoneNumber}`;
    };

    return (
        <div>
            <NavBAr />
            <br /><br /><br />
            <div className="container property-container">
                {property ? (
                    <>
                        {/* Left column for property image */}
                        <div className="property-image">
                            <img src="https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_social/public/img/2021/05/19/dillon-kydd-pvdx8c6y5by-unsplash.jpg?itok=II9fA0n9" alt="Property" style={{ width: '100%' }} />
                        </div>

                        {/* Right column for property details */}
                        <div className="property-details">
                            <br /><br />
                            <p><FaBath className="icon-color"  /> {property.bhk}</p> {/* Use bathtub icon for description */}
                            <p><FaPhone className="icon-color" /> {property.phone}</p>
                            <p><FaWhatsapp className="icon-color" /> {property.whatsapp}</p>
                            <p><FaEnvelope className="icon-color" /> {property.email}</p>
                            <p><FaMapMarkerAlt className="icon-color" /> {property.location}</p>
                            <p><FaHome className="icon-color" /> {property.property_type}</p>
                            <p> {property.description}</p>

                            {/* Add a button for WhatsApp chat */}
                            <button
                                className="whatsapp-chat-button "
                                onClick={() => window.open(generateWhatsAppURL(property.whatsapp))}
                            >
                                <FaWhatsapp className="icon-colorW" /> Chat on WhatsApp
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Loading property details...</p>
                )}
            </div>

            <br />
            <br />
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

export default ViewById;


