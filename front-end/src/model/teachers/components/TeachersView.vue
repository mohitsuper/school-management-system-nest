<template>
  <div>
    <DynamicDataTable
      :data="teachers"
      :columns="columns"
      :actions="actions"
      v-model:search="searchTerm"
      v-model:selectionData="selectValue"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useTeachersStore } from "../store/TeachersStore";
import DynamicDataTable from "../../../commen/DynamicDataTable.vue";
import { useRouter } from "vue-router";
import { TeacherColumns } from "../../../commen/DataTableColumns";
import type { Teacher } from "../interface/Teacher.interface";
const teachersStore = useTeachersStore();
const teachers = computed(() => teachersStore.teachers);
const route = useRouter();
const searchTerm = ref("");
const selectValue = ref<Teacher[]>([]);
onMounted(async () => {
  await teachersStore.fetchTeachers();
});

const columns = computed(() => TeacherColumns);

const actions = computed(() => {
  if (selectValue.value.length === 0) return;
 return [
    {
      icon: "pi pi-pencil",
      name: "Edit",
      value: () =>
        route.push({
          name: "update.teacher",
          params: { id: selectValue?.value[0]?.id },
        }),
    },
    { icon: "pi pi-trash", name: "Delete", value: "delete" },
  ];
});
</script>
<style></style>
