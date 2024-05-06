// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import NavBAr from '../NavBAr'
import './Viewproperty.css';

const Viewproperty = () => {
    const [properties, setProperties] = useState([]);
    const [showSuccessMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/viewall');
            setProperties(response.data.properties);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    const handleViewProperty = async (propertyId) => {
        try {
            const response = await axios.post('http://localhost:8000/api/get-property', { id: propertyId });
            console.log(response)
            navigate('/viewbyid', { state: { property: response.data.property } });
        } catch (error) {
            console.error('Error fetching property:', error);
        }
    };
    

  return (
    <div>
        <NavBAr/>
        <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.xoprivate.com/wp-content/uploads/2022/11/VC_living-room1.jpg" class="d-block w-100" alt="..."/>
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

      <div className="containerVP">
                {showSuccessMessage && (
                    <div className="alert alert-success" role="alert">
                        Property added successfully!
                    </div>
                )}

                <br />
                <div className="cardsVP">
                    {properties.map((property, index) => (
                        <div className="cardVP" key={index}>
                            <img src={property.imageUrl || 'https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_social/public/img/2021/05/19/dillon-kydd-pvdx8c6y5by-unsplash.jpg?itok=II9fA0n9'} className="card-img-top" alt="Property" />
                            {/* <div className="card-bodyVP">
                                <h5 className="card-titleVP">{property.bhk}</h5>
                                <p className="card-textVP">{property.location}</p>
                                <p className="card-textVP">{property.property_type}</p>
                                <button onClick={() => handleViewProperty(property._id)} className="btn btn-primary">View</button>
                            </div> */}
                            <div className="card-bodyVP">
                            <div className="content-container">
                                {/* <h5 className="card-titleVP">
                                    <i className="fas fa-bath"></i> {property.bhk}
                                </h5> */}
                                <p className="card-textVP">
                                    <i className="fas fa-map-marker-alt"></i> {property.location}
                                </p>
                                <p className="card-textVP">
                                    <i className="fas fa-home"></i> {property.property_type}
                                </p>
                                <button onClick={() => handleViewProperty(property._id)} className="btn btn-primary">View</button>
                            </div>
                        </div>


                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Viewproperty