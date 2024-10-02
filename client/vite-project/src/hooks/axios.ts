import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://otp-auth-server-mq1c.onrender.com/', // Adjust the backend base URL if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
