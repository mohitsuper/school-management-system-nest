
<template>

    <!-- 🔵 HEADER -->
    <header class="bg-blue-600 text-white px-6 py-3 shadow-md flex justify-between items-center">
      <div class="flex gap-4">

        <Button icon="pi pi-bars" class="!bg-blue-500 !border-0" @click="toggleMenu"/>
        <!-- Logo + School Name -->
        <div class="flex items-center gap-3">
          <i class="pi pi-building text-2xl"></i>
          <h1 class="text-xl font-bold">International spaceX of coding</h1>
        </div>
      </div>

      <!-- Profile Section -->
      <div class="flex items-center gap-4">
        <i class="pi pi-bell text-lg cursor-pointer"></i>
        <i class="pi pi-user text-lg cursor-pointer"></i>
      </div>


    </header>



      

</template>
  <script setup lang="ts">
import { ref } from 'vue';

    const openToggle = ref(false);
    const emit = defineEmits(['menu']);
    function toggleMenu() {
      openToggle.value = !openToggle.value;
      emit('menu',openToggle.value);
    }
  </script>
