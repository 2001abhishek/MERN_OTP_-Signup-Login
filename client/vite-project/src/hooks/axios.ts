import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mern-otp-signup-login.onrender.com/', // Adjust the backend base URL if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
