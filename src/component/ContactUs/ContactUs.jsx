
import './ContactUs.css';
import React, { useState } from 'react';
import axios from 'axios';



const ContactUs = () => {
  const [input, setInput] = useState({
    email: "",
    issue:"",
    topic:"",
    category:"",
    description: ""
});
const [alert, setAlert] = useState('');


const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
};

const handleSubmit = async () => {
    try {
        const response = await axios.post('http://localhost:8000/api/registercontact', input);
        console.log('Response:', response);

        // Check if data property exists
        if (response && response.data) {
            console.log(response.data);
            setAlert('  issue added successfully');
            setInput({
              email: "",
              issue:"",
              topic:"",
              category:"",
              description: ""
                
            });
           
        } else {
            throw new Error('Unexpected response structure');
        }
    } catch (error) {
        console.error('Error:', error);

        // Improved error message
        if (error.response) {
            console.error('Server response error:', error.response.data);
            setAlert(`Failed to add : ${error.response.data.message}`);
        } else {
            console.error('Network error or other error:', error.message);
            setAlert('Failed to add : Network error');
        }
    }

    // Reset alert after 3 seconds
    setTimeout(() => {
        setAlert('issue submited!!');
    }, 3000);
};

  return (
    <div>

        <div className="content-container bg-body-tertiary fixed-top">
                <div className="row">
                    <div className="col">
                        <br />
                        <a className="navbar-brand centered" href="/home"><h1><b>Unify.</b></h1></a>
                    </div>
                </div>
            </div>
        <br /><br />
        <br /><br />
        <h2 class="centered-text">Help us to serve you as Quickly as possible!</h2>
        

        <div>
                {alert && <div className="alert alert-info">{alert}</div>}
            </div>
            <div className="containerCU">
                <br />
                <br />
                <div className="container d-flex justify-content-center">
                    <div className="rowCU g-3">
                        <form>
                            
                            <div className="input-boxCU">
                                <input type="text" name="email" placeholder="E-mail" className="form-control" onChange={handleChange} value={input.email} />
                            </div>
                            <br />
                                    <div className="input-boxCU">
                            {/* Dropdown for the issue selection */}
                            <select name="issue" className="form-control" onChange={handleChange} value={input.issue}>
                                <option value="" disabled hidden>How can we help?</option>
                                <option value="Login issue">Login issue</option>
                                <option value="Account related problems">Account related problems</option>
                                <option value="A report">A report</option>
                                <option value="Any other suggestion or inquiries">Any other suggestion or inquiries</option>
                            </select>
                        </div>
                            <br />
                            <div className="input-boxCU">
                                <input type="text" name="topic" placeholder="Topic" className="form-control" onChange={handleChange} value={input.topic} />
                            </div>
                            <br />
                            <div className="input-boxCU">
                                {/* Updated code for the dropdown menu */}
                                <select
                                    name="category"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={input.category}
                                >
                                    
                                    <option value="Property department">Property department</option>
                                    <option value="Service department">Service department</option>
                                    <option value="Jobs section">Jobs section</option>
                                </select>
                            </div>
                            <br />
                            <div className="input-boxCU">
                                <input type="text" name="description" placeholder="Description" className="form-control" onChange={handleChange} value={input.description} />
                            </div>
                
                            <div className="mt-3">
                                <button type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      

        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.manageengine.com/events/2019/userconf/images/canada-creative.png" class="d-block w-100" alt="..."/>
    </div>
    </div>
    </div>

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
</div>
  )
}

export default ContactUs