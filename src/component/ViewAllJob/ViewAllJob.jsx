import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBAr from '../NavBAr';
import './ViewAllJob.css';
import { FaBuilding, FaDollarSign, FaCalendarAlt, FaUser } from 'react-icons/fa'; // Import icons

const ViewAllJob = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]); // State for filtered jobs
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category filter
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/alljobs');
            setJobs(response.data.jobs);
            setFilteredJobs(response.data.jobs); // Set filtered jobs initially to all jobs
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

    // Function to handle category filter
    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        if (category === '') {
            setFilteredJobs(jobs); // If no category selected, display all jobs
        } else {
            const filtered = jobs.filter(job => job.category === category);
            setFilteredJobs(filtered);
        }
    };

    return (
        <div>
            <NavBAr />
            <br /><br /><br />
            <div className="container">
                {/* Hamburger menu */}
                <div className="container">
                {/* Hamburger menu */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="hamburger-icon">&#9776;</div>
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
        <br />
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

                {/* Category filter dropdown */}
                <div className="container mb-4">
                    <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryFilter(e.target.value)}
                        className="form-control"
                    >
                        <option value="">All Categories</option>
                        <option value="Data Science">Data Science</option>
                        <option value="HR">HR</option>
                        <option value="Advocate">Advocate</option>
                        <option value="Arts">Arts</option>
                        <option value="Web Designing">Web Designing</option>
                        <option value="Mechanical Engineer">Mechanical Engineer</option>
                        <option value="Sales">Sales</option>
                        <option value="Health and Fitness">Health and Fitness</option>
                        <option value="Civil Engineer">Civil Engineer</option>
                        <option value="Java Engineer">Java Engineer</option>
                        <option value="Business Analyst">Business Analyst</option>
                        <option value="SAP Developer">SAP Developer</option>
                        <option value="Automation Testing">Automation Testing</option>
                        <option value="Electrical Engineer">Electrical Engineer</option>
                        <option value="Operations Manager">Operations Manager</option>
                        <option value="Python Developer">Python Developer</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Network Security">Network Security</option>
                        <option value="PMO">PMO</option>
                        <option value="Database">Database</option>
                        <option value="Hadoop">Hadoop</option>
                        <option value="ETL Developer">ETL Developer</option>
                        <option value="DotNet">DotNet</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Testing">Testing</option>
                        {/* Add other categories here */}
                    </select>
                </div>

                {/* Job listings */}
                <div className="container">
                    <div className="jobs-container">
                        {filteredJobs.map((job, index) => (
                            <div className="job-card" key={index}>
                                <div className="job-info">
                                    <h5>{job.title}</h5>
                                    <p><FaBuilding />  {job.company_id}</p>
                                    <p><FaDollarSign /> {job.expected_salary}</p>
                                    <p><FaCalendarAlt />  {new Date(job.date_added).toLocaleDateString()}</p>
                                    <p><FaUser /> {job.added_by}</p>
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
