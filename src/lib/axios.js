import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bloghunt-backend.onrender.com/api',  // Replace with your actual backend URL
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



