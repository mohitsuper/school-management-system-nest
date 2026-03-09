<template>
  <div class="bg-white px-8 pb-10 pt-8 rounded-2xl shadow-lg">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="flex flex-col gap-1" v-for="filed in PersonalDetailsfileds">
        <label class="text-sm font-bold text-gray-800">{{ filed.label }}</label>
        <InputText
          v-model="form[filed.model]"
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
import { onUnmounted, ref } from "vue";
import { useTeacherOnboardingStore } from "../store/TeacherOnboardingStore";

const form = ref({
  name: "",
  dob: "",
  email: "",
  phoneNumber: "",
});
const TeacherOnboardingStore = useTeacherOnboardingStore();
const handleSubmit = async () => {
  await TeacherOnboardingStore.personalDetails(form.value);
};

onUnmounted(() => {
  form.value = {
    name: "",
    dob: "",
    email: "",
    phoneNumber: "",
  };
});
const PersonalDetailsfileds = [
  { label: "Full name", placeholder: "Enter your name", model: "name" },
  { label: "Date of birth", placeholder: "Enter your dob", model: "dob" },
  {
    label: "Phone Number",
    placeholder: "Enter your phone number",
    model: "phoneNumber",
  },
  {
    label: "Email Address",
    placeholder: "Enter your Email address",
    model: "email",
  },
];
</script>
<style></style>
