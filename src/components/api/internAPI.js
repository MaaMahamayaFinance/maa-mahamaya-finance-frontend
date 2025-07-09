import axios from "axios";
import {API_BASE_URL} from "../../config.js"


export const fetchAllInterns = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/getallinterns`);
    return response.data.data;
};



export const createInternIdCard = async (intern) => {
    const { profilePhoto, name, email,uniqueId, subRole, address, pincode, mobileNumber } = intern;

    const response = await axios.post(
        `${API_BASE_URL}/api/createinternidcard`,
        { profilePhoto, name, email, uniqueId, subRole, address, pincode, mobileNumber }
    );

    return response.data;
};


export const fetchMyInternIdCard = async (token) => {
    // console.log("🔐 Token being sent to API:", token);

    const response = await axios.get(`${API_BASE_URL}/api/internidcard/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};




export const createInternOfferLetter = async (intern) => {
    const { name, email, subRole, address, pincode, ctc, userId, uniqueId, joiningDate } = intern;

    const response = await axios.post(
        `${API_BASE_URL}/api/createinternofferletter`,
        { name, email, subRole, address, pincode, ctc,  _id: userId, uniqueId, joiningDate }
    );

    return response.data;
};



export const fetchMyInternOfferLetter = async (token) => {

    const response = await axios.get(`${API_BASE_URL}/api/internofferletter/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};



export const createInternCertificate = async (intern) => {
    const { name, email, subRole, userId, uniqueId, date } = intern;

    const response = await axios.post(
        `${API_BASE_URL}/api/createinterncertificate`,
        { name, email, subRole, _id: userId, uniqueId, date }
    );

    return response.data;
};



export const fetchMyInternCertificate = async (token) => {

    const response = await axios.get(`${API_BASE_URL}/api/interncertificate/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return response.data.data;
};



export const deleteIntern = async (uniqueId, token) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/interns/${uniqueId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to delete intern' };
    }
};




export const searchInternByUniqueId = async (uniqueId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/searchintern`, {
        params: { uniqueId },
        });
        return response.data; 
    } catch (error) {
        console.error('Error searching intern:', error.response?.data || error.message);
        throw error;
    }
};


