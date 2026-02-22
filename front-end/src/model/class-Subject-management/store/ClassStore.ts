import { defineStore } from "pinia";
import { ref } from "vue";
import { axiosInstance } from "../../../commen/AxiosInstance";
interface Classes{
    name:string,
    room:string,
    status:boolean
}
export const useClassStore = defineStore('class',()=>{
    const classes = ref<any>([])
    const fetchClasses = async ()=>{
        const res = await axiosInstance.get('classes');
        classes.value = res.data
    }
    return{
        classes,
        fetchClasses
    }
})