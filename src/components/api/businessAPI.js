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
    const response = await axios.get(`${API_BASE_URL}/api/businessidcard/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};


export const createBusinessCertificate = async (business) => {
    const { name, email, subRole, userId, uniqueId, date } = business;

    const response = await axios.post(
        `${API_BASE_URL}/api/createbusinesscertificate`,
        { name, email, subRole, _id: userId, uniqueId, date }
    );

    return response.data;
};



export const fetchMyBusinessCertificate = async (token) => {

    const response = await axios.get(`${API_BASE_URL}/api/authorizationcertificate/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};




export const deleteBusiness = async (uniqueId, token) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/business/${uniqueId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to delete business' };
    }
};



export const searchBusinessByUniqueId = async (uniqueId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/searchbusiness`, {
        params: { uniqueId },
        });
        return response.data; 
    } catch (error) {
        console.error('Error searching business:', error.response?.data || error.message);
        throw error;
    }
};





export const submitBusinessKYC = async ({ userId, aadhaarNumber, panNumber, token }) => {
    try {
        const response = await axios.post(
        `${API_BASE_URL}/api/business/kyc`,
        {
            userId,           // ✅ include this
            aadhaarNumber,
            panNumber,
        },
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        );

        return { ...response.data, success: true }; // Add success flag
    } catch (error) {
        if (error.response) {
        return {
            success: false,
            status: error.response.status,
            message: error.response.data.message,
            errors: error.response.data.errors || null,
        };
        } else {
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
        };
        }
    }
};



export const fetchBusinessKYCDetails = async (userId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/business/getkyc/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });

        return response.data; // Contains success, data, and message
    } catch (error) {
        console.error('Error fetching KYC details:', error);
        throw error;
    }
};
