<template>
  <!-- Top Navbar -->
  <div class="w-full h-[50px] bg-gray-900 flex items-center justify-between px-4">
    <!-- Logo / Hamburger Icon -->
    <div class="flex items-center space-x-2">
      <button class="text-white text-2xl focus:outline-none">
        <i class="fas fa-bars"></i>
        <h1 class="text-white text-lg"></h1>
      </button>
    </div>

    <!-- Search Bar -->
    <div class="flex-grow hidden lg:flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        class="px-4 py-2 rounded-md focus:outline-none w-full max-w-xs"
      />
    </div>

    <!-- Profile & Logout -->
    <div class="flex items-center space-x-4">
      <!-- Profile Section -->
      <div class="w-[200px]">
        <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
          <img class="w-10 h-10 rounded-full border-2 border-gray-50" :src="gojoImage" alt="Profile Image">
          <div class="font-semibold dark:text-white text-left">
            <div class="text-white">Admin, Developer</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
          </div>
        </div>
      </div>
      <!-- Logout Link -->
      <a href="" @click.prevent="logout" class="text-white hover:text-gray-300">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import gojoImage from './img/Gojo.png'; // Adjust the path as needed

export default {
  name: 'NavbarComponent',
  data() {
    return {
      gojoImage
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: 'login' });
    },
    toggleDrop() {
      // Your toggle drop-down logic here
    }
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  input {
    display: none;
  }
}
</style>
