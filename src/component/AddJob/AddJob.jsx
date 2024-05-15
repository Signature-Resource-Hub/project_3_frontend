import React, { useState } from 'react';
import './Addjob.css';
import axios from 'axios';
import NavBAr from '../NavBAr';

const AddJob = () => {
    // Initialize form data state
    const [formData, setFormData] = useState({
        company_id: '',
        company_name:'',
        title: '',
        category: '',
        description: '',
        expected_salary: '',
        email: '',
        skills_required: ''
    });
    
    // State for showing alert messages
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    
    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to the API endpoint
            const response = await axios.post('http://localhost:8000/api/addJob', formData, {
                headers: {
                    'Content-Type': 'application/json' // Ensure JSON data format
                }
            });
            
            // If the request is successful, display a success alert and reset form data
            setAlertMessage('Job added successfully!');
            setShowAlert(true);
            
            // Reset form data
            setFormData({
                company_id: '',
                company_name:'',
                title: '',
                category: '',
                description: '',
                expected_salary: '',
                email: '',
                skills_required: ''
            });
            
            // Reset the alert after 3 seconds
            setTimeout(() => {
                setShowAlert(false);
                setAlertMessage('');
            }, 3000);
        } catch (error) {
            // Handle error and display appropriate alert message
            console.error('Error adding job:', error);
            
            // Display error message based on the response data or error message
            if (error.response && error.response.data && error.response.data.message) {
                setAlertMessage(`Failed to add job: ${error.response.data.message}`);
            } else {
                setAlertMessage('Failed to add job. Please try again.');
            }
            setShowAlert(true);
            
            // Reset the alert after 3 seconds
            setTimeout(() => {
                setShowAlert(false);
                setAlertMessage('');
            }, 3000);
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
      <img src="https://www.cottgroup.com/images/Zoo/gorsel/is-arama-izni-nedir-is-arama-izni-hesaplama-image.webp" class="d-block w-100" alt="..."/>
      {/* <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <h1 ><b>Unify.</b></h1>
        <p>Job Seeking made Easy.</p>
      </div> */}
    </div>
  </div>
</div>
            </div>
        </div>
      </div>
            
            <br />
            <div className="container d-flex justify-content-center">
            <div className="rowAP g-3">
                       
                {/* Display alert message */}
                {showAlert && (
                    <div className={`alert ${alertMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                        {alertMessage}
                    </div>
                )}
                
                {/* Form to add a new job */}
                <form onSubmit={handleSubmit}>
                    {/* <div className="input-boxAJ">
                        <input type="text" name="company_id" placeholder="Company ID" className="form-control" value={formData.company_id} onChange={handleChange} />
                    </div> */}
                    <br />
                    <div className="input-boxAJ">
                        <input type="text" name="company_name" placeholder="Company Name" className="form-control" value={formData.company_name} onChange={handleChange} />
                    </div>
                    <br />
                    <div className="input-boxAJ">
                        <input type="text" name="title" placeholder="Job Title" className="form-control" value={formData.title} onChange={handleChange} />
                    </div>
                    <br />
                    <div className="input-boxAJ">
                        <input type="text" name="category" placeholder="Category" className="form-control" value={formData.category} onChange={handleChange} />
                    </div>
                    <br />
                    <div className="input-boxAJ">
                        <input type="text" name="description" placeholder="Description" className="form-control" value={formData.description} onChange={handleChange} />
                    </div>
                    <br />
                    <div className="input-boxAJ">
                        <input type="number" name="expected_salary" placeholder="Expected Salary" className="form-control" value={formData.expected_salary} onChange={handleChange} />
                    </div>
                    <br />
                    <div className="input-boxAJ">
                        <input type="email" name="email" placeholder="Contact Email" className="form-control" value={formData.email} onChange={handleChange} />
                    </div>
                    <br />
                    <div className="input-boxAJ">
                        <input type="text" name="skills_required" placeholder="Skills Required" className="form-control" value={formData.skills_required} onChange={handleChange} />
                    </div>
                    <br />
                    {/* Submit button */}
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
            </div>
            <br />
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
    );
};

export default AddJob;
