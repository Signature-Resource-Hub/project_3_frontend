


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NavBAr from '../NavBAr';


const ViewIdJob = () => {
    const [job, setJob] = useState(null);
    const location = useLocation();
    const jobId = location.state && location.state.jobId;

    useEffect(() => {
        if (jobId) {
            fetchJobById(jobId);
        }
    }, [jobId]);

    const fetchJobById = async (jobId) => {
        try {
            const response = await axios.post('http://localhost:8000/api/jobbyId', { id: jobId });
            if (response.data && response.data.job) {
                setJob(response.data.job);
            } else {
                console.error('Job data is missing from API response');
            }
        } catch (error) {
            console.error('Error fetching job:', error);
        }
    };

    return (
        <div>
            <NavBAr />
            <br /><br /><br />
            <div className="container">
                {job ? (
                    <div className="job-details">
                        <h2 style={{ textAlign: 'center' }}>{job.title}</h2>
                        <p> {job.category}</p>
                        <p>Expected Salary: {job.expected_salary}</p>
                        <p>Email: {job.email
}</p>
<p>Skills : {job.skills_required.join(', ')}</p>
<p>Description: {job.description}</p>
</div>
) : (
<p>Loading job details...</p>
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

export default ViewIdJob;