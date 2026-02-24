<template>
  <div>
    <DynamicDataTable
      :data="teachers"
      :columns="columns"
      :actions="actions"
      v-model:search="searchTerm"
      v-model:selectionData="selectValue"
    >

     <template #subject="{slotProps}">
      <spna> {{ slotProps.data.subjects?.map((item:{name:string}) => item.name).join(', ') }}</spna>
     </template>

      <template #classes="{slotProps}">
      <spna> {{ slotProps.data.classes?.map((item:{name:string}) => item.name).join(', ') }}</spna>
     </template>
    </DynamicDataTable>

    <ConfirmDialog
    message="Are you sure you want to delete this teacher?"
    v-if="deleteDialog"
    @close="deleteDialog=false"
    @confirmDelete="deleteData"
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
import ConfirmDialog from "../../../commen/ConfirmDialog.vue"
const deleteDialog = ref(false)
const teachersStore = useTeachersStore();
const teachers = computed(() => teachersStore.teachers);
const route = useRouter();
const searchTerm = ref("");
const selectValue = ref<Teacher[]>([]);
onMounted(async () => {
  await teachersStore.fetchTeachers();
});

const columns = computed(() => TeacherColumns);

const handledeleteDialog = async ()=>{
  deleteDialog.value = true;
}
const deleteData = async ()=>{
  const id = selectValue.value[0]?.id;
  await teachersStore.deleteTeacher(id)
  deleteDialog.value = false
}
const actions = computed(() => {
  if (selectValue.value.length === 0 || selectValue.value.length >1) return [];
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
    { icon: "pi pi-trash", name: "Delete", value:()=>handledeleteDialog() },
  ];
});
</script>
<style></style>
