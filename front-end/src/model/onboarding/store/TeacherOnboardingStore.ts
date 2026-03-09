import { defineStore } from "pinia";
import { axiosInstance } from "../../../commen/AxiosInstance";
import { useToast } from "primevue/usetoast";
import { onMounted, ref, watch } from "vue";

export const useTeacherOnboardingStore = defineStore('teacherOnboarding', () => {
    const obboardingStep = ref('')
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
                obboardingStep.value = 'documentation'
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

    watch(obboardingStep,(Newval)=>{
        localStorage.setItem('obboardingStep',Newval)
    })
    onMounted(()=>{
        const localStepVal = localStorage.getItem('obboardingStep')
        if(localStepVal){
            obboardingStep.value = localStepVal
        }
        obboardingStep.value = 'personalDetails'
    })
    return {
        personalDetails,
        obboardingStep,
        addressDetails
    }
})