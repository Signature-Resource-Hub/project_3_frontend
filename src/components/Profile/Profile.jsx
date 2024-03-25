import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPhone, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NavBar from '../NavBar/NavBar';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [editedData, setEditedData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [shouldRefresh, setShouldRefresh] = useState(false); // State to control page refresh

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/getUser", { userId: "65f97cb8b220db922d307cb0" });
                console.log("API Response:", response.data);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, [shouldRefresh]); // Include shouldRefresh in dependency array

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };
    
    const handleSaveChanges = async () => {
        try {
            console.log("Saving changes...");
            console.log("Edited Data:", editedData);
    
            const { _id: userId, email } = userData; // Fetch userId and email from userData
            console.log("User ID:", userId); // Log user ID
    
            const updateRequests = [];
            if (editedData.name) {
                updateRequests.push(axios.post("http://localhost:8000/api/updateUser", { userId, email, name: editedData.name }));
            }
            if (editedData.email !== undefined) {
                // Change here: pass newEmail for email update
                updateRequests.push(axios.post("http://localhost:8000/api/updateEmail", { userId, email, newEmail: editedData.email }));
            }
            if (editedData.phone) {
                updateRequests.push(axios.post("http://localhost:8000/api/updatePhone", { userId, email, phone: editedData.phone }));
            }
            await Promise.all(updateRequests);
            console.log("Changes saved successfully!");
            setUserData({ ...userData, ...editedData }); // Update userData
            setIsEditing(false);
            setShowAlert(true);
            setShouldRefresh(true); // Trigger page refresh
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };
    
    
    const handleEdit = () => {
        setIsEditing(true);
        // Initialize editedData with a copy of current userData
        setEditedData({ ...userData });
    };

    return (
        <div>
            <NavBar />
            <br /><br />

            <div className="container d-flex justify-content-center">
                <div className="row g-3">
                    <form>
                        <h1>Profile</h1>
                        <div className="input-box">
                            <input type="text" name="name" placeholder="Name" className="form-control" value={isEditing ? editedData.name || '' : userData.name || ''} readOnly={!isEditing} onChange={handleInputChange} />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" name="email" placeholder="Email" className="form-control" value={isEditing ? editedData.email || '' : userData.email || ''} readOnly={!isEditing} onChange={handleInputChange} />
                            <MdEmail className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="tel" name="phone" placeholder="Phone" className="form-control" value={isEditing ? editedData.phone || '' : userData.phone || ''} readOnly={!isEditing} onChange={handleInputChange} />
                            <FaPhone className='icon' />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            {isEditing ? (
                                <button type="button" className="btn btn-danger" onClick={handleSaveChanges}>Save Changes</button>
                            ) : (
                                <button type="button" className="btn btn-danger" onClick={handleEdit}>Edit</button>
                            )}
                        </div>
                    </form>
                    {showAlert && (
                        <div className="alert alert-success" role="alert">
                            Profile updated!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;

