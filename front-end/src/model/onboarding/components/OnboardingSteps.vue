<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white rounded-2xl shadow-xl p-8">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Complete Your Profile</h1>
        <p class="text-gray-500 text-lg">Please fill in the details to get started</p>
      </div>

      <!-- Progress Steps -->
      <div class="relative mb-12">
        <!-- Progress Bar Background -->
        <div class="absolute top-5 left-0 w-full h-1 bg-gray-200 rounded-full"></div>
        
        <!-- Dynamic Progress Bar -->
        <div 
          class="absolute top-5 left-0 h-1 bg-primary-500 rounded-full transition-all duration-500"
          :style="{ width: progressWidth + '%' }"
        ></div>

        <!-- Steps -->
        <div class="relative flex justify-between">
          <div 
            v-for="(step, index) in OnboardingSteps" 
            :key="index"
            class="flex flex-col items-center"
            :class="{'cursor-pointer': step.completed || step.active}"
            @click="navigateToStep(index)"
          >
            <!-- Step Circle -->
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              :class="[
                step.completed ? 'bg-primary-500 text-white' : 
                step.active ? 'bg-primary-100 text-primary-600 border-2 border-primary-500' : 
                'bg-gray-100 text-gray-400'
              ]"
            >
              <i :class="[step.icon, 'text-lg']"></i>
            </div>
            
            <!-- Step Title -->
            <span 
              class="mt-2 text-sm font-medium"
              :class="[
                step.completed ? 'text-primary-600' : 
                step.active ? 'text-gray-900' : 
                'text-gray-400'
              ]"
            >
              {{ step.title }}
            </span>
            
            <!-- Optional Description -->
            <span v-if="step.description" class="text-xs text-gray-400 mt-1">
              {{ step.description }}
            </span>
          </div>
        </div>
      </div>

  
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';

// Sample data - replace with your actual data
const OnboardingSteps = ref([
  { 
    icon: 'pi pi-user', 
    title: 'Personal Info',
    description: 'Basic details',
    completed: true,
    active: false
  },
  { 
    icon: 'pi pi-building', 
    title: 'Company',
    description: 'Business info',
    completed: false,
    active: true
  },
  { 
    icon: 'pi pi-lock', 
    title: 'Security',
    description: 'Account security',
    completed: false,
    active: false
  },
  { 
    icon: 'pi pi-check-circle', 
    title: 'Review',
    description: 'Final review',
    completed: false,
    active: false
  }
]);

const currentStep = ref(1); // Index of active step

// Calculate progress width
const progressWidth = computed(() => {
  return ((currentStep.value) / (OnboardingSteps.value.length - 1)) * 100;
});

const nextStep = () => {
  if (currentStep.value < OnboardingSteps.value.length - 1) {
    updateStepStatus(currentStep.value + 1);
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    updateStepStatus(currentStep.value - 1);
  }
};

const navigateToStep = (index) => {
  // Allow navigation only to completed or current step
  if (OnboardingSteps.value[index].completed || index === currentStep.value) {
    updateStepStatus(index);
  }
};

const updateStepStatus = (newStepIndex) => {
  // Update completed status for previous steps
  OnboardingSteps.value.forEach((step, index) => {
    step.completed = index < newStepIndex;
    step.active = index === newStepIndex;
  });
  
  currentStep.value = newStepIndex;
};
</script>

<style scoped>
/* Custom animations */
.step-circle-enter-active,
.step-circle-leave-active {
  transition: all 0.3s ease;
}

.step-circle-enter-from,
.step-circle-leave-to {
  transform: scale(0.9);
  opacity: 0;
}

/* Smooth progress bar animation */
.progress-bar {
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>