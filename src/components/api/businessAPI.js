import axios from "axios";
import {API_BASE_URL} from "../../config.js"


export const fetchAllBusiness = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/getallbusiness`);
    return response.data.data;
};



export const createBusinessIdCard = async (business) => {
    const { profilePhoto, name, email, uniqueId, subRole, address, pincode, mobileNumber } = business;

    const response = await axios.post(
        `${API_BASE_URL}/api/createbusinessidcard`,
        { profilePhoto, name, email, uniqueId, subRole, address, pincode, mobileNumber }
    );

    return response.data;
};


export const fetchMyBusinessIdCard = async (token) => {
    // console.log("🔐 Token being sent to API:", token);

    const response = await axios.get(`${API_BASE_URL}/api/businessidcard/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};
