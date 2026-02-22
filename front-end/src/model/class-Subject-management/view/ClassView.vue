<template >
    <div>
        <DynamicDataTable :data="classes" :columns="Columns">
            <template #status>
                <span>{{ slotProps.data}}</span>
            </template>
        </DynamicDataTable>
    </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useClassStore } from '../store/ClassStore';
import { ClassesColumns } from '../../../commen/DataTableColumns';
import DynamicDataTable from '../../../commen/DynamicDataTable.vue';
const classStore = useClassStore();
const classes = computed(()=>classStore.classes)
const Columns = computed(()=>ClassesColumns)
onMounted(async()=>{
    await classStore.fetchClasses();
})
</script>
<style >
    
</style>