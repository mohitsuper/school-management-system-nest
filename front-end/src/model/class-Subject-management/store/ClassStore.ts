import { defineStore } from "pinia";
import { ref } from "vue";
import { axiosInstance } from "../../../commen/AxiosInstance";
import { AlertErrorToastmessage } from "../../../commen/AlertErrorToastmessage";
import { useToast } from "primevue";
interface Classes{
    name:string,
    room:string,
    status:boolean
}
export const useClassStore = defineStore('class',()=>{
    const classes = ref<any>([])
    const toast = useToast();
    const fetchClasses = async ()=>{
        try{
            const res = await axiosInstance.get('classes');
            classes.value = res.data
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }

    const createClass = async (data:{name:string,room:string,status:boolean})=>{
        try{
            const res = await axiosInstance.post('classes',data);
            console.log("res",res)
            toast.add({
                severity:'success',
                summary:'Success',
                detail:'Create class successfull',
                life:3000
            })
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }


    return{
        classes,
        fetchClasses,
        createClass
    }
})