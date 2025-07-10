// hooks/useMatchingBusinesses.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {API_BASE_URL} from "../../config.js"


export const useMatchingBusinesses = (userId, page = 1, limit = 5) => {
    return useQuery({
        queryKey: ['matchingBusinesses', userId, page],
        queryFn: async () => {
        const response = await axios.get(`${API_BASE_URL}/api/match-businesses/${userId}?page=${page}&limit=${limit}`);
        return response.data;
        },
        keepPreviousData: true,
        enabled: !!userId, 
    });
};
