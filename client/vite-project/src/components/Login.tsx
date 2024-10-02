import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      navigate('/welcome', { state: { email } });
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {/* Left Side: Image */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <img 
          src="https://lh7-rt.googleusercontent.com/slidesz/AGV_vUf4NdcGwxFeOd_SjeDztNqSfmhWuJ_OdW1o43-h8TCbUflEDqgPyIWLiZzLZmV-d0st3hcpdAZXXyqgsM67vN7lohKlaOHSo_lJ79UUHjwDkuQaiwKjzNXr8qdtAnRybIQbsnROWakHjpP-dJCoWq5niy6ZYpsw=s2048?key=XddGFA1dg3fG5b7j_-8GeQ" 
          alt="Login Illustration" 
          className="w-[800px] h-[700px]" 
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="flex flex-col justify-center items-center bg-white p-8 shadow-lg rounded-lg w-full md:w-1/4 h-auto relative mr-12  md: ml-10">
        <div className="border-l border-gray-300 absolute top-0 right-0 h-full z-[-1]"></div> {/* Thin vertical separator line */}

        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-purple-900">Let us know</span>
            <span className="text-red-500">!</span>
          </h2>
        </div>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4 ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
          />
          <button
            type="submit"
            className="bg-purple-900 text-white p-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Button with purple border and rounder shape */}
        <button
          onClick={() => navigate('/')}
          className="border-2 border-purple-900 text-purple-900 p-2 rounded-lg hover:bg-purple-700 hover:text-white transition duration-300 w-full mt-4"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
