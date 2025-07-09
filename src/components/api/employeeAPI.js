import axios from "axios";
import {API_BASE_URL} from "../../config.js"


export const fetchAllEmployees = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/getallemployees`);
    return response.data.data;
};



export const createEmployeeIdCard = async (employee) => {
    const { profilePhoto, name, email,uniqueId, subRole, address, pincode, mobileNumber } = employee;

    const response = await axios.post(
        `${API_BASE_URL}/api/createemployeeidcard`,
        { profilePhoto, name, email, uniqueId, subRole, address, pincode, mobileNumber }
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




export const createEmployeeOfferLetter = async (employee) => {
    const { name, email, subRole, address, pincode, ctc, userId, uniqueId, joiningDate } = employee;

    const response = await axios.post(
        `${API_BASE_URL}/api/createemployeeofferletter`,
        { name, email, subRole, address, pincode, ctc,  _id: userId, uniqueId, joiningDate }
    );

    return response.data;
};



export const fetchMyEmployeeOfferLetter = async (token) => {

    const response = await axios.get(`${API_BASE_URL}/api/employeeofferletter/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};




export const deleteEmployee = async (uniqueId, token) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/employees/${uniqueId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to delete employee' };
    }
};


export const searchEmployeeByUniqueId = async (uniqueId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/searchemployee`, {
        params: { uniqueId },
        });
        return response.data; 
    } catch (error) {
        console.error('Error searching employee:', error.response?.data || error.message);
        throw error;
    }
};