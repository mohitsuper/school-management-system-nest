<template>
    <div class="w-full md:w-[75%] mx-auto flex flex-col gap-4">
        <OnboardingSteps :OnboardingStep="Steps" :currentActiveStep="currentActiveStepIndex"/>
        <component :is="currentStep"/>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import OnboardingSteps from '../components/OnboardingSteps.vue';
import { teacherOnboardingSteps } from '../../../uts/onboardingStpes';
import { obboardingStepsValues } from '../../../uts/obboardingStepsValues';

const Steps = computed(()=>teacherOnboardingSteps)
const onboardingStep = ref('personalDetails')
const currentActiveStepIndex = computed(()=>Steps.value.findIndex((step)=>step.key === onboardingStep.value))
const currentStep = computed(()=>Steps.value.find((step)=>step.key === onboardingStep.value)?.component)
console.log("steps",currentStep.value,Steps.value)
</script>
<style>
    .app{
        padding: 0 !important;
    }
</style>