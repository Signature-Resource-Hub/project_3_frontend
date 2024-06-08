
// import React, { useState } from 'react';
// import './Addjob.css';
// import axios from 'axios';
// import NavBAr from '../NavBAr';

// const AddJob = () => {
//     // Initialize form data state
//     const [formData, setFormData] = useState({
//         company_id: '',
//         company_name: '',
//         title: '',
//         category: '',
//         description: '',
//         expected_salary: '',
//         email: '',
//         skills_required: ''
//     });

//     // State for showing alert messages
//     const [showAlert, setShowAlert] = useState(false);
//     const [alertMessage, setAlertMessage] = useState('');

//     // List of categories for the dropdown
//     const categories = [
//         'Data Science', 'HR', 'Advocate', 'Arts', 'Web Designing', 'Mechanical Engineer', 
//         'Sales', 'Health and Fitness', 'Civil Engineer', 'Java Engineer', 'Business Analyst', 
//         'SAP Developer', 'Automation Testing', 'Electrical Engineer', 'Operations Manager', 
//         'Python Developer', 'DevOps', 'Network Security', 'PMO', 'Database', 'Hadoop', 
//         'ETL Developer', 'DotNet', 'Blockchain', 'Testing'
//     ];

//     // Function to handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     // Function to handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Send POST request to the API endpoint
//             const response = await axios.post('http://localhost:8000/api/addJob', formData, {
//                 headers: {
//                     'Content-Type': 'application/json' // Ensure JSON data format
//                 }
//             });

//             // If the request is successful, display a success alert and reset form data
//             setAlertMessage('Job added successfully!');
//             setShowAlert(true);

//             // Reset form data
//             setFormData({
//                 company_id: '',
//                 company_name: '',
//                 title: '',
//                 category: '',
//                 description: '',
//                 expected_salary: '',
//                 email: '',
//                 skills_required: ''
//             });

//             // Reset the alert after 3 seconds
//             setTimeout(() => {
//                 setShowAlert(false);
//                 setAlertMessage('');
//             }, 3000);
//         } catch (error) {
//             // Handle error and display appropriate alert message
//             console.error('Error adding job:', error);

//             // Display error message based on the response data or error message
//             if (error.response && error.response.data && error.response.data.message) {
//                 setAlertMessage(`Failed to add job: ${error.response.data.message}`);
//             } else {
//                 setAlertMessage('Failed to add job. Please try again.');
//             }
//             setShowAlert(true);

//             // Reset the alert after 3 seconds
//             setTimeout(() => {
//                 setShowAlert(false);
//                 setAlertMessage('');
//             }, 3000);
//         }
//     };

//     return (
//         <div>
//             <NavBAr />
//             <div className="container">
//                 <div className="row g-3">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
//                         <div id="carouselExample" className="carousel slide">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                     <img src="https://www.cottgroup.com/images/Zoo/gorsel/is-arama-izni-nedir-is-arama-izni-hesaplama-image.webp" className="d-block w-100" alt="..." />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <br />
//             <div className="container d-flex justify-content-center">
//                 <div className="rowAP g-3">
//                     {/* Display alert message */}
//                     {showAlert && (
//                         <div className={`alert ${alertMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
//                             {alertMessage}
//                         </div>
//                     )}

//                     {/* Form to add a new job */}
//                     <form onSubmit={handleSubmit}>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="company_name" placeholder="Company Name" className="form-control" value={formData.company_name} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="title" placeholder="Job Title" className="form-control" value={formData.title} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <select name="category" className="form-control" value={formData.category} onChange={handleChange}>
//                                 <option value="">Select Category</option>
//                                 {categories.map(category => (
//                                     <option key={category} value={category}>{category}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="description" placeholder="Description" className="form-control" value={formData.description} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="number" name="expected_salary" placeholder="Expected Salary" className="form-control" value={formData.expected_salary} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="email" name="email" placeholder="Contact Email" className="form-control" value={formData.email} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="skills_required" placeholder="Skills Required" className="form-control" value={formData.skills_required} onChange={handleChange} />
//                         </div>
//                         <br />
//                         {/* Submit button */}
//                         <button type="submit" className="btn btn-danger">Submit</button>
//                     </form>
//                 </div>
//             </div>
//             <br /><br />
//             <div className="container bg-body-tertiary ">
//                 <div className="row">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <div className="row g-3">
//                             <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                                 <a href="/home"> <h4 style={{ textAlign: 'center' }}>Home</h4></a>
//                                 <a href="/Viewproperty"> <h4 style={{ textAlign: 'center' }}>Properties</h4></a>
//                                 <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Services</h4></a>
//                                 <a href="/viewallj"> <h4 style={{ textAlign: 'center' }}>Jobs</h4></a>
//                                 <a href="/News"> <h4 style={{ textAlign: 'center' }}>News</h4></a>
//                             </div>
//                             <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                                 <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
//                                 <a href="/about"> <h4 style={{ textAlign: 'center' }}>About</h4></a>
//                                 <p>Terms</p>
//                                 <p>Privacy</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddJob;

