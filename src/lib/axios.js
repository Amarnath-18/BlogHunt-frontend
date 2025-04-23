import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000/api'
    : 'https://blog-hunt-backend.onrender.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle CORS
api.interceptors.request.use((config) => {
  if (process.env.NODE_ENV !== 'development') {
    config.headers['Origin'] = 'https://blog-hunt-frontend.vercel.app';
  }
  return config;
});

export const checkAuthStatus = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data.user;
  } catch (error) {
    console.error('Auth check failed:', error);
    return null;
  }
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;

