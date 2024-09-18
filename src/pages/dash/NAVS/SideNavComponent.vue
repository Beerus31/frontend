<template>
  <div class="w-[250px] lg:w-[300px] h-full bg-gray-900 text-white">
    <!-- Admin Dashboard Header -->
    <div class="h-[50px] bg-gray-900 flex items-center justify-center">
      <h3 class="font-bold text-lg text-white">Admin Dashboard</h3>
    </div>

    <!-- Sidebar Content -->
    <div class="h-[calc(100vh-60px)] bg-gray-800 py-[20px]">
      <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
        <ul>
          <li>
            <router-link
              :to="{ name: 'main' }"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home' }"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              Products
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavComponent',
};
</script>
