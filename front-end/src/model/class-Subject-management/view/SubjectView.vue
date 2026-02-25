<template >
    <div>
        <DynamicDataTable 
        :data="Subjects" 
        :columns="Columns" 
        v-model:selectionData="selectValue"
        :actions="actions"
        >
            <template #status="{slotProps}">
                <span :class="[slotProps.data.status?'bg-green-50 text-green-500':'bg-red-50 text-red-500','px-4 rounded-full py-1']">{{ slotProps.data.status?'Active':'Inactive'}}</span>
            </template>
        </DynamicDataTable>

        <ConfirmDialog
         message="are you sure delete class?"
          v-if="deleteClass"
          @close="deleteClass=false"
          @confirmDelete="handelDeleteClass"
        />
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { SubjectColumns } from '../../../commen/DataTableColumns';
import DynamicDataTable from '../../../commen/DynamicDataTable.vue';
import ConfirmDialog from '../../../commen/ConfirmDialog.vue'
import { useRouter } from 'vue-router';
import { useSubjectStore } from '../store/SubjectStore';
const subjectStore = useSubjectStore();
const Subjects = computed(()=>subjectStore.subjects)
const Columns = computed(()=>SubjectColumns)
const selectValue = ref([])
const router = useRouter();
const deleteClass = ref<boolean>(false)
const deleteItems = ()=>{
    deleteClass.value = true
}
const handelDeleteClass = async()=>{
   deleteClass.value=false
}
const actions = computed(() => {
  if (selectValue.value.length === 0 || selectValue.value.length >1) return [];
 return [
    {
      icon: "pi pi-pencil",
      name: "Edit",
      value: ()=>{
        router.push({
            name:'update.subject',
            params: {id:selectValue.value[0]?.id}
        })
      }
    },
    { icon: "pi pi-trash", name: "Delete",value:deleteItems},
  ];
});
onMounted(async()=>{
    await subjectStore.fetchSubjects();
})
</script>
<style >
    
</style>