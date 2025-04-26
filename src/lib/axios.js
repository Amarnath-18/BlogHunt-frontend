import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000/api'
    : 'https://bloghunt-backend.onrender.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const checkAuthStatus = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data.user;
  } catch (error) {
    return null;
  }
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

