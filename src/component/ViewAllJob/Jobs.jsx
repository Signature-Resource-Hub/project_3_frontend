

import React, { useState } from 'react';
import axios from 'axios';
import './Jobs.css';
import NavBAr from '../NavBAr';

const Jobs = () => {
    const [predictedCategory, setPredictedCategory] = useState('');
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');
    const [careerSummary, setCareerSummary] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Reset state to handle each new submission independently
        setPredictedCategory('');
        setJobs([]);
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:5000/filter_resume', { resume_text: careerSummary });

            if (response.status !== 200) {
                throw new Error('Failed to fetch data from the server');
            }

            const data = response.data;

            // Log the server response for debugging
            console.log('Server response:', data);

            // Check if the server response contains the predicted category
            if (data.predicted_category) {
                setPredictedCategory(data.predicted_category);

                // Fetch jobs for the predicted category
                const jobResponse = await axios.post('http://localhost:8000/api/viewjob', { category: data.predicted_category });

                if (jobResponse.status === 200) {
                    setJobs(jobResponse.data.jobs);
                } else {
                    throw new Error('Failed to fetch jobs from the server');
                }
            } else {
                throw new Error('Invalid response format from server: predicted category not found');
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError('Failed to retrieve data from the server');
        } finally {
            // Clear the input field after submission
            setCareerSummary('');
        }
    };

    return (
        <div>
            <NavBAr />
            <br /><br />
            <div className="containerJ d-flex justify-content-center">
                <div className="row g-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-boxJ">
                            <input
                                type="text"
                                name="text"
                                value={careerSummary}
                                placeholder="Career Summary"
                                className="form-control"
                                onChange={(e) => setCareerSummary(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="col col-12">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </form>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {/* Check if predictedCategory is not empty before rendering */}
            {predictedCategory && (
                <div className="containerJ">
                    <h3 style={{ color: 'black' }}>{predictedCategory}</h3>
                    <div className="rowJ">
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <div key={job._id} className="col-12 mb-3 bg-white text-black d-flex justify-content-center">
                                    <div className="cardsJ">
                                        <div className="card-bodyJ">
                                            <h5 className="card-title">{job.title}</h5>
                                            <p className="card-text">{job.description}</p>
                                            <p className="card-text">Salary: {job.expected_salary}</p>
                                            <p className="card-text">{job.email}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-jobs">
                                <p style={{ color: 'black' }}>No jobs under specific category :( </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Jobs;

