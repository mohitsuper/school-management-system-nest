import { defineStore } from "pinia";
import { ref } from "vue";
import { AlertErrorToastmessage } from "../../../commen/AlertErrorToastmessage";
import { useToast } from "primevue";
import { axiosInstance } from "../../../commen/AxiosInstance";

interface Subject{
    name:string,
    status:boolean
}
export const useSubjectStore = defineStore('subject',()=>{
    const subjects = ref<Subject[]>([])
    const toast = useToast();
    const SubjectShcema = ref<{
        id?:string,
        name:string,
        status:boolean
    }>({
        id:'',
        name:'',
        status:false
    })
    const fetchSubjects = async ()=>{
        try{
            const res = await axiosInstance.get('subjects');
            subjects.value = res.data;
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }
    const createSubject = async (data:{name:string, status:boolean})=>{
        console.log(data,"data");
         try{
            const res = await axiosInstance.post('subjects',data);
            toast.add({
                severity:'success',
                summary:'success',
                detail:'Subject create successfull',
                life:3000
            })
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }

     const updateSubject = async (data:{id:string,name:string, status:boolean})=>{
         try{
            const res = await axiosInstance.patch(`subjects/${data.id}`,data);
            toast.add({
                severity:'success',
                summary:'success',
                detail:'Subject update successfull',
                life:3000
            })
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }

    const getSubject = async (getid:string) =>{
        try{
            const res = await axiosInstance.get(`subjects/${getid}`);
            const {name,status,id} = res.data[0];
            SubjectShcema.value = {name,status,id}
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }
    return{
        subjects,
        fetchSubjects,
        createSubject,
        updateSubject,
        SubjectShcema,
        getSubject
    }
}) 