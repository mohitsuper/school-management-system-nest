<template>
  <div class="card pt-6">
    <!-- Search -->
    <div class="flex justify-end mb-4">
      <div class="flex gap-2 w-fit">
        <span
          class="group flex items-center bg-white border rounded-lg px-3 border-gray-300 shadow-sm transition-all duration-300"
          :class="toggleSearch ? 'w-72' : 'w-10'"
        >

          <!-- Search Icon -->
          <i
            class="pi pi-search cursor-pointer text-gray-600 text-lg transition-transform duration-300 group-hover:scale-110"
            @click="handletoogleSearch"
          ></i>

          <!-- Input -->
          <InputText
            v-model="searchTerm"
            @input="handelSearch($event)"
            placeholder="Search..."
            class="ml-2 bg-transparent !border-0 outline-none border-none transition-all duration-300 w-full !shadow-none"
            :class="toggleSearch ? 'opacity-100' : 'opacity-0 w-0'"
          />
        </span>

        <div class="dropdown-action">
          <Dropdown
            v-model="selectAction"
            :options="actions"
            optionLabel="name"
            optionValue="value"
            dropdownIcon="pi pi-ellipsis-h"
            class="py-3"
          >
            <template #option="slotProps">
              <i :class="slotProps.option.icon"></i>
              <span class="ml-2">{{ slotProps.option.name }}</span>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>

    <!-- DataTable -->
    <DataTable
      :value="data"
      :paginator="true"
      :rows="5"
      responsiveLayout="scroll"
      class="rounded-xl overflow-hidden border border-gray-200"
      paginatorClass="px-4 py-3 bg-gray-50 border-t"
      v-model:selection="selectionData"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column
        v-for="(col, index) in columns"
        :key="index"
        :field="col.field"
        :header="col.header"
        headerClass="bg-gray-100 text-gray-700 font-semibold text-sm uppercase tracking-wide"
        bodyClass="text-gray-600 text-sm py-3"
      />

      <template #paginatorstart>
        <span class="text-sm text-gray-500 font-medium">
          <!-- Total: {{ data.length }} records -->
        </span>
      </template>

      <template #paginatorend>
        <button
          class="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Custom Btn
        </button>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import { Dropdown } from "primevue";

const emit = defineEmits(['update:search','update:selectionData'])

const searchTerm = ref("");
const handelSearch = (e: Event) => {
  const target = e.target as HTMLInputElement;
  searchTerm.value = target.value;
  emit('update:search',target.value)
};
const selectAction = ref();
const toggleSearch = ref<Boolean>(false);
const handletoogleSearch = () => {
  toggleSearch.value = !toggleSearch.value;
};

const selectionData = ref<any>([]);
watch(selectionData,(val)=>{
  emit('update:selectionData',val)
})
const props = defineProps<{
  data: any[]
  columns: any[]
  actions: any[]
}>()
const columns = computed(() => props.columns);

watch(selectAction, (newAction) => {
  if (typeof newAction === "function") {
    newAction();
    selectAction.value = null;
  }
});

const data = computed(() => props.data);
const actions = computed(() => props.actions);
</script>

<style>
.dropdown-action .p-select-label {
  display: none;
}
</style>
