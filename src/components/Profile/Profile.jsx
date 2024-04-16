import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const AddJob = () => {
  const [formData, setFormData] = useState({
    company_id: '',
    title: '',
    category: '',
    description: '',
    expected_salary: '',
    email: '',
    skills_required: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/addJob', formData);
      console.log('Job added successfully:', response.data);
      setShowAlert(true);
      // You can reset the form or do further handling here
    } catch (error) {
      console.error('Error adding job:', error.message);
      // You can handle errors here, like displaying an error message to the user
    }
  };

  return (
    <div>
      <NavBar />
      <br /><br />
      <br /><br />
      <div className="container d-flex justify-content-center">
        <div className="row g-3">
          <form onSubmit={handleSubmit}>
            <h1>Add Job</h1>
            <div className="input-box">
              <input type="text" name="company_id" placeholder="Company ID" className="form-control" value={formData.company_id} onChange={handleChange} />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="text" name="title" placeholder="Title" className="form-control" value={formData.title} onChange={handleChange} />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="text" name="category" placeholder="Category" className="form-control" value={formData.category} onChange={handleChange} />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="text" name="description" placeholder="Description" className="form-control" value={formData.description} onChange={handleChange} />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="text" name="expected_salary" placeholder="Expected Salary" className="form-control" value={formData.expected_salary} onChange={handleChange} />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" className="form-control" value={formData.email} onChange={handleChange} />
              <MdEmail className='icon' />
            </div>
            <div className="input-box">
              <input type="text" name="skills_required" placeholder="Skills Required" className="form-control" value={formData.skills_required} onChange={handleChange} />
              <FaUser className='icon' />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button type="submit" className="btn btn-danger">Submit</button>
            </div>
          </form>
          {showAlert && (
            <div className="alert alert-success" role="alert">
              Job added successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddJob;
