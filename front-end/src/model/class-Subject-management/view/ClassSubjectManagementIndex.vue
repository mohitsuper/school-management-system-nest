<template>
  <div class="px-6">
    <div class="flex justify-between">
      <h2 class="header-heading">{{ currentTitle }}</h2>
      <Button
        :label="currentButton.button"
        class="!btn-primary"
        @click="router.push({ name: currentButton.router })"
      />
    </div>

    <div class="flex w-full gap-2 mt-4">
      <Button
        v-for="(tab, index) in tabs"
        :key="index"
        :label="tab.tabButton"
        :class="[
          tab.name === activeTab
            ? '!bg-blue-500 !text-white'
            : '!bg-gray-300 !text-gray-700',
          '!px-4 !py-2 !rounded-full !text-sm !font-medium !transition-all !duration-300   hover:bg-indigo-500 hover:text-white shadow-sm !border-0',
        ]"
        @click="changedTab(tab.name)"
      />
    </div>

    <component :is="currentTab" />
  </div>
</template>
<script setup>
import { computed, markRaw, ref } from "vue";
import { useRouter } from "vue-router";
import SubjectView from "../../teachers/components/SubjectView.vue";
import ClassView from "./ClassView.vue";
const router = useRouter();

const activeTab = ref("classlist.index");
const tabs = ref(markRaw([
  {
    title: "Class List",
    name: "classlist.index",
    tabButton: "Classes list",
    component: ClassView,
    button: "Create new class",
    router: "create.class",
  },
  {
    title: "Subject list",
    name: "subjects",
    tabButton: "Subjects list",
    component:SubjectView,
    button: "Create new subject",
    router: "create.subject",
  },
]));

const currentTab = computed(
  () => tabs.value.find((tab) => tab.name == activeTab.value)?.component,
);
const currentTitle = computed(
  () => tabs.value.find((tab) => tab.name == activeTab.value)?.title,
);
const currentButton = computed(() =>
  tabs.value.find((tab) => tab.name == activeTab.value),
);
const changedTab = (name) => {
  activeTab.value = name;
};
</script>
<style></style>
