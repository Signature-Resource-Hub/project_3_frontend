// Password.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Password.css';

const Password = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.userData;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const completeUserData = { ...userData, password };
    console.log('Complete user data:', completeUserData);

    try {
      
      const response = await axios.post('http://localhost:8000/api/register', completeUserData);
      // if (response.data.status === 'success') {
      //   setSuccess('Account created successfully. Redirecting to login page...');
      //   setTimeout(() => {
      //     navigate('/'); // Navigate to the login page after showing the success message
      //   }, 3000); // Delay the navigation by 3 seconds
      // } else if (response.data.status === 'pending') {
      //   setSuccess('Account is pending verification. Please check your email for further instructions.');
      // } else {
      //   setError(response.data.msg);
      // }
      console.log('API response:', response.data);
      navigate('/');
      
    } catch (error) {
      console.error('Error setting password:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="password-setup-container">
      <h2>Set Your Password</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handlePasswordSubmit}>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="form-control"
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Set Password</button>
      </form>
    </div>
  );
};

export default Password;
