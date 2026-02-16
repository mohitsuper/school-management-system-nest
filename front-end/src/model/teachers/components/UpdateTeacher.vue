<template>
  <div class="mx-auto px-6">
    <div class="flex justify-between items-center gap-2 mb-4">
      <h2 class="header-heading">Update teacher</h2>
      <Button
        label="Go back"
        icon="pi pi-arrow-left"
        class="btn-primary"
        @click="router.push({ name: 'teachers.index' })"
      />
    </div>
    <div class="divider"></div>
    <div class="bg-white p-6 shadow-lg rounded-xl">
      <form  class="grid md:grid-cols-2 gap-4">
        <!-- Name Field -->
        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium" for="name">Name</label>
          <InputText
            id="name"
            v-model="teacherSchema.name"
            placeholder="Enter your name"
            class="p-inputtext p-component w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <!-- Email Field -->
        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium" for="email"
            >Email</label
          >
          <InputText
            id="email"
            v-model="teacherSchema.email"
            placeholder="Enter your email"
            class="p-inputtext p-component w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <!-- Subject Field -->
        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium" for="subject"
            >Subject</label
          >
          <InputText
            id="subject"
            v-model="teacherSchema.subject"
            placeholder="Enter subject"
            class="p-inputtext p-component w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <!-- Submit Button -->
      </form>
      <div class="flex w-full mt-6">
        <Button label="Submit" type="submit" @click="handleUpdate" class="btn-primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTeachersStore } from "../store/TeachersStore";
const router = useRouter();
const route = useRoute()
const teachersStore = useTeachersStore();
const teacherSchema = computed(()=>teachersStore.teacherSchema)
const form = reactive({
  name: "",
  email: "",
  subject: "",
});

const handleSubmit = () => {
  console.log("Form Data:", form);
  alert(
    `Submitted:\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}`,
  );
};

const handleUpdate =async ()=>{
  await teachersStore.updateTeacher(route.params.id,teacherSchema);
}

onMounted(async()=>{
  await teachersStore.getTeacherById(route.params.id);
})
</script>

<style scoped>
/* Optional: smooth focus transition for all inputs */
.p-inputtext:focus {
  outline: none;
}
</style>
