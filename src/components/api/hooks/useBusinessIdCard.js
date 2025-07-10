import { useQuery } from '@tanstack/react-query';
import { fetchMyBusinessIdCard } from '../businessAPI.js';
import axios from 'axios';

export const useBusinessIdCard = (token, user) => {
    return useQuery({
        queryKey: ['myBusinessIdCard'],
        queryFn: async () => {
        try {
            const data = await fetchMyBusinessIdCard(token);

            // Treat empty object as pending
            if (!data || Object.keys(data).length === 0) {
            const err = new Error('pending');
            err.name = 'PendingError';
            throw err;
            }

            return data;
        } catch (err) {
            // Catch AxiosError and check specific conditions
            if (axios.isAxiosError(err)) {
            const isPending =
                err.response?.status === 404 ||
                err.response?.data?.pending === true ||
                !err.response?.data?.data;

            if (isPending) {
                const pendingErr = new Error('pending');
                pendingErr.name = 'PendingError';
                throw pendingErr;
            }
            }

            throw err;
        }
        },
        enabled: !!user?.role && user.role === 'business',
        retry: false,
        staleTime: 5 * 60 * 1000,
    });
};