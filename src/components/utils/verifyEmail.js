import axios from "axios";
const BOUNCE_URL = import.meta.env.VITE_ZERBOUNCE_API_KEY;
const verifyEmail = async (email) => {
  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${BOUNCE_URL}&email=${email}`
    );

    console.log("ZeroBounce Response:", response.data); // Debugging line

    const { status, sub_status } = response.data;

    if (status === "valid") {
      return true;
    } else {
      console.log(
        `Email validation failed: ${status}, sub_status: ${sub_status}`
      );
      return false;
    }
  } catch (error) {
    console.error("ZeroBounce API Error:", error);
    return false;
  }
};

export default verifyEmail;
