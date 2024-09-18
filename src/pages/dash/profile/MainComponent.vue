<template>
  <DashboardComponent>
    <template v-slot:slot-pages>
      <div class="text-2xl">
        <!-- Header -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-3 p-4">
          <h1 class="text-black">Dashboard</h1>
        </div>

        <!-- Cards Section (BoxComponent above Profile and News) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
        </div>

        <!-- Profile and News Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          <!-- Profile Section -->
          <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-bold mb-4">Profile</h2>
            <!-- Circular Progress Bar -->
            <div class="relative w-40 h-40">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-2xl font-semibold">75%</span>
              </div>
              <svg class="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" stroke-width="10" stroke="#E5E7EB" fill="none" />
                <circle cx="80" cy="80" r="70" stroke-width="10" stroke="#6B21A8" stroke-dasharray="440" stroke-dashoffset="110" fill="none" />
              </svg>
            </div>
            <p class="mt-4 text-gray-600">75% of your profile is complete</p>
          </div>

          <!-- News Section -->
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-bold mb-4">News</h2>
            <ul>
              <li class="flex items-start mb-4">
                <span class="w-3 h-3 rounded-full bg-blue-500 mt-1 mr-4"></span>
                <div>
                  <p class="text-sm text-gray-600">Today, 11:30pm</p>
                  <p class="text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, consectetur!</p>
                </div>
              </li>
              <li class="flex items-start mb-4">
                <span class="w-3 h-3 rounded-full bg-purple-500 mt-1 mr-4"></span>
                <div>
                  <p class="text-sm text-gray-600">Today, 9pm</p>
                  <p class="text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, consectetur!</p>
                </div>
              </li>
              <li class="flex items-start mb-4">
                <span class="w-3 h-3 rounded-full bg-red-500 mt-1 mr-4"></span>
                <div>
                  <p class="text-sm text-gray-600">Today, 8:30pm</p>
                  <p class="text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, consectetur!</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="w-3 h-3 rounded-full bg-green-500 mt-1 mr-4"></span>
                <div>
                  <p class="text-sm text-gray-600">Today, 6pm</p>
                  <p class="text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, consectetur!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from '../DashboardComponent.vue';
import BoxComponent from '../Cards/BoxComponents.vue'

export default {
  name: 'ProfileComponent',
  components: {
    DashboardComponent,
    BoxComponent
  }
};
</script>

<style scoped>
.grid {
  align-items: start;
}
</style>
