import axios from "axios";
import Cookies from "js-cookie";

const Api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const FreeApiForAuth = {

    register: async (userData)=>{
        try {
            const response = await Api.post("/register", userData);
            console.log("Registration successful:", response);
            return response.data;
        } catch (error) {
            console.log('Registration error from Auth.js:', error);
            throw error;
        }
    },

    login: async (credentials)=>{
        try {
            const response = await Api.post("/login", credentials);
            console.log("Login successful:", response);
            
            // Store token and user data in cookies
            if (response.data?.data?.accessToken) {
                Cookies.set('accessToken', response.data.data.accessToken, { expires: 7 });
            }
            if (response.data?.data?.user) {
                Cookies.set('user', JSON.stringify(response.data.data.user), { expires: 7 });
            }
            
            return response.data;
        } catch (error) {
            console.log('Login error from Auth.js:', error);
            throw error;
        }
    }

}