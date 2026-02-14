<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50">
    <div class="text-center p-10 bg-white rounded-2xl shadow-xl max-w-md w-full">

      <!-- 404 Number -->
      <h1 class="text-7xl font-extrabold text-blue-500">
        404
      </h1>

      <!-- Message -->
      <h2 class="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>

      <p class="text-gray-500 mt-2">
        Oops! The page you're looking for doesn’t exist.
      </p>

      <!-- Button -->
      <div class="mt-6">
        <button
          @click="$router.push('/')"
          class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300"
        >
          Go Back Home
        </button>
      </div>

    </div>
  </div>
</template>
