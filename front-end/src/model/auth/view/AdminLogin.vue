<template>
  <div class="min-h-screen flex">

    <!-- 🔵 Left Branding Section -->
    <div class="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center p-10">
      <div>
        <h1 class="text-4xl font-bold mb-4">Scholar Public School</h1>
        <p class="text-lg opacity-90">
          School Management System Portal
        </p>
      </div>
    </div>

    <!-- 🟡 Right Login Form -->
    <div class="flex w-full md:w-1/2 items-center justify-center bg-gray-100 p-6">

      <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 class="text-2xl font-semibold mb-6 text-center">
          Login to Your Account
        </h2>

        <!-- Email -->
        <div class="mb-4">
          <label class="block mb-2 text-sm font-medium">Email</label>
          <InputText 
            v-model="email" 
            class="w-full" 
            placeholder="Enter your email" 
          />
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium">Password</label>
          <Password 
            v-model="password" 
            toggleMask 
            :feedback="false"
            class="w-full" 
            placeholder="Enter your password"
          />
        </div>

        <!-- Login Button -->
        <Button 
          label="Login"
          icon="pi pi-sign-in"
          class="w-full"
          @click="handleLogin"
        />

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import InputText from "primevue/inputtext"
import Password from "primevue/password"
import Button from "primevue/button"

const email = ref("")
const password = ref("")

const handleLogin = () => {
  console.log("Email:", email.value)
  console.log("Password:", password.value)

  // 👉 Yaha axios login API call laga sakte ho
}
</script>
