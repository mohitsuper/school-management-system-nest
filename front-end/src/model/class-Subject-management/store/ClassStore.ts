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
    const classesShcema  = ref<{
        id?:string
        name:string,
        room:string,
        status:boolean
    }>({
        id:'',
        name:'',
        room:'',
        status:false
    })
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

     const updateClass = async (data:{id:string,name:string,room:string,status:boolean})=>{
        try{
            const res = await axiosInstance.patch(`classes/${data.id}`,data);
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

    const getClass = async (getid:string)=>{
        try{
            const res = await axiosInstance.get(`classes/${getid}`);
            const {id,name,room,status} =res.data[0];
            classesShcema.value = {
                id,name,room,status
            }
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }

    const deleteClasses = async (id:string)=>{
        try{
            await axiosInstance.delete(`classes/${id}`);
            toast.add({
                severity:'success',
                summary:'Success',
                detail:'Delete class successfull',
                life:3000
            })
            await fetchClasses();
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }

    return{
        classes,
        fetchClasses,
        createClass,
        updateClass,
        getClass,
        classesShcema,
        deleteClasses
    }
})