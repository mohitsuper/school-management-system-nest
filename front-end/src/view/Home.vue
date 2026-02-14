<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">School Management System</h1>
        <Button icon="pi pi-user" class="p-button-text p-button-plain text-white" label="Profile" />
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Teachers Management Card -->
        <Card class="shadow-lg">
          <template #header>
            <div class="flex justify-center p-4">
              <i class="pi pi-users text-4xl text-blue-600"></i>
            </div>
          </template>
          <template #title>Teachers Management</template>
          <template #content>
            <p>Manage teacher records, assignments, and more.</p>
          </template>
          <template #footer>
            <Button label="Go to Teachers" class="w-full" />
          </template>
        </Card>

        <!-- Students Records Card -->
        <Card class="shadow-lg">
          <template #header>
            <div class="flex justify-center p-4">
              <i class="pi pi-id-card text-4xl text-green-600"></i>
            </div>
          </template>
          <template #title>Students Records</template>
          <template #content>
            <p>View and update student information and performance.</p>
          </template>
          <template #footer>
            <Button label="Go to Students" class="w-full" />
          </template>
        </Card>

        <!-- Salary Management Card -->
        <Card class="shadow-lg">
          <template #header>
            <div class="flex justify-center p-4">
              <i class="pi pi-wallet text-4xl text-purple-600"></i>
            </div>
          </template>
          <template #title>Salary Management</template>
          <template #content>
            <p>Handle staff salaries and payroll.</p>
          </template>
          <template #footer>
            <Button label="Go to Salaries" class="w-full" />
          </template>
        </Card>

        <!-- Fees Management Card -->
        <Card class="shadow-lg">
          <template #header>
            <div class="flex justify-center p-4">
              <i class="pi pi-money-bill text-4xl text-red-600"></i>
            </div>
          </template>
          <template #title>Fees Management</template>
          <template #content>
            <p>Track student fees and payments.</p>
          </template>
          <template #footer>
            <Button label="Go to Fees" class="w-full" />
          </template>
        </Card>

        <!-- Create Exam Paper Card -->
        <Card class="shadow-lg">
          <template #header>
            <div class="flex justify-center p-4">
              <i class="pi pi-file-edit text-4xl text-orange-600"></i>
            </div>
          </template>
          <template #title>Create Exam Paper</template>
          <template #content>
            <p>Design and generate exam papers easily.</p>
          </template>
          <template #footer>
            <Button label="Create Exam" class="w-full" />
          </template>
        </Card>

        <!-- More Features Card -->
        <Card class="shadow-lg">
          <template #header>
            <div class="flex justify-center p-4">
              <i class="pi pi-ellipsis-h text-4xl text-gray-600"></i>
            </div>
          </template>
          <template #title>More Features</template>
          <template #content>
            <p>Explore additional tools and settings.</p>
          </template>
          <template #footer>
            <Button label="Explore More" class="w-full" />
          </template>
        </Card>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2026 School Management System. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
</script>

<style scoped>
/* Tailwind is already handling most styles, but you can add custom scoped styles here if needed */
</style>