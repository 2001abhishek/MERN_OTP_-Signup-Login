// src/components/OtpVerification.tsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const email = location.state?.email || '';
  const navigate = useNavigate();

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('https://mern-otp-signup-login.onrender.com/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });
    const data = await response.json();
    if (response.ok) {
      // On successful OTP verification, navigate to the welcome page
      navigate('/welcome', { state: { email } });
    } else {
      alert(data.message); // Show error if OTP is wrong
    }
  };
  const handleResendOtp = async () => {
    const response = await fetch('https://mern-otp-signup-login.onrender.com/api/resend-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.message);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">OTP Verification</h1>
      <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Verify OTP</button>
      </form>
      <button onClick={handleResendOtp} className="bg-gray-500 text-white p-2">Resend OTP</button>

    </div>
  );
};

export default OtpVerification;
