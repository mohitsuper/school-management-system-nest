<template>
  <div class="mx-auto px-6">
    <div class="flex justify-between items-center gap-2 mb-4">
      <h2 class="header-heading">Create new class</h2>
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
          <label class="mb-1 text-gray-600 font-medium">Class name</label>
          <InputText
            v-model="from.name"
            placeholder="Enter class name"
            class="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <!-- Email Field -->
        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium">Room number</label>
          <InputText
             v-model="from.room"
            placeholder="Enter class room"
            class="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <div class="flex flex-col">
          <label class="mb-1 text-gray-600 font-medium">Status</label>
          <InputSwitch
            v-model="from.status"
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
import { useRouter } from "vue-router";
// import InputSwitch from
import InputSwitch from "primevue/inputswitch";
import { onMounted, ref } from "vue";
import { useClassStore } from "../store/ClassStore";
const router = useRouter();
const classStore = useClassStore();
const from = ref({
  name:'',
  room:'',
  status:false
})

const handelCreateClass = async()=>{
  await classStore.createClass(from.value)
}

</script>

<style scoped>
.p-inputtext:focus {
  outline: none;
}
</style>
