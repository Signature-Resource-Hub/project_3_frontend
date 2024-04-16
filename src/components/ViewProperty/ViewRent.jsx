import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './ViewRent.css'
const ViewRent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <NavBar />
      <br />
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="property-cards ">
          {properties.map((property) => (
            <div key={property._id} className="property-card">
              <img src={property.image} alt={property.description} />
              <h2>{property.description}</h2>
              <p>Price: {property.price}</p>
              <p>Location: {property.location}</p>
              <p>Phone: {property.phone}</p>
              <p>Email: {property.email}</p>
              <button className="btn btn-primary">View</button>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewRent;
