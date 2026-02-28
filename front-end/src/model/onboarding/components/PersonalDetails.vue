<template >
    <div class="bg-white px-8 pb-10 pt-8 rounded-2xl shadow-lg">
        <div class="grid md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1" v-for="filed in PersonalDetailsfileds">
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
// "Full Name",
//       "Date of Birth",
//       "Gender",
//       "Phone Number",
//       "Email Address",
//       "Profile Photo"
const PersonalDetailsfileds = [
    {label:'Full name',placeholder:'Enter your name'},
    {label:'Date of birth',placeholder:'Enter your dob'},
    {label:'Phone Number',placeholder:'Enter your phone number'},
    {label:'Email Address',placeholder:'Enter your Email address'}
]
</script>
<style >
    
</style>