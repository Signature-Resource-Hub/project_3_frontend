// import React, { useState } from 'react';
// import axios from 'axios';
// import NavBar from '../NavBar/NavBar';

// const Jobs = () => {
//   const [predictedCategory, setPredictedCategory] = useState('');
//   const [jobs, setJobs] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const formData = new FormData(event.target);
//     const resumeText = formData.get('text');
  
//     console.log('Submitted resume text:', resumeText);
  
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/filter_resume', { resume_text: resumeText });
  
//       if (response.status !== 200) {
//         throw new Error('Failed to fetch data from the server');
//       }
  
//       const data = response.data;
  
//       console.log('Response from server:', data);
  
//       if (data.predicted_category) {
//         console.log('Updating state with predicted category:', data.predicted_category);
//         setPredictedCategory(data.predicted_category);
//         // Fetch jobs for the predicted category
//         const jobResponse = await axios.post('http://localhost:8000/api/viewjob', { category: data.predicted_category });
//         if (jobResponse.status === 200) {
//           setJobs(jobResponse.data.jobs);
//         }
//       } else {
//         throw new Error('Invalid response format from server');
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
//   return (
//     <div>
//       <NavBar />
//       <br /><br />
//       <div className="container d-flex justify-content-center">
//         <div className="row g-3">
//           <form onSubmit={handleSubmit}>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="text"
//                 placeholder="Career summary"
//                 className="form-control"
//                 style={{ height: "50px", fontSize: "18px" }}
//               />
//             </div>
//             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
//               <button type="submit" className="btn btn-danger">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div>
//         {predictedCategory && (
//           <div>
//             <h3>{predictedCategory}</h3>
//             <div className="row-n">
//               {jobs.map(job => (
//                 <div key={job._id} className="col-md-4 mb-3">
//                   <div className="card">
//                     <div className="card-body">
//                       <h5 className="card-title">{job.title}</h5>
//                       <p className="card-text">{job.description}</p>
//                       <p className="card-text"> Salary:{job.expected_salary}</p>
//                       <p className="card-text">{job.email}</p>
                      
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

// import React, { useState } from 'react';
// import axios from 'axios';
// import NavBar from '../NavBar/NavBar';

// const Jobs = () => {
//   const [predictedCategory, setPredictedCategory] = useState('');
//   const [jobs, setJobs] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const formData = new FormData(event.target);
//     const resumeText = formData.get('text');
  
//     console.log('Submitted resume text:', resumeText);
  
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/filter_resume', { resume_text: resumeText });
  
//       if (response.status !== 200) {
//         throw new Error('Failed to fetch data from the server');
//       }
  
//       const data = response.data;
  
//       console.log('Response from server:', data);
  
//       if (data.predicted_category) {
//         console.log('Updating state with predicted category:', data.predicted_category);
//         setPredictedCategory(data.predicted_category);
//         // Fetch jobs for the predicted category
//         const jobResponse = await axios.post('http://localhost:8000/api/viewjob', { category: data.predicted_category });
//         if (jobResponse.status === 200) {
//           setJobs(jobResponse.data.jobs);
//         }
//       } else {
//         throw new Error('Invalid response format from server');
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
//   return (
//     <div>
//       <NavBar />
//       <br /><br />
//       <div className="container d-flex justify-content-center">
//         <div className="row g-3">
//           <form onSubmit={handleSubmit}>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="text"
//                 placeholder="Career summary"
//                 className="form-control"
//                 style={{ height: "50px", fontSize: "18px" }}
//               />
//             </div>
//             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
//               <button type="submit" className="btn btn-danger">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div>
//         {predictedCategory && (
//           <div>
//             <h3>{predictedCategory}</h3>
//             <div className="rown rown-cols-1 rown-cols-md-2 rown-cols-lg-4 rown-cols-xl-4 rown-cols-xxl-4">
//               {jobs.map(job => (
//                 <div key={job._id} className="col mb-3">
//                   <div className="card">
//                     <div className="card-body">
//                       <h5 className="card-title">{job.title}</h5>
//                       <p className="card-text">{job.description}</p>
//                       <p className="card-text">Salary: {job.expected_salary}</p>
//                       <p className="card-text">Email: {job.email}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './Jobs.css'

const Jobs = () => {
  const [predictedCategory, setPredictedCategory] = useState('');
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const resumeText = formData.get('text');
  
    console.log('Submitted resume text:', resumeText);
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/filter_resume', { resume_text: resumeText });
  
      if (response.status !== 200) {
        throw new Error('Failed to fetch data from the server');
      }
  
      const data = response.data;
  
      console.log('Response from server:', data);
  
      if (data.predicted_category) {
        console.log('Updating state with predicted category:', data.predicted_category);
        setPredictedCategory(data.predicted_category);
        // Fetch jobs for the predicted category
        const jobResponse = await axios.post('http://localhost:8000/api/viewjob', { category: data.predicted_category });
        if (jobResponse.status === 200) {
          setJobs(jobResponse.data.jobs);
        } else {
          throw new Error('Failed to fetch jobs from the server');
        }
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError('Failed to retrieve data from the server');
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
            <div className="input-box">
              <input type="text" name="text" placeholder="Carrer Summary" className="form-control" />
            </div>
            <br />
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
      {/* Cards section */}
      {predictedCategory && (
        <div className="container ">
          <h3 style={{ color: 'white' }}>{predictedCategory}</h3> {/* Set text color to white */}
          <div className="row">
            {jobs.map(job => (
              <div key={job._id} className="col-12 mb-3 bg-white text-black d-flex justify-content-center"> {/* Set col-12 to ensure one card per row */}
                <div className="cards">
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">{job.description}</p>
                    <p className="card-text">Salary: {job.expected_salary}</p>
                    <p className="card-text">{job.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
