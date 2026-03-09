<template>
  <div class="bg-white px-8 pb-10 pt-8 rounded-2xl shadow-lg">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="header-heading mb-2">Complete Your Profile</h1>
      <p class="text-gray-500 text-sm">
        Please fill in the details to get started
      </p>
    </div>

    <!-- Progress Steps -->
    <div class="relative flex justify-between items-center">
      <!-- Background Line -->
      <div
        class="absolute top-6 left-0 w-full h-1 bg-gray-200 rounded-full"
      ></div>
      <!-- Active Progress Line (optional dynamic width) -->
      <div
        class="absolute top-6 left-0 h-1 bg-gradient-to-r to-green-500 from-indigo-500 rounded-full transition-all duration-300"
        :style="{ width: WidthActive }"
      ></div>
      <!-- Steps -->
      <div
        v-for="(step, index) in OnboardingStep"
        :key="index"
        class="relative flex flex-col items-center z-10"
      >
        <!-- Circle -->
        <div
          :class="[
            currentActiveStep === index
              ? 'border-green-500'
              : 'border-indigo-500 ',
            'w-12 h-12 flex items-center justify-center rounded-full border-2 bg-white shadow-md transition-all duration-300',
          ]"
        >
          <i
            :class="[
              currentActiveStep === index
                ? 'text-green-500'
                : 'text-indigo-500',
              `${step.icon} text-lg`,
            ]"
          ></i>
        </div>

        <!-- Title -->
        <h1
          :title="step.description"
          class="mt-3 text-sm font-medium text-gray-600 text-center cursor-pointer"
        >
          {{ step.title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Sample data - replace with your actual data
const props = defineProps<{
  OnboardingStep: any;
  currentActiveStep: any;
}>();

const WidthActive = computed(() => {
  const total = props.OnboardingStep.length;
  const index = props.currentActiveStep + 1;
  const width = (index / total) * 100 + "%";
  return width;
});
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
