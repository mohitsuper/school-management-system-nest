<template>
  <div class="bg-white px-8 pb-10 pt-8 rounded-2xl shadow-lg">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="flex flex-col gap-1" v-for="filed in documentfileds">
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
        icon="pi pi-save"
        label="Submit"
        class="btn-primary"
        @click="handleSubmit"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useTeacherOnboardingStore } from "../store/TeacherOnboardingStore";

const teacherOnboardingStore = useTeacherOnboardingStore();
const form = ref({
  addharNumber: "",
  panNumber: "",
});
const documentfileds = [
  {
    label: "Aadhar number",
    placeholder: "Enter your aadhar number",
    mode: "addharNumber",
  },
  {
    label: "Pan card number",
    placeholder: "Enter your pan card number",
    mode: "panNumber",
  },
];

const handleSubmit = async () => {
  await teacherOnboardingStore.documentationDetails(form.value);
};
</script>
<style></style>
