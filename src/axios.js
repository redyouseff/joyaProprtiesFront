//this is axios file
import axios from "axios";

// Get the base URL dynamically based on the environment
const baseURL =  "https://joyaproprties.onrender.com/api"

  // ? "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/api" // Production URL
  // : "http://localhost:5000/api"; // Local development URL

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL, // Dynamic base URL
});

export default axiosInstance;