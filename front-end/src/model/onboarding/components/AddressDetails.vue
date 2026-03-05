<template >
    <div class="bg-white px-8 pb-10 pt-8 rounded-2xl shadow-lg">
        <div class="grid md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1" v-for="filed in AddressDetailsfileds">
                <label class="text-sm font-bold text-gray-800">{{ filed.label }}</label>
                <InputText class="" :placeholder="filed.placeholder"/>
            </div>
        </div>
        <div class="mt-4 flex justify-end w-full">

            <Button icon="pi pi-save" label="Submit" class="btn-primary"/>
        </div>
    </div>
</template>
<script setup>

const AddressDetailsfileds = [
    {label:'Address',placeholder:'Enter your address'},
    {label:'State',placeholder:'Enter your Email state'},
    {label:'Pincode',placeholder:'Enter your pincode'},
    {label:'City',placeholder:'Enter your phone city'},
     {label:'Country',placeholder:'Enter your phone Country'},
]
</script>
<style >
    
</style>