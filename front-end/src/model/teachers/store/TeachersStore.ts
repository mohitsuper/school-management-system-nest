import { defineStore } from "pinia";
import { ref } from "vue";
import { axiosInstance } from "../../../commen/AxiosInstance";
import { useToast } from "primevue";
import { AlertErrorToastmessage } from "../../../commen/AlertErrorToastmessage";
import type { Teacher } from "../interface/Teacher.interface";



export const useTeachersStore = defineStore('teachers', () => {
    const teachers = ref<Teacher[]>([])
    const toast = useToast();
    const teacherSchema = ref<Teacher>({
        name: '',
        email: '',
        subject: '',
    })
    const fetchTeachers = async () => {
        try {
            const responce = await axiosInstance.get('/teacher')
            teachers.value = responce.data || []
        }
        catch (error) {
            AlertErrorToastmessage(toast, error)
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
            AlertErrorToastmessage(toast, error);
        }
    }
    const getTeacherById = async (id: string) => {
        try {
            const responce = await axiosInstance.get(`/teacher/${id}`);
            const { name, email, subject } = responce.data
            teacherSchema.value = {
                name,
                email,
                subject,
            }
        }
        catch (error) {
            AlertErrorToastmessage(toast, error)
        }
    }

    const updateTeacher = async (id: string,data:{ email: string, subject: string, name: string }) => {
        try {
            await axiosInstance.patch(`/teacher/${id}`,{...data});
            toast.add({
                severity:'success',
                summary:'Success',
                detail:'Update teacher successfull'
            })
            teacherSchema.value = {
                name:'',
                email:'',
                subject:'',
            }
        }
        catch (error) {
            AlertErrorToastmessage(toast, error)
        }
    }
    return {
        teachers,
        fetchTeachers,
        createTeacher,
        getTeacherById,
        teacherSchema,
        updateTeacher
    }

})