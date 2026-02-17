<template>
  <Dialog
     v-model:visible="visible"
    :modal="true"
    class="w-[90%] sm:max-w-3xl md:max-w-xl confirm-dialog"
    :closable="false"
  >
    <div>
      <div class="header mt-6 flex justify-between">
        <h1 class="text-xl font-bold text-indigo-500">Delete Confirmation</h1>
        <Button icon="pi pi-times" class="!bg-white !text-gray-800 !border-0" @click="close" />
      </div>
      <div class="divider"></div>
      <div class="flex items-center gap-3 mb-6">
        <i class="pi pi-exclamation-triangle text-red-500 text-2xl"></i>
        <span>{{ props.message || '' }}</span>
      </div>

      <div class="flex w-full justify-end gap-2">
        <Button
          label="Cancel"
          icon="pi pi-times"
          class="border !text-red-500 !bg-white !border-red-500"
          @click="close"
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          class="btn-primary"
          @click="$emit('confirmDelete')"
        />
      </div>
    </div>
  </Dialog>

  <Toast />
</template>
<script setup>
import { ref } from "vue";

const deleteDialog = ref(true);
const props = defineProps({
    message:String,
})
const emit = defineEmits(['close','confirmDelete'])
const close = ()=>{
    emit('close')
}
const visible = ref(true)
</script>
<style>
.confirm-dialog .p-dialog-header{
    display: none !important;
}
</style>
