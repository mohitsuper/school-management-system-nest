<template>
  <div class="mx-auto px-6">
    <div class="flex justify-between items-center gap-2 mb-4">
      <h2 class="header-heading">Create new teacher</h2>
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
            v-model="form.name"
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
            v-model="form.email"
            placeholder="Enter your email"
            class="p-inputtext p-component w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <!-- Subject Field -->
        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium" for="subject"
            >Subject</label
          >
          <MultiSelect
            id="subject"
            :options="Subjects"
            optionLabel="label"
            optionValue="value"
            v-model="form.subjectIds"
            multiple
            placeholder="Enter subject"
            class="h-11 w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>


         <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium" for="subject"
            >Class List</label
          >
          <MultiSelect
             id="subject"
            :options="Classes"
            v-model="form.classIds"
            optionLabel="label"
            optionValue="value"
            multiple
            placeholder="Enter Class"
            class=" h-11 p-component w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <!-- Submit Button -->
      </form>
      <div class="flex w-full mt-6">
        <Button label="Submit" type="submit" @click="handleSubmit" class="btn-primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useTeachersStore } from "../store/TeachersStore";
import MultiSelect from 'primevue/multiselect'
const teacherStore = useTeachersStore();
const router = useRouter();
const form = reactive({
  name: "",
  email: "",
  subjectIds: [],
  classIds:[]
});
const Subjects = computed(()=>teacherStore.Subjects)
const Classes= computed(()=>teacherStore.Classes)
const handleSubmit = async () => {
  await teacherStore.createTeacher(form);
  router.push({name:'teachers.index'})
};

onMounted(async ()=>{
  await teacherStore.fetchSubjects();
  await teacherStore.fetchClasses();
})
</script>

<style scoped>
/* Optional: smooth focus transition for all inputs */
.p-inputtext:focus {
  outline: none;
}
</style>
