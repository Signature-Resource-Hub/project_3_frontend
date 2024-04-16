// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavBar from '../NavBar/NavBar';
// import './Viewproperty.css'
// const Viewproperty = () => {
//     const [properties, setProperties] = useState([]);

//     useEffect(() => {
//         // Fetch properties data from backend API
//         const fetchProperties = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/viewall');
//                 setProperties(response.data.properties);
//             } catch (error) {
//                 console.error('Error fetching properties:', error);
//             }
//         };

//         fetchProperties();
//     }, []);

//     return (
//         <div>
//             <NavBar />
//             <br />
//             <br />
            
//       <div className="container">
//         {/* <div className="row"> */}
//            {/* <div className="">  */}
            
//             <div className="cards">
//               {
//               properties.map(
//                 (property, index) => {
               
//                 return  <div className="row g-6">
//                     <img src={property.image} className="card-img-top" alt="..." />
//                     <br /><br />

//                     <div className="card-body">
//                         <br />
//                         <br /><br /><br /><br />
//                       <h5 className="card-title">{property.description}</h5>
//                       <p className="card-text">{property.phone}</p>
//                       <p className="card-text">{property.whatsapp}</p>
//                       <p className="card-text">{property.email}</p>
//                       <p className="card-text">{property.location}</p>
//                       <p className="card-text">{property.property_type}</p>
                      
//                     </div>
//                   </div>
//                 // </div>
//             })}
//             {/* </div> */}
//           {/* </div> */}
//         </div>
//       </div>


//       {/* <div className="row p-1 g-2"> */}

//         </div>
//     );
// };

// export default Viewproperty;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavBar from '../NavBar/NavBar';
// import './Viewproperty.css';

// const Viewproperty = () => {
//     const [properties, setProperties] = useState([]);
//     const [filteredProperties, setFilteredProperties] = useState([]);
//     const [propertyType, setPropertyType] = useState('');

//     useEffect(() => {
//         fetchProperties();
//     }, []);

//     const fetchProperties = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/viewall');
//             setProperties(response.data.properties);
//             setFilteredProperties(response.data.properties);
//         } catch (error) {
//             console.error('Error fetching properties:', error);
//         }
//     };

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/view-property?property_type=${propertyType}`);
//             setFilteredProperties(response.data.properties);
//         } catch (error) {
//             console.error('Error fetching filtered properties:', error);
//         }
//     };
    
//     const handleReset = () => {
//         setPropertyType('');
//         fetchProperties();
//     };

//     return (
//         <div>
//             <NavBar />
           
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <input 
//                             type="text" 
//                             placeholder="Rent/sale" 
//                             value={propertyType} 
//                             onChange={(e) => setPropertyType(e.target.value)}
//                         />
//                     </div>
//                     <div className="col">
                       
//                         <button onClick={handleSearch}>Search</button>
                       
//                     </div>
//                 </div>
//                 <br />
//                 <div className="cards">
//                     {filteredProperties.map((property, index) => (
//                         <div className="row g-6" key={index}>
//                             <img src={property.image} className="card-img-top" alt="..." />
                            
//                             <div className="card-body">
                                
//                                 <h5 className="card-title">{property.description}</h5>
//                                 <p className="card-text">{property.phone}</p>
//                                 <p className="card-text">{property.whatsapp}</p>
//                                 <p className="card-text">{property.email}</p>
//                                 <p className="card-text">{property.location}</p>
//                                 <p className="card-text">{property.property_type}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Viewproperty;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './Viewproperty.css';

const Viewproperty = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [propertyType, setPropertyType] = useState('');

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/viewall');
            setProperties(response.data.properties);
            setFilteredProperties(response.data.properties);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    // const handleSearch = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8000/api/view-property', { property_type: propertyType });
    //         setFilteredProperties(response.data.properties);
    //     } catch (error) {
    //         console.error('Error fetching filtered properties:', error);
    //     }
    // };
    
    
    // const handleReset = () => {
    //     setPropertyType('');
    //     fetchProperties();
    // };

    return (
        <div>
            <NavBar />
           
            <div className="container">
                {/* <div className="row">
                    <div className="col d-flex center">
                        <input 
                            type="text" 
                            placeholder="Rent/sale" 
                            value={propertyType} 
                            onChange={(e) => setPropertyType(e.target.value)}
                        />
                    </div>
                    <div className="col">
                       
                        <button onClick={handleSearch}>Search</button>
                       
                    </div>
                </div> */}
                <br />
                <div className="cards">
                    {filteredProperties.map((property, index) => (
                        <div className="card" key={index}>
                            <img src={property.image} className="card-img-top" alt="..." />
                            
                            <div className="card-body">
                                
                                <h5 className="card-title">{property.description}</h5>
                                <p className='card-text'>{property.imageUrl}</p>
                                <p className="card-text">{property.phone}</p>
                                <p className="card-text">{property.whatsapp}</p>
                                <p className="card-text">{property.email}</p>
                                <p className="card-text">{property.location}</p>
                                <p className="card-text">{property.property_type}</p>
                                
                                {/* View Button */}
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Viewproperty;

