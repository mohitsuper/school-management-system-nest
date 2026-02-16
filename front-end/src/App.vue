<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Toast/>
    <!-- 🔵 Header -->
    <Header v-if="$route.meta.layout" @menu="handelmenu" />

    <!-- 🔵 Main Body -->
    <div class="flex flex-1">

      <!-- 🟢 Sidebar -->
      <Sidebar 
        v-if="$route.meta.layout" 
        class="w-64 bg-gray-900 text-white"
        :openToggle="openToggle"
      />

      <!-- 🟡 Page Content -->
      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>

    </div>

    <!-- 🔵 Footer -->
    <!-- <Footer v-if="$route.meta.layout" /> -->

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from './commen/Footer.vue'
import Header from './commen/Header.vue'
import Sidebar from './commen/Sidebar.vue'
import Toast from "primevue/toast";
const openToggle = ref(false);
function handelmenu(val) {
  openToggle.value = val;
}
</script>
