<template>
  
  <aside
    :class="[
      openToggle ? '!w-20' : 'w-64',
      'bg-gray-900 text-white px-6 py-4 space-y-6 transition-all duration-300 ease-in-out'
    ]"
  >
    <!-- Logo / Title -->
    <div class="flex items-center justify-between">
      <h2
        v-show="!openToggle"
        class="text-lg font-semibold whitespace-nowrap transition-opacity duration-300"
      >
        Menu
      </h2>
    </div>

    <!-- Menu Items -->
    <nav class="space-y-3" v-for="nav in navlinks">
      
      <!-- Dashboard -->
      <router-link
        :to="nav.path"
        class="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition-all duration-200"
        active-class="bg-blue-600"
      >
        <i :class="`${nav.icon} text-lg`"></i>
        <span
          v-show="!openToggle"
          class="whitespace-nowrap transition-opacity duration-200"
        >
          {{ nav.name }}
        </span>
      </router-link>

       

    </nav>
  </aside>
</template>

<script setup lang="ts">
import { AdminNavLinks } from './AdminNavLinks';

defineProps<{
  openToggle: boolean
}>()

const navlinks = AdminNavLinks;
</script>
