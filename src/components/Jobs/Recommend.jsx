import React, { useState } from 'react';
import axios from 'axios';

function Recommend() {
  const [title, setTitle] = useState('');
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/recommend', { title });
      setJobs(response.data.jobs);
      setError('');
    } catch (err) {
      setError('Error fetching recommended jobs. Please try again later.');
      setJobs([]);
    }
  };

  return (
    <div>
      <h1>Job Recommendation System</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Enter Job Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Recommend Jobs</button>
      </form>
      {error && <p>{error}</p>}
      {jobs.length > 0 && (
        <div>
          <h2>Recommended Jobs:</h2>
          <ul>
            {jobs.map(job => (
              <li key={job._id}>
                <h3>{job.Title}</h3>
                <p>{job.Description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Recommend;
