<template>
  <div class="bg-gray-800 text-white p-4 text-center">
    <p>© {{ currentYear }} Scholar Public School. All rights reserved.</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
<style></style>
