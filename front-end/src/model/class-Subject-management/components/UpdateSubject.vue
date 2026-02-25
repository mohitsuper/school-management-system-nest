<template>
  <div class="mx-auto px-6">
    <div class="flex justify-between items-center gap-2 mb-4">
      <h2 class="header-heading">Update new subject</h2>
      <Button
        label="Go back"
        icon="pi pi-arrow-left"
        class="btn-primary"
        @click="router.push({ name: 'class-subject-management' })"
      />
    </div>

    <div class="divider"></div>

    <div class="bg-white p-6 shadow-lg rounded-xl">
      <form class="grid md:grid-cols-2 gap-4">
        <!-- Name Field -->
        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium">Subject name</label>
          <InputText
            v-model="subjectShcema.name"
            placeholder="Enter subject name"
            class="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

       

        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium">Status</label>
          <InputSwitch
            v-model="subjectShcema.status"
          />
        </div>
      </form>

      <div class="flex w-full mt-6">
        <Button label="Submit" type="submit" class="btn-primary" @click="handelCreateClass" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
// import InputSwitch from
import InputSwitch from "primevue/inputswitch";
import { computed, onMounted, ref } from "vue";
import { useSubjectStore } from "../store/SubjectStore";
const router = useRouter();
const route = useRoute();
const subjectStore = useSubjectStore();
const subjectShcema = computed(()=>subjectStore.SubjectShcema)


const handelCreateClass = async()=>{
  await subjectStore.updateSubject(subjectShcema.value)
  router.push({ name: 'class-subject-management' })
}

onMounted(async()=>{
  if(route.params.id){
    await subjectStore.getSubject(route.params.id);
  }
})
</script>

<style scoped>
.p-inputtext:focus {
  outline: none;
}
</style>
