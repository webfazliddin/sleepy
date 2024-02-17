// usePatients.ts (store file)

import { defineStore } from 'pinia';
import PatientService from '@/services/document/Patient.service'; // Import PatientService
import type { IGetPatient, IPostPatient } from '@/types';

export const usePatientsStore = defineStore({
    id: 'Patients',
    state: () => ({
        patients: [] as IGetPatient[] // Initialize patients array with correct type
    }),

    actions: {
        async fetchPatients() {
            try {
                const patients = await PatientService.PatientGetList(); // Fetch patients using PatientService
                this.patients = patients; // Update the store state with fetched patients
            } catch (error) {
                console.error(error); // Logging the error for better debugging
                // Handle the error more gracefully, like showing a toast or a notification
            }
        },

        async addPatient(payload: IPostPatient) {
            try {
                const newPatient = await PatientService.PatientPost(payload); // Add new patient using PatientService
                this.patients.push(newPatient); // Update the store state with the newly added patient
            } catch (error) {
                console.error(error); // Logging the error for better debugging
                // Handle the error more gracefully, like showing a toast or a notification
            }
        },

        async deletePatient(id: number) {
            try {
                await PatientService.PatientDelete(id); // Delete patient using PatientService
                this.patients = this.patients.filter(patient => patient.id !== id); // Update the store state by removing the deleted patient
            } catch (error) {
                console.error(error); // Logging the error for better debugging
                // Handle the error more gracefully, like showing a toast or a notification
            }
        },

        async editPatient(payload: { id: number; patientData: IPostPatient }) {
            try {
                const updatedPatient = await PatientService.PatientEdit(payload.id, payload.patientData); // Edit patient using PatientService
                const index = this.patients.findIndex(patient => patient.id === payload.id); // Find the index of the edited patient in the array
                if (index !== -1) {
                    this.patients[index] = updatedPatient; // Update the store state with the edited patient
                }
            } catch (error) {
                console.error(error); // Logging the error for better debugging
                // Handle the error more gracefully, like showing a toast or a notification
            }
        }
    }
});
