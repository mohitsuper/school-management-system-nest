<!-- LoginPage.vue -->
<template>
  <div class="min-h-screen flex bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

    <!-- Left Branding / Illustration Section -->
    <div class="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute -bottom-32 -left-20 w-80 h-80 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center px-12 text-center">
        <div class="mb-10 transform transition-all duration-1000 ease-out"
            :class="mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'">
          <div class="text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Inter national spaceX of coding
          </div>
          <p class="text-xl opacity-90 font-light">
            Smart School Management System
          </p>
        </div>

        <div class="space-y-6 text-lg opacity-90 mt-8 max-w-md">
          <div class="flex items-center gap-4 transform transition-all duration-700 delay-300"
               :class="mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'">
            <i class="pi pi-users text-3xl"></i>
            <span>Manage Students & Teachers</span>
          </div>
          <div class="flex items-center gap-4 transform transition-all duration-700 delay-500"
               :class="mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'">
            <i class="pi pi-wallet text-3xl"></i>
            <span>Fees & Salary Management</span>
          </div>
          <div class="flex items-center gap-4 transform transition-all duration-700 delay-700"
               :class="mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'">
            <i class="pi pi-file-edit text-3xl"></i>
            <span>Exam Paper Creation</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Login Panel -->
    <div class="w-full lg:w-7/12 flex items-center justify-center p-6 lg:p-12">
      <div class="w-full max-w-lg">

        <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-10
                    transform transition-all duration-1000 ease-out"
             :class="mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'">

          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p class="text-gray-600">
              Sign in to continue your journey
            </p>
          </div>

          <!-- Role Selector -->
          <div class="flex justify-center gap-3 mb-8">
            <button
              v-for="role in roles"
              :key="role.value"
              @click="selectedRole = role.value"
              :class="[
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                selectedRole === role.value
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ role.label }}
            </button>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-5">

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                {{ selectedRole === 'student' ? 'Roll Number / Student ID' : 'Email / Username' }}
              </label>
              <InputText
                v-model="identifier"
                :placeholder="selectedRole === 'student' ? 'e.g. 2025-0487' : 'name@school.com'"
                class="w-full p-inputtext-lg"
                :class="{ 'p-invalid': error && !identifier }"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <Password
                v-model="password"
                toggleMask
                :feedback="false"
                placeholder="••••••••"
                class="w-full "
                :class="{ 'p-invalid': error && !password }"
                inputClass="w-full"
              />
            </div>

            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 cursor-pointer">
                <Checkbox v-model="remember" :binary="true" />
                <span class="text-gray-600">Remember me</span>
              </label>
              <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">
                Forgot password?
              </a>
            </div>

            <Button
              :label="loading ? 'Signing in...' : 'Sign In'"
              :icon="loading ? 'pi pi-spin pi-spinner' : 'pi pi-sign-in'"
              class="w-full p-button-lg !bg-indigo-600 !border-indigo-600 hover:!bg-indigo-700 transition-all"
              :loading="loading"
              type="submit"
            />

            <p v-if="error" class="text-red-600 text-center text-sm mt-2">
              {{ error }}
            </p>
          </form>

          <div class="mt-8 text-center text-sm text-gray-600">
            Don't have an account?
            <a href="#" class="text-indigo-600 font-medium hover:underline ml-1">
              Contact School Admin
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'

const mounted = ref(false)
const selectedRole = ref('student') // default to student
const identifier = ref('')
const password = ref('')
const remember = ref(false)
const loading = ref(false)
const error = ref('')

const roles = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'admin', label: 'Admin' }
]

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 100)
})

const handleLogin = async () => {
  if (!identifier.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }

  error.value = ''
  loading.value = true

  // Simulate API call
  setTimeout(() => {
    console.log('Login attempt:', {
      role: selectedRole.value,
      identifier: identifier.value,
      password: password.value,
      remember: remember.value
    })

    // Here you would normally do:
    // await axios.post('/api/login', { role, identifier, password })

    // For demo - random success/fail
    if (Math.random() > 0.3) {
      console.log('Login successful!')
      // router.push('/dashboard')
    } else {
      error.value = 'Invalid credentials. Please try again.'
    }

    loading.value = false
  }, 1200)
}
</script>

<style scoped>
/* You can add more custom animations if needed */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}
</style>