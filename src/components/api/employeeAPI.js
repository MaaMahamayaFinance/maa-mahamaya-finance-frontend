import axios from "axios";
import {API_BASE_URL} from "../../config.js"


export const fetchAllEmployees = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/getallemployees`);
    return response.data.data;
};



export const createEmployeeIdCard = async (employee) => {
    const { name, email,role, subRole, address, pincode, mobileNumber } = employee;

    const response = await axios.post(
        `${API_BASE_URL}/api/createemployeeidcard`,
        { name, email,role, subRole, address, pincode, mobileNumber }
    );

    return response.data;
};


export const fetchMyEmployeeIdCard = async (token) => {
    // console.log("🔐 Token being sent to API:", token);

    const response = await axios.get(`${API_BASE_URL}/api/employeeidcard/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};
