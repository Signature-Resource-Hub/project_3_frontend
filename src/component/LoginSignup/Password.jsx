
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
  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password should be at least 8 characters long';
    }
    return '';
  };
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const completeUserData = { ...userData, password };
    console.log('Complete user data:', completeUserData);

    try {
      const response = await axios.post('http://localhost:8000/api/register', completeUserData);
      console.log('API response:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error setting password:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="password-setup-container">
     
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handlePasswordSubmit}>
      <div className="rowxL g-3">
      <h2>Set Your Password</h2>
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
        <button type="submit" className="btn btn-danger"><b>Set Password</b></button>
        </div>
      </form>

      
    </div>
  );
};

export default Password;
