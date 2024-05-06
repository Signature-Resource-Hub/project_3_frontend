// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import NavBAr from '../NavBAr';
// import './ViewAllJob.css';

// const ViewAllJob = () => {
//     const [jobs, setJobs] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchJobs();
//     }, []);

//     const fetchJobs = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/alljobs');
//             setJobs(response.data.jobs);
//         } catch (error) {
//             console.error('Error fetching jobs:', error);
//         }
//     };

//     const handleViewJob = (jobId) => {
//         // Navigate to job details page with jobId in the state
//         navigate('/ViewjobbyId', { state: { jobId } });
//     };

//     return (
//         <div>
//             <NavBAr />
//             <div className="container">
//                 <div className="jobs-container">
//                     {jobs.map((job, index) => (
//                         <div className="job-card" key={index}>
//                             <div className="job-info">
//                                 <h5>{job.title}</h5>
//                                 <p>Company: {job.company_id}</p>
//                                 <p>Expected Salary: ${job.expected_salary}</p>
//                             </div>
//                             <button
//                                 onClick={() => handleViewJob(job._id)}
//                                 className="btn btn-danger"
//                             >
//                                 Apply
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewAllJob;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBAr from '../NavBAr';
import './ViewAllJob.css';

const ViewAllJob = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/alljobs');
            setJobs(response.data.jobs);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const handleViewJob = (jobId) => {
        // Navigate to job details page with jobId in the state
        navigate('/viewjobbyid', { state: { jobId } });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuOptionClick = (path) => {
        navigate(path);
        setMenuOpen(false); // Close the menu after clicking an option
    };

    return (
        <div>
            <NavBAr />
            <br /><br />
            <div className="container">
                {/* Hamburger menu */}
                <div className="row g-3">
                    <div className="col col-12 d-flex justify-content-end">
                        <div className="hamburger-menu" onClick={toggleMenu}>
                            <div className="hamburger-icon">&#9776;</div>
                        </div>
                    </div>
                </div>

                {/* Dropdown menu */}
                {menuOpen && (
                    <div className="menu">
                        <ul>
                            <li onClick={() => handleMenuOptionClick('/jobs')}>
                                Search by Career Summary
                            </li>
                            <li onClick={() => handleMenuOptionClick('/search-resume')}>
                                Search by Resume
                            </li>
                        </ul>
                    </div>
                )}
                
                {/* Carousel image */}
                <div className="container">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://empitsolutions.com/wp-content/uploads/2023/12/r1.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br />
                <br />
                
                {/* Job listings */}
                <div className="container">
                    <div className="jobs-container">
                        {jobs.map((job, index) => (
                            <div className="job-card" key={index}>
                                <div className="job-info">
                                    <h5>{job.title}</h5>
                                    <p> {job.company_id}</p>
                                    <p>${job.expected_salary}</p>
                                </div>
                                <button
                                    onClick={() => handleViewJob(job._id)}
                                    className="btn btn-danger"
                                >
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAllJob;
