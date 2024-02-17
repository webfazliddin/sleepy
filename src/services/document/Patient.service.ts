import ApiService from '../api.service';
import type { IGetPatient, IPostPatient } from '@/types';

const PatientService = {
    PatientGetList: (): Promise<IGetPatient[]> => {
        return ApiService.get('/api/Patients').then((response) => response.data);
    },
    PatientGetById: (id: number): Promise<IGetPatient> => {
        return ApiService.get(`/api/Patients/${id}`).then((response) => response.data);
    },

    PatientPost: (payload: IPostPatient): Promise<IGetPatient> => {
        // Add the necessary headers for the post request
        const headers = {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
        };
        return ApiService.post('/api/Patients', payload, headers).then((response) => response.data as IGetPatient);
    },

    PatientDelete: (id: number): Promise<any> => {
        return ApiService.delete(`/api/Patients/${id}`).then((response) => response.data);
    },

    PatientEdit: (id: number, payload: IPostPatient): Promise<IGetPatient> => {
        return ApiService.put(`/api/Patients/${id}`, payload).then((response) => response.data as IGetPatient);
    }
    // PatientEdit: (id: number, payload: IPostPatient): Promise<IGetPatient> => {
    //     // Add the necessary headers for the put request
    //     const headers = {
    //         "Content-Type": "application/json;charset=utf-8",
    //         "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
    //     };
    //     return ApiService.put(`/api/Patients/${id}`, payload, headers).then((response) => response.data as IGetPatient);
    // }
};

export default PatientService;
