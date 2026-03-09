<template>
  <div class="bg-white px-8 pb-10 pt-8 rounded-2xl shadow-lg">
    {{ form }}
    <div class="grid md:grid-cols-2 gap-4">
      <div class="flex flex-col gap-1" v-for="filed in AddressDetailsfileds">
        <label class="text-sm font-bold text-gray-800">{{ filed.label }}</label>
        <InputText
          v-model="form[filed.mode]"
          class=""
          :placeholder="filed.placeholder"
        />
      </div>
    </div>
    <div class="mt-4 flex justify-end w-full">
      <Button
        @click="handleSubmit"
        icon="pi pi-save"
        label="Submit"
        class="btn-primary"
      />
    </div>
  </div>
</template>
<script setup>
import { onUnmounted, ref } from 'vue';
import { useTeacherOnboardingStore } from '../store/TeacherOnboardingStore';
const TeacherOnboardingStore = useTeacherOnboardingStore();

const form = ref({
    address:'',
    State:'',
    pincode:'',
    city:'',
    country:''
})
const AddressDetailsfileds = [
    {label:'Address',placeholder:'Enter your address',mode:'address'},
    {label:'State',placeholder:'Enter your Email state',mode:'state'},
    {label:'Pincode',placeholder:'Enter your pincode',mode:'pincode'},
    {label:'City',placeholder:'Enter your phone city',mode:'city'},
     {label:'Country',placeholder:'Enter your phone Country',mode:'country'},
]

const handleSubmit = async ()=>{
    await TeacherOnboardingStore.addressDetails(form.value)
}
onUnmounted(()=>{
    form.value = {
    address:'',
    state:'',
    pincode:'',
    city:'',
    country:''
}
})
</script>
<style></style>
