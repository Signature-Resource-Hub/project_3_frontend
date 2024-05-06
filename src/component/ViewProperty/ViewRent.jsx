import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBAr from '../NavBAr';
import './ViewRent.css'

const ViewRent = () => {
    const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchRentProperties = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/rent');
        setProperties(response.data.properties);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rent properties:', error);
      }
    };

    fetchRentProperties();
  }, []);

  const handleViewRent = async (propertyId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/get-property', { id: propertyId });
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
        <br />
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="property-cardsVR ">
          {properties.map((property) => (
            <div key={property._id} className="property-cardVR">
               <img src={property.imageUrl || 'https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_social/public/img/2021/05/19/dillon-kydd-pvdx8c6y5by-unsplash.jpg?itok=II9fA0n9'} className="card-img-top" alt="Property" />
               <div className="content-containerVR">
              

                                {/* <p className="card-textVR">
                                    <i className="fas fa-bath"></i> {property.bhk}
                                </p> */}
                                <p className="card-textVR">
                                    <i className="fas fa-map-marker-alt"></i> {property.location}
                                </p>
                                <p className="card-textVR">
                                    <i className="fas fa-home"></i> {property.property_type}
                                </p>
                               
                                <button className="btn btn-primary" onClick={() => handleViewRent(property._id)}>View</button>
                            </div>
                  </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default ViewRent