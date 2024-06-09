// Verify.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Verify.css';

const Verify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.userData;

  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-field-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === "1234") { // Assuming 1234 is the correct OTP for testing purposes
      navigate('/password', { state: { userData } });
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="verify-container">
      <h2>Please enter the 4-digit OTP sent to your email</h2>
      <div className="otp-input-container">
        {otp.map((data, index) => (
          <input
            key={index}
            id={`otp-field-${index}`}
            type="text"
            className="otp-input"
            value={data}
            onChange={(e) => handleOtpChange(e.target, index)}
            maxLength="1"
          />
        ))}
      </div>
      <button className="btn btn-primary btn-small mt-3" onClick={handleVerify}>
        Verify
      </button>
    </div>
  );
};

export default Verify;