<template>
  <div class="bg-white px-8 pb-10 pt-8 rounded-2xl shadow-lg">
    
    <div class="grid md:grid-cols-2 gap-4">
      <div
        class="flex flex-col gap-1"
        v-for="field in salaryDetailsFields"
        :key="field.model"
      >
        <label class="text-sm font-bold text-gray-800">
          {{ field.label }}
        </label>

        <InputText
          v-model="form[field.model]"
          :placeholder="field.placeholder"
        />
      </div>
    </div>

    <div class="mt-4 flex justify-end w-full">
      <Button
        icon="pi pi-save"
        label="Submit"
        class="btn-primary"
        @click="submitForm"
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTeacherOnboardingStore } from "../store/TeacherOnboardingStore";
const teacherOnboardingStore = useTeacherOnboardingStore()
const form = ref({
  bankName: '',
  accountNumber: '',
  ifsc_code: '',
  basicSelery: ''
})

const salaryDetailsFields = [
  {
    label: 'Bank Name',
    placeholder: 'Enter your bank name',
    model: 'bankName'
  },
  {
    label: 'Account Number',
    placeholder: 'Enter your account number',
    model: 'accountNumber'
  },
  {
    label: 'IFSC Code',
    placeholder: 'Enter your IFSC code',
    model: 'ifsc_code'
  },
  {
    label: 'Basic Salary',
    placeholder: 'Enter your basic salary',
    model: 'basicSelery'
  }
]

const submitForm = async () => {
  console.log('Form Data:', form.value)
  await teacherOnboardingStore.seleryDetails(form.value);
}
</script>

<style scoped>
</style>