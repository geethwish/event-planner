import axios from "axios";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

const baseApiUrl = process.env.EXPO_PUBLIC_API_URL || "";
// Create an instance of Axios
const api = axios.create({
  baseURL: baseApiUrl, // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
});

// Response Interceptor to handle specific error codes
api.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    if (error.response) {
      // HTTP status code is available, so handle specific codes
      const status = error.response.status;
      let message;

      switch (status) {
        case 400:
          message = "Bad Request. Please check your input and try again.";
          break;
        case 401:
          message = "Unauthorized. Please log in to continue.";
          break;
        case 403:
          message =
            "Forbidden. You do not have permission to access this resource.";
          break;
        case 404:
          message = "Not Found. The requested resource could not be located.";
          break;
        case 408:
          message = "Request Timeout. The server took too long to respond.";
          break;
        case 429:
          message = "Too Many Requests. Please slow down and try again later.";
          break;
        case 500:
          message =
            "Internal Server Error. Something went wrong on the server.";
          break;
        case 502:
          message = "Bad Gateway. The server is down or unreachable.";
          break;
        case 503:
          message = "Service Unavailable. The server is temporarily offline.";
          break;
        case 504:
          message = "Gateway Timeout. The server took too long to respond.";
          break;
        default:
          message = "An unexpected error occurred. Please try again later.";
      }

      // Display the error message
      Toast.show({
        type: "error",
        text1: "Error",
        text2: message,
      });
    } else if (error.request) {
      // Network or other request error (e.g., no response from server)
      Toast.show({
        type: "error",
        text1: "Network Error",
        text2:
          "Unable to connect. Check your internet connection and try again.",
      });
    } else {
      // Other unexpected error
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message || "An unknown error occurred.",
      });
    }

    // Always reject the error to ensure it's handled in API call functions
    return Promise.reject(error);
  }
);

export default api;
