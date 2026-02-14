import { defineStore } from "pinia";
import { ref } from "vue";
import { axiosInstance } from "../../../commen/AxiosInstance";

export const useTeachersStore = defineStore('teachers',()=>{
    const teachers = ref<any>('')
    const fetchTeachers = async()=>{
        const responce = await axiosInstance.get('/teacher')
        console.log(responce)
        teachers.value = responce.data || []
    };
    return{
        teachers,
        fetchTeachers
    }
})