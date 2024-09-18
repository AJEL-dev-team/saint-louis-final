import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';



const instance  = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",

});

instance.interceptors.request.use(
  (config: { headers: { Authorization: string; }; }) => {
    const accessToken = Cookies.get('access'); 
  

    if (accessToken) {
     
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
  },
  (error: any) => {

    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: { config: any; response: { status: number; }; }) => {
    const originalRequest = error.config;


    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get('refresh');
        const response = await axios.post(
          'http://127.0.0.1:8000/api/jwt/refresh/',
          { refresh: refreshToken }
        );
        const newToken = response.data.access;

        Cookies.set('access', newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle error while refreshing token
        return Promise.reject(error);
      }
     
    }

    // If the error is not related to token expiration or invalid token, return the error
    return Promise.reject(error);
  }
);


export default instance;