// import React, { useState } from 'react';
// import './Addjob.css';
// import axios from 'axios';
// import NavBAr from '../NavBAr';

// const AddJob = () => {
//     // Initialize form data state
//     const [formData, setFormData] = useState({
//         company_id: '',
//         company_name: '',
//         title: '',
//         category: '',
//         description: '',
//         expected_salary: '',
//         email: '',
//         skills_required: '',
//         date_added: '', // new field for date
//         added_by: ''    // new field for user
//     });

//     // State for showing alert messages
//     const [showAlert, setShowAlert] = useState(false);
//     const [alertMessage, setAlertMessage] = useState('');

//     // List of categories for the dropdown
//     const categories = [
//         'Data Science', 'HR', 'Advocate', 'Arts', 'Web Designing', 'Mechanical Engineer', 
//         'Sales', 'Health and Fitness', 'Civil Engineer', 'Java Engineer', 'Business Analyst', 
//         'SAP Developer', 'Automation Testing', 'Electrical Engineer', 'Operations Manager', 
//         'Python Developer', 'DevOps', 'Network Security', 'PMO', 'Database', 'Hadoop', 
//         'ETL Developer', 'DotNet', 'Blockchain', 'Testing'
//     ];

//     // Function to handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     // Function to handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Get current date and user information
//             const date_added = new Date().toISOString();
//             const added_by = 'currentUser'; // Replace with actual user logic

//             const completeFormData = {
//                 ...formData,
//                 date_added,
//                 added_by
//             };

//             // Send POST request to the API endpoint
//             const response = await axios.post('http://localhost:8000/api/addJob', completeFormData, {
//                 headers: {
//                     'Content-Type': 'application/json' // Ensure JSON data format
//                 }
//             });

//             // If the request is successful, display a success alert and reset form data
//             setAlertMessage('Job added successfully!');
//             setShowAlert(true);

//             // Reset form data
//             setFormData({
//                 company_id: '',
//                 company_name: '',
//                 title: '',
//                 category: '',
//                 description: '',
//                 expected_salary: '',
//                 email: '',
//                 skills_required: '',
//                 date_added: '', // new field
//                 added_by: ''    // new field
//             });

//             // Reset the alert after 3 seconds
//             setTimeout(() => {
//                 setShowAlert(false);
//                 setAlertMessage('');
//             }, 3000);
//         } catch (error) {
//             // Handle error and display appropriate alert message
//             console.error('Error adding job:', error);

//             // Display error message based on the response data or error message
//             if (error.response && error.response.data && error.response.data.message) {
//                 setAlertMessage(`Failed to add job: ${error.response.data.message}`);
//             } else {
//                 setAlertMessage('Failed to add job. Please try again.');
//             }
//             setShowAlert(true);

//             // Reset the alert after 3 seconds
//             setTimeout(() => {
//                 setShowAlert(false);
//                 setAlertMessage('');
//             }, 3000);
//         }
//     };

//     return (
//         <div>
//             <NavBAr />
//             <div className="container">
//                 <div className="row g-3">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
//                         <div id="carouselExample" className="carousel slide">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                     <img src="https://www.cottgroup.com/images/Zoo/gorsel/is-arama-izni-nedir-is-arama-izni-hesaplama-image.webp" className="d-block w-100" alt="..." />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <br />
//             <div className="container d-flex justify-content-center">
//                 <div className="rowAP g-3">
//                     {/* Display alert message */}
//                     {showAlert && (
//                         <div className={`alert ${alertMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
//                             {alertMessage}
//                         </div>
//                     )}

