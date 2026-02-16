import { defineStore } from "pinia";
import { ref } from "vue";
import { axiosInstance } from "../../../commen/AxiosInstance";
import { useToast } from "primevue";
import { AlertErrorToastmessae } from "../../../commen/AlertErrorToastmessae";

export const useTeachersStore = defineStore('teachers', () => {
    const teachers = ref<any>('')
    const toast = useToast();
    const fetchTeachers = async () => {
        try {
            const responce = await axiosInstance.get('/teacher')
            teachers.value = responce.data || []
        }
        catch (error) {

        }
    };
    const createTeacher = async (data: { email: string, subject: string, name: string }) => {
        try {
            const responce = await axiosInstance.post('/teacher', { ...data });
            toast.add({
                severity: "success",
                summary: "Success",
                detail: "Create new teacher successful",
                life: 3000,
            });
            return responce.data;
        }
        catch (error) {
            AlertErrorToastmessae(toast, error);
        }
    }
    return {
        teachers,
        fetchTeachers,
        createTeacher
    }

})