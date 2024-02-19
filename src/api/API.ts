import client from '@/api';
import type {  ILoginPayload } from '@/types';

export default {
    getAuth: () => {
        return client.post('/api/auth').then((response: any) => {
            return response;
        });
    },
    login: (payload: ILoginPayload) => {
        return client.post('/api/Account/login', payload).then((response: any) => {
            return response;
        });
    },
};
