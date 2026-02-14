<template>
  <div>
  </div>
    <DynamicDataTable
     :data="teachers"  
     :columns="columns" 
     :actions="actions"
     v-model:search="searchTerm"
     />
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useTeachersStore } from "../store/TeachersStore";
import DynamicDataTable from "../../../commen/DynamicDataTable.vue";
import { useRouter } from "vue-router";
import { TeacherColumns } from "../../../commen/DataTableColumns";
const teachersStore = useTeachersStore();
const teachers = computed(() => teachersStore.teachers);
const route = useRouter();
const searchTerm = ref('')
onMounted(async () => {
  await teachersStore.fetchTeachers();
});

const columns = computed(()=>TeacherColumns)

const actions = [
  { icon:'pi pi-pencil', name: "Edit", value: ()=>route.push({name:'update.teacher'}) },
  { icon:'pi pi-trash',name: "Delete", value: "delete" },
];
</script>
<style></style>