//                     {/* Form to add a new job */}
//                     <form onSubmit={handleSubmit}>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="company_name" placeholder="Company Name" className="form-control" value={formData.company_name} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="title" placeholder="Job Title" className="form-control" value={formData.title} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <select name="category" className="form-control" value={formData.category} onChange={handleChange}>
//                                 <option value="">Select Category</option>
//                                 {categories.map(category => (
//                                     <option key={category} value={category}>{category}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="description" placeholder="Description" className="form-control" value={formData.description} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="number" name="expected_salary" placeholder="Expected Salary" className="form-control" value={formData.expected_salary} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="email" name="email" placeholder="Contact Email" className="form-control" value={formData.email} onChange={handleChange} />
//                         </div>
//                         <br />
//                         <div className="input-boxAJ">
//                             <input type="text" name="skills_required" placeholder="Skills Required" className="form-control" value={formData.skills_required} onChange={handleChange} />
//                         </div>
//                         <br />
//                         {/* Submit button */}
//                         <button type="submit" className="btn btn-danger">Submit</button>
//                     </form>
//                 </div>
//             </div>
//             <br /><br />
//             <div className="container bg-body-tertiary ">
//                 <div className="row">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <div className="row g-3">
//                             <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                                 <a href="/home"> <h4 style={{ textAlign: 'center' }}>Home</h4></a>
//                                 <a href="/Viewproperty"> <h4 style={{ textAlign: 'center' }}>Properties</h4></a>
//                                 <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Services</h4></a>
//                                 <a href="/viewallj"> <h4 style={{ textAlign: 'center' }}>Jobs</h4></a>
//                                 <a href="/News"> <h4 style={{ textAlign: 'center' }}>News</h4></a>
//                             </div>
//                             <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                                 <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
//                                 <a href="/about"> <h4 style={{ textAlign: 'center' }}>About</h4></a>
//                                 <p>Terms</p>
//                                 <p>Privacy</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddJob;

import React, { useState } from 'react';
import './Addjob.css';
import axios from 'axios';
import NavBAr from '../NavBAr';

const AddJob = () => {
    const [formData, setFormData] = useState({
        company_id: '',
        company_name: '',
        title: '',
        category: '',
        description: '',
        expected_salary: '',
        email: '',
        skills_required: '',
        date_added: '',
        added_by: ''
    });

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const categories = [
        'Data Science', 'HR', 'Advocate', 'Arts', 'Web Designing', 'Mechanical Engineer', 
        'Sales', 'Health and Fitness', 'Civil Engineer', 'Java Engineer', 'Business Analyst', 
        'SAP Developer', 'Automation Testing', 'Electrical Engineer', 'Operations Manager', 
        'Python Developer', 'DevOps', 'Network Security', 'PMO', 'Database', 'Hadoop', 
        'ETL Developer', 'DotNet', 'Blockchain', 'Testing'
    ];

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
            const date_added = new Date().toISOString();
            const added_by = 'currentUser'; // Replace with actual user logic

            const completeFormData = {
                ...formData,
                date_added,
                added_by
            };

            const response = await axios.post('http://localhost:8000/api/addJob', completeFormData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setAlertMessage('Job added successfully!');
            setShowAlert(true);

            setFormData({
                company_id: '',
                company_name: '',
                title: '',
                category: '',
                description: '',
                expected_salary: '',
                email: '',
                skills_required: '',
                date_added: '',
                added_by: ''
            });

            setTimeout(() => {
                setShowAlert(false);
                setAlertMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error adding job:', error);

            if (error.response && error.response.data && error.response.data.message) {
                setAlertMessage(`Failed to add job: ${error.response.data.message}`);
            } else {
                setAlertMessage('Failed to add job. Please try again.');
            }
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
                setAlertMessage('');
            }, 3000);
        }
    };

    return (
        <div>
            <NavBAr />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://www.cottgroup.com/images/Zoo/gorsel/is-arama-izni-nedir-is-arama-izni-hesaplama-image.webp" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="container d-flex justify-content-center">
                <div className="rowAP g-3">
                    {showAlert && (
                        <div className={`alert ${alertMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                            {alertMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <br />
                        <div className="input-boxAJ">
                            <input type="text" name="company_id" placeholder="Company ID" className="form-control" value={formData.company_id} onChange={handleChange} />
                        </div>
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
                            <select name="category" className="form-control" value={formData.category} onChange={handleChange}>
                                <option value="">Select Category</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
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
                        
                        <div className="input-boxAJ">
                            <input type="text" name="added_by" placeholder="Added By" className="form-control" value={formData.added_by} onChange={handleChange} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
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

export default AddJob;


