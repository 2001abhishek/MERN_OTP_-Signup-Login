import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactMode, setContactMode] = useState('email'); // Dropdown for contact mode
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('https://otp-auth-server-1h62.onrender.com/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password, contactMode }),
    });
    const data = await response.json();
    if (response.ok) {
      navigate('/otp-verification', { state: { email } });
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {/* Left Side: Image */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <img 
          src="https://lh7-rt.googleusercontent.com/slidesz/AGV_vUfvl9z1owQyd_bs6KO8sNyYDogduFB0FOsJ8fU_EtWa16gOEvoTqP_q2X2dDMkHhestUBXXMrWOOkqqR0PD3ubETfW0aDRHJQpWQFcyRUF8HMIuHIduCUgyuXXutYVf4INHQA8A4uWNGn8qRRppWQ4eV-nKJ8XN=s2048?key=XddGFA1dg3fG5b7j_-8GeQ" 
          alt="Signup Illustration" 
          className="w-[800px] h-[700px]" 
        />
      </div>

      {/* Right Side: Signup Form */}
      <div className="flex flex-col justify-center items-center bg-white p-8 shadow-lg rounded-lg w-full md:w-1/4 h-auto mr-12 md: ml-10"> 
        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-purple-900">Let us know</span> {/* Purple color */}
            <span className="text-red-500">!</span> {/* Red exclamation mark */}
          </h2>
          <a href="/login" className="text-sm border-b border-gray-500  focus:outline-none focus:border-purple-900 text-2xl font-bold">
            <span className="text-purple-900">Sign</span>
            <span className="text-red-500"> In</span>
          </a>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
          />
          
          <input
            type="password"
            placeholder="Set password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
          />

           <input
            type="password"
            placeholder="Retype password"
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
          />
          <select
            value={contactMode}
            onChange={(e) => setContactMode(e.target.value)}
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900 text-gray-400"
          >
            <option value="email">Contact Mode</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
          />
          
          <button
            type="submit"
            className="bg-purple-900 text-white p-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Signup
          </button>
          {error && <p className="text-red-500">{error}</p>}

          
        </form>


      </div>
      
    </div>
  );
};

export default Signup;
