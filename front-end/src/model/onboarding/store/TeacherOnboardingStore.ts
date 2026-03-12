import { defineStore } from "pinia";
import { axiosInstance } from "../../../commen/AxiosInstance";
import { useToast } from "primevue/usetoast";
import { onMounted, ref, watch } from "vue";
import { HttpStatusCode } from "axios";
import { AlertErrorToastmessage } from "../../../commen/AlertErrorToastmessage";

export const useTeacherOnboardingStore = defineStore('teacherOnboarding', () => {
    const teacherInfo = ref({
        personalId:'',
        addressId:'',
        seleryId:'',
        documentId:''
    })
    const obboardingStep = ref('personalDetails')
    const toast = useToast();

    const personalDetails = async (data: any) => {
        try {
            const res = await axiosInstance.post('/teacher-onboarding/profile', data)
            if (res.status === 200 || res.status === 201) {
                toast.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Teacher personal details added successfully',
                    life: 3000
                })
                obboardingStep.value = 'addressDetails'
                teacherInfo.value.personalId = res.data.id
            }
            return res;
        }
        catch (error: any) {
            console.log("error message", error)

            if (error?.response?.status === 400) {
                console.log("Bad Request")
                toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Teacher personal details add failed',
                    life: 3000
                })
            }

            if (error?.response?.status === 500) {
                console.log("Server Error")
            }


            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Teacher personal details add failed',
                life: 3000
            })
        }
    }

    const addressDetails = async (data: any) => {
        try {
            const res = await axiosInstance.post('/teacher-onboarding/address', data)
            if (res.status === 200 || res.status === 201) {
                toast.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Address details added successfully',
                    life: 3000
                })
                obboardingStep.value = 'seleryDetails'
                teacherInfo.value.addressId = res.data.id
            }

            return res;
        }
        catch (error: any) {
            console.log("error message", error)

            if (error?.response?.status === 400) {
                console.log("Bad Request")
                toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Address details added failed',
                    life: 3000
                })
            }

            if (error?.response?.status === 500) {
                console.log("Server Error")
            }


            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Address details added failed',
                life: 3000
            })
        }
    }


    const seleryDetails = async (data:any)=>{
        console.log("data selery",data)
        try{
           const res =  await axiosInstance.post('/teacher-onboarding/selery',data)
           if(res.status === HttpStatusCode.Created){
            toast.add({
                severity:'success',
                summary:'success',
                detail:'selery details add successfull',
                life:3000
            })
            obboardingStep.value = 'documentation'
            teacherInfo.value.seleryId = res.data.id
           }
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }



    const documentationDetails = async(data:any)=>{
        try{
            const res = await axiosInstance.post('/teacher-onboarding/document',data)
            if(res.status === HttpStatusCode.Created){
                toast.add({
                    severity:'success',
                    summary:'success',
                    detail:'document create successfull',
                    life:3000
                })
                teacherInfo.value.documentId = res.data.id
                
                await  createTeacher();
            }
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }

    const createTeacher = async ()=>{
        try{
            const res = await axiosInstance.post('/teacher-onboarding',teacherInfo.value)
            if(res.status === HttpStatusCode.Created){
                toast.add({
                    severity:'sucesss',
                    summary:'success',
                    detail:'Teacher onboarding compled',
                    life:3000
                })
            }
        }
        catch(error){
            AlertErrorToastmessage(toast,error)
        }
    }
    watch(obboardingStep,(Newval)=>{
        localStorage.setItem('obboardingStep',Newval)
    })
    onMounted(()=>{
        const localStepVal = localStorage.getItem('obboardingStep')
        if(localStepVal){
            console.log('local',localStepVal)
            obboardingStep.value = localStepVal
        }
        // obboardingStep.value = 'personalDetails'
    })
    return {
        personalDetails,
        obboardingStep,
        addressDetails,
        seleryDetails,
        documentationDetails,
        createTeacher
    }
})