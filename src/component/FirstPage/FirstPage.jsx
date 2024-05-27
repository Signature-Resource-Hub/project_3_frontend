import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBAr from '../NavBAr';

const FirstPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/getUser', { userId: '65f97cb8b220db922d307cb0' });
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
